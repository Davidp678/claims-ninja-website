import { defineArticle, h, p, ul, video } from "@/lib/help-center/builder";
import { CLIENT_LOOM_VIDEOS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const mondayTrainingArticles = [
  defineArticle({
    slug: "help-center-in-monday",
    sectionSlug: "monday-training",
    title: "Help Center in Monday",
    excerpt: "Access this help center from the Monday sidebar on all accounts.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "This help center is available on the far left of your Claims Ninja accounts in Monday and contains all onboarding information plus updates going forward.",
      ),
      p(
        "For major system updates we will send emails to the address used at signup. Your company is responsible for relaying that information to your in-house team.",
      ),
    ],
  }),
  defineArticle({
    slug: "account-1-dash-training",
    sectionSlug: "monday-training",
    title: "Account 1 Dash Training",
    excerpt: "How We Operate and Dash operation videos for execs, PMs, and billing.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("Forward these videos to Account 1 users and ensure they watch them before the first submission."),
      h(3, "How We Operate (5 min)"),
      video(
        CLIENT_LOOM_VIDEOS.howWeOperate.url,
        CLIENT_LOOM_VIDEOS.howWeOperate.title,
        CLIENT_LOOM_VIDEOS.howWeOperate.duration,
      ),
      p("For clear understanding of the sequence of events per project."),
      h(3, "Operate The Claims Ninja Dash (10 min)"),
      video(
        CLIENT_LOOM_VIDEOS.dashOperation.url,
        CLIENT_LOOM_VIDEOS.dashOperation.title,
        CLIENT_LOOM_VIDEOS.dashOperation.duration,
      ),
      p("Covers intake walkthrough, upload requirements, and dash navigation."),
    ],
  }),
  defineArticle({
    slug: "account-2-crew-training",
    sectionSlug: "monday-training",
    title: "Account 2 Crew Training",
    excerpt: "Crew dash uploads and field documentation video for field teams.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("Copy this section to all crew members with Account 2 access."),
      h(3, "Operate The Claims Ninja Crew Dash (1 min)"),
      video(
        CLIENT_LOOM_VIDEOS.crewDash.url,
        CLIENT_LOOM_VIDEOS.crewDash.title,
        CLIENT_LOOM_VIDEOS.crewDash.duration,
      ),
      h(3, "Field Documentation Standards (3 min)"),
      video(
        CLIENT_LOOM_VIDEOS.fieldDocumentation.url,
        CLIENT_LOOM_VIDEOS.fieldDocumentation.title,
        CLIENT_LOOM_VIDEOS.fieldDocumentation.duration,
      ),
      ul([
        "Photo, video, and file uploads",
        "Demo sheets, material sheets, dry logs, and moisture mapping",
        "Tons of photos at .5 lens (zoomed out)",
        "Detailed photos of issues at 1x lens (normal camera)",
        "Full video walkthrough with voiceover at .5 lens",
        "Sketches of L×H×W measurements and room flows",
        "Roofs and exteriors: angles, elevations, close-ups, and code support documentation",
      ]),
    ],
  }),
];
