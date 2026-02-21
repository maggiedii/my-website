import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from '../sections/Hero';
import { Bio } from '../sections/Bio';

describe('Hero Component', () => {
  it('renders name and tagline', () => {
    render(<Hero name="John Doe" tagline="Software Engineer" />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<Hero name="John Doe" tagline="Software Engineer" />);
    
    expect(screen.getByText('View Projects')).toBeInTheDocument();
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });
});

describe('Bio Component', () => {
  it('renders bio text', () => {
    const bioText = 'This is a test bio.';
    render(<Bio bio={bioText} />);
    
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText(bioText)).toBeInTheDocument();
  });

  it('renders multiple paragraphs', () => {
    const bioText = 'First paragraph.\n\nSecond paragraph.';
    render(<Bio bio={bioText} />);
    
    expect(screen.getByText('First paragraph.')).toBeInTheDocument();
    expect(screen.getByText('Second paragraph.')).toBeInTheDocument();
  });
});
