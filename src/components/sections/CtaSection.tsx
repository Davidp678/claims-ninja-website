import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function CtaSection() {
  return (
    <Section id="contact" bordered className="pb-24 sm:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-brand-red/45 bg-gradient-to-br from-brand-red/25 via-brand-surface to-brand-black p-8 shadow-[0_0_60px_-15px_rgba(220,38,38,0.4)] sm:p-12 lg:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/35 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Ready when you are
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start with a free claim review
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-300">
            Tell us about your loss. We&apos;ll assess your situation and outline
            next steps—no pressure, no jargon.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="#" size="lg">
              Begin claim intake
            </Button>
            <Button href={`tel:${SITE.phone}`} variant="secondary" size="lg">
              Call {SITE.phone}
            </Button>
          </div>
          <p className="mt-6 text-sm text-zinc-400">
            Intake forms, file uploads, and customer workflows will plug in here.
          </p>
        </div>
      </div>
    </Section>
  );
}
