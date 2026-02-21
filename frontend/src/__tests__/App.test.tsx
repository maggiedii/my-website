import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import type { Profile } from 'shared';
import App from '../App';
import { fetchProfile } from '../lib/api';

vi.mock('../lib/api', () => ({
  fetchProfile: vi.fn(),
}));

const mockProfile: Profile = {
  name: 'Jane Developer',
  tagline: 'Full-Stack Engineer',
  bio: 'Building delightful web experiences.',
  workExperience: [
    {
      company: 'Acme Corp',
      role: 'Engineer',
      duration: '2023 - Present',
      description: 'Shipped product improvements.',
    },
  ],
  education: [
    {
      institution: 'State University',
      degree: 'B.S. Computer Science',
      duration: '2018 - 2022',
    },
  ],
  volunteering: [
    {
      organization: 'Code Club',
      role: 'Mentor',
      duration: '2022 - Present',
      description: 'Coached student developers.',
    },
  ],
  projects: [
    {
      title: 'Portfolio',
      description: 'Personal website',
      technologies: ['React', 'TypeScript'],
      link: 'https://example.com',
    },
  ],
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/example',
      icon: 'linkedin',
    },
  ],
};

describe('App', () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders home sections with API profile data', async () => {
    vi.mocked(fetchProfile).mockResolvedValue(mockProfile);

    render(<App />);

    await waitFor(
      () => {
        expect(screen.getByRole('heading', { level: 1, name: mockProfile.name })).toBeInTheDocument();
      },
      { timeout: 1500 }
    );

    expect(screen.getByRole('heading', { level: 3, name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Work Experience' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Education' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Volunteering' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: "Let's Connect!" })).toBeInTheDocument();
  });

  it('shows fallback banner when API request fails', async () => {
    vi.mocked(fetchProfile).mockRejectedValue(new Error('API down'));

    render(<App />);

    await waitFor(() =>
      expect(screen.getByText(/Using local data - backend server may be offline/i)).toBeInTheDocument()
    );
    await waitFor(
      () => {
        expect(screen.getByRole('heading', { level: 1, name: /Your Name/i })).toBeInTheDocument();
      },
      { timeout: 1500 }
    );
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });
});
