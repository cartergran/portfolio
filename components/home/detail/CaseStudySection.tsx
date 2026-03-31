import type { CaseStudySection as CaseStudySectionType } from '@/types/project';

interface CaseStudySectionProps {
  section: CaseStudySectionType;
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-2 block">
        {section.heading}
      </p>
      <p className="text-base text-text-muted leading-[1.75] max-w-[720px]">
        {section.body}
      </p>
    </div>
  );
}
