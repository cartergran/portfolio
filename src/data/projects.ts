export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  tags: readonly string[];
}

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    slug: 'financial-analytics-dashboard',
    title: 'Financial Analytics Dashboard',
    tagline: 'Real-time insights for smarter decisions',
    description:
      'An interactive dashboard for visualizing financial data with dynamic charts, filterable views, and responsive layouts built for both desktop and mobile.',
    tags: ['React', 'TypeScript', 'D3.js', 'Material UI'],
  },
  {
    slug: 'daily-puzzle-game',
    title: 'Daily Puzzle Game',
    tagline: 'A fresh challenge every day',
    description:
      'A browser-based puzzle game with daily challenges, streak tracking, and shareable results. Designed for quick, engaging play sessions.',
    tags: ['React', 'TypeScript', 'CSS Animations', 'LocalStorage'],
  },
  {
    slug: 'react-islands',
    title: 'React Islands in Legacy jQuery UI',
    tagline: 'Modern components in a legacy codebase',
    description:
      'A progressive migration strategy embedding React components as islands within an existing jQuery application, enabling incremental modernization without full rewrites.',
    tags: ['React', 'jQuery', 'TypeScript', 'Webpack'],
  },
];
