import { FadeIn } from '@/components/common/FadeIn';

const SKILLS = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'Java',
  'Spring Boot',
  'SQL',
  'REST APIs',
  'AWS',
  'Google Cloud Storage',
  'Agentic Workflows',
  'Git',
] as const;

export function SkillsStrip() {
  return (
    <FadeIn threshold={0.1}>
      <p className="text-text-muted mb-3 block text-xs tracking-[0.1em] uppercase">
        Core Technologies
      </p>
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="text-text rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </FadeIn>
  );
}
