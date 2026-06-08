import type { Locale } from "@/lib/i18n/config";
import { getHomeContent } from "@/lib/i18n/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection({ locale = "en" }: { locale?: Locale }) {
  const content = getHomeContent(locale).process;

  return (
    <Section id="process" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />
      <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {content.steps.map((item) => (
          <li
            key={item.step}
            className="group relative rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
          >
            <span className="font-display text-4xl font-semibold text-brand-red/75 transition-colors group-hover:text-brand-red-light">
              {item.step}
            </span>
            <h3 className="mt-4 font-display text-xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
