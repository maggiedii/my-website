# PROJECT CONTEXT

**Last Updated:** 2026-03-17  
**Status:** Workspace stabilized on Node 22; Render Blueprint added; root dev, quality gates, and runtime smoke all passing locally

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
- Phase 5 work is implemented locally, including tests, CI, docs sync, and content cleanup.
- Local verification succeeded on **2026-03-13** with Node `v22.22.0`:
  - `pnpm install --frozen-lockfile`
  - `node -e "require('concurrently'); console.log('require ok')"`
  - `pnpm dev`
  - `curl http://localhost:3000/api/health`
  - `curl http://localhost:3000/api/profile`
  - `curl -I http://localhost:5173/`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
  - `pnpm build`
- Root `pnpm dev` was repaired by removing the corrupted local install (`node_modules`, `.pnpm-store`) and reinstalling from `pnpm-lock.yaml`.

---

## Run Commands

### Prerequisites

```bash
fnm use 22
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
├── render.yaml
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

### Render Production (`render.yaml`)

```bash
FRONTEND_URL=https://my-website.onrender.com
VITE_API_URL=https://my-website-api.onrender.com
```

---

## Data Editing

Edit profile content in:

- `backend/src/data/profile.json`
- `frontend/src/lib/fallbackData.ts` (keep fallback content aligned with the backend profile when you update live content)

This file drives:

- name + tagline + bio
- work experience
- education
- volunteering
- partnerships
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
12. Slowed Hero name typing animation by increasing total typing duration from `700ms` to `1100ms` for a softer entrance effect.
13. Added a global text-selection policy scoped to `#root` so only content text is highlightable while non-text UI regions remain non-selectable (`user-select` + `-webkit-user-select` for Safari).
14. Replaced text-selection rules with stricter Safari-compatible explicit selectors (`#root, #root *` deny-all + explicit text opt-in) to stop broad page highlight in About and keep text-only selection site-wide.
15. Fixed `/api/profile` data source issues by correcting invalid JSON and restoring the expected `volunteering` key; added an explicit favicon to eliminate the browser icon `404`.
16. Added explicit backend `typeRoots` for `./node_modules/@types` so the editor resolves `@types/node` reliably from `backend/tsconfig.json`.
15. Repaired a malformed local `rxjs` install that broke root `pnpm dev`; the fix required deleting `node_modules` and the repo-local `.pnpm-store` and reinstalling under Node 22 from the lockfile.
16. Aligned runtime metadata on Node 22 by keeping `.nvmrc` at `22`, updating root `engines.node` to `>=22.0.0 <23`, and switching GitHub Actions to Node 22.
17. Replaced remaining placeholder social and project links, removed the unused GitHub social button, and rewrote work descriptions to match the displayed roles instead of generic software-engineering copy.
18. Synced `frontend/src/lib/fallbackData.ts` to the current profile content so the API-down experience matches the primary site content more closely.
19. Removed unused Vite starter files and updated the document title away from the default scaffold values.
20. Updated `docs/API.md` and `docs/GITHUB_GUIDE.md` so the documented example payload and local workflow match the current Node 22 setup.
21. Updated the UBC education entry to include month-specific timing: `April 2023 - Expected Graduation: May 2026` in both live and fallback profile data.
22. Added workspace-level `typescript` and `@types/node`, pointed editor settings at the workspace TypeScript SDK, and expanded backend `typeRoots` to include the repo root for more reliable `@types/node` resolution in Cursor/VS Code.
23. Added the Seoul National University exchange semester to both the backend profile data and the frontend fallback education list so the education section stays consistent online and offline.
24. Increased spacing in the Projects section by widening card gaps and section/tab heading margins for a more open layout.
25. Added a new `Hiring Pack Prototype` project entry to both the backend profile data and the frontend fallback project list, leaving description and technologies empty as placeholders.

---

## Known Issues / Notes

- `pnpm` may print an **Ignored build scripts** warning for `esbuild`; this is expected with pnpm’s build-approval model and does not block local lint/typecheck/test/build.
- No database is used in v1; all profile content is file-based JSON.
- Text selection rules were validated by code inspection plus runtime smoke; a real browser pass in Safari/Chrome is still the best final check after future style changes.

### Incident Log (2026-03-13 - Root Dev Recovery)

- **Symptom:** root `pnpm dev` failed immediately with `Cannot find module .../rxjs/dist/cjs/index.js` when loading `concurrently`.
- **Root cause:** local install corruption under `node_modules/.pnpm/rxjs@7.8.2/...` produced duplicate suffixed directories such as `dist/cjs 2/` instead of the expected `dist/cjs/` entry layout.
- **Fix executed:**
  - `rm -rf node_modules .pnpm-store`
  - `fnm use 22`
  - `pnpm install --frozen-lockfile`
- **Verification executed:**
  - `node -e "require('concurrently'); console.log('require ok')"`
  - `pnpm dev`
  - `curl http://localhost:3000/api/health`
  - `curl http://localhost:3000/api/profile`
  - `curl -I http://localhost:5173/`
  - `pnpm lint`
  - `pnpm typecheck`
  - `pnpm test`
  - `pnpm build`
- **Result:** root dev workflow restored; workspace is healthy again on Node 22.

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

- [ ] Replace the remaining placeholder project cards in `backend/src/data/profile.json` and `frontend/src/lib/fallbackData.ts` with finalized project content.
- [ ] Confirm the assumed TikTok handle if it differs from `@maggiesdiaries`.
- [ ] Push the local Phase 5 completion work once you are happy with the content.

### Recent Decisions (2026-03-17)

25. Added a `partnerships` profile field and a Partnerships section to the one-page site. It stays visible with an empty-state card until real partnership entries are added in `backend/src/data/profile.json`.
26. Updated Partnerships to support name-only entries cleanly, corrected the backend `partnerships` key, and added current partner names to both backend and fallback data.
27. Reworked Partnerships from a long vertical stack into a compact responsive brand grid so name-only partner entries take much less vertical space.
28. Added local partnership logo assets sourced from official brand surfaces where available. SciSpace uses the official App Store icon because direct logo retrieval from `scispace.com` was blocked by CloudFront during implementation.
29. Reordered work experience entries so the most recent roles appear first in both the backend profile data and the frontend fallback data.
30. Added a root `render.yaml` Blueprint so the pnpm-workspace monorepo can deploy on Render from the repo root without breaking the local `shared` workspace dependency.
31. Corrected the backend profile payload key back to `partnerships` and extended the backend API test so deploys cannot silently ship a mismatched profile contract.
32. Updated the Render Blueprint frontend service from `type: static` to `type: web` with `runtime: static` because Render's current Blueprint spec requires static sites to be declared that way.
