import { useCallback, useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(
    () => sectionIds[0] ?? null,
  );
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
      window.history.replaceState(null, '', `#${activeId}`);
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeId]);

  return activeId;
}
