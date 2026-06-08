import type { HelpPortal, HelpSection } from "@/lib/help-center/types";

export const CLIENT_SECTIONS: HelpSection[] = [
  { slug: "getting-started", title: "Getting Started", description: "Welcome, expectations, and key metrics", portal: "client", order: 1 },
  { slug: "account-setup", title: "Account Setup", description: "Three account types and ICA/AOB requirements", portal: "client", order: 2 },
  { slug: "monday-training", title: "Monday.com Training", description: "Dash tours and role-based videos", portal: "client", order: 3 },
  { slug: "first-claim", title: "First Claim Submission", description: "Intake form and post-submission routing", portal: "client", order: 4 },
  { slug: "required-documentation", title: "Required Documentation", description: "Intake checklist and field documentation", portal: "client", order: 5 },
  { slug: "supplement-process", title: "Supplement Process", description: "Supplements and Free Money program", portal: "client", order: 6 },
  { slug: "claim-workflow", title: "Claim Workflow", description: "COC and common delays", portal: "client", order: 7 },
  { slug: "billing-fees", title: "Billing & Fees", description: "Client fee schedule and pass-through costs", portal: "client", order: 8 },
  { slug: "faq", title: "FAQ", description: "Claims 101 for new contractors", portal: "client", order: 9 },
  { slug: "training-videos", title: "Training Videos", description: "Loom library by role", portal: "client", order: 10 },
  { slug: "support-contacts", title: "Support Contacts", description: "CSM, onboarding, and claims manager routing", portal: "client", order: 11 },
  { slug: "legal-appendix", title: "Legal Appendix", description: "ICA/AOB contract sections and affiliate program", portal: "client", order: 12 },
];

export const INTERNAL_SECTIONS: HelpSection[] = [
  { slug: "company-overview", title: "Company Overview", description: "Mission, history, systems, and client alignment", portal: "internal", order: 1 },
  { slug: "claims-operations", title: "Claims Operations", description: "Bible, CM rules, and 2-day cycle", portal: "internal", order: 2 },
  { slug: "estimating-training", title: "Estimating Training", description: "Line item, T&M, PLCB, and AI prompts", portal: "internal", order: 3 },
  { slug: "xactimate-resources", title: "Xactimate Resources", description: "Tours and external training links", portal: "internal", order: 4 },
  { slug: "negotiation-procedures", title: "Negotiation Procedures", description: "JLL, Brelly, techniques, and adjusters", portal: "internal", order: 5 },
  { slug: "client-communication", title: "Client Communication", description: "Communication plan and appraisal guide", portal: "internal", order: 6 },
  { slug: "sop-library", title: "SOP Library", description: "All claims process SOPs", portal: "internal", order: 7 },
  { slug: "team-onboarding", title: "Team Onboarding", description: "Curriculum, videos, and doc index", portal: "internal", order: 8 },
  { slug: "internal-resources", title: "Internal Resources", description: "Templates, prompts, and profit reference", portal: "internal", order: 9, roles: ["cm", "tl", "exec"] },
  { slug: "operations-faq", title: "Operations FAQ", description: "Common mistakes and quick reference", portal: "internal", order: 10 },
];

export function getSections(portal: HelpPortal): HelpSection[] {
  return portal === "client"
    ? CLIENT_SECTIONS
    : INTERNAL_SECTIONS;
}
