import type { BlogPost } from "@/lib/blog-types";

export const xactimateVsMarketPricing: BlogPost = {
  slug: "xactimate-vs-market-pricing",
  title: "Xactimate Pricing vs Real Market Pricing: What Contractors Need to Know",
  excerpt:
    "Xactimate is the carrier's language — but it is not always your local market. Learn when to challenge unit pricing and how to document the difference.",
  category: "xactimate",
  tags: ["Xactimate", "Pricing", "Market"],
  publishedAt: "2025-09-08",
  readingTimeMinutes: 7,
  visualVariant: "darkGrid",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "Xactimate vs Market Pricing for Contractors",
  seoDescription:
    "Compare Xactimate pricing to real market rates on insurance claims. What contractors need to document when carrier unit prices fall short.",
  relatedPostSlugs: [
    "xactimate-estimate-review-checklist-contractors",
    "why-carrier-estimates-miss-line-items",
    "insurance-supplementing-guide-contractors",
  ],
  sections: [
    {
      id: "two-languages",
      heading: "Two pricing languages on every claim",
      paragraphs: [
        "Carriers price claims in Xactimate. Contractors price jobs from supplier invoices, labor markets, and subcontractor bids. When those numbers diverge, margin disappears — even if line items look complete on paper.",
        "Successful supplements separate quantity disputes from unit price disputes. Quantity is proven with photos and scope notes; unit price is proven with invoices, regional benchmarks, and clear trade justification.",
      ],
    },
    {
      id: "when-to-challenge",
      heading: "When to challenge Xactimate unit pricing",
      bullets: [
        "Material SKUs changed or supply chain shifted since the estimate date.",
        "Specialty trades (electrical, HVAC, slate) require vendor quotes above price list.",
        "Large-loss equipment or monitoring rates exceed default allowances.",
        "Code-driven upgrades carry material premiums not in the macro.",
      ],
    },
    {
      id: "how-we-help",
      heading: "How Claims Ninja handles pricing gaps",
      paragraphs: [
        "We rebuild or amend estimates with defensible unit pricing and tie each change to documentation the adjuster can approve. Our goal is accurate recovery — not inflated scope — because sustainable partnerships depend on credibility with carriers.",
      ],
      links: [
        { label: "Pricing and fees", href: "/pricing" },
        {
          label: "Roofing supplement playbook",
          href: "/resources/blog/roofing-supplement-playbook",
        },
      ],
    },
  ],
};
