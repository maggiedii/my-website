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
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Apps:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

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
