export function MetricsTelemetryRail() {
  return (
    <div className="pointer-events-none absolute bottom-2 left-0 top-2 hidden lg:block" aria-hidden>
      <div className="absolute bottom-0 left-1/2 top-0 w-3 -translate-x-1/2 bg-brand-red/5 blur-md" />
      <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 animate-telemetry-pulse bg-gradient-to-b from-transparent via-brand-red/30 to-transparent shadow-[0_0_12px_-4px_rgba(185,28,28,0.3)]" />
    </div>
  );
}
