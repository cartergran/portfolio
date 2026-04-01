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
            title={tech.role}
            className={cn(
              'border-divider text-text-muted',
              'hover:border-secondary hover:text-secondary',
              'cursor-default rounded-full border px-3 py-1.5 text-sm font-medium',
              'transition-colors duration-200',
            )}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
