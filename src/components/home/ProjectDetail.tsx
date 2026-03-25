import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { ProjectOverview } from './detail/ProjectOverview';
import { ProjectMetrics } from './detail/ProjectMetrics';
import { ProjectLinks } from './detail/ProjectLinks';
import { TechStack } from './detail/TechStack';
import type { FeaturedProject } from '../../data/projects';

interface ProjectDetailProps {
  project: FeaturedProject;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { caseStudy } = project;

  return (
    <Paper
      variant="outlined"
      sx={{
        p: { xs: 3, sm: 4 },
        borderTopWidth: 3,
        borderTopStyle: 'solid',
        borderTopColor: 'secondary.main',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 3,
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h4" component="h3">
            {project.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            {project.tagline}
          </Typography>
        </Stack>
        <IconButton
          onClick={onClose}
          aria-label="Close project details"
          sx={{ ml: 2, mt: -0.5, color: 'text.secondary' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 720 }}
      >
        {project.description}
      </Typography>

      <Divider sx={{ mb: { xs: 3, sm: 4 } }} />

      <ProjectOverview sections={caseStudy.sections} />
      <ProjectMetrics metrics={caseStudy.metrics} />
      <ProjectLinks links={caseStudy.links} />

      <Divider sx={{ my: { xs: 2, sm: 3 } }} />

      <TechStack techStack={caseStudy.techStack} />
    </Paper>
  );
}
