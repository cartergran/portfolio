'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FadeIn } from '@/components/common/FadeIn';
import { ProjectCard } from '@/components/home/ProjectCard';
import { ProjectDetail } from '@/components/home/ProjectDetail';
import { FEATURED_PROJECTS } from '@/data/projects';

function slugFromHash(hash: string): string | null {
  const raw = hash.replace('#', '');
  return raw.startsWith('projects/') ? raw.slice('projects/'.length) : null;
}

function getExpandedSlug(): string | null {
  if (typeof window === 'undefined') return null;
  return slugFromHash(window.location.hash);
}

export function ProjectGrid() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(getExpandedSlug);
  const [collapsingSlug, setCollapsingSlug] = useState<string | null>(null);
  const prevExpandedRef = useRef(expandedSlug);
  const pendingSlugRef = useRef<string | null>(null);

  // Sync expandedSlug with hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      setExpandedSlug(getExpandedSlug());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Detect when expandedSlug transitions from a slug to null/different slug
  // to trigger collapse animation
  useEffect(() => {
    const prev = prevExpandedRef.current;
    prevExpandedRef.current = expandedSlug;
    if (prev && prev !== expandedSlug) {
      setCollapsingSlug((c) => (c !== prev ? prev : c));
    }
  }, [expandedSlug]);

  const navigate = useCallback((hash: string) => {
    window.history.pushState(null, '', hash);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }, []);

  const handleToggle = useCallback(
    (slug: string) => {
      if (expandedSlug === slug) {
        pendingSlugRef.current = null;
        navigate('/#projects');
      } else if (expandedSlug) {
        pendingSlugRef.current = slug;
        navigate('/#projects');
      } else {
        navigate(`/#projects/${slug}`);
      }
    },
    [expandedSlug, navigate],
  );

  const handleCollapseExited = useCallback(
    (slug: string) => {
      setCollapsingSlug((prev) => (prev === slug ? null : prev));
      const pending = pendingSlugRef.current;
      if (pending) {
        pendingSlugRef.current = null;
        navigate(`/#projects/${pending}`);
      }
    },
    [navigate],
  );

  const handleScrollToDetail = useCallback((slug: string) => {
    document
      .getElementById(`project-detail-${slug}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, []);

  const delays = ['', 'delay-100', 'delay-200'];

  return (
    <FadeIn id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        title="Featured Work"
        headingId="projects-heading"
        subtitle="A selection of projects that showcase my approach to building software."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FEATURED_PROJECTS.map((project, i) => (
          <FadeIn key={project.slug} delay={delays[i % 3]}>
            <ProjectCard
              project={project}
              isExpanded={expandedSlug === project.slug}
              onToggle={handleToggle}
            />
          </FadeIn>
        ))}
      </div>

      {FEATURED_PROJECTS.map((project) => {
        const isExpanded = expandedSlug === project.slug;
        const isCollapsing = collapsingSlug === project.slug;
        if (!isExpanded && !isCollapsing) return null;
        return (
          <div key={project.slug} id={`project-detail-${project.slug}`} className="pt-6">
            <ProjectDetail
              project={project}
              isExpanded={isExpanded}
              onClose={() => navigate('/#projects')}
              onAfterLeave={() => handleCollapseExited(project.slug)}
              onAfterEnter={() => handleScrollToDetail(project.slug)}
            />
          </div>
        );
      })}
    </FadeIn>
  );
}
