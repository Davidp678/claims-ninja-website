import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { AFTER_SUBMIT_SECTION } from "@/lib/start-here/content";

export function AfterSubmitSection() {
  return (
    <Section bordered compact className="bg-brand-elevated">
      <SectionHeading
        eyebrow={AFTER_SUBMIT_SECTION.eyebrow}
        title={AFTER_SUBMIT_SECTION.title}
        description={AFTER_SUBMIT_SECTION.description}
      />
      <div className={`${ABOUT_CARD_CLASS} mt-12 max-w-3xl p-6 sm:p-8`}>
        <ul className="space-y-4">
          {AFTER_SUBMIT_SECTION.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-light"
              />
              <span className="text-sm leading-relaxed text-zinc-300 sm:text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
