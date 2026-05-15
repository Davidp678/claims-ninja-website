import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(185,28,28,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-brand-black/70 to-brand-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full w-full bg-gradient-to-br from-zinc-900 via-brand-black to-black">
            <div className="flex h-full min-h-[100svh] items-center justify-center border border-dashed border-white/10">
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-600">
                Hero video
              </p>
            </div>
          </div>
        </div>
      </div>

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28">
        <div className="max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
            Licensed public adjusters
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Maximize your claim.
            <span className="block text-brand-red-light">Minimize the stress.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            We negotiate with insurers on your behalf—so you recover more, faster,
            with a team that treats your claim like enterprise-level litigation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#contact" size="lg">
              Get your free claim review
            </Button>
            <Button href="#calculator" variant="secondary" size="lg">
              Estimate your recovery
            </Button>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3 sm:gap-8">
            {[
              { label: "Avg. claim uplift", value: "23%+" },
              { label: "Claims handled", value: "2,400+" },
              { label: "Client satisfaction", value: "4.9★" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black to-transparent"
      />
    </section>
  );
}
