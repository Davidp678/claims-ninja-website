import { callout, defineArticle, p } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const firstClaimArticles = [
  defineArticle({
    slug: "submit-first-job",
    sectionSlug: "first-claim",
    title: "Submit Your First Job",
    excerpt: "Use the intake form in Account 1 as soon as you receive login credentials.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "As soon as you receive the email with your account login information, navigate to the top left of Account 1 and submit your first job via our INTAKE FORM.",
      ),
      callout(
        "success",
        "Your first submission is when you will really see the magic The Claims Ninja promises in action.",
      ),
    ],
  }),
  defineArticle({
    slug: "after-submission",
    sectionSlug: "first-claim",
    title: "What Happens After Submission",
    excerpt: "Post-first-project communication and claims manager assignment.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "After submitting your first project, direct all project-related inquiries to the Claims Manager assigned to that project within The Claims Ninja dashboard.",
      ),
      p(
        "For any other matters, contact one of the Claims Managers on your projects. If they are unable to resolve the issue, it will be escalated to their Team Leader and further as needed until resolved in a timely manner.",
      ),
      p("Account 1 users can contact their Claims Manager anytime via The Claims Ninja Dash or by phone."),
    ],
  }),
];
