import { Section } from "@/components/ui/Section";
import { FAQ_LIBRARY_PLACEHOLDER } from "@/lib/faq-page";

export function FaqLibraryPlaceholder() {
  return (
    <Section bordered className="py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-brand-surface via-brand-elevated to-brand-black p-8 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] sm:p-10 lg:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 rounded-full bg-brand-red/15 blur-3xl"
        />
        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-red/30 bg-brand-red/10">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-6 w-6 text-brand-red-light"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 016.5 17H20" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
              <path strokeLinecap="round" d="M8 7h8M8 11h8M8 15h5" />
            </svg>
          </div>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              {FAQ_LIBRARY_PLACEHOLDER.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {FAQ_LIBRARY_PLACEHOLDER.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-300">
              {FAQ_LIBRARY_PLACEHOLDER.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
