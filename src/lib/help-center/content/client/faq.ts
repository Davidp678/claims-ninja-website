import { defineArticle, h, link, p, prompt } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

const CLAIMS_101_PROMPT = `Give me a max-token crash course for contractors entering the property insurance claims industry.
Cover the most essential 101 concepts only, explained extremely clearly and efficiently:
ACV vs RCV, depreciation, scope vs estimate, supplements (change orders), mitigation vs restoration vs abatement, insurance carrier vs policyholder roles, adjuster incentives, documentation requirements, photo standards, moisture logs, estimating platforms (Xactimate/Symbility), negotiation basics, common claim timeline, contractor profit centers, code upgrades, overhead & profit, appraisal process, and common carrier tactics that reduce payouts.
Focus on what contractors must understand to avoid losing money and move claims efficiently.
No fluff. Bullet points. High signal density.`;

export const faqArticles = [
  defineArticle({
    slug: "rudimentary-client-education",
    sectionSlug: "faq",
    title: "Rudimentary Client Education",
    excerpt: "Property claims 101 for contractors new to insurance work.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "If you are new to property claims, it can be like another language. This section provides a fast on-ramp.",
      ),
      h(2, "ChatGPT Property Claims 101"),
      p("Plug this prompt into ChatGPT for a contractor-focused crash course:"),
      prompt("Property Claims 101 for Contractors", CLAIMS_101_PROMPT),
    ],
  }),
  defineArticle({
    slug: "claims-101-resources",
    sectionSlug: "faq",
    title: "Claims 101 Resources",
    excerpt: "External training for contractors entering insurance restoration.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("Another great way to get up to speed is by binge-watching The Practitioner:"),
      link(EXTERNAL_LINKS.youtubeIrt, "Insurance Restoration Training on YouTube"),
    ],
  }),
];
