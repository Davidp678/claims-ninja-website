import { defineArticle, h, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const internalFaqArticles = [
  defineArticle({
    slug: "common-mistakes",
    sectionSlug: "operations-faq",
    title: "Common Mistakes to Avoid",
    excerpt: "DON'Ts and DOs for claims managers.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      h(3, "DON'T"),
      ul([
        "Start work without documentation",
        "Rush estimates",
        "Fail follow-ups",
        "Accept lowball offers",
        "Communicate reactively",
        "Delay escalation",
        "Repeat mistakes",
      ]),
      h(3, "DO"),
      ul([
        "Get everything upfront",
        "Build thorough estimates",
        "Follow up aggressively",
        "Fight for every dollar",
        "Over-communicate",
        "Escalate strategically",
        "Learn from every claim",
      ]),
    ],
  }),
  defineArticle({
    slug: "quick-reference",
    sectionSlug: "operations-faq",
    title: "Operations Quick Reference",
    excerpt: "2-day rule, 24hr estimate, 21-day settlement at a glance.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      ul([
        "2-day contact cycle on every active file",
        "24-hour estimate delivery after complete documentation",
        "21–35 day negotiation target after submission",
        "48-hour adjuster follow-up after estimate submission",
        "Client updates every 2 days minimum during negotiation",
        "8:00 AM local start time",
        "Come to TL/COO with 2 solutions",
      ]),
    ],
  }),
];
