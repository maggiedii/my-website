# Personal Website

A production-quality personal website built with React, TypeScript, and Express in a modern monorepo setup. Features a beautiful pastel pink aesthetic with responsive design and accessible components.

## ✨ Features

- **Modern Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Monorepo Architecture:** pnpm workspaces with shared types
- **RESTful API:** Express backend serving profile data
- **Pastel Pink Theme:** Beautiful, accessible design with soft colors
- **Fully Responsive:** Mobile-first design that works on all devices
- **Type-Safe:** End-to-end TypeScript for reliability
- **Quality Gates:** ESLint, Prettier, tests, and CI/CD

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- pnpm (via corepack)

### Installation

```bash
# Enable pnpm
corepack enable

# Install dependencies
pnpm install
```

### Development

```bash
# Run both frontend and backend
pnpm dev

# Frontend will be at http://localhost:5173
# Backend will be at http://localhost:3000
```

### Build for Production

```bash
# Build all packages
pnpm build
```

### Quality Checks

```bash
pnpm lint        # Run ESLint
pnpm format      # Run Prettier
pnpm typecheck   # TypeScript checks
pnpm test        # Run tests
```

## 📁 Project Structure

```
/
├── frontend/          # React + Vite app
├── backend/           # Express API server
├── shared/            # Shared TypeScript types
├── docs/              # Documentation
└── package.json       # Root workspace config
```

## 🎨 Customization

### Edit Content

Update your personal information in `backend/src/data/profile.json`:

```json
{
  "name": "Your Name",
  "tagline": "Your Tagline",
  "bio": "Your bio...",
  "workExperience": [...],
  "education": [...],
  "projects": [...],
  "socials": [...]
}
```

Restart the backend server to see changes.

### Theme Colors

Customize colors in `frontend/tailwind.config.js` and `frontend/src/styles/globals.css`.

## 📖 Documentation

- [GitHub Workflow Guide](docs/GITHUB_GUIDE.md) - Git commands and conventions
- [API Documentation](docs/API.md) - Backend API endpoints
- [Project Context](PROJECT_CONTEXT.md) - Living documentation

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react

**Backend:**
- Node.js
- Express
- TypeScript
- tsx

**Tools:**
- pnpm (monorepo)
- ESLint
- Prettier
- Vitest
- GitHub Actions

## 📄 License

MIT

## 🤝 Contributing

This is a personal website project, but feel free to fork and adapt for your own use!