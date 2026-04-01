import { useCallback } from 'react';

const SCROLL_OFFSET = 24;
const MOBILE_TOP_BAR_HEIGHT = 48;
const MD_BREAKPOINT = 900;

export function getScrollTopOffset(): number {
  const isMobile = window.innerWidth < MD_BREAKPOINT;
  return SCROLL_OFFSET + (isMobile ? MOBILE_TOP_BAR_HEIGHT : 0);
}

/**
 * Returns a function that scrolls to a section by ID with consistent spacing
 * from the top of the viewport. When `sectionIds` is provided, clicking the
 * first section scrolls to the very top of the page instead.
 */
export function useScrollToSection(sectionIds?: string[]) {
  const firstId = sectionIds?.[0] ?? null;

  return useCallback(
    (id: string) => {
      if (firstId && id === firstId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (!el) return;
        const top =
          el.getBoundingClientRect().top +
          window.scrollY -
          getScrollTopOffset();
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
      const currentHash = window.location.hash.replace('#', '');
      if (currentHash !== id && !currentHash.startsWith(`${id}/`)) {
        window.history.replaceState(null, '', `#${id}`);
      }
    },
    [firstId],
  );
}
