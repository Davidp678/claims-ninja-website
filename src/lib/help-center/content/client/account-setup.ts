import { callout, defineArticle, p, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const accountSetupArticles = [
  defineArticle({
    slug: "account-overview",
    sectionSlug: "account-setup",
    title: "Account Overview",
    excerpt: "Three account types are created for your team within 24 hours of signup.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "As you read this, we are creating 3 accounts for you and your team that should be ready within 24 hours. Account information will arrive in a separate email. Please disperse logins to the proper team members.",
      ),
      callout(
        "info",
        "During the waiting period, execute training and input the ICA, AOB, and Limited Appraiser Authorization into your contracts so we can hit the ground running when accounts are ready.",
      ),
    ],
  }),
  defineArticle({
    slug: "account-1-execs-pms-billing",
    sectionSlug: "account-setup",
    title: "Account 1 — Execs, PMs & Billing",
    excerpt: "Full access to The Claims Ninja Dash for project management and billing.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "This account is for Executives, Project Managers, and Billing. It gives full access to The Claims Ninja Dash where you can see and interact with everything you need per project from end to end.",
      ),
      ul([
        "Share this entire help center with anyone who has Account 1 access",
        "Request multiple Account 1 logins for multiple PMs",
        "Submit new projects via the intake form",
        "Approve estimates, settlements, and supplements",
      ]),
    ],
  }),
  defineArticle({
    slug: "account-2-crew",
    sectionSlug: "account-setup",
    title: "Account 2 — Crew",
    excerpt: "Limited crew view for uploads and COC access.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "This account is for your Crew. It is a very limited view of Account 1, with access to only the project name, address, COC link, and a location to upload all pictures, videos, and files throughout the life of the project until completion.",
      ),
      callout(
        "info",
        "Copy the crew training section from Training Videos to all field team members.",
      ),
    ],
  }),
  defineArticle({
    slug: "account-3-billing",
    sectionSlug: "account-setup",
    title: "Account 3 — Billing Portal",
    excerpt: "Dedicated billing view for invoices and secure payment info.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "While Account 1 lets you view and approve estimates, settlements, supplements, and their invoices in The Claims Ninja Dash, Account 3 provides a single location for your billing department to view all invoices and ensures secure payment info.",
      ),
      callout("warning", "Billing portal enhancements are rolling out. Contact your Client Success Manager if you need billing access before your Account 3 login is issued."),
    ],
  }),
  defineArticle({
    slug: "ica-aob-requirement",
    sectionSlug: "account-setup",
    title: "ICA, AOB & Appraiser Contract Requirement",
    excerpt: "You must integrate TCN contract language before submitting your first job.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "Please copy the Insurance Communication Agreement, Assignment of Benefits, and Limited Appraiser Authorization from the Legal Appendix into your client contract. This is absolutely imperative so we can communicate with insurance on your and the policyholder's behalf.",
      ),
      callout(
        "critical",
        "When submitting a New Project via the Intake Form in Account 1, you are required to upload your contract with the policyholder. Without it, insurance will ensure we are unable to proceed.",
      ),
      p("Full contract text is available in the Legal Appendix section of this help center."),
    ],
  }),
];
