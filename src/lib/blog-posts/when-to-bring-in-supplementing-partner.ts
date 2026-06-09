import type { BlogPost } from "@/lib/blog-types";
import { CTA_LINKS } from "@/lib/constants";

export const whenToBringInSupplementingPartner: BlogPost = {
  slug: "when-to-bring-in-supplementing-partner",
  title: "When Should a Contractor Bring in a Supplementing Partner?",
  excerpt:
    "Not every claim needs outside help — but the ones that do often decide your annual margin. Here is a practical framework for when to partner.",
  category: "contractor-operations",
  tags: ["Partnership", "Supplements", "Strategy"],
  publishedAt: "2025-08-20",
  readingTimeMinutes: 6,
  visualVariant: "ember",
  authorId: "claims-ninja-editorial",
  seoTitle: "When to Bring in a Supplementing Partner",
  seoDescription:
    "When should contractors bring in a supplementing partner? Framework for claim complexity, volume, and recovery economics.",
  relatedPostSlugs: [
    "recover-revenue-without-in-house-claims",
    "insurance-supplementing-guide-contractors",
    "why-carrier-estimates-miss-line-items",
  ],
  faqIds: ["getting-started-who-for", "getting-started-onboarding", "pricing-fee-structure"],
  sections: [
    {
      id: "signals",
      heading: "Signals you need a partner now",
      bullets: [
        "Supplement backlog exceeds one week and jobs start before approval.",
        "Carrier denials are rising because documentation is inconsistent — see the denial recovery guide for resubmission workflow.",
        "Owners or PMs are negotiating estimates instead of running production.",
        "You are growing into new states, carriers, or commercial work.",
        "Large losses need dedicated scope and code expertise your team lacks.",
      ],
    },
    {
      id: "what-partner-does",
      heading: "What a good partner should do",
      paragraphs: [
        "A supplementing partner should own estimate comparison, line-item justification, carrier follow-up, and documentation coaching — without antagonizing adjusters you will see again on the next storm. Claims Ninja integrates with your intake, supports your brand with homeowners, and aligns fees to documented recovery.",
      ],
      links: [
        {
          label: "Supplement denial recovery guide",
          href: "/resources/blog/supplement-denial-recovery-guide",
        },
        {
          label: "Schedule a strategy call",
          href: CTA_LINKS.schedule,
        },
        { label: "Begin claim intake", href: CTA_LINKS.startHere },
      ],
    },
    {
      id: "when-not",
      heading: "When to keep it in-house",
      paragraphs: [
        "Straightforward jobs with matching estimates rarely need outside support. If your internal reviewer has capacity, strong carrier relationships, and consistent approval metrics, reserve partnership for complex files — commercial, mold, fire, contents, and large roofing — where expertise pays off.",
      ],
    },
  ],
};
