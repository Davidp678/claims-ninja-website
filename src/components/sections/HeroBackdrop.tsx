/** Nearly-black hero environment: centered red glow + faint perspective grid. */

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_62%_42%,rgba(220,38,38,0.22),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_55%_48%,rgba(185,28,28,0.12),transparent_65%)]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] opacity-[0.14]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148,163,184,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148,163,184,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,0.9), transparent 85%)",
          transform: "perspective(700px) rotateX(52deg)",
          transformOrigin: "center bottom",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />
    </div>
  );
}
