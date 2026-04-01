'use client';

import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollToSection } from '@/hooks/useScrollToSection';

const NAV_SECTIONS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
] as const;

const NAV_SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export function SideNav() {
  const activeSection = useActiveSection(NAV_SECTION_IDS);
  const scrollToSection = useScrollToSection(NAV_SECTION_IDS);

  return (
    <nav
      aria-label="Section navigation"
      className={cn(
        'bg-surface border-divider',
        'fixed top-0 left-0 z-50 hidden',
        'h-screen w-1/3 flex-col border-r md:flex',
      )}
    >
      {/* Condensed hero */}
      <div className="flex-none px-6 pt-6 pb-4">
        <div className="mb-4 flex flex-col gap-1">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={144}
            height={144}
            className="object-contain"
          />
          <h1 className="text-text text-xl font-bold">Carter Gran</h1>
          <p className="text-secondary text-base">Full-Stack Developer</p>
          <p className="text-text-muted text-sm leading-snug">
            Turning &ldquo;this could be cool&rdquo; into software worth using.
          </p>
        </div>
        <div className="flex gap-1">
          <a
            href="https://github.com/cartergran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted hover:text-text p-1.5 transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/cartergran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted hover:text-text p-1.5 transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <hr className="border-divider" />

      {/* Top spacer */}
      <div className="flex-1" />

      {/* Nav links */}
      <ul className="flex-none px-2">
        {NAV_SECTIONS.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => scrollToSection(section.id)}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'hover:text-text w-full cursor-pointer border-l-[3px] px-4 py-2.5',
                  'text-left text-sm transition-colors duration-200 hover:bg-black/5',
                  isActive
                    ? 'border-secondary text-text font-semibold'
                    : 'text-text-muted border-transparent font-normal',
                )}
              >
                {section.label}
              </button>
            </li>
          );
        })}
      </ul>

      {/* Bottom spacer */}
      <div className="flex-1" />
    </nav>
  );
}
