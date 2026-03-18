import { describe, expect, it } from 'vitest';
import { resolveApiUrl } from '../lib/api';

describe('resolveApiUrl', () => {
  it('uses explicit VITE_API_URL when provided', () => {
    expect(
      resolveApiUrl({
        configuredUrl: 'https://api.example.com',
        isDev: false,
        hostname: 'my-site.vercel.app',
      })
    ).toBe('https://api.example.com');
  });

  it('uses the local backend during development', () => {
    expect(
      resolveApiUrl({
        configuredUrl: '',
        isDev: true,
        hostname: 'my-site.vercel.app',
      })
    ).toBe('http://localhost:3000');
  });

  it('uses the local backend for localhost preview builds', () => {
    expect(
      resolveApiUrl({
        configuredUrl: '',
        isDev: false,
        hostname: 'localhost',
      })
    ).toBe('http://localhost:3000');
  });

  it('uses same-origin API for production when no override is set', () => {
    expect(
      resolveApiUrl({
        configuredUrl: '',
        isDev: false,
        hostname: 'my-site.vercel.app',
      })
    ).toBe('');
  });
});
