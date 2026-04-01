import type { ProjectMetric } from '@/types/project';

interface ProjectMetricsProps {
  metrics: readonly ProjectMetric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  if (metrics.length === 0) return null;

  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-text-muted mb-4 block text-xs tracking-[0.1em] uppercase">
        Key Metrics
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="border-secondary flex-1 rounded-lg border-l-[3px] bg-black/5 p-4"
          >
            <div className="flex items-baseline gap-1">
              <span className="text-secondary text-2xl font-bold">
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-text-muted text-xs">{metric.unit}</span>
              )}
            </div>
            <p className="text-text-muted mt-1 text-sm">{metric.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
