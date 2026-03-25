import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { CaseStudySection as CaseStudySectionType } from '../../../types/project';

interface CaseStudySectionProps {
  section: CaseStudySectionType;
}

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: 'block', mb: 1, letterSpacing: '0.1em' }}
      >
        {section.heading}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 720, lineHeight: 1.75 }}
      >
        {section.body}
      </Typography>
    </Box>
  );
}
