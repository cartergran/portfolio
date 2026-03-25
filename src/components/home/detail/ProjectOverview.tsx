import Divider from '@mui/material/Divider';
import { CaseStudySection } from './CaseStudySection';
import type { CaseStudySection as SectionType } from '../../../types/project';

interface ProjectOverviewProps {
  sections: readonly SectionType[];
}

export function ProjectOverview({ sections }: ProjectOverviewProps) {
  return (
    <>
      {sections.map((section) => (
        <CaseStudySection key={section.kind} section={section} />
      ))}
      <Divider sx={{ my: { xs: 2, sm: 3 } }} />
    </>
  );
}
