interface SectionHeadingProps {
  title: string;
  headingId?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  title,
  headingId,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-8 flex flex-col gap-1.5 sm:mb-12 ${align === 'center' ? 'items-center text-center' : ''}`}
    >
      <h2
        id={headingId}
        className="text-text text-2xl leading-snug font-semibold tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-text-muted text-base leading-relaxed ${align === 'center' ? 'max-w-[560px]' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
