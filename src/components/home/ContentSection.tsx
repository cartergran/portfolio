import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FadeIn } from '../common/FadeIn';

interface ContentSectionProps {
  id: string;
  heading: string;
  body: string;
}

export function ContentSection({ id, heading, body }: ContentSectionProps) {
  return (
    <FadeIn component="section" id={id} aria-labelledby={`${id}-heading`} sx={{ py: { xs: 4, sm: 6 } }}>
      <Stack spacing={3} sx={{ maxWidth: 640 }}>
        <Typography variant="h3" component="h2" id={`${id}-heading`}>
          {heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {body}
        </Typography>
      </Stack>
    </FadeIn>
  );
}
