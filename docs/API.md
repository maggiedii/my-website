# API Documentation

Base URL: `http://localhost:3000/api`

## Endpoints

### `GET /api/health`

Returns server health.

Response `200`:

```json
{ "ok": true }
```

### `GET /api/profile`

Returns the complete profile payload used by the frontend sections.

Response `200`:

```json
{
  "name": "Your Name",
  "tagline": "Software Engineer | Designer | Creator",
  "bio": "...",
  "workExperience": [],
  "education": [],
  "volunteering": [],
  "projects": [],
  "socials": []
}
```

Response `500`:

```json
{ "error": "Failed to load profile data" }
```

## Data Contract

Profile shape is defined in:

- `shared/src/profile.ts`

Backend data source:

- `backend/src/data/profile.json`

## CORS

Allowed origin is configured by `FRONTEND_URL`.

Backend `.env`:

```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

## Local Testing

```bash
# start backend
pnpm --filter backend dev

# health
curl http://localhost:3000/api/health

# profile
curl http://localhost:3000/api/profile
```
