/** Static gradients only — no video. Decorative layer for hero readability. */

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_100%_0%,rgba(185,28,28,0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_0%_100%,rgba(0,0,0,0.5),transparent_60%)]" />
    </div>
  );
}
