import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useInView } from '../../hooks/useInView';

const SKILLS = [
  'React',
  'TypeScript',
  'Node.js',
  'Material UI',
  'Python',
  'SQL',
  'REST APIs',
  'Git',
] as const;

const FADE_SX = {
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
} as const;

export function SkillsStrip() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: { xs: 4, sm: 6 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(16px)',
        transition:
          'opacity 0.5s ease-out 0.15s, transform 0.5s ease-out 0.15s',
        ...FADE_SX,
      }}
    >
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ mb: 2, display: 'block', letterSpacing: '0.1em' }}
      >
        Core Technologies
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {SKILLS.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            size="small"
            sx={{
              fontWeight: 500,
              bgcolor: 'action.hover',
              border: 'none',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
