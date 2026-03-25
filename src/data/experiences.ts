import type { Experience } from '../types/experience';

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Meridian Digital',
    role: 'Senior Frontend Engineer',
    url: 'https://example.com/meridian',
    dateRange: 'Mar 2025 – Present',
    description:
      'Leading frontend architecture for a customer-facing analytics platform. Driving migration from a legacy jQuery codebase to React while maintaining feature parity and improving performance across key user flows.',
    techStack: [
      { name: 'React', role: 'UI framework for component-driven development' },
      { name: 'TypeScript', role: 'Static typing across the frontend codebase' },
      { name: 'D3.js', role: 'Custom data visualizations and interactive charts' },
      { name: 'Material UI', role: 'Design system and component library' },
    ],
  },
  {
    company: 'Skyline Consulting Group',
    role: 'Full-Stack Developer',
    url: 'https://example.com/skyline',
    dateRange: 'Jun 2023 – Feb 2025',
    description:
      'Built and shipped features across multiple client engagements, spanning fintech dashboards, e-commerce platforms, and internal tooling. Worked closely with product and design to translate requirements into scalable, well-tested solutions.',
    techStack: [
      { name: 'React', role: 'Primary frontend framework across projects' },
      { name: 'Node.js', role: 'Backend services and REST API development' },
      { name: 'PostgreSQL', role: 'Relational data modeling and query optimization' },
      { name: 'AWS', role: 'Cloud infrastructure and deployment pipelines' },
      { name: 'TypeScript', role: 'Shared types across full-stack codebases' },
    ],
  },
  {
    company: 'Basecamp Labs',
    role: 'Software Engineering Intern',
    url: 'https://example.com/basecamp',
    dateRange: 'May 2022 – Aug 2022',
    description:
      'Contributed to a real-time collaboration tool used by enterprise teams. Implemented WebSocket-based presence indicators and optimistic UI updates that reduced perceived latency for end users.',
    techStack: [
      { name: 'React', role: 'Frontend component development' },
      { name: 'WebSockets', role: 'Real-time communication layer' },
      { name: 'Redis', role: 'Session and presence state management' },
    ],
  },
];
