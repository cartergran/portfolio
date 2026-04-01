'use client';

import { ChevronDown } from 'lucide-react';
import { TagList } from '@/components/common/TagList';
import { cn } from '@/lib/utils';
import type { FeaturedProject } from '@/data/projects';

interface ProjectCardProps {
  project: FeaturedProject;
  isExpanded: boolean;
  onToggle: (slug: string) => void;
}

export function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col rounded-xl border',
        'transition-all duration-200',
        isExpanded
          ? 'border-secondary shadow-md'
          : 'border-divider hover:-translate-y-1 hover:shadow-lg',
      )}
    >
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <h3 className="text-text text-lg font-semibold">{project.title}</h3>
        <p className="text-secondary text-sm font-semibold">
          {project.tagline}
        </p>
        <p className="text-text-muted pb-1 text-sm leading-relaxed">
          {project.description}
        </p>
        <TagList tags={project.caseStudy.techStack.map((t) => t.name)} />
      </div>
      <div className="px-5 pt-0 pb-5 sm:px-6">
        <button
          type="button"
          onClick={() => onToggle(project.slug)}
          aria-expanded={isExpanded}
          className={cn(
            'inline-flex items-center gap-1.5',
            'text-secondary text-sm font-semibold',
            'hover:bg-secondary hover:text-white',
            'rounded-lg px-3 py-1.5',
            'cursor-pointer transition-colors duration-200',
          )}
        >
          {isExpanded ? 'Close' : 'View Project'}
          <ChevronDown
            size={16}
            className={cn(
              'transition-transform duration-200',
              isExpanded && 'rotate-180',
            )}
          />
        </button>
      </div>
    </div>
  );
}
