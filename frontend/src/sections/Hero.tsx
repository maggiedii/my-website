import { Button } from '@/components/ui/button';
import { Github, Linkedin, Youtube, Instagram, Video } from 'lucide-react';

interface HeroProps {
  name: string;
  tagline: string;
}

export function Hero({ name, tagline }: HeroProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex items-center justify-center px-4 animate-fade-in"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pastel-pink-dark via-pastel-lavender to-pastel-pink-dark bg-clip-text text-transparent animate-slide-up">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground animate-slide-up">
          {tagline}
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
          <Button size="lg" onClick={() => scrollToSection('projects')}>
            View Projects
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
