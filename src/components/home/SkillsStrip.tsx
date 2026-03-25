import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FadeIn } from '../common/FadeIn';

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

export function SkillsStrip() {
  return (
    <FadeIn
      component="section"
      threshold={0.1}
      sx={{ py: { xs: 4, sm: 6 } }}
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
    </FadeIn>
  );
}
