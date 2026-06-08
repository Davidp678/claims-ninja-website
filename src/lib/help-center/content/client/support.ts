import { defineArticle, link, p } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const supportArticles = [
  defineArticle({
    slug: "client-success-manager",
    sectionSlug: "support-contacts",
    title: "Client Success Manager",
    excerpt: "Your CSM is your primary contact before your first project submission.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "If you have any inquiries before you submit your first project, contact your Client Success Manager — the sales rep who took care of you up to this point.",
      ),
      p(
        "They are your Client Success Manager for life and will periodically check in to see how you are doing. If you signed up online without speaking to a sales rep, you will be assigned a CSM who will reach out to make introductions.",
      ),
    ],
  }),
  defineArticle({
    slug: "onboarding-booking",
    sectionSlug: "support-contacts",
    title: "Onboarding Support Booking",
    excerpt: "Schedule a call after attempting training if you have onboarding questions.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("If after attempting training you have any onboarding inquiries, book a call:"),
      link(EXTERNAL_LINKS.calendlyOnboarding, "Book Onboarding Call"),
    ],
  }),
  defineArticle({
    slug: "claims-manager-routing",
    sectionSlug: "support-contacts",
    title: "Claims Manager Routing",
    excerpt: "Post-first-project support through your assigned Claims Manager.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "After submitting your first project, direct all project-related inquiries to the Claims Manager assigned to that project within The Claims Ninja dashboard.",
      ),
      p(
        "Account 1 users can contact their Claims Manager anytime via The Claims Ninja Dash or by phone. Unresolved issues escalate to Team Leader and beyond as needed.",
      ),
    ],
  }),
];
