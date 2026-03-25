import Stack from '@mui/material/Stack';
import { FadeIn } from '../common/FadeIn';
import { SectionHeading } from '../common/SectionHeading';
import { ExperienceCard } from './ExperienceCard';
import { EXPERIENCES } from '../../data/experiences';

export function ExperienceSection() {
  return (
    <FadeIn
      component="section"
      id="experience"
      aria-labelledby="experience-heading"
      sx={{ py: { xs: 4, sm: 6 } }}
    >
      <SectionHeading title="Experience" headingId="experience-heading" />
      <Stack spacing={3}>
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </Stack>
    </FadeIn>
  );
}
