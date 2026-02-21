# API Documentation

Base URL: `http://localhost:3000/api`

---

## Endpoints

### 1. Health Check

**GET** `/api/health`

Check if the API server is running.

#### Request

```bash
curl http://localhost:3000/api/health
```

#### Response

**Status:** `200 OK`

```json
{
  "ok": true
}
```

---

### 2. Get Profile

**GET** `/api/profile`

Retrieve the complete user profile data including bio, work experience, education, volunteering, projects, and social links.

#### Request

```bash
curl http://localhost:3000/api/profile
```

#### Response

**Status:** `200 OK`

```json
{
  "name": "Your Name",
  "tagline": "Software Engineer | Designer | Creator",
  "bio": "Hello! I'm a passionate software engineer...",
  "workExperience": [
    {
      "company": "Tech Company Inc.",
      "role": "Senior Software Engineer",
      "duration": "2022 - Present",
      "description": "Leading frontend development..."
    }
  ],
  "education": [
    {
      "institution": "University Name",
      "degree": "Bachelor of Science in Computer Science",
      "duration": "2014 - 2018"
    }
  ],
  "volunteering": [
    {
      "organization": "Code for Good",
      "role": "Volunteer Developer",
      "duration": "2021 - Present",
      "description": "Building web applications..."
    }
  ],
  "projects": [
    {
      "title": "Personal Portfolio Website",
      "description": "A modern, responsive portfolio...",
      "technologies": ["React", "TypeScript", "Express"],
      "link": "https://github.com/yourusername/portfolio"
    }
  ],
  "socials": [
    {
      "platform": "LinkedIn",
      "url": "https://linkedin.com/in/yourprofile",
      "icon": "linkedin"
    }
  ]
}
```

**Status:** `500 Internal Server Error`

```json
{
  "error": "Failed to load profile data"
}
```

---

## Data Models

### Profile

```typescript
interface Profile {
  name: string;
  tagline: string;
  bio: string;
  workExperience: WorkExperience[];
  education: Education[];
  volunteering: Volunteering[];
  projects: Project[];
  socials: SocialLink[];
}
```

### WorkExperience

```typescript
interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
}
```

### Education

```typescript
interface Education {
  institution: string;
  degree: string;
  duration: string;
}
```

### Volunteering

```typescript
interface Volunteering {
  organization: string;
  role: string;
  duration: string;
  description: string;
}
```

### Project

```typescript
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
```

### SocialLink

```typescript
interface SocialLink {
  platform: string;
  url: string;
  icon: string; // lucide-react icon name
}
```

---

## CORS

The API allows requests from the frontend origin (default: `http://localhost:5173`).

Configure the frontend URL via the `FRONTEND_URL` environment variable.

---

## Environment Variables

Create a `.env` file in the `backend/` directory:

```bash
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## Error Handling

All endpoints return appropriate HTTP status codes:

- `200 OK` - Success
- `500 Internal Server Error` - Server error

Error responses include a JSON object with an `error` field:

```json
{
  "error": "Error message here"
}
```

---

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting for production use.

---

## Content Updates

To update the website content:

1. Edit `backend/src/data/profile.json`
2. Restart the development server or wait for auto-reload with `tsx watch`

The JSON file structure matches the TypeScript interfaces defined in the `shared` package.

---

## Development

```bash
# Start development server with hot reload
cd backend
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

---

## Testing Endpoints

```bash
# Test health endpoint
curl http://localhost:3000/api/health

# Test profile endpoint
curl http://localhost:3000/api/profile

# Test profile endpoint with pretty output
curl http://localhost:3000/api/profile | jq

# Test CORS headers
curl -I -X OPTIONS http://localhost:3000/api/profile \
  -H "Origin: http://localhost:5173"
```
