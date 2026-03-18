import type { Profile } from 'shared';

const LOCAL_BACKEND_URL = 'http://localhost:3000';

function isLocalHostname(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
}

type ResolveApiUrlOptions = {
  configuredUrl?: string;
  isDev?: boolean;
  hostname?: string;
};

function getHostname(): string {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.hostname;
}

export function resolveApiUrl({
  configuredUrl = import.meta.env.VITE_API_URL,
  isDev = import.meta.env.DEV,
  hostname = getHostname(),
}: ResolveApiUrlOptions = {}): string {
  if (configuredUrl) {
    return configuredUrl;
  }

  if (isDev || isLocalHostname(hostname)) {
    return LOCAL_BACKEND_URL;
  }

  return '';
}

const API_URL = resolveApiUrl();

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
