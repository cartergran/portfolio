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
      <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-3 block">
        Core Technologies
      </p>
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-text font-medium whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </FadeIn>
  );
}
