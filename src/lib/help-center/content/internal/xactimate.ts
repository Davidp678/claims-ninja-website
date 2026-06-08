import { defineArticle, link, p, video } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS, INTERNAL_LOOM_VIDEOS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const xactimateArticles = [
  defineArticle({
    slug: "xactimate-tour",
    sectionSlug: "xactimate-resources",
    title: "TCN Xactimate Tour",
    excerpt: "Loom walkthrough of TCN vs Whitelabel Xactimate workflow.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      video(INTERNAL_LOOM_VIDEOS.xactimateTour.url, INTERNAL_LOOM_VIDEOS.xactimateTour.title),
    ],
  }),
  defineArticle({
    slug: "time-material-tour",
    sectionSlug: "xactimate-resources",
    title: "T&M White Label Tour",
    excerpt: "Time and material estimate and supplement workflow.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      video(INTERNAL_LOOM_VIDEOS.timeAndMaterial.url, INTERNAL_LOOM_VIDEOS.timeAndMaterial.title),
      p("Covers TCN vs Whitelabel and from-scratch vs AI assistance."),
    ],
  }),
  defineArticle({
    slug: "external-xactimate-training",
    sectionSlug: "xactimate-resources",
    title: "External Xactimate Training",
    excerpt: "Verisk official training and Udemy courses.",
    portal: "internal",
    roles: ["all"],
    updatedAt: UPDATED,
    blocks: [
      link(EXTERNAL_LINKS.xactimateTraining, "Verisk Xactimate Training"),
      link(EXTERNAL_LINKS.udemyXactimate, "Learn Xactimate in Less Than 4 Hours (Udemy)"),
      link(EXTERNAL_LINKS.udemyRoofs, "Master Roofs on Xactimate (Udemy)"),
      link(EXTERNAL_LINKS.udemyClaims, "How to Handle Insurance Claims (Udemy)"),
    ],
  }),
];
