import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CARD_CLASS } from "@/lib/about-page";
import { cn } from "@/lib/cn";
import { PREPARATION_SECTION } from "@/lib/start-here/content";

export function PreparationSection() {
  return (
    <Section bordered compact>
      <SectionHeading
        eyebrow={PREPARATION_SECTION.eyebrow}
        title={PREPARATION_SECTION.title}
        description={PREPARATION_SECTION.description}
      />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PREPARATION_SECTION.items.map((item) => (
          <li
            key={item}
            className={cn(
              ABOUT_CARD_CLASS,
              "group flex items-start gap-3 p-5 transition-colors hover:border-brand-red/45",
            )}
          >
            <span
              aria-hidden
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red-light"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className="text-sm font-medium leading-relaxed text-zinc-200">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
