# Personal Website Monorepo

Production-ready personal website monorepo with a React/Vite frontend, Express backend, shared TypeScript types, and a pastel pink design system.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS + shadcn-style Radix UI components
- Express + TypeScript + tsx
- pnpm workspaces
- Vitest + Testing Library
- GitHub Actions CI

## Quick Start

```bash
fnm use 22
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Apps:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

Node runtime: `22.x`

## Scripts

From repo root:

```bash
pnpm dev        # frontend + backend
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Run one workspace:

```bash
pnpm --filter frontend dev
pnpm --filter backend dev
```

If root `pnpm dev` ever fails after an interrupted install, refresh dependencies with:

```bash
rm -rf node_modules .pnpm-store
pnpm install --frozen-lockfile
```

## Environment Variables

`frontend/.env`

```bash
VITE_API_URL=http://localhost:3000
```

`backend/.env`

```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## API

- `GET /api/health` -> `{ "ok": true }`
- `GET /api/profile` -> profile payload for all sections

See full API docs in `docs/API.md`.

## Edit Website Content

Update `backend/src/data/profile.json`.

This single file powers all site sections:

- Hero
- About
- Work experience
- Education
- Volunteering
- Projects
- Social links

If the backend is unavailable, the frontend renders local fallback data and shows a banner.
The frontend fallback content lives in `frontend/src/lib/fallbackData.ts` and should usually be kept in sync with the backend profile data.

## Project Structure

```text
frontend/   React app + sections + ui
backend/    Express API + profile data + tests
shared/     Shared TypeScript profile types
docs/       API and Git workflow docs
```

## CI

GitHub Actions workflow: `.github/workflows/ci.yml`

Runs on pushes/PRs to `main`:

- `pnpm install --frozen-lockfile`
- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`

## Deploy

The primary deployment target is now a single Vercel project:

- static frontend output from `frontend/dist`
- root Vercel Functions for `GET /api/health` and `GET /api/profile`

The monorepo must deploy from the repo root because the frontend and Vercel Functions both depend on the local `shared` package and shared content files.

### Vercel setup

1. Push the latest changes to GitHub.
2. In Vercel, import `maggiedii/my-website`.
3. Use these settings:
   - Framework Preset: `Other`
   - Root Directory: leave blank
   - Install Command: `corepack enable && pnpm install --frozen-lockfile`
   - Build Command: `pnpm --filter frontend build`
   - Output Directory: `frontend/dist`
4. Do not set `VITE_API_URL` for production unless you intentionally want to use an external API host. When unset, production uses same-origin `/api`.
5. Deploy.

### API behavior by environment

- Local development default: `http://localhost:3000`
- Vercel production default: same-origin `/api`
- Optional override: `VITE_API_URL=https://your-api.example.com`

### Vercel deployment files

- `vercel.json`
- `api/package.json`
- `api/health.ts`
- `api/profile.ts`

### Vercel runtime note

`api/package.json` sets `"type": "module"` for the root Vercel Functions so `/api/health` and `/api/profile` run as ESM in production. Without that file, Vercel may execute the generated function files as CommonJS and crash on top-level `import` statements.

### Render

The previous Render Blueprint is still available in `render.yaml` if you want split frontend/backend hosting later, but it is no longer the primary deployment path.
