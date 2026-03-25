import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useInView } from '../../hooks/useInView';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import { CTAButton } from '../common/CTAButton';

const FADE_SX = {
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
} as const;

export function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const scrollToSection = useScrollToSection();

  return (
    <Box
      component="section"
      ref={ref}
      sx={{
        py: { xs: 6, sm: 10, md: 14 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        ...FADE_SX,
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 640 }}>
        <Typography variant="h2" component="h1">
          Hi, I&rsquo;m Carter
        </Typography>
        <Typography
          variant="h5"
          component="p"
          color="secondary"
          sx={{ fontWeight: 500 }}
        >
          Full-Stack Developer
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 520 }}
        >
          I build thoughtful, well-crafted web applications with a focus on
          clean code, great user experience, and modern tooling.
        </Typography>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1.5}
          sx={{ pt: 1 }}
        >
          <CTAButton
            variant="contained"
            color="primary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </CTAButton>
          <CTAButton
            href="https://github.com"
            variant="outlined"
            color="inherit"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </CTAButton>
          <CTAButton
            href="https://linkedin.com"
            variant="outlined"
            color="inherit"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </CTAButton>
        </Stack>
      </Stack>
    </Box>
  );
}
