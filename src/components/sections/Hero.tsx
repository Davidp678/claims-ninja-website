import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroVideoCard } from "./HeroVideoCard";

type StatIconName = "bars" | "shield" | "star";

const stats: { label: string; value: string; icon: StatIconName }[] = [
  { label: "Avg. claim uplift", value: "23%+", icon: "bars" },
  { label: "Claims handled", value: "2,400+", icon: "shield" },
  { label: "Client satisfaction", value: "4.9★", icon: "star" },
];

function StatIcon({ name, className }: { name: StatIconName; className?: string }) {
  switch (name) {
    case "bars":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M3 20h18" />
        </svg>
      );
    case "shield":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3 4 6v6c0 4.5 3.2 8.6 8 9 4.8-.4 8-4.5 8-9V6l-8-3Z" />
        </svg>
      );
    case "star":
      return (
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
        >
          <path d="m12 2.5 2.95 6.4 7.05.74-5.27 4.78L18.3 21.5 12 17.9l-6.3 3.6 1.57-7.08L2 9.64l7.05-.74L12 2.5Z" />
        </svg>
      );
  }
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-brand-black"
    >
      <HeroBackdrop />

      <Container className="relative z-10 grid min-h-[100svh] grid-cols-1 items-center gap-10 pb-14 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-[minmax(0,0.9fr)_minmax(620px,1.15fr)] lg:gap-12 lg:pb-20 lg:pt-28">
        <div className="max-w-2xl lg:max-w-none">
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
          <dl className="mt-14 grid grid-cols-2 gap-y-6 border-t border-white/15 pt-10 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-2 ${
                  index === 0 ? "sm:pr-6" : "sm:px-6"
                } first:sm:pl-0 last:sm:pr-0`}
              >
                <div className="flex items-center gap-2">
                  <StatIcon
                    name={stat.icon}
                    className="h-4 w-4 text-brand-red-light"
                  />
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                    {stat.label}
                  </dt>
                </div>
                <dd className="font-display text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="w-full">
          <HeroVideoCard />
        </div>
      </Container>
    </section>
  );
}
