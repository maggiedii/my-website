import type { Profile } from 'shared';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function fetchProfile(): Promise<Profile> {
  const response = await fetch(`${API_URL}/api/profile`);
  
  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.statusText}`);
  }
  
  return response.json();
}

export async function checkHealth(): Promise<{ ok: boolean }> {
  const response = await fetch(`${API_URL}/api/health`);
  
  if (!response.ok) {
    throw new Error(`Health check failed: ${response.statusText}`);
  }
  
  return response.json();
}
