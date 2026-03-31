import { TechStack } from '@/components/home/detail/TechStack';
import type { Experience } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <a
      href={experience.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl border border-divider transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-base font-semibold text-text">{experience.role}</h3>
            <p className="text-sm text-text-muted">{experience.company}</p>
          </div>
          <span className="text-xs text-text-muted whitespace-nowrap pt-0.5">
            {experience.dateRange}
          </span>
        </div>
        <p className="text-sm text-text-muted leading-relaxed">{experience.description}</p>
        <TechStack techStack={experience.techStack} />
      </div>
    </a>
  );
}
