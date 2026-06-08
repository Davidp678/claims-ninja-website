import { callout, defineArticle, h, p, prompt, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const negotiationArticles = [
  defineArticle({
    slug: "jll-system",
    sectionSlug: "negotiation-procedures",
    title: "Justification Language Library (JLL)",
    excerpt: "Institutional knowledge and settlement acceleration doctrine.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("JLL standardizes proven claim justification language for faster approvals and higher settlements."),
      h(3, "Six Layers"),
      ul([
        "Language Capture — save wording that helped approval",
        "Categorization — by scenario (continuous replacement, O&P, code, etc.)",
        "Validation — Level 1 Tested, Level 2 Proven, Level 3 Institutional Standard",
        "Deployment — pull language before submission",
        "AI Integration — retrieval and enhancement prompts",
        "Continuous Improvement Loop",
      ]),
      callout("info", "The best estimator uses the best language already proven to work."),
    ],
  }),
  defineArticle({
    slug: "brelly-prompts",
    sectionSlug: "negotiation-procedures",
    title: "Brelly AI Claim Maximization Prompts",
    excerpt: "12 prompts connecting claim facts, policy, and estimate scope.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Brelly analyzes policies, carrier estimates, and our estimates to identify gaps and strengthen positioning."),
      prompt(
        "1. Estimate Gap Analysis",
        "Compare the carrier estimate and contractor estimate using the provided claim information and policy. Identify missing scope, under-scoped items, and construction tasks likely required but not included. Explain why each item would reasonably be required.",
      ),
      prompt(
        "12. Final Claim Position Summary",
        "Generate a professional claim summary explaining why the submitted estimate represents a reasonable and necessary cost to restore the property to pre-loss condition.",
      ),
      p("ChatGPT strengthens construction scope. Brelly strengthens claim intelligence and coverage alignment."),
    ],
  }),
  defineArticle({
    slug: "techniques-key-phrases",
    sectionSlug: "negotiation-procedures",
    title: "Techniques and Key Phrases",
    excerpt: "Negotiation tactics for adjuster communication.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      ul([
        "Disarming soft start",
        "Good cop / bad cop",
        "Deadline framing",
        "Documentation anchoring",
        "Policy language leverage",
      ]),
    ],
  }),
  defineArticle({
    slug: "understanding-adjusters",
    sectionSlug: "negotiation-procedures",
    title: "Understanding Insurance Adjusters",
    excerpt: "How claims actually move forward — adjuster psychology and approval dynamics.",
    portal: "internal",
    roles: ["cm", "pa"],
    updatedAt: UPDATED,
    blocks: [
      p("Adjusters manage many claims and must justify every payment internally. They approve what can be supported with clear documentation."),
      h(3, "Why Initial Pushback Is Normal"),
      ul([
        "Limited initial documentation",
        "Internal review or supervisor approval needed",
        "Missing construction context",
        "Standard carrier review procedures",
      ]),
      h(3, "How Strong Claims Get Approved"),
      p("Clear field documentation + well-supported estimating + consistent communication."),
      callout("info", "Adjusters approve claims when decisions are easy to justify."),
    ],
  }),
];
