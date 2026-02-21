# GitHub Workflow Guide

This guide covers Git commands, branching strategies, commit conventions, and CI setup for the personal website monorepo.

---

## 📦 Initial Setup

### 1. Create GitHub Repository

```bash
# Option A: Using GitHub CLI
gh repo create my-website --public --description "Personal website built with React, TypeScript, and Express"

# Option B: Create on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/my-website.git
git branch -M main
git push -u origin main
```

### 2. Clone Repository (if starting fresh)

```bash
git clone https://github.com/YOUR_USERNAME/my-website.git
cd my-website
```

---

## 🌿 Branching Strategy

### Branch Naming Conventions

```bash
# Feature branches
feature/add-hero-section
feature/api-profile-endpoint
feature/pastel-theme

# Bug fixes
fix/cors-issue
fix/mobile-layout

# Chores (non-functional changes)
chore/update-dependencies
chore/add-eslint

# Documentation
docs/update-readme
docs/api-documentation
```

### Creating and Switching Branches

```bash
# Create and switch to new branch
git checkout -b feature/add-hero-section

# Switch to existing branch
git checkout main

# List all branches
git branch -a

# Delete local branch
git branch -d feature/add-hero-section

# Delete remote branch
git push origin --delete feature/add-hero-section
```

---

## 💬 Commit Message Format

We follow **Conventional Commits** for clear, structured commit history.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Formatting, missing semicolons, etc. (not CSS)
- **refactor:** Code changes that neither fix bugs nor add features
- **perf:** Performance improvements
- **test:** Adding or updating tests
- **chore:** Maintenance tasks (dependencies, configs, etc.)
- **ci:** CI/CD changes

### Scope (Optional)

- `frontend`: Frontend-specific changes
- `backend`: Backend-specific changes
- `shared`: Shared types package
- `docs`: Documentation
- `ci`: CI/CD configs

### Examples

```bash
# Feature commits
git commit -m "feat(frontend): add Hero section with CTA buttons"
git commit -m "feat(backend): add profile API endpoint"
git commit -m "feat: integrate frontend with backend API"

# Fix commits
git commit -m "fix(backend): enable CORS for frontend origin"
git commit -m "fix(frontend): correct mobile responsive layout"

# Chore commits
git commit -m "chore: initialize monorepo scaffold"
git commit -m "chore(frontend): add Tailwind CSS and shadcn/ui"
git commit -m "chore: update dependencies to latest versions"

# Documentation commits
git commit -m "docs: add API documentation"
git commit -m "docs(readme): update installation instructions"

# Multi-line commits with body
git commit -m "feat(backend): add profile API endpoint

- Returns user profile data from JSON
- Includes work experience, education, projects
- Typed with shared Profile interface"
```

---

## 🔄 Daily Workflow

### 1. Start New Feature

```bash
# Make sure main is up to date
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes...

# Stage changes
git add .

# Or stage specific files
git add frontend/src/sections/Hero.tsx

# Commit with conventional format
git commit -m "feat(frontend): add Hero section"

# Push to remote
git push -u origin feature/your-feature-name
```

### 2. Make Additional Changes

```bash
# Stage and commit
git add .
git commit -m "feat(frontend): add CTA buttons to Hero"

# Push updates
git push
```

### 3. Keep Branch Updated

```bash
# Fetch latest changes from main
git checkout main
git pull origin main

# Switch back to feature branch
git checkout feature/your-feature-name

# Rebase on main (keeps history clean)
git rebase main

# Or merge main into feature branch
git merge main

# Push updates (use --force-with-lease after rebase)
git push --force-with-lease
```

---

## 🔀 Pull Request Workflow

### 1. Create Pull Request

```bash
# Using GitHub CLI
gh pr create --title "Add Hero section" --body "Implements Hero section with name, tagline, and CTA buttons"

# Or push and create PR on GitHub.com
git push -u origin feature/your-feature-name
# Then visit GitHub and click "Create Pull Request"
```

### 2. PR Template (Optional)

Create `.github/pull_request_template.md`:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New feature
- [ ] Bug fix
- [ ] Documentation update
- [ ] Refactoring
- [ ] Performance improvement

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] All tests pass (`pnpm test`)

## Checklist
- [ ] Code follows project style guidelines
- [ ] Lint passes (`pnpm lint`)
- [ ] TypeScript compiles (`pnpm typecheck`)
- [ ] Updated documentation if needed
- [ ] Commit messages follow conventional format
```

### 3. Review and Merge

```bash
# After PR approval, merge via GitHub UI or:
gh pr merge 123 --squash  # Squash merge (recommended)
gh pr merge 123 --merge   # Regular merge
gh pr merge 123 --rebase  # Rebase merge

# Delete feature branch after merge
git checkout main
git pull origin main
git branch -d feature/your-feature-name
```

---

## 🔧 Common Git Commands

### Checking Status

```bash
# View changed files
git status

# View commit history
git log --oneline --graph --all

# View specific file history
git log --follow frontend/src/App.tsx

# Show changes
git diff

# Show staged changes
git diff --staged
```

### Undoing Changes

```bash
# Discard unstaged changes in file
git checkout -- filename

# Unstage file
git reset HEAD filename

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Amend last commit message
git commit --amend -m "New commit message"

# Revert commit (creates new commit)
git revert abc123
```

### Stashing Changes

```bash
# Stash uncommitted changes
git stash

# List stashes
git stash list

# Apply most recent stash
git stash apply

# Apply and remove stash
git stash pop

# Apply specific stash
git stash apply stash@{1}

# Clear all stashes
git stash clear
```

---

## 🤖 GitHub Actions CI

### CI Workflow File

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Enable Corepack
        run: corepack enable
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Lint
        run: pnpm lint
      
      - name: Type check
        run: pnpm typecheck
      
      - name: Test
        run: pnpm test
      
      - name: Build
        run: pnpm build
```

### CI Status Badge

Add to README.md:

```markdown
![CI](https://github.com/YOUR_USERNAME/my-website/workflows/CI/badge.svg)
```

---

## 🔒 Secrets Management

### Never Commit Secrets

```bash
# Add .env to .gitignore (already included)
echo ".env" >> .gitignore

# Use .env.example for templates
cp .env.example .env
```

### GitHub Secrets

```bash
# Add secrets via GitHub UI:
# Settings → Secrets and variables → Actions → New repository secret

# Or using GitHub CLI
gh secret set SECRET_NAME
```

---

## 📋 Quick Reference

### Common Operations

```bash
# Clone repository
git clone <url>

# Check status
git status

# Create branch
git checkout -b feature/name

# Stage changes
git add .

# Commit
git commit -m "feat: description"

# Push
git push

# Pull latest
git pull

# Merge branch
git merge branch-name

# Delete branch
git branch -d branch-name

# View history
git log --oneline
```

### Emergency Commands

```bash
# Abort merge conflict
git merge --abort

# Abort rebase
git rebase --abort

# Force pull (discard local changes)
git fetch origin
git reset --hard origin/main

# Create backup branch before risky operation
git branch backup-$(date +%Y%m%d)
```

---

## 🎯 Best Practices

1. **Commit Often:** Small, focused commits are easier to review and revert
2. **Write Clear Messages:** Follow conventional commit format
3. **Pull Before Push:** Keep your branch updated to avoid conflicts
4. **Test Before Committing:** Run `pnpm lint && pnpm typecheck && pnpm test`
5. **Use Branches:** Never commit directly to main
6. **Review Your Changes:** Use `git diff` before committing
7. **Keep History Clean:** Use rebase for feature branches, squash when merging PRs
8. **Never Force Push to Main:** Use `--force-with-lease` on feature branches only
9. **Sign Commits (Optional):** Use GPG keys for verified commits
10. **Use .gitignore:** Never commit node_modules, .env, or build artifacts

---

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Conventional Commits](https://www.conventionalcommits.org)
- [Git Flight Rules](https://github.com/k88hudson/git-flight-rules)
- [GitHub CLI](https://cli.github.com/)
