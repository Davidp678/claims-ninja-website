import type { BlogPost } from "@/lib/blog-types";
import { CTA_LINKS } from "@/lib/constants";

export const howToChooseInsuranceSupplementingPartner: BlogPost = {
  slug: "how-to-choose-insurance-supplementing-partner",
  title: "How to Choose an Insurance Supplementing Partner for Contractors",
  excerpt:
    "A practical evaluation framework for restoration and roofing contractors comparing supplementing partners — criteria, questions to ask, and red flags to avoid.",
  category: "contractor-operations",
  tags: ["Partnership", "Supplements", "Buyer Guide", "Operations"],
  publishedAt: "2026-08-10",
  readingTimeMinutes: 9,
  visualVariant: "ember",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "How to Choose an Insurance Supplementing Partner",
  seoDescription:
    "How contractors should choose and compare insurance supplementing companies: documentation standards, fees, trade coverage, carrier process, and platform visibility.",
  relatedPostSlugs: [
    "when-to-bring-in-supplementing-partner",
    "recover-revenue-without-in-house-claims",
    "insurance-supplementing-guide-contractors",
  ],
  faqIds: [
    "supplements-how-to-choose-partner",
    "supplements-what-to-look-for",
    "supplements-how-to-compare",
    "pricing-fee-structure",
    "billing-replace-estimator",
  ],
  sections: [
    {
      id: "why-criteria",
      heading: "Stop shopping for “best” — score fit against your book",
      paragraphs: [
        "There is no universal best insurance supplementing service for every restoration contractor. The right partner depends on your trade mix, claim volume, internal estimating capacity, and how much carrier communication you want handled outside your office. Contractors who compare vendors with a written scorecard make clearer decisions than those chasing rankings or slogans.",
        "Use this guide as an evaluation framework — not a league table. Score each option against the same criteria, then weigh the result against whether you should keep more work in-house or outsource selectively.",
      ],
      links: [
        {
          label: "When to bring in a supplementing partner",
          href: "/resources/blog/when-to-bring-in-supplementing-partner",
        },
        {
          label: "Outsourced claims vs hiring in-house",
          href: "/resources/blog/recover-revenue-without-in-house-claims",
        },
      ],
    },
    {
      id: "evaluation-criteria",
      heading: "Eight criteria every contractor should compare",
      bullets: [
        "Documentation standards — Do they require photos, measurements, moisture logs, and clear narratives that match your field workflow?",
        "Trade and loss-type coverage — Can they support roofing, water mitigation, fire, mold, contents, and commercial files in your book?",
        "Estimate comparison process — How do they find missing scope, pricing gaps, and code items without rewriting your estimate from scratch?",
        "Fee transparency — Are partnership fees, minimums, and success-based charges stated up front with examples?",
        "Carrier communication ownership — Who talks to the adjuster, what do you approve before submission, and how are denials handled?",
        "Platform and visibility — Can your team see claim status, uploads, and supplement history without chasing email threads?",
        "Turnaround and capacity — How do they prioritize storm surge and large-loss files against your production schedule?",
        "Field control — Do they strengthen the claim file while your crew keeps production, homeowner relationships, and job-site decisions?",
      ],
      links: [
        { label: "Pricing overview", href: "/pricing" },
        { label: "Platform overview", href: "/platform" },
        { label: "Results & Insights", href: "/case-studies" },
        {
          label: "Insurance Estimate Review Playbook",
          href: "/resources/guides/general-claims/insurance-estimate-review-playbook-for-contractors",
        },
        {
          label: "Estimate Review & Scope Validation Guide",
          href: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
        },
      ],
    },
    {
      id: "questions-to-ask",
      heading: "Questions to ask before you partner",
      bullets: [
        "What documentation do you need on day one for a roofing, water, or fire file?",
        "Which services are included versus billed separately — estimate writing, supplement support, negotiation, portal access?",
        "How do you handle partial approvals and denials?",
        "Will you replace my estimator, act as overflow, or operate as an outsourced claims desk?",
        "How do you measure recovery, and what caveats apply to example outcomes?",
        "Who owns homeowner and adjuster communication on my brand?",
      ],
      callout: {
        title: "Avoid ranking theater",
        body: "If a vendor cannot explain their process, fee model, and denial workflow in plain language, treat that as a stronger signal than any claim of being the “best claim management service.”",
      },
    },
    {
      id: "red-flags",
      heading: "Red flags when comparing supplementing companies",
      bullets: [
        "Guaranteed recovery percentages with no methodology or variance disclaimer.",
        "Vague fees that shift after intake.",
        "No visibility into what was submitted to the carrier.",
        "Pressure to antagonize adjusters or skip documentation basics.",
        "One-size-only model that cannot support selective claims or hybrid in-house teams.",
      ],
    },
    {
      id: "how-claims-ninja-fits",
      heading: "How Claims Ninja maps to this scorecard",
      paragraphs: [
        "Claims Ninja is a contractor-focused claims operations platform: estimate and scope review, supplement support, documentation organization, carrier follow-up, and claim tracking — with expert claim support when files need it. We are not a ranking site and we do not ask contractors to abandon field control. Many partners use us selectively on complex files while keeping straightforward jobs in-house.",
        "If you are evaluating partners, start with pricing transparency, platform visibility, and the supplement workflow — then compare those answers against any other vendor using the same eight criteria above.",
      ],
      links: [
        { label: "What insurance supplementing includes", href: "/resources/blog/insurance-supplementing-guide-contractors" },
        { label: "About Claims Ninja", href: "/about" },
        { label: "Schedule a strategy call", href: CTA_LINKS.schedule },
        { label: "Begin claim intake", href: CTA_LINKS.startHere },
      ],
    },
  ],
};
