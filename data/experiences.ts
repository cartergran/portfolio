import type { Experience } from '../types/experience';

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Publicis Sapient',
    role: 'Senior Associate Software Engineer',
    url: 'https://www.publicissapient.com/',
    dateRange: 'June 2021 – Present',
    description:
      'Full-stack software engineer delivering modernized enterprise applications across React frontends, Java backends, and AI-assisted workflows. Work spans legacy system migrations, backend architecture refactors, and data-driven marketing integrations for clients ranging from clinical research platforms to Fortune 500 companies.',
    techStack: [
      {
        name: 'React',
        role: 'Primary frontend framework for enterprise UI modernization',
      },
      { name: 'TypeScript', role: 'Static typing across frontend codebases' },
      { name: 'Java', role: 'Scalable backend services and API development' },
      {
        name: 'Spring Boot',
        role: 'Layered backend architecture (controller / service / repository)',
      },
      {
        name: 'Express',
        role: 'Node.js REST API for AI-assisted full-stack workflow services',
      },
      {
        name: 'jQuery',
        role: 'Legacy frontend maintained during phased React migration',
      },
      {
        name: 'Marketo',
        role: 'End-to-end analytics and automated email campaign tracking',
      },
    ],
  },
  {
    company: 'Gaine',
    role: 'Research & Development Intern',
    url: 'https://www.gaine.com/',
    dateRange: 'June 2020 – August 2020',
    description:
      'Worked on graph database infrastructure for a healthcare data management platform, focused on modeling and optimizing provider network data at scale. Contributed to significant performance improvements in production data migration pipelines.',
    techStack: [
      {
        name: 'Neo4j',
        role: 'Graph database for provider network modeling and analysis',
      },
      {
        name: 'Cypher',
        role: 'Query language for graph data migration and optimization',
      },
    ],
  },
  {
    company: 'Mindbody',
    role: 'Software Engineering Intern',
    url: 'https://www.mindbodyonline.com/',
    dateRange: 'June 2019 – August 2019',
    description:
      'Contributed to Android mobile development for a fitness and wellness business management platform, building UI components that surfaced client dashboard insights within the native app.',
    techStack: [
      {
        name: 'Java',
        role: 'Primary language for Android feature development',
      },
      {
        name: 'Android SDK',
        role: 'Core framework for native Android UI and lifecycle management',
      },
      {
        name: 'ViewGroup & Adapters',
        role: 'Efficient list rendering and data binding for dashboard components',
      },
      {
        name: 'ViewHolder & LayoutManager',
        role: 'View recycling patterns and layout configuration for list UIs',
      },
      {
        name: 'Fragments & Activities',
        role: 'Screen composition and lifecycle-aware UI management',
      },
      {
        name: 'Android Studio',
        role: 'IDE for development, debugging, and emulation',
      },
      { name: 'XML', role: 'Layout definitions for Android UI components' },
    ],
  },
];
