import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PLACEHOLDER_PARTNERS = [
  "Insurance carriers",
  "Restoration vendors",
  "Legal partners",
  "Enterprise clients",
  "Property managers",
  "Contractors",
] as const;

export function PartnersSection() {
  return (
    <Section id="partners" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow="Trusted network"
        title="Partners who stand behind every claim"
        description="Vendor and carrier relationships that reinforce credibility—not generic logo walls."
      />
      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {PLACEHOLDER_PARTNERS.map((name) => (
          <li
            key={name}
            className="flex h-24 items-center justify-center rounded-xl border border-white/15 bg-brand-surface px-4 text-center text-xs font-semibold uppercase tracking-wider text-zinc-400 shadow-[0_0_48px_-28px_rgba(185,28,28,0.12)] shadow-md shadow-black/20 transition-colors hover:border-brand-red/40 hover:text-zinc-200"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
