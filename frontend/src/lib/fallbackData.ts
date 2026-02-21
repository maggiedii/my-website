import type { Profile } from 'shared';

export const fallbackData: Profile = {
  name: 'Your Name',
  tagline: 'Software Engineer | Designer | Creator',
  bio: "Hello! I'm a passionate software engineer with a love for building beautiful, functional web applications. I specialize in full-stack development with React, TypeScript, and Node.js.\n\nI believe in writing clean, maintainable code and creating delightful user experiences. When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the community.\n\nI'm always excited to collaborate on interesting projects and connect with fellow developers!",
  workExperience: [
    {
      company: 'Tech Company Inc.',
      role: 'Senior Software Engineer',
      duration: '2022 - Present',
      description:
        'Leading frontend development for customer-facing applications using React and TypeScript. Mentoring junior developers and establishing best practices for the team.',
    },
    {
      company: 'Startup Co.',
      role: 'Full Stack Developer',
      duration: '2020 - 2022',
      description:
        'Built scalable web applications from scratch using the MERN stack. Collaborated with designers to create intuitive user interfaces and implemented RESTful APIs.',
    },
  ],
  education: [
    {
      institution: 'University Name',
      degree: 'Bachelor of Science in Computer Science',
      duration: '2014 - 2018',
    },
  ],
  volunteering: [
    {
      organization: 'Code for Good',
      role: 'Volunteer Developer',
      duration: '2021 - Present',
      description:
        'Building web applications for non-profit organizations to help them better serve their communities.',
    },
  ],
  projects: [
    {
      title: 'Personal Portfolio Website',
      description:
        'A modern, responsive portfolio website built with React, TypeScript, and Express. Features a beautiful pastel pink design and smooth animations.',
      technologies: ['React', 'TypeScript', 'Express', 'Tailwind CSS', 'Vite'],
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
      link: 'https://github.com/yourusername/task-app',
    },
  ],
  socials: [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: 'linkedin',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@yourchannel',
      icon: 'youtube',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/yourhandle',
      icon: 'instagram',
    },
    {
      platform: 'TikTok',
      url: 'https://tiktok.com/@yourhandle',
      icon: 'video',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: 'github',
    },
  ],
};
