# PROJECT CONTEXT

**Last Updated:** 2026-02-20  
**Status:** Phase 0 - Repository & Context Foundation (In Progress)

---

## 🎯 PROJECT OVERVIEW

Production-quality personal website built as a pnpm monorepo with TypeScript throughout. Features a pastel pink aesthetic with React (Vite) frontend and Node.js (Express) backend.

**Tech Stack:**
- **Package Manager:** pnpm (via corepack)
- **Monorepo:** pnpm workspaces
- **Frontend:** React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, lucide-react
- **Backend:** Node.js, Express, TypeScript, tsx
- **Tooling:** ESLint, Prettier, Vitest
- **CI/CD:** GitHub Actions

---

## 🚀 HOW TO RUN

### Prerequisites
```bash
# Enable corepack for pnpm
corepack enable

# Install dependencies
pnpm install
```

### Development
```bash
# Run both frontend and backend concurrently
pnpm dev

# Run individually
pnpm --filter frontend dev    # Frontend: http://localhost:5173
pnpm --filter backend dev     # Backend: http://localhost:3000
```

### Build
```bash
# Build all packages
pnpm build

# Build individually
pnpm --filter frontend build
pnpm --filter backend build
```

### Quality Checks
```bash
pnpm lint        # Run ESLint across all packages
pnpm format      # Run Prettier across all packages
pnpm typecheck   # Run TypeScript compiler checks
pnpm test        # Run all tests
```

---

## 📁 FOLDER STRUCTURE

```
/
├── PROJECT_CONTEXT.md          # This file - living documentation
├── README.md                   # User-facing project overview
├── package.json                # Root workspace config + scripts
├── pnpm-workspace.yaml         # Workspace definitions
├── .gitignore                  # Git ignore rules
├── docs/
│   ├── GITHUB_GUIDE.md        # Git workflow & commands
│   └── API.md                 # Backend API documentation
├── shared/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       └── profile.ts         # Shared TypeScript types
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   ├── .prettierrc
│   └── src/
│       ├── index.ts           # Express server entry
│       ├── routes/
│       │   └── api.ts
│       ├── controllers/
│       │   └── profile.controller.ts
│       └── data/
│           └── profile.json   # EDIT THIS for content
└── frontend/
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── .eslintrc.json
    ├── .prettierrc
    ├── index.html
    └── src/
        ├── main.tsx
        ├── App.tsx
        ├── components/
        │   └── ui/           # shadcn components
        ├── sections/
        │   ├── Hero.tsx
        │   ├── Bio.tsx
        │   ├── Experience.tsx
        │   ├── Education.tsx
        │   ├── Volunteering.tsx
        │   ├── Projects.tsx
        │   └── Footer.tsx
        ├── lib/
        │   ├── api.ts        # API client
        │   └── utils.ts
        └── styles/
            └── globals.css    # Tailwind + theme
```

---

## 🔧 ENVIRONMENT VARIABLES

### Frontend (`frontend/.env`)
```bash
VITE_API_URL=http://localhost:3000
```

### Backend (`backend/.env`)
```bash
PORT=3000
NODE_ENV=development
```

---

## ✅ PHASE CHECKLIST

- [ ] **Phase 0:** Repository & Context Foundation
  - [x] Create PROJECT_CONTEXT.md
  - [ ] Create docs/GITHUB_GUIDE.md
  - [ ] Create .gitignore
  - [ ] Update README.md
  - [ ] First commit

- [ ] **Phase 1:** Workspaces & Shared Types
  - [ ] Configure pnpm workspaces
  - [ ] Create shared types package
  - [ ] Verify TypeScript builds

- [ ] **Phase 2:** Backend (Express + TypeScript)
  - [ ] Scaffold backend with Express
  - [ ] Implement /api/health endpoint
  - [ ] Implement /api/profile endpoint
  - [ ] Create profile.json data
  - [ ] Document API in docs/API.md

- [ ] **Phase 3:** Frontend (Vite + Tailwind + shadcn/ui)
  - [ ] Scaffold Vite React app
  - [ ] Add Tailwind CSS
  - [ ] Install shadcn/ui components
  - [ ] Implement pastel pink theme

- [ ] **Phase 4:** Full-Stack Integration
  - [ ] Connect frontend to backend API
  - [ ] Render all sections
  - [ ] Add error handling + fallback data
  - [ ] Test full-stack flow

- [ ] **Phase 5:** Polish & Quality Gates
  - [ ] Add backend tests
  - [ ] Add frontend tests
  - [ ] Configure GitHub Actions CI
  - [ ] Accessibility review
  - [ ] Final documentation

---

## 📝 RECENT DECISIONS

1. **2026-02-20:** Chose pnpm workspaces for monorepo management (simpler than Nx/Turborepo for this scale)
2. **2026-02-20:** Using tsx for backend TypeScript execution (faster than ts-node)
3. **2026-02-20:** Single-page scrolling sections instead of React Router (simpler UX)
4. **2026-02-20:** Profile data stored in JSON file (no database needed for v1)
5. **2026-02-20:** shadcn/ui for components (copy-paste approach, full control)

---

## 🐛 KNOWN ISSUES

None yet.

---

## 📋 OPEN TASKS

1. Complete Phase 0 setup
2. Configure monorepo workspaces
3. Build backend API
4. Build frontend UI
5. Integrate full stack
6. Add tests and CI

---

## 🎨 DESIGN NOTES

**Color Palette:**
- Primary Pink: `#ffc0cb` to `#ffb3c1`
- Lavender Accent: `#e6e6fa`
- Soft Neutrals: `#f8f9fa`, `#e9ecef`
- Text: `#2c3e50` (dark mode: `#f8f9fa`)

**Typography:**
- Headings: Inter or Poppins (bold, rounded)
- Body: Inter or system font stack
- Responsive sizing with clamp()

**Component Style:**
- Border Radius: `0.75rem` to `1rem`
- Shadows: Soft with pink/purple tints
- Animations: Subtle, respects prefers-reduced-motion

---

## 📚 USEFUL COMMANDS

```bash
# Add dependency to specific workspace
pnpm --filter frontend add react-router-dom
pnpm --filter backend add express

# Run script in specific workspace
pnpm --filter backend dev

# Add dev dependency to root
pnpm add -D -w concurrently

# Clean all node_modules and reinstall
pnpm clean && pnpm install
```

---

## 🔗 QUICK LINKS

- **Frontend Dev:** http://localhost:5173
- **Backend API:** http://localhost:3000/api
- **API Health:** http://localhost:3000/api/health
- **API Profile:** http://localhost:3000/api/profile
- **shadcn/ui Docs:** https://ui.shadcn.com
- **Tailwind Docs:** https://tailwindcss.com/docs
- **lucide Icons:** https://lucide.dev/icons
