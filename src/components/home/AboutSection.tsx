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

export function AboutSection() {
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
      <div ref={ref} id="about" aria-labelledby="about-heading">
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Typography variant="h3" component="h2" id="about-heading">
            About
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page will tell my story. Content coming soon.
          </Typography>
        </Stack>
      </div>
    </Section>
  );
}
