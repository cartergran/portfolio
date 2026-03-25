import { useEffect, useRef, useState } from 'react';

export function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const entriesRef = useRef(new Map<string, IntersectionObserverEntry>());

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

        const intersecting = Array.from(entriesRef.current.values())
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        } else if (window.scrollY < 100) {
          setActiveId(null);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    if (activeId === null) return;

    const timeout = setTimeout(() => {
      const target = activeId
        ? `#${activeId}`
        : window.location.pathname;
      window.history.replaceState(null, '', target);
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeId]);

  return activeId;
}
