import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link as RouterLink } from "react-router-dom";
import { PageContainer } from "../components/layout/PageContainer";
import { Section } from "../components/layout/Section";

export function HomePage() {
  return (
    <PageContainer>
      <Section sx={{ py: { xs: 6, sm: 10, md: 14 } }}>
        <Stack spacing={3} sx={{ maxWidth: 640 }}>
          <Typography variant="h2" component="h1">
            Hi, I&rsquo;m Carter
          </Typography>
          <Typography variant="body1" color="text.secondary">
            I build thoughtful digital experiences. Welcome to my portfolio.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/about"
            >
              About Me
            </Button>
            <Button
              variant="outlined"
              component={RouterLink}
              to="/projects/example"
            >
              View Projects
            </Button>
          </Stack>
        </Stack>
      </Section>
    </PageContainer>
  );
}
