import { defineArticle, link, p, ul, video } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS, INTERNAL_LOOM_VIDEOS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const onboardingArticles = [
  defineArticle({
    slug: "onboarding-curriculum",
    sectionSlug: "team-onboarding",
    title: "Onboarding Curriculum",
    excerpt: "Pre-shadow through Ninja certification timeline.",
    portal: "internal",
    roles: ["cm", "tl"],
    updatedAt: UPDATED,
    blocks: [
      ul([
        "Pre-Shadow (1–3 days): Absorb all training, observe via videos and physical shadow",
        "Day 1: Total shadow of TL",
        "Day 2–3: Practice projects (water, sewage, mold, smoke, fire, recon, roof) with TL review",
        "Day 3–5: Live project(s) with TL shadow",
        "30–60 days: TL review of estimates, settlements, supplements before independent submission",
        "Ninja certified: submit without intensive oversight, continue growing",
      ]),
    ],
  }),
  defineArticle({
    slug: "project-types",
    sectionSlug: "team-onboarding",
    title: "Project Types & Sequence",
    excerpt: "Water, mold, fire, recon, roof, and standard project sequence.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Types: Water, Mold, Sewage, Smoke, Fire, Recon, Roof, and more."),
      p("Standard project sequence follows Bible steps — see Claims Operations."),
    ],
  }),
  defineArticle({
    slug: "third-party-education",
    sectionSlug: "team-onboarding",
    title: "3rd Party Education Links",
    excerpt: "IICRC, Xactimate, Udemy, and YouTube academy resources.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      link(EXTERNAL_LINKS.iicrc, "IICRC Certifications"),
      link(EXTERNAL_LINKS.xactimateTraining, "Verisk Xactimate Training"),
      link(EXTERNAL_LINKS.udemyXactimate, "Udemy: Learn Xactimate"),
      link(EXTERNAL_LINKS.udemyRoofs, "Udemy: Master Roofs on Xactimate"),
      link(EXTERNAL_LINKS.udemyClaims, "Udemy: How to Handle Insurance Claims"),
      link(EXTERNAL_LINKS.youtubeIrt, "YouTube: Insurance Restoration Training"),
      p("Appraisal and state-specific PA compliance education — see SOP Library."),
    ],
  }),
  defineArticle({
    slug: "training-video-index",
    sectionSlug: "team-onboarding",
    title: "Internal Training Video Index",
    excerpt: "All internal Loom training videos with links.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      video(INTERNAL_LOOM_VIDEOS.overview.url, INTERNAL_LOOM_VIDEOS.overview.title),
      video(INTERNAL_LOOM_VIDEOS.requests.url, INTERNAL_LOOM_VIDEOS.requests.title),
      video(INTERNAL_LOOM_VIDEOS.mondayDash.url, "Claims Ninja Dash — Monday Tour"),
      video(INTERNAL_LOOM_VIDEOS.xactimateTour.url, INTERNAL_LOOM_VIDEOS.xactimateTour.title),
      video(INTERNAL_LOOM_VIDEOS.timeAndMaterial.url, INTERNAL_LOOM_VIDEOS.timeAndMaterial.title),
      p("Intro to Company and Bible: see Company Overview and Claims Operations sections."),
      link(EXTERNAL_LINKS.clientHelpCenter, "Client Onboarding (Client Perspective)"),
    ],
  }),
  defineArticle({
    slug: "in-house-doc-index",
    sectionSlug: "team-onboarding",
    title: "In-House Document Index",
    excerpt: "Referenced training documents in Monday SOPs.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      ul([
        "Daily Expectations & Work Standards",
        "Estimate Creation Document",
        "Negotiation & Settlement Process",
        "Client Communication Plan",
        "Payment Direction & Check Status Communication SOP",
        "KPI Documents",
        "Escalation Triggers Document",
        "Escalation to Public Adjuster SOP",
        "Appraisal Procedures Guide",
        "Common Mistakes to Avoid",
      ]),
      p("Full text of key SOPs is in this help center. Additional docs in Monday SOPs, Training, and Docs."),
    ],
  }),
];
