import { defineArticle, h, p, ul, video } from "@/lib/help-center/builder";
import { CLIENT_LOOM_VIDEOS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const trainingVideoArticles = [
  defineArticle({
    slug: "video-library",
    sectionSlug: "training-videos",
    title: "Training Video Library",
    excerpt: "All client onboarding Loom videos organized by account role.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      h(2, "All Accounts"),
      video(
        CLIENT_LOOM_VIDEOS.fullWalkthrough.url,
        CLIENT_LOOM_VIDEOS.fullWalkthrough.title,
      ),
      h(2, "Account 1 — Execs, PMs, Billing"),
      video(
        CLIENT_LOOM_VIDEOS.howWeOperate.url,
        CLIENT_LOOM_VIDEOS.howWeOperate.title,
        CLIENT_LOOM_VIDEOS.howWeOperate.duration,
      ),
      video(
        CLIENT_LOOM_VIDEOS.dashOperation.url,
        CLIENT_LOOM_VIDEOS.dashOperation.title,
        CLIENT_LOOM_VIDEOS.dashOperation.duration,
      ),
      h(2, "Account 2 — Crew"),
      video(
        CLIENT_LOOM_VIDEOS.crewDash.url,
        CLIENT_LOOM_VIDEOS.crewDash.title,
        CLIENT_LOOM_VIDEOS.crewDash.duration,
      ),
      video(
        CLIENT_LOOM_VIDEOS.fieldDocumentation.url,
        CLIENT_LOOM_VIDEOS.fieldDocumentation.title,
        CLIENT_LOOM_VIDEOS.fieldDocumentation.duration,
      ),
    ],
  }),
  defineArticle({
    slug: "crew-training-block",
    sectionSlug: "training-videos",
    title: "Crew Training Block (Copy & Paste)",
    excerpt: "Share this block directly with all crew members.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("Copy and paste this section to all crew members with Account 2 access:"),
      ul([
        "How to operate The Claims Ninja Crew Dash (1 min) — see video library",
        "Photo, video, and file uploads",
        "How to properly document interiors, exteriors, and roofs (3 min)",
        "Demo sheets, material sheets, dry logs, and moisture mapping",
        "Tons of photos at .5 lens (zoomed out)",
        "Detailed photos at 1x lens (normal camera)",
        "Full video walkthrough with voiceover at .5 lens",
        "Sketches of L×H×W measurements and room flows",
        "Roofs and exteriors: angles, elevations, close-ups, code support documentation",
      ]),
    ],
  }),
];
