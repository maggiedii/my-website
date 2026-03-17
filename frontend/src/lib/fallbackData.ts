import type { Profile } from 'shared';

export const fallbackData: Profile = {
  name: 'Maggie Di',
  tagline: 'Student | Content Creator',
  bio: "Hello, welcome to my little corner of the internet! I'm Maggie, a student at the University of British Columbia studying Environment & Sustainability.\n\nOutside the classroom, I create content and have worked in public-facing roles where clear communication, organization, and empathy matter. I'm especially interested in sustainability, community impact, and thoughtful storytelling.\n\nThis site is a simple place to share what I'm learning, what I've worked on, and a few projects that are easy to update over time.",
  workExperience: [
    {
      company: 'Canada Border Services Agency (CBSA)',
      role: 'Student Border Services Officer',
      duration: 'May 2025 - August 2025',
      description:
        'Worked in a high-responsibility public service role that required professionalism, attention to detail, and confident communication with travelers.',
    },
    {
      company: 'Canada Border Services Agency (CBSA)',
      role: 'Travel Services Representative',
      duration: 'May 2024 - August 2024',
      description:
        'Supported travelers in a fast-paced airport environment, answered questions clearly, and helped keep day-to-day service running smoothly.',
    },
    {
      company: "St. Andrew's United Church",
      role: 'Summer Events Coordinator',
      duration: 'May 2023 - August 2023',
      description:
        'Planned and ran community programming, coordinated schedules and logistics, and helped create welcoming events for children and families.',
    },
  ],
  education: [
    {
      institution: 'University of British Columbia',
      degree: 'Bachelor of Arts in Environment & Sustainability',
      duration: 'April 2023 - Expected Graduation: May 2026',
    },
    {
      institution: 'Seoul National University, South Korea',
      degree: 'Exchange Semester',
      duration: 'September 2025 - December 2025',
    },
    {
      institution: 'Simon Fraser University',
      degree: 'Bachelor of Sciences in Geographical Information Systems',
      duration: '2020 - 2023',
    },
  ],
  volunteering: [
    {
      organization: 'A Loving Spoonful',
      role: 'Student Volunteer',
      duration: '2021 - Present',
      description:
        'Supported community care efforts through consistent volunteer service and a people-first approach.',
    },
    {
      organization: 'Tech Mentorship Program',
      role: 'Mentor',
      duration: '2020 - Present',
      description:
        'Shared encouragement and practical guidance with students exploring new skills and career paths.',
    },
  ],
  partnerships: [
    {
      partner: 'iQIYI',
      logo: '/logos/partnerships/iqiyi.svg',
    },
    {
      partner: 'RAYCON',
      logo: '/logos/partnerships/raycon.png',
    },
    {
      partner: 'Goodfood Canada',
      logo: '/logos/partnerships/goodfood.svg',
    },
    {
      partner: 'Ana Luisa',
      logo: '/logos/partnerships/ana-luisa.png',
    },
    {
      partner: 'SciSpace',
      logo: '/logos/partnerships/scispace.jpg',
    },
    {
      partner: 'TOUN28',
      logo: '/logos/partnerships/toun28.svg',
      logoBackground: 'dark',
    },
    {
      partner: 'Hetras Korea',
      logo: '/logos/partnerships/hetras-korea.png',
    },
    {
      partner: 'Y.O.U Hair Salon',
      logo: '/logos/partnerships/you-hair-salon.png',
    },
  ],
  projects: [
    {
      title: 'Personal Website',
      description:
        'A monorepo personal site built with React, TypeScript, Express, and Tailwind CSS. It pulls profile content from an API and falls back gracefully when the backend is unavailable.',
      technologies: ['React', 'TypeScript', 'Express', 'Tailwind CSS', 'Vite'],
    },
    {
      title: 'Student Project Placeholder',
      description:
        'A placeholder card for a class, research, or creative project. Replace this text with a short summary of the work, your role, and the outcome.',
      technologies: ['Research', 'Writing', 'Presentation'],
    },
    {
      title: 'Content Portfolio Placeholder',
      description:
        'Use this space for a campaign, video series, or creative project you want to feature with a concise description and a few tools or platforms used.',
      technologies: ['Video', 'Editing', 'Social Media'],
    },
    {
      title: 'Community Project Placeholder',
      description:
        'A placeholder for volunteer, event, or community-facing work. Update it with the project goal, audience, and what you contributed.',
      technologies: ['Coordination', 'Planning', 'Outreach'],
    },
    {
      title: 'Hiring Pack Prototype',
      description: '',
      technologies: [],
    },
  ],
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/maggiedi',
      icon: 'linkedin',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@maggiesdiaries',
      icon: 'youtube',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/maggiie.diaries/',
      icon: 'instagram',
    },
    {
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@maggiesdiaries',
      icon: 'video',
    },
  ],
};
