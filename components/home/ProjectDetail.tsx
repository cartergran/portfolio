'use client';

import { Transition } from '@headlessui/react';
import { X } from 'lucide-react';
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

export function ProjectDetail({ project, isExpanded, onClose, onAfterLeave, onAfterEnter }: ProjectDetailProps) {
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
        <div className="rounded-xl border border-divider border-t-[3px] border-t-secondary p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-text">{project.title}</h3>
              <p className="text-base font-semibold text-secondary">{project.tagline}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="ml-4 -mt-1 p-1.5 text-text-muted hover:text-text transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          <p className="text-base text-text-muted mb-6 max-w-[720px] leading-relaxed">
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
