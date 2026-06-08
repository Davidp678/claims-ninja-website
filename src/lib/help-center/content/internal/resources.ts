import { defineArticle, h, p, prompt, ul } from "@/lib/help-center/builder";
import { INTERNAL_MARGIN_REFERENCE } from "@/lib/help-center/fees";

const UPDATED = "2026-06-08";

export const resourcesArticles = [
  defineArticle({
    slug: "email-templates",
    sectionSlug: "internal-resources",
    title: "Email Templates",
    excerpt: "Standardized client and carrier email templates — in development.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Email templates for common scenarios (appraisal approval, attorney escalation, adjuster follow-up) are being migrated from Monday."),
      h(3, "Appraisal Approval Template"),
      p("\"Hi [Client], We suggest pushing this project to appraisal as insurance is stuck below a reasonable threshold for scope and/or pricing regardless of irrefutable justifying evidence presented. Appraisal ranges from $500–$1,500. Do you approve so we can move this claim forward? ~ [CM]\""),
      h(3, "Court-Ordered Appraisal Template"),
      p("\"Hi [Client], Insurance is denying appraisal, so the next steps are to force appraisal via court order. Fee typically $5,000–$15,000. ~ [CM]\""),
    ],
  }),
  defineArticle({
    slug: "continuing-education",
    sectionSlug: "internal-resources",
    title: "Continuing Education",
    excerpt: "Meetings, assignments, and team updates.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      ul([
        "Team meetings (M/W/F 11 AM)",
        "Assignments from leadership",
        "Bible edits and fundamental reminders",
        "Announcements via Monday and email",
      ]),
    ],
  }),
  defineArticle({
    slug: "internal-profit-points",
    sectionSlug: "internal-resources",
    title: "Internal Profit Points Reference",
    excerpt: "Margin targets for ops — NOT client-facing invoices.",
    portal: "internal",
    roles: ["tl", "exec"],
    updatedAt: UPDATED,
    blocks: [
      p(INTERNAL_MARGIN_REFERENCE.note),
      h(3, "Estimate Fees (same as client)"),
      ul([
        "$100 minimum under $12,500",
        "1.25% for $12,500–$100,000",
        "0.75% for $100,001–$200,000",
        "0.50% for $200,000+",
      ]),
      h(3, "Settlement Margin Targets"),
      ul(INTERNAL_MARGIN_REFERENCE.settlements.map((s) => `${s.range}: ${s.rate}`)),
      p(`Supplements: ${INTERNAL_MARGIN_REFERENCE.supplements}`),
      p(`Free Money: ${INTERNAL_MARGIN_REFERENCE.freeMoneySupplements}`),
    ],
  }),
  defineArticle({
    slug: "chatgpt-prompts-full",
    sectionSlug: "internal-resources",
    title: "ChatGPT Prompts 3–11",
    excerpt: "Remaining estimate audit prompts from the Tool Belt.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      prompt("3. O&P Qualification Check", "Review this estimate and determine whether Overhead & Profit is justified based on trade coordination, supervision requirements, scheduling complexity, and project management involvement."),
      prompt("4. Detach & Reset Audit", "Identify all items that must be detached, reset, protected, or manipulated to complete the listed work properly."),
      prompt("5. Hidden Scope Discovery", "Based on this scope, identify likely hidden damage or secondary work that typically appears once demolition begins."),
      prompt("6. Labor Reality Expansion", "Evaluate this estimate and identify labor activities that occur in real construction but are often under-scoped."),
      prompt("7. Code & Standards Justification", "Generate defensible justification language explaining why this scope must meet current building standards."),
      prompt("8. Supplement Pre-Planning", "Predict the most likely supplements that will arise during this project based on the provided scope."),
      prompt("9. Carrier Pushback Defense", "Act as an insurance adjuster challenging this estimate. List likely objections. Then provide professional rebuttals."),
      prompt("10. Estimate Strength Score", "Evaluate this estimate for completeness, defensibility, and settlement strength on a scale of 1–10."),
      prompt("11. Xactimate vs Reality", "Explain how real construction conditions support the pricing and scope in this estimate."),
    ],
  }),
  defineArticle({
    slug: "brelly-prompts-full",
    sectionSlug: "internal-resources",
    title: "Brelly Prompts 2–11",
    excerpt: "Remaining Brelly claim intelligence prompts.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      prompt("2. Scope Bridging Analysis", "Analyze this claim and identify gaps between observed damage, restoration requirements, and the current estimate scope."),
      prompt("3. Bid Bolstering Review", "Review this estimate and generate professional justification explaining why the pricing and scope are reasonable."),
      prompt("4. Coverage + Scope Alignment", "Identify where policy language supports the work described in this estimate."),
      prompt("5. Continuous Replacement Support", "Explain where partial repair may not restore the property properly and where continuous replacement may be justified."),
    ],
  }),
];
