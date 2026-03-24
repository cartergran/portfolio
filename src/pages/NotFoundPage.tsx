import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Section } from "../components/layout/Section";

export function NotFoundPage() {
  return (
    <PageContainer>
      <Section
        sx={{
          py: { xs: 8, sm: 12 },
          textAlign: "center",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Typography variant="h2" component="h1">
            404
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The page you&rsquo;re looking for doesn&rsquo;t exist.
          </Typography>
          <Button variant="contained" component={RouterLink} to="/">
            Go Home
          </Button>
        </Stack>
      </Section>
    </PageContainer>
  );
}
