/**
 * Shared TypeScript types for the personal website monorepo
 */

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
}

export interface Volunteering {
  organization: string;
  role: string;
  duration: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  workExperience: WorkExperience[];
  education: Education[];
  volunteering: Volunteering[];
  projects: Project[];
  socials: SocialLink[];
}
