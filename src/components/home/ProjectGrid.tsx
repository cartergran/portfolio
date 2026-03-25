import { useCallback, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useLocation, useNavigate } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';
import { FadeIn } from '../common/FadeIn';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { FEATURED_PROJECTS } from '../../data/projects';

function slugFromHash(hash: string): string | null {
  const raw = hash.replace('#', '');
  return raw.startsWith('projects/') ? raw.slice('projects/'.length) : null;
}

export function ProjectGrid() {
  const navigate = useNavigate();
  const location = useLocation();
  const expandedSlug = slugFromHash(location.hash);

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
        navigate(`/#projects/${slug}`);
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
    <FadeIn
      component="section"
      id="projects"
      sx={{ py: { xs: 4, sm: 6 } }}
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
              <ProjectDetail
                project={project}
                onClose={() => navigate('/#projects')}
              />
            </Box>
          </Collapse>
        );
      })}
    </FadeIn>
  );
}
