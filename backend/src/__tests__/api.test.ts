import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app.js';

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return ok: true', async () => {
      const response = await request(app).get('/api/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ ok: true });
    });
  });

  describe('GET /api/profile', () => {
    it('should return profile data', async () => {
      const response = await request(app).get('/api/profile');
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('tagline');
      expect(response.body).toHaveProperty('bio');
      expect(response.body).toHaveProperty('workExperience');
      expect(response.body).toHaveProperty('education');
      expect(response.body).toHaveProperty('volunteering');
      expect(response.body).toHaveProperty('projects');
      expect(response.body).toHaveProperty('socials');
    });

    it('should return valid profile structure', async () => {
      const response = await request(app).get('/api/profile');
      
      expect(Array.isArray(response.body.workExperience)).toBe(true);
      expect(Array.isArray(response.body.education)).toBe(true);
      expect(Array.isArray(response.body.volunteering)).toBe(true);
      expect(Array.isArray(response.body.projects)).toBe(true);
      expect(Array.isArray(response.body.socials)).toBe(true);
    });
  });
});
