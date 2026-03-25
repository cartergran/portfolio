import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { TechDetail } from '../../../types/tech';

interface TechStackProps {
  techStack: readonly TechDetail[];
}

export function TechStack({ techStack }: TechStackProps) {
  if (techStack.length === 0) return null;

  return (
    <Box>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: 'block', mb: 1.5, letterSpacing: '0.1em' }}
      >
        Tech Stack
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {techStack.map((tech) => (
          <Tooltip key={tech.name} title={tech.role} arrow placement="top">
            <Chip
              label={tech.name}
              size="medium"
              variant="outlined"
              sx={{
                fontWeight: 500,
                borderColor: 'divider',
                color: 'text.secondary',
                '&:hover': {
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                },
                transition: 'border-color 0.2s ease, color 0.2s ease',
                '@media (prefers-reduced-motion: reduce)': {
                  transition: 'none',
                },
              }}
            />
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
}
