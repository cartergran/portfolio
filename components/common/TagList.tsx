import { cn } from '@/lib/utils';

interface TagListProps {
  tags: readonly string[];
  size?: 'small' | 'medium';
}

export function TagList({ tags, size = 'small' }: TagListProps) {
  const sizeClass =
    size === 'small' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5';

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            sizeClass,
            'border-divider rounded-full border',
            'text-text-muted bg-surface font-medium',
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
