import type { TechDetail } from '@/types/tech';

interface TechStackProps {
  techStack: readonly TechDetail[];
}

export function TechStack({ techStack }: TechStackProps) {
  if (techStack.length === 0) return null;

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-3 block">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            title={tech.role}
            className="text-sm px-3 py-1.5 rounded-full border border-divider text-text-muted font-medium transition-colors duration-200 hover:border-secondary hover:text-secondary cursor-default"
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
