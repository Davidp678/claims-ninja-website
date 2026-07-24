import type { BlogPost } from "@/lib/blog-types";

export const whyCarrierEstimatesMissLineItems: BlogPost = {
  slug: "why-carrier-estimates-miss-line-items",
  title: "Why Carrier Estimates Miss Profitable Line Items",
  excerpt:
    "Carrier estimates are built for speed and standardization — not your local market. Here is why profitable line items disappear and how to catch them early.",
  category: "insurance-estimating",
  tags: ["Xactimate", "Estimates", "Line items"],
  publishedAt: "2025-10-28",
  readingTimeMinutes: 7,
  visualVariant: "darkGrid",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "Why Carrier Estimates Miss Line Items",
  seoDescription:
    "Understand why insurance carrier estimates miss profitable line items and how contractors identify scope gaps before they erode job margin.",
  relatedPostSlugs: [
    "most-overlooked-line-items-in-insurance-estimates",
    "xactimate-vs-market-pricing",
    "insurance-supplementing-guide-contractors",
    "what-is-a-roof-supplement",
  ],
  sections: [
    {
      id: "standardization-gap",
      heading: "Estimates optimize for standardization, not your job",
      paragraphs: [
        "Carrier adjusters work inside Xactimate templates, macro assumptions, and desk review habits. That workflow produces consistent estimates across thousands of files — but it routinely understates job-specific conditions: access difficulty, premium materials, extended drying, or regional labor realities.",
        "The gap is rarely malicious. It is structural. When contractors understand that gap, they stop treating the carrier estimate as the ceiling and start treating it as a draft.",
      ],
    },
    {
      id: "common-misses",
      heading: "Line items carriers miss most often",
      bullets: [
        "General conditions: protection, debris, permits, and project management time.",
        "Equipment extensions: extra drying days, monitoring, or large-loss equipment — common underpayment drivers on water mitigation when templates stop early.",
        "Roofing accessories: steep charges, ridge ventilation, ice barrier, and matching rules.",
        "Code-driven items: AFCI, smoke sealing, or jurisdiction-specific requirements.",
        "Contents or pack-out support on larger residential losses.",
      ],
    },
    {
      id: "catch-early",
      heading: "Catch gaps before production starts",
      paragraphs: [
        "Compare the carrier estimate to your field scope within 48 hours of receipt. Flag missing line items in writing, tie each item to photos or code, and route through your supplement workflow before crews absorb unpaid work.",
        "Use the first 48 hours after carrier estimate guide for Day 1 and Day 2 workflow so comparison happens on every file — not only when an estimator remembers.",
        "Claims Ninja's supplement team reviews estimates against field documentation and market pricing — so your PMs stay focused on production, not desk disputes.",
      ],
      links: [
        {
          label: "First 48 hours after a carrier estimate",
          href: "/resources/blog/first-48-hours-after-carrier-estimate",
        },
        {
          label: "Xactimate estimate review checklist",
          href: "/resources/blog/xactimate-estimate-review-checklist-contractors",
        },
        { label: "Roofing claims support", href: "/solutions/roofing" },
        { label: "Water damage claims", href: "/solutions/water-damage" },
        {
          label: "Why water mitigation claims get underpaid",
          href: "/resources/blog/why-water-mitigation-claims-get-underpaid",
        },
      ],
    },
  ],
};
