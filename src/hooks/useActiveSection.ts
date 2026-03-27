import { useCallback, useEffect, useState } from 'react';
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
  const firstId = sectionIds[0] ?? null;

  const resolveActive = useCallback(() => {
    if (window.scrollY < 100) {
      setActiveId(firstId);
      return;
    }

    const refLine = window.innerHeight * 0.35;
    let best: string | null = null;
    let bestTop = -Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= refLine && top > bestTop) {
        best = id;
        bestTop = top;
      }
    }

    if (best) {
      setActiveId(best);
    }
  }, [firstId, sectionIds]);

  useEffect(() => {
    resolveActive();
    window.addEventListener('scroll', resolveActive, { passive: true });
    return () => window.removeEventListener('scroll', resolveActive);
  }, [resolveActive]);

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
