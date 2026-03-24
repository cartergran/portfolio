import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, Link as RouterLink } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Section } from "../components/layout/Section";

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <PageContainer>
      <Section>
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{ alignSelf: "flex-start", color: "text.secondary" }}
          >
            Back
          </Button>
          <Typography variant="h3" component="h1">
            Project: {slug}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Project details for &ldquo;{slug}&rdquo; will go here.
          </Typography>
        </Stack>
      </Section>
    </PageContainer>
  );
}
