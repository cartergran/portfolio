import type { ProjectMetric } from '@/types/project';

interface ProjectMetricsProps {
  metrics: readonly ProjectMetric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs uppercase tracking-[0.1em] text-text-muted mb-4 block">
        Key Metrics
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex-1 p-4 bg-black/5 rounded-lg border-l-[3px] border-secondary"
          >
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-secondary">{metric.value}</span>
              {metric.unit && (
                <span className="text-xs text-text-muted">{metric.unit}</span>
              )}
            </div>
            <p className="text-sm text-text-muted mt-1">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
