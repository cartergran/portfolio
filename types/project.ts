export type ProjectSlug = 'panorama' | 'imagine' | 'spotify-lounge';

export interface ProjectLink {
  label: string;
  url: string;
  kind: 'demo' | 'repo' | 'article' | 'other';
}

export interface ProjectMetric {
  label: string;
  value: string;
  unit?: string;
}

export type CaseStudySectionKind =
  | 'overview'
  | 'problem'
  | 'approach'
  | 'challenges'
  | 'implementation'
  | 'impact';

export interface CaseStudySection {
  kind: CaseStudySectionKind;
  heading: string;
  body: string;
}

import type { TechDetail } from './tech';

export type { TechDetail } from './tech';

export interface ProjectCaseStudy {
  sections: readonly CaseStudySection[];
  metrics: readonly ProjectMetric[];
  links: readonly ProjectLink[];
  techStack: readonly TechDetail[];
}

export type CaseStudyMap = Record<ProjectSlug, ProjectCaseStudy>;
