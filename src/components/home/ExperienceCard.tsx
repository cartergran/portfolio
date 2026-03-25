import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { ProjectTechStack } from './detail/ProjectTechStack';
import type { Experience } from '../../types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 8,
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '&:hover': { transform: 'none' },
        },
      }}
    >
      <CardActionArea
        component="a"
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
          <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 2,
              }}
            >
              <Stack spacing={0.25}>
                <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 600 }}>
                  {experience.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.company}
                </Typography>
              </Stack>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ whiteSpace: 'nowrap', pt: 0.5 }}
              >
                {experience.dateRange}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {experience.description}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <Box sx={{ px: { xs: 2.5, sm: 3 }, pb: { xs: 2.5, sm: 3 } }}>
        <ProjectTechStack techStack={experience.techStack} />
      </Box>
    </Card>
  );
}
