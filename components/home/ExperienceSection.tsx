import { FadeIn } from '@/components/common/FadeIn';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ExperienceCard } from '@/components/home/ExperienceCard';
import { EXPERIENCES } from '@/data/experiences';

export function ExperienceSection() {
  return (
    <FadeIn id="experience" aria-labelledby="experience-heading">
      <SectionHeading title="Experience" headingId="experience-heading" />
      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.company} experience={exp} />
        ))}
      </div>
    </FadeIn>
  );
}
