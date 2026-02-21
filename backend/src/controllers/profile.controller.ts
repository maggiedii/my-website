import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { Profile } from 'shared';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getHealth = (_req: Request, res: Response) => {
  res.json({ ok: true });
};

export const getProfile = async (_req: Request, res: Response) => {
  try {
    const profilePath = join(__dirname, '../data/profile.json');
    const data = await readFile(profilePath, 'utf-8');
    const profile: Profile = JSON.parse(data);
    res.json(profile);
  } catch (error) {
    console.error('Error reading profile data:', error);
    res.status(500).json({ error: 'Failed to load profile data' });
  }
};
