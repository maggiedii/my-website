import { useEffect, useState } from 'react';
import type { Profile } from 'shared';
import { fetchProfile } from './lib/api';
import { fallbackData } from './lib/fallbackData';
import { Hero } from './sections/Hero';
import { Bio } from './sections/Bio';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Volunteering } from './sections/Volunteering';
import { Projects } from './sections/Projects';
import { Footer } from './sections/Footer';
import { AlertCircle } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
        setUsingFallback(false);
      } catch (error) {
        console.error('Failed to fetch profile data:', error);
        setProfile(fallbackData);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink-light via-pastel-lavender-light to-pastel-mint">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-pastel-pink border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pastel-pink-light via-pastel-lavender-light to-pastel-mint p-4">
        <div className="text-center space-y-4 max-w-md">
          <AlertCircle className="w-16 h-16 text-destructive mx-auto" />
          <h1 className="text-2xl font-bold">Failed to load profile</h1>
          <p className="text-muted-foreground">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pastel-lavender-light/20 to-pastel-mint/20">
      <header className="sticky top-0 z-50 border-b border-pastel-pink/30 bg-white/85 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-6xl items-center justify-center gap-2 overflow-x-auto px-3 py-3"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-pastel-pink-light hover:text-pastel-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {usingFallback && (
        <div className="bg-pastel-peach/30 border-b border-pastel-peach px-4 py-2 text-center text-sm">
          <AlertCircle className="inline w-4 h-4 mr-2" />
          Using local data - backend server may be offline
        </div>
      )}

      <Hero name={profile.name} tagline={profile.tagline} />
      <Bio bio={profile.bio} />
      <Experience workExperience={profile.workExperience} />
      <Education education={profile.education} />
      <Volunteering volunteering={profile.volunteering} />
      <Projects projects={profile.projects} />
      <Footer socials={profile.socials} />
    </div>
  );
}

export default App;
