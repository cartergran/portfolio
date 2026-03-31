'use client';

import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
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
      className="hidden md:flex flex-col fixed top-0 left-0 w-1/3 h-screen bg-surface border-r border-divider z-50"
    >
      {/* Condensed hero */}
      <div className="px-6 pt-6 pb-4 flex-none">
        <div className="flex flex-col gap-1 mb-4">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={144}
            height={144}
            className="object-contain"
          />
          <h1 className="text-xl font-bold text-text">Carter Gran</h1>
          <p className="text-base text-secondary">Full-Stack Developer</p>
          <p className="text-sm text-text-muted leading-snug">
            Turning &ldquo;this could be cool&rdquo; into software worth using.
          </p>
        </div>
        <div className="flex gap-1">
          <a
            href="https://github.com/cartergran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-text-muted hover:text-text transition-colors duration-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/cartergran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-text-muted hover:text-text transition-colors duration-200"
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
                className={`w-full text-left px-4 py-2.5 border-l-[3px] text-sm transition-colors duration-200 hover:text-text hover:bg-black/5 ${
                  isActive
                    ? 'border-secondary text-text font-semibold'
                    : 'border-transparent text-text-muted font-normal'
                }`}
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
