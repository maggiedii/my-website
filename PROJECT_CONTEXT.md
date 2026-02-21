# PROJECT CONTEXT

**Last Updated:** 2026-02-21  
**Status:** Phase 5 complete in workspace (quality gates passing locally)

---

## Project Summary

Production personal website monorepo with:

- **Frontend:** React + Vite + TypeScript + Tailwind + shadcn/ui + lucide-react
- **Backend:** Express + TypeScript + tsx
- **Shared:** TypeScript profile types used across frontend/backend
- **Package manager:** pnpm workspaces

---

## Current Workspace Status

- Phases 0-4 are committed on `main`.
- Phase 5 work (tests, CI, polish, docs sync) is implemented in the working tree.
- Local verification succeeded:
  - `pnpm install --frozen-lockfile`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
  - `pnpm build`

---

## Run Commands

### Prerequisites

```bash
fnm use
corepack enable
pnpm install --frozen-lockfile
```

### Development

```bash
pnpm dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

Run individually:

```bash
pnpm --filter frontend dev
pnpm --filter backend dev
```

### Quality gates

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

---

## Folder Map

```text
/
├── PROJECT_CONTEXT.md
├── README.md
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── .nvmrc
├── docs/
│   ├── API.md
│   └── GITHUB_GUIDE.md
├── .github/
│   └── workflows/
│       └── ci.yml
├── shared/
│   ├── package.json
│   ├── tsconfig.json
│   └── src/
│       ├── index.ts
│       └── profile.ts
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── eslint.config.js
│   ├── vitest.config.ts
│   └── src/
│       ├── app.ts
│       ├── index.ts
│       ├── __tests__/api.test.ts
│       ├── controllers/profile.controller.ts
│       ├── routes/api.ts
│       └── data/profile.json
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    ├── vite.config.ts
    ├── vitest.config.ts
    └── src/
        ├── App.tsx
        ├── main.tsx
        ├── __tests__/
        │   ├── App.test.tsx
        │   ├── components.test.tsx
        │   └── setup.ts
        ├── components/ui/
        │   ├── avatar.tsx
        │   ├── badge.tsx
        │   ├── button.tsx
        │   ├── card.tsx
        │   ├── separator.tsx
        │   ├── tabs.tsx
        │   └── tooltip.tsx
        ├── lib/
        │   ├── api.ts
        │   ├── fallbackData.ts
        │   └── utils.ts
        ├── sections/
        │   ├── Hero.tsx
        │   ├── Bio.tsx
        │   ├── Experience.tsx
        │   ├── Education.tsx
        │   ├── Volunteering.tsx
        │   ├── Projects.tsx
        │   └── Footer.tsx
        └── styles/globals.css
```

---

## Environment Variables

### Backend (`backend/.env`)

```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (`frontend/.env`)

```bash
VITE_API_URL=http://localhost:3000
```

---

## Data Editing

Edit profile content in:

- `backend/src/data/profile.json`

This file drives:

- name + tagline + bio
- work experience
- education
- volunteering
- projects
- socials

---

## Recent Decisions

1. Added `backend/src/app.ts` so tests can import app without booting the server listener.
2. Added backend and frontend Vitest coverage, including an App render/fallback test.
3. Added missing shadcn-style UI primitives (`Avatar`, `Separator`, `Tabs`, `Tooltip`).
4. Added sticky top navigation with section anchors and smooth scrolling.
5. Added GitHub Actions workflow to run install/lint/typecheck/test/build on PR/push to `main`.
6. Set `shared` package `types` to source entry (`./src/index.ts`) so backend typechecking resolves reliably without requiring prebuilt shared artifacts.
7. Fixed Hero title descender clipping (for letters like `g`) by isolating gradient text on an inner span and using explicit local line-height/padding.
8. Added one-time Hero name typing animation on load; respects `prefers-reduced-motion` by showing full text immediately.
9. Refined Hero typing effect to avoid synchronous state updates inside `useEffect` (lint-safe timer callbacks) and added a `window.matchMedia` existence guard for non-browser test environments.
10. Updated frontend tests to await the typed Hero heading so animation behavior remains enabled without test flakiness.
11. Installed `fnm`, pinned project runtime with `.nvmrc` (`22`), and validated full lint/typecheck/test/build + dev smoke on Node `v22.22.0` for stability over Node 25.

---

## Known Issues / Notes

- `pnpm` may print an **Ignored build scripts** warning for `esbuild`; this is expected with pnpm’s build-approval model and does not block local lint/typecheck/test/build.
- No database is used in v1; all profile content is file-based JSON.

### Incident Log (2026-02-21)

- **Symptom:** `pnpm dev` failed with `Cannot find module './parse'` from `shell-quote` via `concurrently`.
- **Root cause:** Corrupted/mutated pnpm store content caused an incomplete nested install at `node_modules/.pnpm/shell-quote@1.8.3/...` (missing `parse.js`).
- **Fix executed:**
  - `pnpm install --frozen-lockfile --force --reporter=append-only`
- **Verification executed:**
  - `node -e "require('concurrently'); console.log('ok')"`
  - `pnpm dev` + `curl http://localhost:3000/api/health` + `curl http://localhost:3000/api/profile`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
  - `pnpm build`
- **Result:** Incident resolved; root `pnpm dev` and full quality gates pass.

### Incident Log (2026-02-21 - Follow-up)

- **Symptom:** `pnpm dev` backend process crashed with `ERR_MODULE_NOT_FOUND` for `dotenv/index.js`.
- **Root cause:** Corrupted local package contents under `node_modules/.pnpm/dotenv@16.6.1/...` (incomplete package files).
- **Fix executed:**
  - `pnpm install --frozen-lockfile --force`
- **Verification executed:**
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
  - `pnpm build`
  - `pnpm dev` + `curl http://localhost:3000/api/health` + `curl http://localhost:3000/api/profile`
- **Result:** Backend dev startup restored; typing animation change and all quality gates pass.

### Incident Log (2026-02-21 - SIGTERM Diagnostics)

- **Symptom:** `pnpm dev` occasionally ended with child process exit codes `SIGTERM` / `143`, leading Safari to show connection failures after shutdown.
- **Root cause:** Parent dev process termination (external signal/session interruption), not an application runtime crash.
- **Fix executed:**
  - `pnpm install --frozen-lockfile --force`
  - Added Node version pinning via `.nvmrc` and switched runtime to Node 22 LTS using `fnm`.
- **Verification executed:**
  - `pnpm dev` startup checks + `lsof` listeners on `5173` and `3000`
  - `curl -I http://localhost:5173/`
  - `curl http://localhost:3000/api/health`
  - Full quality gates under Node 22 (`pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`)
- **Result:** Stable local startup confirmed; guidance set to keep dev server in a persistent session and use the exact Vite URL.

---

## Open Tasks

- [ ] Customize `backend/src/data/profile.json` with real personal content.
- [ ] Push Phase 5 commits and open PR.
- [ ] Optionally add deployment docs (Vercel + Render/Railway) after merge.
