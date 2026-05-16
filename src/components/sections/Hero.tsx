import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVideoCard } from "./HeroVideoCard";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />

      <Container className="relative z-10 grid min-h-[100svh] grid-cols-1 items-center gap-12 pb-20 pt-32 sm:gap-14 sm:pb-24 sm:pt-36 lg:grid-cols-12 lg:items-end lg:gap-x-10 lg:gap-y-14 lg:pb-28 lg:pt-40 xl:gap-x-14">
        <div className="max-w-2xl lg:col-span-6 lg:row-start-1 lg:max-w-none lg:self-end lg:pb-4 xl:col-span-5 xl:pb-8">
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
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl lg:max-w-xl">
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

        <div className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:col-start-7 lg:mx-0 lg:max-w-none lg:justify-self-stretch lg:self-end xl:col-span-7 xl:col-start-6">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/2 h-[55%] w-[118%] max-w-none -translate-x-1/2 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(185,28,28,0.08),transparent_70%)] blur-2xl lg:w-[130%]"
          />
          <div className="relative mx-auto w-full lg:ml-auto lg:mr-0 lg:w-fit">
            <HeroVideoCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
