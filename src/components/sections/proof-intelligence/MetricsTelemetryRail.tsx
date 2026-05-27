/** Full-height vertical rail behind metric rows (desktop only). */
export function MetricsTelemetryRailBackdrop() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-[0.4375rem] top-0 hidden w-px lg:block"
      aria-hidden
    >
      <div className="absolute inset-0 w-3 -translate-x-1/2 bg-brand-red/5 blur-md" />
      <div className="absolute inset-0 w-px animate-telemetry-pulse bg-gradient-to-b from-transparent via-brand-red/30 to-transparent shadow-[0_0_12px_-4px_rgba(185,28,28,0.3)]" />
    </div>
  );
}

type TelemetryRowConnectorProps = {
  index: number;
};

/** Pulse node + horizontal tick aligned to each metric card row. */
export function TelemetryRowConnector({ index }: TelemetryRowConnectorProps) {
  return (
    <div className="relative hidden w-7 shrink-0 items-center lg:flex" aria-hidden>
      <span
        className="relative z-10 h-2 w-2 shrink-0 rounded-full border border-brand-red-light/40 bg-brand-red-light/80 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-telemetry-node-pulse"
        style={{ animationDelay: `${index * 0.4}s` }}
      >
        <span className="absolute left-1/2 top-1/2 h-0.5 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-brand-red/50 to-brand-red/10" />
    </div>
  );
}
