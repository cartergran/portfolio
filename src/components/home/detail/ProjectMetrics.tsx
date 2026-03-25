import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { ProjectMetric } from '../../../types/project';

interface ProjectMetricsProps {
  metrics: readonly ProjectMetric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <Box sx={{ mb: { xs: 3, sm: 4 } }}>
      <Typography
        variant="overline"
        color="text.secondary"
        sx={{ display: 'block', mb: 2, letterSpacing: '0.1em' }}
      >
        Key Metrics
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
      >
        {metrics.map((metric) => (
          <Box
            key={metric.label}
            sx={{
              flex: 1,
              p: 2,
              bgcolor: 'action.hover',
              borderRadius: 1,
              borderLeft: 3,
              borderColor: 'secondary.main',
            }}
          >
            <Typography
              variant="h5"
              component="span"
              color="secondary"
              sx={{ fontWeight: 700 }}
            >
              {metric.value}
            </Typography>
            {metric.unit && (
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ ml: 0.75 }}
              >
                {metric.unit}
              </Typography>
            )}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              {metric.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
