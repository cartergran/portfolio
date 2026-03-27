import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useActiveSection(sectionIds: string[]): string | null {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState<string | null>(() => {
    const hash = window.location.hash.replace('#', '');
    const sectionFromHash = hash.split('/')[0];
    return sectionIds.includes(sectionFromHash)
      ? sectionFromHash
      : (sectionIds[0] ?? null);
  });
  const entriesRef = useRef(new Map<string, IntersectionObserverEntry>());
  const firstId = sectionIds[0] ?? null;

  const resolveActive = useCallback(() => {
    if (window.scrollY < 100) {
      setActiveId(firstId);
      return;
    }

    const intersecting = Array.from(entriesRef.current.values())
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (intersecting.length > 0) {
      setActiveId(intersecting[0].target.id);
    }
  }, [firstId]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entriesRef.current.set(entry.target.id, entry);
        }
        resolveActive();
      },
      {
        root: null,
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => resolveActive();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, resolveActive]);

  useEffect(() => {
    if (activeId === null) return;

    const timeout = setTimeout(() => {
      const currentHash = window.location.hash.replace('#', '');
      // Preserve a sub-path hash (e.g. projects/slug) only while the user is
      // still in that same parent section. If they've scrolled to a different
      // section, update the URL normally so the hash stays in sync.
      if (currentHash.includes('/')) {
        const parentSection = currentHash.split('/')[0];
        if (activeId === parentSection) return;
      }
      navigate(`/#${activeId}`, { replace: true });
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeId]);

  return activeId;
}
