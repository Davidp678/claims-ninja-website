import type { BlogPost } from "@/lib/blog-types";

export const recoverRevenueWithoutInHouseClaims: BlogPost = {
  slug: "recover-revenue-without-in-house-claims",
  title:
    "How Contractors Can Recover More Revenue Without Hiring an In-House Claims Department",
  excerpt:
    "Scale supplement volume and claim quality without adding salaried overhead — by combining disciplined documentation with an outsourced claims partner.",
  category: "contractor-operations",
  tags: ["Revenue", "Operations", "Outsourcing"],
  publishedAt: "2025-10-15",
  readingTimeMinutes: 8,
  visualVariant: "ember",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "Recover More Claim Revenue Without In-House Claims",
  seoDescription:
    "How restoration and roofing contractors recover more insurance claim revenue without hiring an in-house claims department — documentation, partners, and workflow.",
  relatedPostSlugs: [
    "how-to-choose-insurance-supplementing-partner",
    "when-to-bring-in-supplementing-partner",
    "insurance-supplementing-guide-contractors",
  ],
  sections: [
    {
      id: "economics",
      heading: "The economics of in-house vs outsourced claims",
      paragraphs: [
        "A dedicated claims manager can cost six figures annually before benefits, software, and training — and still only cover a slice of your supplement volume. For many contractors doing $5M–$50M in restoration or roofing revenue, outsourced supplementing delivers specialist expertise on a variable, performance-aligned cost.",
        "Claims Ninja operates as an extension of your team: we handle estimate review, supplement preparation, carrier follow-up, and documentation strategy while your field leaders stay on jobs.",
      ],
    },
    {
      id: "workflow",
      heading: "Build a repeatable recovery workflow",
      bullets: [
        "Standardize intake photos and room labeling on every loss.",
        "Route carrier estimates for comparison within one business day — use the first 48 hours playbook for review and documentation standards.",
        "Use a single supplement queue — avoid ad-hoc emails to adjusters.",
        "Track approval rates and cycle time by carrier and adjuster.",
        "Log denials and resubmission outcomes so denial patterns surface by carrier and estimator.",
      ],
      links: [
        { label: "Claim tracking platform", href: "/platform/claim-tracking" },
        {
          label: "First 48 hours after a carrier estimate",
          href: "/resources/blog/first-48-hours-after-carrier-estimate",
        },
        {
          label: "Supplement denial recovery guide",
          href: "/resources/blog/supplement-denial-recovery-guide",
        },
      ],
    },
    {
      id: "technology",
      heading: "Technology that supports the team",
      paragraphs: [
        "Platform visibility matters as volume grows. Client portals, claim tracking, and AI-assisted scope review reduce rework and help owners see where recovery is stalling — without hiring another desk role.",
      ],
      links: [
        { label: "Platform overview", href: "/platform" },
        { label: "Client portal", href: "/platform/client-portal" },
        {
          label: "O&P on insurance claims",
          href: "/resources/blog/op-on-insurance-claims",
        },
      ],
    },
  ],
};
