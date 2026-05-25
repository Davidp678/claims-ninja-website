/** Desktop orchestration paths linking platform modules in workflow order. */

const CONNECTOR_PATHS = [
  "M 25 16 L 75 16",
  "M 75 16 L 75 33 L 25 33 L 25 50",
  "M 25 50 L 75 50",
  "M 75 50 L 75 67 L 25 67 L 25 84",
  "M 25 84 L 75 84",
] as const;

export function PlatformOrchestrationOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {CONNECTOR_PATHS.map((d, i) => (
        <path
          key={d}
          d={d}
          fill="none"
          stroke="rgba(185, 28, 28, 0.18)"
          strokeWidth="0.35"
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
          className="animate-connector-flow"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}
    </svg>
  );
}
