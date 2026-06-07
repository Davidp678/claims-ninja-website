/**
 * Partner Network page knowledge chunks for chatbot retrieval.
 * Sourced from partner-network-page.ts and marketing page metadata.
 */

import {
  PARTNER_NETWORK_BECOME,
  PARTNER_NETWORK_BENEFITS,
  PARTNER_NETWORK_ECOSYSTEM,
  PARTNER_NETWORK_HERO,
  PARTNER_NETWORK_META,
  PARTNER_NETWORK_PARTNERS,
  PARTNER_NETWORK_POLICY,
} from "@/lib/partner-network-page";
import { partnerNetworkPage } from "@/lib/marketing-pages";

type PartnerNetworkChunk = {
  id: string;
  source: string;
  topics: readonly string[];
  phrases?: readonly string[];
  keywords?: readonly string[];
  text: string;
};

export function partnerNetworkToChunks(): PartnerNetworkChunk[] {
  const benefitsText = PARTNER_NETWORK_BENEFITS.items
    .map((item) => `• ${item.title}: ${item.description}`)
    .join("\n");

  const partnerSummaries = PARTNER_NETWORK_PARTNERS.map(
    (partner) =>
      `${partner.name} (${partner.category}): ${partner.description}`,
  ).join("\n\n");

  const profileGorilla = PARTNER_NETWORK_PARTNERS.find(
    (p) => p.id === "profile-gorilla",
  )!;
  const coreGroup = PARTNER_NETWORK_PARTNERS.find((p) => p.id === "core-group")!;
  const restoration911 = PARTNER_NETWORK_PARTNERS.find(
    (p) => p.id === "911-restoration",
  )!;
  const daylit = PARTNER_NETWORK_PARTNERS.find((p) => p.id === "daylit")!;
  const morganMorgan = PARTNER_NETWORK_PARTNERS.find(
    (p) => p.id === "morgan-morgan",
  )!;

  return [
    {
      id: "partner-network:page",
      source: "partner network — page overview",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "partner network",
        "strategic partners",
        "who are claims ninja partners",
        "claims ninja partner network",
        "contractor partner network",
      ],
      keywords: [
        "partner network",
        "strategic partners",
        "contractor financing",
        "legal partner",
        "franchise claims support",
        "/partner-network",
      ],
      text: [
        PARTNER_NETWORK_HERO.title,
        ...PARTNER_NETWORK_HERO.paragraphs,
        PARTNER_NETWORK_ECOSYSTEM.title,
        ...PARTNER_NETWORK_ECOSYSTEM.paragraphs,
        `Support areas: ${PARTNER_NETWORK_ECOSYSTEM.supportAreas.join("; ")}`,
        PARTNER_NETWORK_POLICY.optionalUse,
        partnerNetworkPage.metaDescription,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:policies",
      source: "partner network — policies and eligibility",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "are partner services required",
        "do i have to use partners",
        "partner services mandatory",
        "how are partners selected",
        "request an introduction",
        "who can use network partners",
        "do network partners work with all contractors",
      ],
      keywords: [
        "optional",
        "not required",
        "qualification",
        "introduction",
        "contractor partners",
        "eligibility",
        "/partner-network",
      ],
      text: [
        PARTNER_NETWORK_POLICY.optionalUse,
        PARTNER_NETWORK_POLICY.selectionCriteria,
        PARTNER_NETWORK_POLICY.introductions,
        PARTNER_NETWORK_POLICY.eligibility,
        PARTNER_NETWORK_POLICY.goodPartnerTypes,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n\n"),
    },
    {
      id: "partner-network:become-partner",
      source: "partner network — become a strategic partner",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "become a claims ninja partner",
        "can i become a partner",
        "strategic partner application",
        "discuss partnership opportunities",
        "become a strategic partner",
      ],
      keywords: [
        "strategic partner",
        "partnership opportunities",
        "/contact",
        "/partner-network",
      ],
      text: [
        PARTNER_NETWORK_BECOME.title,
        ...PARTNER_NETWORK_BECOME.paragraphs,
        `${PARTNER_NETWORK_BECOME.ctaLabel}: ${PARTNER_NETWORK_BECOME.ctaHref}`,
        PARTNER_NETWORK_POLICY.goodPartnerTypes,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:profile-gorilla",
      source: "partner network — ProfileGorilla",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "what is profilegorilla",
        "profile gorilla",
        "profilegorilla partner",
        "reputation management partner",
        "is profilegorilla part of the partner network",
      ],
      keywords: [
        "ProfileGorilla",
        "reputation",
        "review management",
        "contractor reviews",
        "/partner-network",
      ],
      text: [
        "ProfileGorilla is part of the Claims Ninja strategic partner network.",
        profileGorilla.name,
        profileGorilla.category,
        profileGorilla.description,
        `${profileGorilla.bulletLabel}: ${profileGorilla.bullets.join("; ")}`,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:core-group",
      source: "partner network — CORE Group",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "what is core group",
        "core group partner",
        "core group",
        "restoration industry leadership",
        "restoration leadership network",
      ],
      keywords: [
        "CORE Group",
        "restoration leaders",
        "operator network",
        "industry leadership",
        "operational excellence",
        "/partner-network",
      ],
      text: [
        "CORE Group is a restoration industry leadership and operator network partner in the Claims Ninja strategic partner network.",
        coreGroup.name,
        coreGroup.category,
        coreGroup.description,
        `${coreGroup.bulletLabel}: ${coreGroup.bullets.join("; ")}`,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:911-restoration",
      source: "partner network — 911 Restoration Corporate",
      topics: ["onboarding", "contractor_fit", "insurance_supplements"],
      phrases: [
        "911 restoration partnership",
        "is claims ninja partnered with 911 restoration",
        "911 restoration corporate",
        "franchise claims support",
        "911 restoration preferred vendor",
      ],
      keywords: [
        "911 Restoration",
        "franchise",
        "claims settlement",
        "preferred vendor",
        "supplement strategy",
        "/partner-network",
      ],
      text: [
        "Claims Ninja is a preferred claims settlement vendor for 911 Restoration Corporate, supporting franchise directors, national leadership, and participating franchise operators.",
        restoration911.name,
        restoration911.category,
        restoration911.description,
        `${restoration911.bulletLabel}: ${restoration911.bullets.join("; ")}`,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:daylit",
      source: "partner network — Daylit",
      topics: ["onboarding", "contractor_fit", "pricing"],
      phrases: [
        "what is the daylit partnership",
        "does claims ninja work with daylit",
        "daylit financing",
        "contractor financing",
        "can claims ninja help with contractor financing",
      ],
      keywords: [
        "Daylit",
        "financing",
        "cash flow",
        "working capital",
        "short-term finance",
        "authorized partner",
        "/partner-network",
      ],
      text: [
        "Claims Ninja is an authorized partner with Daylit.",
        daylit.name,
        daylit.category,
        daylit.description,
        `${daylit.bulletLabel}: ${daylit.bullets.join("; ")}`,
        "Daylit may provide short-term financing assistance for qualified contractor partners when appropriate, subject to partner approval and qualification. Not every contractor automatically qualifies.",
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:morgan-morgan",
      source: "partner network — Morgan & Morgan",
      topics: ["onboarding", "contractor_fit", "carrier_negotiations"],
      phrases: [
        "does claims ninja have a legal partner",
        "what is the morgan and morgan relationship",
        "morgan and morgan",
        "legal partner",
        "legal escalation",
      ],
      keywords: [
        "Morgan & Morgan",
        "legal partner",
        "exclusive legal partner",
        "bad faith",
        "legal escalation",
        "partner-rate",
        "/partner-network",
      ],
      text: [
        "Morgan & Morgan is Claims Ninja's exclusive legal partner.",
        morganMorgan.name,
        morganMorgan.category,
        morganMorgan.description,
        `${morganMorgan.bulletLabel}: ${morganMorgan.bullets.join("; ")}`,
        "Eligible contractor partners may receive preferred partner-rate access when a claim requires legal escalation. Claims Ninja does not provide legal advice — Morgan & Morgan handles legal representation when appropriate. Access is subject to qualification.",
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n"),
    },
    {
      id: "partner-network:benefits",
      source: "partner network — contractor benefits",
      topics: ["onboarding", "contractor_fit"],
      phrases: [
        "how does the partner network help contractors",
        "contractor partner benefits",
      ],
      keywords: [
        "recover revenue",
        "cash flow",
        "legal escalation",
        "scale with confidence",
        "partner network",
        "/partner-network",
      ],
      text: [
        PARTNER_NETWORK_BENEFITS.title,
        benefitsText,
        partnerSummaries,
        PARTNER_NETWORK_POLICY.optionalUse,
        `URL: ${PARTNER_NETWORK_META.path}`,
      ].join("\n\n"),
    },
  ];
}
