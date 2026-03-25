import { useCallback, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useMatch, useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { FEATURED_PROJECTS } from '../../data/projects';
import { useInView } from '../../hooks/useInView';

const FADE_SX = {
  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    transform: 'none',
    transition: 'none',
  },
} as const;

export function ProjectGrid() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const navigate = useNavigate();
  const match = useMatch('/projects/:slug');
  const expandedSlug = match?.params.slug ?? null;

  const [collapsingSlug, setCollapsingSlug] = useState<string | null>(null);
  const prevExpandedRef = useRef(expandedSlug);

  const prefersReducedMotion = useMediaQuery(
    '(prefers-reduced-motion: reduce)',
  );
  const timeout = prefersReducedMotion ? 0 : 350;

  if (prevExpandedRef.current && prevExpandedRef.current !== expandedSlug) {
    if (collapsingSlug !== prevExpandedRef.current) {
      setCollapsingSlug(prevExpandedRef.current);
    }
  }
  prevExpandedRef.current = expandedSlug;

  const handleToggle = useCallback(
    (slug: string) => {
      if (expandedSlug === slug) {
        navigate('/#projects');
      } else {
        navigate(`/projects/${slug}`);
      }
    },
    [expandedSlug, navigate],
  );

  const handleCollapseExited = useCallback((slug: string) => {
    setCollapsingSlug((prev) => (prev === slug ? null : prev));
  }, []);

  const handleScrollToDetail = useCallback((slug: string) => {
    document
      .getElementById(`project-detail-${slug}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, []);

  return (
    <Box
      component="section"
      id="projects"
      ref={ref}
      sx={{
        py: { xs: 4, sm: 6 },
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : 'translateY(24px)',
        transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s',
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
            <ProjectCard
              project={project}
              isExpanded={expandedSlug === project.slug}
              onToggle={handleToggle}
            />
          </Grid>
        ))}
      </Grid>

      {FEATURED_PROJECTS.map((project) => {
        const isExpanded = expandedSlug === project.slug;
        const isCollapsing = collapsingSlug === project.slug;
        if (!isExpanded && !isCollapsing) return null;
        return (
          <Collapse
            key={project.slug}
            in={isExpanded}
            timeout={timeout}
            appear
            onEntered={() => handleScrollToDetail(project.slug)}
            onExited={() => handleCollapseExited(project.slug)}
          >
            <Box id={`project-detail-${project.slug}`} sx={{ pt: 3 }}>
              <ProjectDetail project={project} onClose={() => navigate('/#projects')} />
            </Box>
          </Collapse>
        );
      })}
    </Box>
  );
}
