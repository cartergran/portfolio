import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { PageContainer } from '../components/layout/PageContainer';
import { Section } from '../components/layout/Section';

export function AboutPage() {
  return (
    <PageContainer>
      <Section>
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Typography variant="h3" component="h1">
            About
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This page will tell my story. Content coming soon.
          </Typography>
        </Stack>
      </Section>
    </PageContainer>
  );
}
