/** Ambient drift + faint grid for operations section — pointer-events none. */

export function OperationsAmbientLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="animate-grid-shift absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="animate-ambient-drift absolute -left-1/4 top-0 h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />
      <div className="animate-ambient-drift-reverse absolute -right-1/4 bottom-0 h-56 w-56 rounded-full bg-brand-red/8 blur-3xl" />
    </div>
  );
}
