'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SectionHeading } from '@/components/common/SectionHeading';
import { FadeIn } from '@/components/common/FadeIn';
import { ProjectCard } from '@/components/home/ProjectCard';
import { ProjectDetail } from '@/components/home/ProjectDetail';
import { FEATURED_PROJECTS } from '@/data/projects';

const ENTER_DURATION_MS = 500;

function slugFromHash(hash: string): string | null {
  const raw = hash.replace('#', '');
  return raw.startsWith('projects/') ? raw.slice('projects/'.length) : null;
}

function getExpandedSlug(): string | null {
  if (typeof window === 'undefined') return null;
  return slugFromHash(window.location.hash);
}

export function ProjectGrid() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [collapsingSlug, setCollapsingSlug] = useState<string | null>(null);
  const pendingSlugRef = useRef<string | null>(null);
  const prevExpandedRef = useRef<string | null>(null);

  const navigate = useCallback((hash: string) => {
    window.history.pushState(null, '', hash);
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  }, []);

  // Initialize expanded state from hash after hydration.
  useEffect(() => {
    const slug = getExpandedSlug();
    if (slug) {
      prevExpandedRef.current = slug;
      setExpandedSlug(slug);
    }
  }, []);

  // Sync state with hash changes. Both setters are called synchronously so
  // React 18's automatic batching merges them into one render. The detail
  // stays mounted throughout the collapse animation and afterLeave fires.
  useEffect(() => {
    const handleHashChange = () => {
      const nextSlug = getExpandedSlug();
      const prev = prevExpandedRef.current;
      prevExpandedRef.current = nextSlug;

      if (prev && prev !== nextSlug) {
        setCollapsingSlug(prev);
      }
      setExpandedSlug(nextSlug);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
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

  // After the enter animation completes:
  //   1. Scroll the detail into view.
  //   2. Attach an IntersectionObserver that collapses the panel once the user
  //      scrolls it fully out of the viewport.
  //
  // The observer is set up inside the same setTimeout as the scroll so it only
  // starts watching after the panel is at full height. A `hasSeen` flag guards
  // against the observer's synchronous initial callback firing with
  // isIntersecting=false before the smooth scroll has brought the element into
  // view. Without it, the panel would immediately re-collapse.
  useEffect(() => {
    if (!expandedSlug) return;
    const id = `project-detail-${expandedSlug}`;
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      let hasSeen = false;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            hasSeen = true;
          } else if (hasSeen) {
            observer?.disconnect();
            navigate('/#projects');
          }
        },
        { threshold: 0 },
      );
      observer.observe(el);
    }, ENTER_DURATION_MS + 10);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [expandedSlug, navigate]);

  const delays = ['', 'delay-100', 'delay-200'];

  return (
    <FadeIn id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        title="Featured Work"
        headingId="projects-heading"
        subtitle="A selection of projects that showcase my approach to building software."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
          <div
            key={project.slug}
            id={`project-detail-${project.slug}`}
            className="pt-6"
          >
            <ProjectDetail
              project={project}
              isExpanded={isExpanded}
              onClose={() => navigate('/#projects')}
              onAfterLeave={() => handleCollapseExited(project.slug)}
            />
          </div>
        );
      })}
    </FadeIn>
  );
}
