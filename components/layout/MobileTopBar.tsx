'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollToSection } from '@/hooks/useScrollToSection';

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
      className="md:hidden sticky top-0 h-12 flex items-center justify-between px-4 bg-bg/80 backdrop-blur-md border-b border-divider z-50"
    >
      <span className="font-bold text-base text-text">Carter</span>

      <div className="flex gap-1">
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`px-2 py-1 text-[0.8125rem] transition-colors duration-200 hover:text-text ${
                isActive ? 'text-secondary font-semibold' : 'text-text-muted font-normal'
              }`}
            >
              {SHORT_LABELS[section.id] ?? section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
