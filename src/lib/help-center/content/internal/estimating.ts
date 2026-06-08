import { callout, defineArticle, h, p, prompt, ul } from "@/lib/help-center/builder";

const UPDATED = "2026-06-08";

export const estimatingArticles = [
  defineArticle({
    slug: "line-item-strategy",
    sectionSlug: "estimating-training",
    title: "Profit Maximization — Line Item Strategy",
    excerpt: "Continuous replacement, trade interaction, O&P, and detach/reset when merited.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Maximize claim value by identifying scope realities requiring continuous work, trade interaction, and full restoration standards — not patch repairs."),
      h(3, "Continuous Replacement"),
      p("Push when partial repair creates mismatch: roofing (flashings, matching), flooring (dye lot, room-to-room), paint (sheen, texture)."),
      h(3, "Trade Interaction"),
      p("If one trade disturbs another, include both. Rule: If it must be touched, it must be estimated."),
      h(3, "O&P"),
      p("Push O&P when 3+ trades or merited complexity requires coordination and supervision."),
      h(3, "Supplement Mindset"),
      p("Every project has three phases: Initial Scope, Construction Reality Adjustments, Documentation-Based Supplements."),
      callout("info", "Do not ask what insurance will approve. Ask what proper construction requires. Then document and justify."),
    ],
  }),
  defineArticle({
    slug: "time-material-strategy",
    sectionSlug: "estimating-training",
    title: "Profit Maximization — T&M Strategy",
    excerpt: "Use T&M when scope uncertainty prevents fixed pricing; prove real construction cost.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Use T&M when damage extent unknown until demolition, hidden damage likely, access limitations, or carrier disputes scope."),
      p("T&M shifts approval from price debate to work verification. Document labor, time, materials to justify supplements."),
      p("When carrier disputes Xactimate: perform T&M work, track actual cost, demonstrate Xactimate is equal or cheaper than field cost."),
      h(3, "Daily Documentation Rule"),
      p("Every T&M job requires daily logs, crew count, hours, work performed, materials, progress photos, site conditions."),
      callout("critical", "If not documented, it does not exist."),
    ],
  }),
  defineArticle({
    slug: "plcb-system",
    sectionSlug: "estimating-training",
    title: "Pre-Loss Condition Builder (PLCB)",
    excerpt: "Value anchoring and scope expansion doctrine — define pre-loss quality early.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("PLCB establishes probable quality, finish level, and construction standard before damage occurred."),
      h(3, "Six Layers"),
      ul([
        "Property Intelligence Collection",
        "Quality Tier Classification (Builder / Mid-Grade / Custom)",
        "Pre-Loss Reconstruction Modeling",
        "Estimate Anchoring",
        "Negotiation Positioning",
        "Supplement Reinforcement",
      ]),
      callout("info", "Damage defines the problem. Pre-loss condition defines the value. We restore what existed — not what is cheapest."),
    ],
  }),
  defineArticle({
    slug: "chatgpt-estimate-prompts",
    sectionSlug: "estimating-training",
    title: "ChatGPT Estimate Final Boost Prompts",
    excerpt: "12 prompts to audit and strengthen estimates before submission.",
    portal: "internal",
    roles: ["cm"],
    updatedAt: UPDATED,
    blocks: [
      p("Use ChatGPT after completing an estimate to identify missed scope and strengthen documentation. Audit and strengthen — do not fabricate."),
      prompt(
        "1. Master Scope Audit",
        "Act as a master insurance restoration estimator specializing in maximizing defensible claim scope. Review the following estimate and identify missing line items, trade interactions, detach/reset items, access requirements, protection needs, and continuous replacement opportunities that are commonly overlooked but justified by construction standards. Explain WHY each item is required.",
      ),
      prompt(
        "2. Continuous Replacement Expansion",
        "Analyze this scope and identify where partial repair would realistically require continuous replacement (roofing, flooring, paint, trim, or assemblies). Explain construction logic that justifies full-area replacement instead of patch repair.",
      ),
      prompt(
        "12. Final Submission Rewrite",
        "Rewrite a concise professional submission summary that clearly explains scope necessity, project complexity, and justification for full approval while remaining cooperative and non-adversarial.",
      ),
      p("See full prompt library in Internal Resources for prompts 3–11."),
    ],
  }),
];
