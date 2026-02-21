import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface HeroProps {
  name: string;
  tagline: string;
}

export function Hero({ name, tagline }: HeroProps) {
  const [typedName, setTypedName] = useState('');

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  useEffect(() => {
    if (!name) {
      setTypedName('');
      return;
    }

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTypedName(name);
      return;
    }

    setTypedName('');

    const totalDurationMs = 700;
    const delayMs = Math.max(30, Math.floor(totalDurationMs / Math.max(1, name.length)));
    let index = 0;

    const intervalId = window.setInterval(() => {
      index += 1;
      setTypedName(name.slice(0, index));

      if (index >= name.length) {
        window.clearInterval(intervalId);
      }
    }, delayMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [name]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="scroll-mt-24 min-h-[90vh] flex items-center justify-center px-4 animate-fade-in"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <Avatar className="mx-auto h-20 w-20 border-2 border-pastel-pink shadow-pastel-md animate-slide-up">
          <AvatarFallback className="text-xl font-semibold">{initials || 'YN'}</AvatarFallback>
        </Avatar>
        <h1 className="text-6xl md:text-7xl font-bold animate-slide-up">
          <span className="inline-block bg-gradient-to-r from-pastel-pink-dark via-pastel-lavender to-pastel-pink-dark bg-clip-text text-transparent leading-[1.15] md:leading-[1.12] pb-[0.08em]">
            {typedName}
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground animate-slide-up">
          {tagline}
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
          <Button size="lg" className="text-white" onClick={() => scrollToSection('projects')}>
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
