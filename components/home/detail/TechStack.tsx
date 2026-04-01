import { cn } from '@/lib/utils';
import type { TechDetail } from '@/types/tech';

interface TechStackProps {
  techStack: readonly TechDetail[];
}

export function TechStack({ techStack }: TechStackProps) {
  if (techStack.length === 0) return null;

  return (
    <div>
      <p className="text-text-muted mb-3 block text-xs tracking-[0.1em] uppercase">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className={cn(
              'group relative inline-block',
              'border-divider text-text-muted',
              'hover:border-secondary hover:text-secondary',
              'cursor-pointer rounded-full border px-3 py-1.5 text-sm font-medium',
              'transition-colors duration-200',
            )}
          >
            {tech.name}
            <span
              className={cn(
                'pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2',
                'w-[180px] rounded bg-zinc-500 px-2 py-1 text-center text-xs text-white',
                'opacity-0 transition-opacity duration-0 group-hover:opacity-100',
                'after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:content-[""]',
                'after:border-4 after:border-transparent after:border-t-zinc-500',
              )}
            >
              {tech.role}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
