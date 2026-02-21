import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Linkedin, Youtube, Instagram, Video, Github } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
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
    <footer
      id="contact"
      className="scroll-mt-24 py-16 px-4 bg-gradient-to-br from-pastel-pink-light to-pastel-lavender"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-pastel-pink-dark">Let's Connect!</h2>
        <TooltipProvider>
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map((social, index) => {
              const Icon = iconMap[social.icon.toLowerCase()] || Github;
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      variant="outline"
                      className="w-12 h-12"
                      onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                      aria-label={`Visit my ${social.platform}`}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{social.platform}</TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>
        <div className="text-sm text-muted-foreground pt-8">
          <Separator className="mb-6 bg-pastel-pink/30" />
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS ✨</p>
        </div>
      </div>
    </footer>
  );
}
