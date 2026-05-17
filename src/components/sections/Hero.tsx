import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVideoCard } from "./HeroVideoCard";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />

      {/* Full-bleed grid — no max-width cap */}
      <div className="relative z-10 grid min-h-[100svh] grid-cols-1 lg:grid-cols-2">

        {/* LEFT — copy block, right-aligned within column */}
        <div className="flex flex-col justify-center px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:py-28 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-10 xl:pr-14">
          <div className="w-full max-w-xl lg:ml-auto xl:max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-red/45 bg-brand-red/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red-light" />
              Licensed public adjusters
            </p>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Maximize your claim.
              <span className="block text-brand-red-light">Minimize the stress.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
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
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-3 sm:gap-8">
              {[
                { label: "Avg. claim uplift", value: "23%+" },
                { label: "Claims handled", value: "2,400+" },
                { label: "Client satisfaction", value: "4.9★" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* RIGHT — full-height video panel */}
        <div className="relative min-h-[56vw] lg:min-h-0">
          <HeroVideoCard />
        </div>

      </div>
    </section>
  );
}
