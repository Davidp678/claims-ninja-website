import { CLIENT_FEE_SCHEDULE } from "@/lib/help-center/fees";
import {
  callout,
  defineArticle,
  h,
  p,
  ul,
  video,
} from "@/lib/help-center/builder";
import { CLIENT_LOOM_VIDEOS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const gettingStartedArticles = [
  defineArticle({
    slug: "welcome",
    sectionSlug: "getting-started",
    title: "Welcome to The Claims Ninja",
    excerpt: "Start here — read the full onboarding guide or watch the walkthrough video.",
    portal: "client",
    updatedAt: UPDATED,
    tags: ["onboarding"],
    blocks: [
      callout(
        "info",
        "PLEASE READ THIS ENTIRE HELP CENTER — or watch the walkthrough video if you prefer a guided tour.",
      ),
      video(
        CLIENT_LOOM_VIDEOS.fullWalkthrough.url,
        CLIENT_LOOM_VIDEOS.fullWalkthrough.title,
      ),
      p(
        "Executing the expectations in this help center is the essential component to our success as your partners in the property claims fight together. It allows us to do our jobs to the best of our abilities, which leads to you saving time, money, and headache.",
      ),
      p(
        "Firstly, congratulations on taking such a monumental load off your plate — from insurance estimating to claims negotiations, and when absolutely required, escalations like appraisals, public adjusting, and litigation. This help center outlines one-time setups and everything you need for us to get started together.",
      ),
    ],
  }),
  defineArticle({
    slug: "what-success-looks-like",
    sectionSlug: "getting-started",
    title: "What Success Looks Like",
    excerpt: "Shared expectations for every project and the perfect-claim checklist.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      h(2, "What Success Looks Like"),
      p(
        "A successful claim is not defined by speed alone — it is defined by a smooth process where documentation, estimating, negotiation, and payment all move forward without friction.",
      ),
      h(3, "A Perfect Claim Typically Looks Like"),
      ul([
        "Documentation uploaded within 24 hours of site visit",
        "Complete intake submitted (contract + files included)",
        "Estimate delivered within ~24 hours of intake readiness",
        "Insurance negotiation completed within ~3 weeks on average",
        "Rapid back-and-forth with adjusters",
        "No reinspection required due to missing documentation",
        "Client always knows project status",
        "Payments released without delays",
      ]),
      p(
        "Our systems are designed to achieve this outcome consistently when documentation and communication expectations are followed.",
      ),
      callout(
        "success",
        "Clear documentation → Strong estimate → Faster agreement → Faster payment.",
      ),
    ],
  }),
  defineArticle({
    slug: "who-handles-what",
    sectionSlug: "getting-started",
    title: "Who Handles What",
    excerpt: "Role clarity so projects move faster — your team vs The Claims Ninja.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      h(2, "Who Handles What"),
      p("To keep claims efficient, responsibilities are intentionally divided."),
      h(3, "Your Team Handles"),
      ul([
        "Field documentation (photos, videos, measurements)",
        "Executing construction work",
        "Uploading project files and updates",
        "Client contract execution",
        "Jobsite communication with property owner",
      ]),
      h(3, "The Claims Ninja Handles"),
      ul([
        "Estimating",
        "Scope development",
        "Carrier negotiations to settlement",
        "Supplement preparation",
        "Communication with adjusters",
        "Escalations (when required)",
      ]),
      callout("info", "One team builds the project. One team manages the claim."),
    ],
  }),
  defineArticle({
    slug: "mutual-expectations",
    sectionSlug: "getting-started",
    title: "Mutual Expectations",
    excerpt: "What you can expect from us and what we expect from our clients.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      h(2, "What You Can Expect From The Claims Ninja"),
      ul([
        "Fast and professional estimate preparation",
        "Strategic insurance negotiation",
        "Clear communication and updates",
        "Organized claim handling from start to finish",
        "Escalation only when necessary and appropriate",
        "A partner focused on maximizing recoverable claim value",
        "Claims Managers aim for same-day response times, but may respond the next business day if contacted after 2:00 PM their time",
      ]),
      h(2, "What We Expect From Our Clients"),
      ul([
        "Thorough field documentation",
        "Timely uploads of project files",
        "Centralized communication through assigned channels",
        "Prompt responses when decisions are needed",
        "Allowing negotiation strategy to remain coordinated through our team",
      ]),
      p(
        "When both sides follow these expectations, projects move faster, negotiations become smoother, and outcomes improve for everyone involved.",
      ),
    ],
  }),
  defineArticle({
    slug: "key-metrics",
    sectionSlug: "getting-started",
    title: "Key Metrics & SLAs",
    excerpt: "Turnaround targets and performance benchmarks.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      h(2, "Key Metrics"),
      ul([
        "24-hour estimate turnaround",
        "Average 3 weeks to settlement",
        "Average 45% more than insurance's initial estimate",
        "Public Adjuster in all 50 states with no additional fees where most other PAs are 7–15%",
        "Average less than 10% escalation on interiors",
        "Average less than 30% escalation on exteriors/roofing",
      ]),
      h(2, "Pricing Overview"),
      p("See Billing & Fees for the full schedule. Summary:"),
      ul([
        `Estimates: ${CLIENT_FEE_SCHEDULE.estimates.map((e) => `${e.range}: ${e.fee}`).join("; ")}`,
        `Negotiations: ${CLIENT_FEE_SCHEDULE.negotiations.minimum} minimum; ${CLIENT_FEE_SCHEDULE.negotiations.withCarrierEstimate}`,
        `Supplements: ${CLIENT_FEE_SCHEDULE.supplements}`,
      ]),
      callout("warning", CLIENT_FEE_SCHEDULE.enterpriseOverride),
    ],
  }),
];
