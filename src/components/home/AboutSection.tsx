import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FadeIn } from '../common/FadeIn';
import { ABOUT_CONTENT } from '../../data/about';

export function AboutSection() {
  return (
    <FadeIn component="section" id="about" aria-labelledby="about-heading" sx={{ py: { xs: 4, sm: 6 } }}>
      <Stack spacing={3} sx={{ maxWidth: 640 }}>
        <Typography variant="h3" component="h2" id="about-heading">
          {ABOUT_CONTENT.heading}
        </Typography>
        <Stack spacing={2}>
          {ABOUT_CONTENT.paragraphs.map((text, i) => (
            <Typography key={i} variant="body1" color="text.secondary">
              {text}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </FadeIn>
  );
}
