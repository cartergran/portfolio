import type { CaseStudySection as CaseStudySectionType } from '@/types/project';

interface CaseStudySectionProps {
  section: CaseStudySectionType;
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-text-muted mb-2 block text-xs tracking-[0.1em] uppercase">
        {section.heading}
      </p>
      <p className="text-text-muted max-w-[720px] text-base leading-[1.75]">
        {section.body}
      </p>
    </div>
  );
}
