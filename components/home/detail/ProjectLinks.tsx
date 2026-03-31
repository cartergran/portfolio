import { ExternalLink, Github, Smartphone, Link } from 'lucide-react';
import type { ProjectLink } from '@/types/project';

const ICON_MAP = {
  demo: ExternalLink,
  repo: Github,
  article: Smartphone,
  other: Link,
} as const;

interface ProjectLinksProps {
  links: readonly ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-3 block">
        Links
      </p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => {
          const Icon = ICON_MAP[link.kind];
          return (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-200"
            >
              <Icon size={14} />
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
