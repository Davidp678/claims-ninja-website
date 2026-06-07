import type { StaticImageData } from "next/image";

import daylitLogo from "@/lib/partners/Daylit-logo.svg";
import coreLogo from "@/lib/partners/CORE-Logo (1).png";
import restoration911Logo from "@/lib/partners/logo.png";
import morganMorganLogo from "@/lib/partners/Morgan_&_Morgan_Logo.svg.png";
import profileGorillaLogo from "@/lib/partners/c39f92_9e6dd880136b4732abb402407d47f086~mv2.png";

export type PartnerLogoConfig = {
  id: string;
  name: string;
  src: StaticImageData;
  imageClassName: string;
  wrapperClassName: string;
  textOverlay?: string;
};

export const PARTNER_LOGOS: readonly PartnerLogoConfig[] = [
  {
    id: "morgan-morgan",
    name: "Morgan & Morgan",
    src: morganMorganLogo,
    imageClassName: "brightness-110",
    wrapperClassName: "py-3",
  },
  {
    id: "core-group",
    name: "CORE Group",
    src: coreLogo,
    imageClassName: "brightness-110",
    wrapperClassName: "py-3",
    textOverlay: "CORE",
  },
  {
    id: "911-restoration",
    name: "911 Restoration",
    src: restoration911Logo,
    imageClassName: "brightness-110",
    wrapperClassName: "py-3",
  },
  {
    id: "profile-gorilla",
    name: "Profile Gorilla",
    src: profileGorillaLogo,
    imageClassName: "brightness-110",
    wrapperClassName: "py-3",
  },
  {
    id: "daylit",
    name: "Daylit Finance",
    src: daylitLogo,
    imageClassName: "brightness-105 scale-[1.18]",
    wrapperClassName: "py-1",
  },
] as const;

export function getPartnerLogo(id: string): PartnerLogoConfig | undefined {
  return PARTNER_LOGOS.find((partner) => partner.id === id);
}
