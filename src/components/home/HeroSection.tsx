import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { CTAButton } from '../common/CTAButton';
import { FadeIn } from '../common/FadeIn';

export function HeroSection() {
  return (
    <FadeIn component="section" sx={{ py: { xs: 6, sm: 10, md: 14 } }}>
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
    </FadeIn>
  );
}
