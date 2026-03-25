import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Section } from '../layout/Section';
import { useInView } from '../../hooks/useInView';

const FADE_SX = {
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
} as const;

export function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <Section
      sx={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        ...FADE_SX,
      }}
    >
      <div ref={ref} id="experience" aria-labelledby="experience-heading">
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Typography variant="h3" component="h2" id="experience-heading">
            Experience
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Professional experience details coming soon.
          </Typography>
        </Stack>
      </div>
    </Section>
  );
}
