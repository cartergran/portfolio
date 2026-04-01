'use client';

import { Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ProjectOverview } from '@/components/home/detail/ProjectOverview';
import { ProjectMetrics } from '@/components/home/detail/ProjectMetrics';
import { ProjectLinks } from '@/components/home/detail/ProjectLinks';
import { TechStack } from '@/components/home/detail/TechStack';
import type { FeaturedProject } from '@/data/projects';

interface ProjectDetailProps {
  project: FeaturedProject;
  isExpanded: boolean;
  onClose: () => void;
  onAfterLeave?: () => void;
  onAfterEnter?: () => void;
}

export function ProjectDetail({
  project,
  isExpanded,
  onClose,
  onAfterLeave,
  onAfterEnter,
}: ProjectDetailProps) {
  const { caseStudy } = project;

  return (
    <Transition
      show={isExpanded}
      enter="transition-all duration-300 ease-in-out"
      enterFrom="opacity-0 max-h-0"
      enterTo="opacity-100 max-h-[2000px]"
      leave="transition-all duration-200 ease-in-out"
      leaveFrom="opacity-100 max-h-[2000px]"
      leaveTo="opacity-0 max-h-0"
      afterLeave={onAfterLeave}
      afterEnter={onAfterEnter}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            'border-divider rounded-xl border',
            'border-t-secondary border-t-[3px]',
            'p-6 sm:p-8',
          )}
        >
          <div className="mb-6 flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="text-text text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-secondary text-base font-semibold">
                {project.tagline}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="text-text-muted hover:text-text -mt-1 ml-4 p-1.5 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-text-muted mb-6 max-w-[720px] text-base leading-relaxed">
            {project.description}
          </p>

          <hr className="border-divider mb-6 sm:mb-8" />

          <ProjectOverview sections={caseStudy.sections} />
          <ProjectMetrics metrics={caseStudy.metrics} />
          <ProjectLinks links={caseStudy.links} />

          <hr className="border-divider my-4 sm:my-6" />

          <TechStack techStack={caseStudy.techStack} />
        </div>
      </div>
    </Transition>
  );
}
