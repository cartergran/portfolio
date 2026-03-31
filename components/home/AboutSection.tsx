import { FadeIn } from '@/components/common/FadeIn';
import { ABOUT_CONTENT } from '@/data/about';

export function AboutSection() {
  return (
    <FadeIn id="about" aria-labelledby="about-heading">
      <div className="flex flex-col gap-6">
        <h2 id="about-heading" className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
          {ABOUT_CONTENT.heading}
        </h2>
        <div className="flex flex-col gap-4">
          {ABOUT_CONTENT.paragraphs.map((text, i) => (
            <p key={i} className="text-base leading-relaxed text-text-muted">
              {text}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
