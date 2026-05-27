type MetricsTelemetryRailProps = {
  anchorPositions: readonly number[];
};

export function MetricsTelemetryRail({ anchorPositions }: MetricsTelemetryRailProps) {
  return (
    <div
      className="pointer-events-none absolute bottom-2 left-0 top-2 hidden lg:block"
      aria-hidden
    >
      <div className="absolute bottom-0 left-1/2 top-0 w-3 -translate-x-1/2 bg-brand-red/5 blur-md" />
      <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 animate-telemetry-pulse bg-gradient-to-b from-transparent via-brand-red/30 to-transparent shadow-[0_0_12px_-4px_rgba(185,28,28,0.3)]" />
      {anchorPositions.map((yPct, index) => (
        <span
          key={yPct}
          className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red-light/70 shadow-[0_0_8px_rgba(239,68,68,0.45)] animate-telemetry-node-pulse"
          style={{
            top: `${yPct}%`,
            animationDelay: `${index * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}
