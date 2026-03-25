import Box from '@mui/material/Box';
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
        <Box
          component="img"
          src="/logo.svg"
          alt="Logo"
          sx={{
            width: { xs: 88, sm: 144 },
            height: { xs: 88, sm: 144 },
            objectFit: 'contain',
          }}
        />
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
          Turning “this could be cool” into software worth using.
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
