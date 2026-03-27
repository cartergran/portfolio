import type { ProjectSlug, ProjectCaseStudy } from '../types/project';
import { CASE_STUDIES } from './case-studies';

export interface FeaturedProject {
  slug: ProjectSlug;
  title: string;
  tagline: string;
  description: string;
  caseStudy: ProjectCaseStudy;
}

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    slug: 'panorama',
    title: 'Panorama',
    tagline: 'Robinhood-style visibility for private investments',
    description:
      'A platform for family offices and wealth managers to ingest quarterly investor reports from private equity, debt, and VC funds. It extracts structured data so investors can track their private portfolios with the same ease as a public brokerage app.',
    caseStudy: CASE_STUDIES['panorama'],
  },
  {
    slug: 'imagine',
    title: 'Imagine',
    tagline: 'A daily image-guessing puzzle game',
    description:
      'A daily puzzle game born out of years of playing them. Players reveal tiles on a pixelated 8x8 grid to identify a hidden image, with a two-phase guessing system, a daily leaderboard, and fully automated puzzle rotation.',
    caseStudy: CASE_STUDIES['imagine'],
  },
  {
    slug: 'spotify-lounge',
    title: 'Spotify Lounge',
    tagline: 'A social listening concept that predated Spotify Jams',
    description:
      'A UX concept designed in 2017 for a collaborative Spotify feature: a virtual lounge where users connect in real time, vote on a shared queue, and discover music through the people they follow. Spotify shipped a nearly identical feature five years later.',
    caseStudy: CASE_STUDIES['spotify-lounge'],
  },
];
