'use client';

import { ChevronDown } from 'lucide-react';
import { TagList } from '@/components/common/TagList';
import type { FeaturedProject } from '@/data/projects';

interface ProjectCardProps {
  project: FeaturedProject;
  isExpanded: boolean;
  onToggle: (slug: string) => void;
}

export function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <div
      className={`h-full flex flex-col rounded-xl border transition-all duration-200 ${
        isExpanded
          ? 'border-secondary shadow-md'
          : 'border-divider hover:-translate-y-1 hover:shadow-lg'
      }`}
    >
      <div className="flex-1 p-5 sm:p-6 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-text">{project.title}</h3>
        <p className="text-sm font-semibold text-secondary">{project.tagline}</p>
        <p className="text-sm text-text-muted leading-relaxed pb-1">{project.description}</p>
        <TagList tags={project.caseStudy.techStack.map((t) => t.name)} />
      </div>
      <div className="px-5 sm:px-6 pb-5 pt-0">
        <button
          type="button"
          onClick={() => onToggle(project.slug)}
          aria-expanded={isExpanded}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:bg-secondary hover:text-white px-3 py-1.5 rounded-lg transition-colors duration-200"
        >
          {isExpanded ? 'Close' : 'View Project'}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}
