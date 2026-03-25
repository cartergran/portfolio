import type { TechDetail } from './tech';

export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly url: string;
  readonly dateRange: string;
  readonly description: string;
  readonly techStack: readonly TechDetail[];
}
