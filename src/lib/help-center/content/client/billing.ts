import { CLIENT_FEE_SCHEDULE, INTERNAL_MARGIN_REFERENCE } from "@/lib/help-center/fees";
import { callout, defineArticle, h, p, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const billingArticles = [
  defineArticle({
    slug: "fee-schedule",
    sectionSlug: "billing-fees",
    title: "Client Fee Schedule",
    excerpt: "Authoritative pricing for estimates, negotiations, and supplements.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      callout("info", CLIENT_FEE_SCHEDULE.enterpriseOverride),
      h(2, "Estimates"),
      ul(CLIENT_FEE_SCHEDULE.estimates.map((e) => `${e.range}: ${e.fee}`)),
      h(2, "Negotiations"),
      ul([
        `${CLIENT_FEE_SCHEDULE.negotiations.minimum} minimum`,
        `When carrier estimate exists: ${CLIENT_FEE_SCHEDULE.negotiations.withCarrierEstimate}`,
        `When no carrier estimate: ${CLIENT_FEE_SCHEDULE.negotiations.withoutCarrierEstimate}`,
      ]),
      h(2, "Supplements"),
      p(CLIENT_FEE_SCHEDULE.supplements),
    ],
  }),
  defineArticle({
    slug: "pass-through-fees",
    sectionSlug: "billing-fees",
    title: "Pass-Through Fees",
    excerpt: "Appraisal, Eagleview, and other third-party costs billed to client.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("Required reports and third-party services are passed through to the client at cost:"),
      ul(CLIENT_FEE_SCHEDULE.passThrough.map((f) => `${f.item}: ${f.fee}`)),
      p("Account 3 provides a dedicated view for billing department invoice review and secure payment."),
    ],
  }),
  defineArticle({
    slug: "fee-reconciliation-note",
    sectionSlug: "billing-fees",
    title: "Fee Schedule Authority (Internal Reference)",
    excerpt: "For staff: client fee schedule is authoritative over internal margin targets.",
    portal: "client",
    updatedAt: UPDATED,
    hidden: true,
    blocks: [
      callout("critical", INTERNAL_MARGIN_REFERENCE.note),
      p("Internal margin targets (not client invoices):"),
      ul([
        ...INTERNAL_MARGIN_REFERENCE.settlements.map((s) => `Settlements ${s.range}: ${s.rate}`),
        `Supplements: ${INTERNAL_MARGIN_REFERENCE.supplements}`,
        `Free Money: ${INTERNAL_MARGIN_REFERENCE.freeMoneySupplements}`,
      ]),
    ],
  }),
];
