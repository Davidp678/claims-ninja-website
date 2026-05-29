import {
  PLATFORM_MANIFESTO_TERMS,
  PLATFORM_PILLARS_FOOTER,
} from "@/lib/platform-overview";

function ManifestoOperator() {
  return (
    <span
      className="font-display text-2xl font-light text-brand-red-light/90 sm:text-3xl lg:text-4xl"
      aria-hidden
    >
      +
    </span>
  );
}

function ManifestoTerm({ children }: { children: string }) {
  return (
    <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
      {children}
    </span>
  );
}

export function PlatformEcosystemPanel() {
  const [first, second, third] = PLATFORM_MANIFESTO_TERMS;

  return (
    <div className="relative mt-14 py-8 lg:mt-16 lg:py-12">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/10 blur-3xl"
        aria-hidden
      />

      <div className="relative">
        <ul
          className="hidden list-none flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:flex xl:gap-x-10"
          aria-label="Claims Ninja combines human expertise, platform technology, and AI intelligence"
        >
          <li>
            <ManifestoTerm>{first}</ManifestoTerm>
          </li>
          <li aria-hidden>
            <ManifestoOperator />
          </li>
          <li>
            <ManifestoTerm>{second}</ManifestoTerm>
          </li>
          <li aria-hidden>
            <ManifestoOperator />
          </li>
          <li>
            <ManifestoTerm>{third}</ManifestoTerm>
          </li>
        </ul>

        <ul
          className="flex list-none flex-col items-center gap-3 lg:hidden"
          aria-label="Claims Ninja combines human expertise, platform technology, and AI intelligence"
        >
          <li>
            <ManifestoTerm>{first}</ManifestoTerm>
          </li>
          <li aria-hidden>
            <ManifestoOperator />
          </li>
          <li>
            <ManifestoTerm>{second}</ManifestoTerm>
          </li>
          <li aria-hidden>
            <ManifestoOperator />
          </li>
          <li>
            <ManifestoTerm>{third}</ManifestoTerm>
          </li>
        </ul>

        <div
          className="mx-auto mt-10 h-px max-w-xl bg-gradient-to-r from-transparent via-white/15 to-transparent lg:mt-12"
          aria-hidden
        />

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 sm:text-base lg:mt-10">
          {PLATFORM_PILLARS_FOOTER}
        </p>
      </div>
    </div>
  );
}
