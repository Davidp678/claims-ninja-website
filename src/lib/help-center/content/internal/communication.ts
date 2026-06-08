import { callout, defineArticle, h, p, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const communicationArticles = [
  defineArticle({
    slug: "client-communication-plan",
    sectionSlug: "client-communication",
    title: "Client Communication Plan",
    excerpt: "Proactive, transparent communication throughout the claim lifecycle.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      h(3, "Day 0 — Onboarding (Supervisor)"),
      ul(["Welcome email with expectations", "Portal access and training", "Timeline overview"]),
      h(3, "Day 1 — Estimate Phase"),
      ul(["Confirmation work has begun", "Request missing documentation", "Estimate completion notification"]),
      h(3, "Day 3–21 — Negotiation Phase"),
      ul([
        "Update every 2 days minimum",
        "Immediate Monday update for major developments",
        "Transparent about challenges",
        "Clear next steps always provided",
      ]),
      h(3, "Proactive Triggers"),
      p("Communicate immediately when: estimate completed, submitted, adjuster responds, negotiation milestone, escalation initiated, settlement reached."),
      callout("warning", "Client asking \"what's happening?\" = communication failure."),
    ],
  }),
  defineArticle({
    slug: "appraisal-procedures-guide",
    sectionSlug: "client-communication",
    title: "Appraisal Procedures Guide",
    excerpt: "Compliance boundaries, demand requirements, and CM duties after award.",
    portal: "internal",
    roles: ["cm", "appraiser", "pa"],
    updatedAt: UPDATED,
    blocks: [
      callout("critical", "Claims Manager is NOT acting as a Public Adjuster."),
      h(3, "What Appraisal IS"),
      p("Contractual valuation dispute mechanism determining amount of loss with binding valuation outcome."),
      h(3, "What Appraisal IS NOT"),
      p("Coverage determination, liability decision, or policy interpretation beyond valuation."),
      h(3, "Required Authority Documents"),
      p("Client Appraisal Authorization and Appraiser Contract — no demand without both executed."),
      h(3, "Award Issued — CM Duties"),
      ul([
        "Confirm award accuracy",
        "Track carrier payment",
        "Ensure payment aligns",
        "Confirm depreciation handling per policy",
      ]),
    ],
  }),
];
