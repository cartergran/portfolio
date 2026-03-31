interface TagListProps {
  tags: readonly string[];
  size?: 'small' | 'medium';
}

export function TagList({ tags, size = 'small' }: TagListProps) {
  const sizeClass = size === 'small' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5';

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${sizeClass} rounded-full border border-divider text-text-muted font-medium bg-surface`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
