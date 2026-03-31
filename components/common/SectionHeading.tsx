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
      className={`flex flex-col gap-1.5 mb-8 sm:mb-12 ${align === 'center' ? 'text-center items-center' : ''}`}
    >
      <h2
        id={headingId}
        className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-text"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base leading-relaxed text-text-muted ${align === 'center' ? 'max-w-[560px]' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
