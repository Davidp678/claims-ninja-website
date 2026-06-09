import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { cn } from "@/lib/cn";
import { LAUNCH_ROADMAP } from "@/lib/start-here/content";

export function LaunchRoadmap() {
  return (
    <Section id="launch-roadmap" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow={LAUNCH_ROADMAP.eyebrow}
        title={LAUNCH_ROADMAP.title}
        description={LAUNCH_ROADMAP.description}
      />

      {/* Desktop horizontal timeline */}
      <ol className="mt-16 hidden lg:grid lg:grid-cols-5 lg:gap-4">
        {LAUNCH_ROADMAP.steps.map((item, index) => (
          <li key={item.step} className="group relative flex flex-col">
            {index < LAUNCH_ROADMAP.steps.length - 1 ? (
              <div
                aria-hidden
                className="absolute left-[calc(50%+1.5rem)] top-6 h-px w-[calc(100%-3rem)] bg-gradient-to-r from-brand-red/50 via-brand-red/25 to-brand-red/50"
              />
            ) : null}
            <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/40 bg-brand-surface font-display text-lg font-semibold text-brand-red-light shadow-[0_0_24px_-8px_rgba(220,38,38,0.5)] transition-colors group-hover:border-brand-red/60 group-hover:text-white">
              {item.step}
            </div>
            <div
              className={cn(
                ABOUT_CARD_CLASS,
                "flex flex-1 flex-col p-5 transition-colors group-hover:border-brand-red/45",
              )}
            >
              <h3 className="font-display text-base font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Mobile vertical stack */}
      <ol className="mt-12 flex flex-col gap-5 lg:hidden">
        {LAUNCH_ROADMAP.steps.map((item) => (
          <li
            key={item.step}
            className={cn(
              ABOUT_CARD_CLASS,
              "group relative overflow-hidden pl-7 pr-6 py-6",
            )}
          >
            <span
              className="absolute left-0 top-6 h-10 w-0.5 rounded-full bg-brand-red/70"
              aria-hidden
            />
            <span className="font-display text-2xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
              {item.step}
            </span>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
