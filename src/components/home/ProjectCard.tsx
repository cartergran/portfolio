import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { TagList } from "../common/TagList";
import type { FeaturedProject } from "../../data/projects";

interface ProjectCardProps {
  project: FeaturedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 8,
        },
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",
          "&:hover": {
            transform: "none",
          },
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, sm: 3 } }}>
        <Stack spacing={1.5}>
          <Typography variant="h5" component="h3">
            {project.title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            color="secondary"
            sx={{ fontWeight: 600 }}
          >
            {project.tagline}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ pb: 0.5 }}>
            {project.description}
          </Typography>
          <TagList tags={project.tags} />
        </Stack>
      </CardContent>
      <CardActions sx={{ px: { xs: 2.5, sm: 3 }, pb: 2.5, pt: 0 }}>
        <Button
          component={RouterLink}
          to={`/projects/${project.slug}`}
          endIcon={<ArrowForwardIcon />}
          color="secondary"
          size="small"
          sx={{
            fontWeight: 600,
            "&:hover": { bgcolor: "secondary.main", color: "secondary.contrastText" },
            transition: "background-color 0.2s ease, color 0.2s ease",
            "@media (prefers-reduced-motion: reduce)": {
              transition: "none",
            },
          }}
        >
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}
