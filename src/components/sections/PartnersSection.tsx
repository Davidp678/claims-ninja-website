import Link from "next/link";
import Image from "next/image";

import { PARTNER_LOGOS } from "@/lib/partners";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function getTextOverlay(partner: (typeof PARTNER_LOGOS)[number]): string | null {
  return partner.textOverlay ?? null;
}

export function PartnersSection() {
  return (
    <Section id="partners" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow="Trusted network"
        title="Partners who stand behind every claim"
      />
      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {PARTNER_LOGOS.map((partner) => (
          <li
            key={partner.name}
            className="flex h-24 items-center justify-center rounded-xl border border-white/15 bg-brand-surface px-4 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-md shadow-black/20 transition-colors hover:border-brand-red/40"
          >
            <div className={`relative h-full w-full ${partner.wrapperClassName}`}>
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className={`object-contain transition-transform duration-300 ${partner.imageClassName}`}
                sizes="(min-width: 1024px) 12vw, (min-width: 640px) 26vw, 44vw"
              />
              {getTextOverlay(partner) ? (
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_0_4px_rgba(255,255,255,0.35)]">
                  {getTextOverlay(partner)}
                </span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href="/partner-network"
          className="inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-brand-red-light"
        >
          View our full partner network →
        </Link>
      </div>
    </Section>
  );
}
