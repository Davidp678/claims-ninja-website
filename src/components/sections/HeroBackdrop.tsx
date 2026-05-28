/** Layered environment: depth, soft red wash, restrained texture — no video. */

export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_92%_8%,rgba(220,38,38,0.15),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_70%_92%,rgba(220,38,38,0.09),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_0%_35%,rgba(0,0,0,0.55),transparent_62%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/40 to-brand-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent sm:from-black/40" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
