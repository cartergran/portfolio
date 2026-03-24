import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { SectionHeading } from "../common/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { FEATURED_PROJECTS } from "../../data/projects";
import { useInView } from "../../hooks/useInView";

const FADE_SX = {
  "@media (prefers-reduced-motion: reduce)": {
    opacity: 1,
    transform: "none",
    transition: "none",
  },
} as const;

export function ProjectGrid() {
  const { ref, inView } = useInView({ threshold: 0.05 });

  return (
    <Box
      component="section"
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 4, sm: 6 },
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transition:
          "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
        ...FADE_SX,
      }}
    >
      <SectionHeading
        title="Featured Work"
        subtitle="A selection of projects that showcase my approach to building software."
      />
      <Grid container spacing={3}>
        {FEATURED_PROJECTS.map((project) => (
          <Grid key={project.slug} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
