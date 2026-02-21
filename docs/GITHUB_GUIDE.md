# GitHub Guide

This repository uses a small-commit workflow with Conventional Commits and CI checks on pull requests.

## 1) Repository Setup

```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize monorepo scaffold"
```

Add remote and push:

```bash
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## 2) Branching Strategy

Use short-lived branches from `main`.

Naming:

- `feature/<name>`
- `fix/<name>`
- `chore/<name>`
- `docs/<name>`

Create a branch:

```bash
git checkout main
git pull origin main
git checkout -b feature/<name>
```

## 3) Commit Conventions

Format:

```text
<type>(<scope>): <subject>
```

Common types:

- `feat`
- `fix`
- `chore`
- `docs`
- `test`
- `ci`

Examples:

```bash
git commit -m "feat(frontend): add sticky section navigation"
git commit -m "test(backend): add health endpoint coverage"
git commit -m "ci: add GitHub Actions quality workflow"
```

## 4) Local Quality Checks Before Push

Run from repo root:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## 5) Pull Request Workflow

Push your branch:

```bash
git push -u origin feature/<name>
```

Create PR (GitHub UI or CLI):

```bash
gh pr create --base main --head feature/<name> --title "<short title>" --body "<summary>"
```

After approval and green CI, merge PR and delete branch.

## 6) Keeping Branches Updated

```bash
git checkout main
git pull origin main
git checkout feature/<name>
git rebase main
```

If rebase was already pushed:

```bash
git push --force-with-lease
```

## 7) CI Overview

Workflow file: `.github/workflows/ci.yml`

CI runs on push/PR to `main` and executes:

1. `pnpm install --frozen-lockfile`
2. `pnpm lint`
3. `pnpm typecheck`
4. `pnpm test`
5. `pnpm build`

## 8) Recommended PR Checklist

- [ ] Scope is focused and small
- [ ] Commit messages follow Conventional Commits
- [ ] `pnpm lint` passes
- [ ] `pnpm typecheck` passes
- [ ] `pnpm test` passes
- [ ] `pnpm build` passes
- [ ] Docs/context updated if behavior changed
