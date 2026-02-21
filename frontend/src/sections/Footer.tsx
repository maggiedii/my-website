import { Button } from '@/components/ui/button';
import { Linkedin, Youtube, Instagram, Video, Github, LucideIcon } from 'lucide-react';
import type { SocialLink } from 'shared';

const iconMap: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram,
  video: Video,
  github: Github,
};

interface FooterProps {
  socials: SocialLink[];
}

export function Footer({ socials }: FooterProps) {
  return (
    <footer id="contact" className="py-16 px-4 bg-gradient-to-br from-pastel-pink-light to-pastel-lavender">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-pastel-pink-dark">Let's Connect!</h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((social, index) => {
            const Icon = iconMap[social.icon.toLowerCase()] || Github;
            return (
              <Button
                key={index}
                size="icon"
                variant="outline"
                className="w-12 h-12"
                onClick={() => window.open(social.url, '_blank')}
                aria-label={`Visit my ${social.platform}`}
              >
                <Icon className="w-5 h-5" />
              </Button>
            );
          })}
        </div>
        <div className="text-sm text-muted-foreground pt-8 border-t border-pastel-pink/20">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS ✨</p>
        </div>
      </div>
    </footer>
  );
}
