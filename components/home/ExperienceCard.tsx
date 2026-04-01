import { TechStack } from '@/components/home/detail/TechStack';
import type { Experience } from '@/types/experience';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <a
      href={experience.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'border-divider block rounded-xl border',
        'transition-all duration-200',
        'hover:-translate-y-1 hover:shadow-lg',
      )}
    >
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-text text-base font-semibold">
              {experience.role}
            </h3>
            <p className="text-text-muted text-sm">{experience.company}</p>
          </div>
          <span className="text-text-muted pt-0.5 text-xs whitespace-nowrap">
            {experience.dateRange}
          </span>
        </div>
        <p className="text-text-muted text-sm leading-relaxed">
          {experience.description}
        </p>
        <TechStack techStack={experience.techStack} />
      </div>
    </a>
  );
}
