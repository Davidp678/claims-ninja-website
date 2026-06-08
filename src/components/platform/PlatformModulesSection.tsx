import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Locale } from "@/lib/i18n/config";
import { getPlatformContent } from "@/lib/i18n/content/platform";

export function PlatformModulesSection({
  locale = "en",
}: {
  locale?: Locale;
}) {
  const content = getPlatformContent(locale).modulesSection;

  return (
    <Section bordered className="bg-brand-elevated py-16 sm:py-20">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        align="left"
        className="max-w-3xl"
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.modules.map((module) => (
          <li key={module.href}>
            <Link
              href={module.href}
              className="group flex h-full flex-col rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45"
            >
              <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-red-light">
                {module.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
                {module.description}
              </p>
              <span className="mt-4 text-sm font-medium text-brand-red-light">
                {content.exploreLabel}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
