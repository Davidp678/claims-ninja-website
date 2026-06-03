import type { BlogPost } from "@/lib/blog-types";

export const whatIsARoofSupplement: BlogPost = {
  slug: "what-is-a-roof-supplement",
  title: "What Is a Roof Supplement?",
  excerpt:
    "Roof supplements close the gap between carrier roofing estimates and the true cost of code-compliant, market-rate installation.",
  category: "roofing-claims",
  tags: ["Roofing", "Supplements", "Storm"],
  publishedAt: "2025-09-22",
  readingTimeMinutes: 6,
  visualVariant: "redGlow",
  authorId: "claims-ninja-editorial",
  seoTitle: "What Is a Roof Supplement?",
  seoDescription:
    "Learn what a roof supplement is, common roofing scope gaps carriers miss, and how contractors document storm and replacement claims for approval.",
  relatedPostSlugs: [
    "roofing-supplement-playbook",
    "insurance-supplementing-guide-contractors",
    "claim-documentation-approval-rates",
  ],
  faq: [
    {
      question: "Is a roof supplement the same as a re-inspection?",
      answer:
        "Not always. A supplement is a formal estimate revision request. A re-inspection may support it, but the supplement document and line-item justification drive payment.",
    },
    {
      question: "Do I need a supplement on every storm job?",
      answer:
        "No — only when documented scope or code requirements exceed the carrier estimate. Many straightforward jobs match; supplements matter when they do not.",
    },
  ],
  sections: [
    {
      id: "definition",
      heading: "Roof supplement basics",
      paragraphs: [
        "A roof supplement requests additional line items or quantities on an insurance claim when the carrier's roofing estimate does not cover code, access, materials, or waste required for a proper install. It is the same supplement process used on interior losses, applied to steep-slope, ventilation, flashing, and matching issues.",
      ],
    },
    {
      id: "roof-gaps",
      heading: "Common roofing scope gaps",
      bullets: [
        "Steep and high charges not applied to pitch.",
        "Ice and water shield in valleys and eaves where code requires.",
        "Ridge, hip, and ventilation components omitted or under-counted.",
        "Drip edge, starter, and manufacturer-specific accessory rows.",
        "Detach and reset for satellite, solar, or HVAC penetrations.",
      ],
      links: [{ label: "Roofing claims solutions", href: "/solutions/roofing" }],
    },
    {
      id: "documentation",
      heading: "Document like an installer, not just a salesman",
      paragraphs: [
        "Elevation photos, pitch measurements, shingle sample matching, and permit requirements belong in the file before you argue line items. Carriers approve roofing supplements they can trace to evidence — not rhetoric.",
      ],
      links: [
        {
          label: "Read the full roofing supplement playbook",
          href: "/resources/blog/roofing-supplement-playbook",
        },
      ],
    },
  ],
};
