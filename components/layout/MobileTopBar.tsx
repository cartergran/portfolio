'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { cn } from '@/lib/utils';

const NAV_SECTIONS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
] as const;

const NAV_SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

const SHORT_LABELS: Record<string, string> = {
  about: 'About',
  experience: 'Exp.',
  projects: 'Projects',
};

export function MobileTopBar() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);
  const scrollToSection = useScrollToSection(NAV_SECTION_IDS);

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        'sticky top-0 z-50 md:hidden',
        'flex h-12 items-center justify-between px-4',
        'bg-bg/80 border-divider border-b backdrop-blur-md',
      )}
    >
      <span className="text-text text-base font-bold">Carter</span>

      <div className="flex gap-1">
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'px-2 py-1 text-[0.8125rem]',
                'hover:text-text transition-colors duration-200',
                isActive
                  ? 'text-secondary font-semibold'
                  : 'text-text-muted font-normal',
              )}
            >
              {SHORT_LABELS[section.id] ?? section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
