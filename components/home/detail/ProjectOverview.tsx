import { CaseStudySection } from '@/components/home/detail/CaseStudySection';
import type { CaseStudySection as SectionType } from '@/types/project';

interface ProjectOverviewProps {
  sections: readonly SectionType[];
}

export function ProjectOverview({ sections }: ProjectOverviewProps) {
  return (
    <>
      {sections.map((section) => (
        <CaseStudySection key={section.kind} section={section} />
      ))}
      <hr className="border-divider my-6 sm:my-8" />
    </>
  );
}
