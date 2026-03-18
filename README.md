# Personal Website Monorepo

Production-ready personal website monorepo with a React/Vite frontend, Express backend, shared TypeScript types, and a pastel pink design system.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/maggiedii/my-website)

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

This repo is configured for Render with a root-level Blueprint in `render.yaml`.

The monorepo must deploy from the repo root because both `frontend` and `backend` depend on the local `shared` workspace package.

### One-click deploy

1. Push the latest changes to GitHub.
2. Click the Render button above.
3. Approve creation of:
   - `my-website-api`
   - `my-website`
4. Wait for both services to finish building.

### Render URLs

- Frontend: `https://my-website.onrender.com`
- Backend: `https://my-website-api.onrender.com`
- Health check: `https://my-website-api.onrender.com/api/health`

### If you later change service names or add a custom domain

Update these Render environment variables and redeploy:

- Backend: `FRONTEND_URL`
- Frontend: `VITE_API_URL`
