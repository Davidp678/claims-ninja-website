import Image from "next/image";

import daylitLogo from "@/lib/partners/Daylit-logo.png";
import coreLogo from "@/lib/partners/CORE-Logo (1).png";
import restoration911Logo from "@/lib/partners/logo.png";
import morganMorganLogo from "@/lib/partners/Morgan_&_Morgan_Logo.svg.png";
import profileGorillaLogo from "@/lib/partners/c39f92_9e6dd880136b4732abb402407d47f086~mv2.png";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PARTNER_LOGOS = [
  { name: "Morgan & Morgan", src: morganMorganLogo, imageClassName: "brightness-110" },
  { name: "CORE Group", src: coreLogo, imageClassName: "brightness-110" },
  { name: "911 Restoration", src: restoration911Logo, imageClassName: "brightness-110" },
  { name: "Profile Gorilla", src: profileGorillaLogo, imageClassName: "brightness-110" },
  { name: "Daylit Finance", src: daylitLogo, imageClassName: "brightness-105" },
] as const;

export function PartnersSection() {
  return (
    <Section id="partners" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow="Trusted network"
        title="Partners who stand behind every claim"
        description="Vendor and carrier relationships that reinforce credibility—not generic logo walls."
      />
      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {PARTNER_LOGOS.map((partner) => (
          <li
            key={partner.name}
            className="flex h-24 items-center justify-center rounded-xl border border-white/15 bg-brand-surface px-4 shadow-[0_0_48px_-28px_rgba(185,28,28,0.12)] shadow-md shadow-black/20 transition-colors hover:border-brand-red/40"
          >
            <div className="relative h-full w-full py-3">
              <Image
                src={partner.src}
                alt={partner.name}
                fill
                className={`object-contain ${partner.imageClassName}`}
                sizes="(min-width: 1024px) 12vw, (min-width: 640px) 26vw, 44vw"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
