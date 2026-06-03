import { capFollowUps, matchRule, normalizeInput, type ChatRule } from "./chat-match";
import type { AssistantReply } from "./types";

/**
 * The exact opening assistant message for a fresh session.
 */
export const OPENING_MESSAGE =
  "Hey, I'm Claims Ninja AI — your contractor claims assistant. Ask about pricing, supplements, workflows, or getting your team started, or pick an option below.";

/**
 * Ordered rule set — specific topics before broad ones. Tie-break: higher score
 * wins; if tied, earlier rule in the array wins.
 */
const RULES: ChatRule[] = [
  // --- Pricing sub-topics (specific before general) ---
  {
    id: "carrier-estimate-vs-no-estimate",
    phrases: [
      "carrier estimate",
      "no estimate",
      "no carrier estimate",
      "15 percent",
      "15%",
      "4 percent",
      "4% rcv",
      "4% of rcv",
      "documented increase",
    ],
    keywords: ["rcv", "existing estimate"],
    reply: {
      content:
        "Fee structure depends on what's already on the file:\n\n• Carrier estimate exists: typically 15% of the documented increase we help recover through supplements or negotiation. The fee ties to settlement increase — not gross invoice totals.\n• No carrier estimate at intake: in qualifying scenarios, around 4% of RCV may apply depending on claim type and scope.\n\nExact fees and engagement terms should be confirmed with the Claims Ninja team before work begins.",
      followUps: ["view-pricing", "get-started", "talk-to-team"],
    },
  },
  {
    id: "billing-payment",
    phrases: [
      "payment due",
      "payment terms",
      "long-term contract",
      "upfront fee",
      "when do i pay",
      "how do you get paid",
      "how does billing work",
    ],
    keywords: ["billing", "invoice", "invoiced", "upfront", "contract", "paid"],
    reply: {
      content:
        "Claims Ninja is typically compensated through a percentage-based success fee tied to documented claim increases — not flat retainers on every file.\n\n• In most cases, no upfront fees are required.\n• Invoicing is tied to documented recovery milestones, not simply opening a file.\n• Contractors engage on a claim-by-claim basis or through ongoing partnership arrangements.\n\nYour partnership agreement outlines when fees apply and how documented increases are calculated. See Billing & Payments for more detail.",
      followUps: ["view-billing", "view-pricing", "talk-to-team"],
    },
  },
  {
    id: "pricing-general",
    phrases: ["how much", "fee structure", "what do you charge", "what does it cost"],
    keywords: ["price", "pricing", "cost", "fee", "fees", "rate", "charge"],
    reply: {
      content:
        "Fees align to documented claim recovery, not flat retainers on every file.\n\n• With a carrier estimate: typically 15% of the documented increase.\n• Qualifying no-estimate scenarios: around 4% of RCV depending on claim type and scope.\n• No hidden markups on line items.\n\nHigher claim volume may qualify for adjusted partnership tiers. Exact fees and engagement terms should be confirmed with the Claims Ninja team.",
      followUps: ["view-pricing", "view-billing", "talk-to-team"],
    },
  },

  // --- Supplement sub-topics ---
  {
    id: "scope-gaps",
    phrases: [
      "missed line",
      "missing line",
      "line item",
      "scope gap",
      "missing item",
      "under scoped",
      "under-scoped",
    ],
    keywords: ["missed", "underpaid", "under scoped"],
    reply: {
      content:
        "Scope gaps and missed line items are where recovery often gets left on the table. We compare carrier scope to field conditions and your estimate, then flag defensible items worth pursuing.\n\nCommon gaps include quantity discrepancies, trade separation issues, and items trimmed on the carrier's first pass. AI-assisted review helps surface these faster; experienced supplement specialists validate before anything goes to the carrier.",
      followUps: ["supplements", "view-ai-analysis", "get-started"],
    },
  },
  {
    id: "code-items",
    phrases: [
      "code item",
      "building code",
      "ice and water",
      "drip edge",
      "code upgrade",
      "code related",
    ],
    keywords: ["irc", "code", "ventilation", "steep charge"],
    reply: {
      content:
        "Code-related line items are a frequent supplement opportunity — especially on roofing and rebuild scopes.\n\n• Drip edge, ice and water shield, ventilation, and steep charges often get under-scoped on carrier estimates.\n• Strong supplements pair line-item detail with code references, manufacturer specs, and field photos.\n\nWe evaluate whether your documentation supports pursuing code items on your specific file. Outcomes vary by carrier and claim circumstances.",
      followUps: ["supplements", "view-faq", "get-started"],
    },
  },
  {
    id: "overhead-profit",
    phrases: ["overhead and profit", "o and p", "o&p", "general contractor overhead"],
    keywords: ["overhead", "profit"],
    reply: {
      content:
        "Overhead and profit depends on carrier guidelines, number of trades involved, and how the claim is structured.\n\nWe evaluate whether O&P applies to your file and document the basis when pursuing it. It's not automatic on every claim — carrier rules and file setup matter.\n\nOutcomes vary by carrier and claim circumstances. The team can review your specific situation during intake.",
      followUps: ["view-faq", "talk-to-team", "supplements"],
    },
  },
  {
    id: "supplements-general",
    phrases: ["supplement process", "supplement support", "ask about supplements"],
    keywords: ["supplement", "supplements", "supplementing"],
    reply: {
      content:
        "Supplement support is a core part of what we do. The process:\n\n• Compare carrier scope to field conditions and your estimate.\n• Flag defensible line items — missed scope, pricing gaps, code items, documentation holes.\n• Build organized supplement packages with photos, notes, and clear change summaries.\n• Submit to the carrier and follow through adjuster responses.\n\nIf your estimate looks light compared to field conditions, that's usually where recovery is sitting.",
      followUps: ["supplements", "get-started", "view-ai-analysis"],
    },
  },

  // --- Documentation & timeline ---
  {
    id: "documentation-photos",
    phrases: [
      "what documents",
      "what do you need",
      "what information",
      "moisture log",
      "what photos",
      "what should we capture",
      "documentation needed",
    ],
    keywords: ["document", "documentation", "photo", "photos", "intake info"],
    reply: {
      content:
        "Strong files start with organized field documentation. Typical intake includes:\n\n• Carrier estimate or scope (if available)\n• Site photos — grouped by room, elevation, or trade with dates\n• Your contractor estimate aligned to field conditions\n• Policyholder details, claim number, and loss type\n• Moisture logs, testing reports, or contents inventories where applicable\n\nThe more complete your intake, the faster we can move on review and supplement strategy.",
      followUps: ["get-started", "view-faq", "how-it-works"],
    },
  },
  {
    id: "turnaround-timeline",
    phrases: [
      "how long",
      "turnaround",
      "how fast",
      "when will",
      "how quickly",
      "timeline",
      "time frame",
      "timeframe",
    ],
    keywords: ["long", "speed", "wait", "duration"],
    reply: {
      content:
        "Timelines depend on documentation completeness, claim complexity, and carrier responsiveness — we don't promise exact turnaround on any single file.\n\n• Straightforward scope gaps may move quickly once documentation is in.\n• Large commercial or multi-trade files take longer.\n• Carrier negotiations vary widely — simple supplement responses may resolve in days; contested files can take weeks.\n\nWe prioritize based on your production schedule and carrier deadlines, and keep your team updated on status throughout.",
      followUps: ["talk-to-team", "view-platform", "get-started"],
    },
  },

  // --- AI & platform ---
  {
    id: "ai-claim-analysis",
    phrases: [
      "ai analysis",
      "ai claim",
      "ai-driven",
      "ai review",
      "artificial intelligence",
      "machine learning",
    ],
    keywords: ["analyze", "analysis"],
    wordBoundary: ["ai"],
    reply: {
      content:
        "AI-assisted review scans estimates and documentation for scope gaps, pricing inconsistencies, and supplement opportunities. Expert teams validate findings before anything goes to a carrier — AI accelerates review, humans make the call.\n\n• Effective at pattern recognition: missing line items, quantity gaps, inconsistent pricing.\n• Works best when intake documentation is complete and organized.\n• AI does not replace supplement specialists — it flags items worth a closer look.",
      followUps: ["view-ai-analysis", "view-platform", "get-started"],
    },
  },
  {
    id: "replace-supplement-team",
    phrases: [
      "replace my",
      "replace our",
      "in-house team",
      "internal team",
      "internal estimator",
      "outsource",
      "outsourced",
      "build a claims department",
    ],
    keywords: ["replace", "in house", "in-house"],
    reply: {
      content:
        "Claims Ninja doesn't have to replace your team — it adapts to how you operate.\n\n• Supplement an existing claims or estimating team on overflow or complex files.\n• Act as an overflow resource when your office is buried.\n• Function as a complete outsourced claims department if you don't have one in-house.\n\nMany contractors use Claims Ninja selectively on complex, high-value, or resource-intensive claims while keeping day-to-day production with their field crew.",
      followUps: ["view-platform", "talk-to-team", "get-started"],
    },
  },
  {
    id: "platform-overview",
    phrases: ["client portal", "claim tracking", "communication hub"],
    keywords: ["platform", "software", "technology", "portal", "system", "app"],
    reply: {
      content:
        "Claims Ninja is a contractor-focused claims operations platform — not just supplement support.\n\n• Client portal for document submission and project visibility.\n• Claim tracking across your book of business.\n• Real-time communication hub for carrier correspondence.\n• Billing and payment tracking connected to claim outcomes.\n• AI claim analysis to accelerate scope review.\n\nYour crew handles production on site. Claims Ninja strengthens the claim file behind you.",
      followUps: ["view-platform", "view-ai-analysis", "get-started"],
    },
  },

  // --- Public adjuster & disputes ---
  {
    id: "public-adjuster",
    phrases: [
      "public adjuster",
      "licensed adjuster",
      "public adjusting",
      "pa support",
      "pa services",
    ],
    wordBoundary: ["pa"],
    keywords: ["licensed", "representation"],
    reply: {
      content:
        "Claims Ninja is a contractor-focused claims support platform that includes access to licensed public adjusters, estimators, supplement specialists, and other claims professionals when a claim calls for it.\n\nNot every engagement is public adjusting — many files are handled through supplement support and carrier negotiation. When licensed public adjuster expertise is the right move, that access is part of the platform.\n\nThe team can confirm the right path for your specific claim during intake or a strategy call.",
      followUps: ["talk-to-team", "view-faq", "get-started"],
    },
  },
  {
    id: "appraisal-disputes",
    phrases: [
      "appraisal clause",
      "appraisal process",
      "disputed claim",
      "claim denied",
      "denial",
      "contested claim",
      "carrier dispute",
      "dispute line",
    ],
    keywords: ["appraisal", "dispute", "disputed", "denied", "contested", "rebuttal"],
    reply: {
      content:
        "When carriers dispute line items or push back on scope, we document the carrier's position, gather supporting evidence, and respond with organized rebuttals or revised scopes.\n\n• Re-inspections can be requested when field conditions differ from the adjuster's initial scope.\n• Appraisal and escalation paths depend on policy terms and file strength.\n\nOutcomes vary by carrier and claim circumstances — we focus on building the strongest record possible rather than promising specific results. For complex disputed files, a strategy call with the team is the best next step.",
      followUps: ["talk-to-team", "view-faq", "get-started"],
    },
  },

  // --- Conversion & fit ---
  {
    id: "claim-intake",
    phrases: [
      "claim intake",
      "submit a claim",
      "first claim",
      "get started",
      "sign up",
      "onboarding",
      "onboard",
    ],
    keywords: ["intake", "submit", "begin", "start", "signup"],
    reply: {
      content:
        "Getting started is straightforward. Claim intake covers your operation, claim volume, and current workflow.\n\n• Most teams submit their first claim within a few business days after intake setup.\n• You'll get platform access, documentation standards, and a clear handoff process.\n• Timing depends on how quickly you can provide photos, estimates, and policy details.\n\nUse Get Started to open intake, or schedule a strategy call if you'd rather talk through your operation first.",
      followUps: ["get-started", "view-faq", "talk-to-team"],
    },
  },
  {
    id: "strategy-call",
    phrases: [
      "strategy call",
      "schedule a call",
      "book a call",
      "talk to someone",
      "speak with",
      "consultation",
      "free review",
    ],
    keywords: ["schedule", "demo", "call", "human", "person", "contact", "speak", "talk"],
    reply: {
      content:
        "A strategy call is the fastest way to dig into your claims operation with the team. We'll review your workflow, claim volume, supplement needs, and how Claims Ninja fits your setup.\n\nNo pressure — it's a working conversation about whether the platform makes sense for your team and what next steps look like.",
      followUps: ["talk-to-team", "get-started", "view-platform"],
    },
  },
  {
    id: "contractor-fit",
    phrases: [
      "general contractor",
      "multi-claim",
      "restoration company",
      "restoration contractor",
      "property claim",
      "who is this for",
      "who is it for",
      "built for",
    ],
    keywords: [
      "roofer",
      "roofing",
      "restoration",
      "contractor",
      "contractors",
      "gc",
      "volume",
      "organization",
      "storm",
      "water damage",
      "fire damage",
      "mold",
    ],
    wordBoundary: ["gc"],
    reply: {
      content:
        "Claims Ninja is built for contractors and restoration companies managing insurance work at volume.\n\n• Roofers and roofing contractors — storm, retail, and commercial.\n• Restoration contractors — water, fire, mold, and contents losses.\n• General contractors and multi-trade rebuild operations.\n• Multi-claim organizations that need stronger documentation and supplement support without building an internal claims department.\n\nIf your team handles insurance work and wants better recovery without adding headcount, the platform is designed for you.",
      followUps: ["get-started", "view-platform", "talk-to-team"],
    },
  },
  {
    id: "how-it-works",
    phrases: [
      "how it works",
      "how does it work",
      "how do you work",
      "what do you do",
      "how does claims ninja work",
    ],
    keywords: ["process", "workflow", "steps", "works"],
    reply: {
      content:
        "Here's how Claims Ninja supports your claim operation:\n\n• Claim review and documentation organization.\n• Estimate and scope review against field conditions.\n• Supplement strategy to capture what's owed.\n• Carrier communication support with organized submissions.\n• Next-step routing so your team knows where each file stands.\n\nYour crew stays in control of production on site. We strengthen the claim file behind you — documentation, supplements, and carrier engagement.",
      followUps: ["view-platform", "get-started", "view-ai-analysis"],
    },
  },
];

const DEFAULT_REPLY: AssistantReply = {
  content:
    "I can help with pricing, supplement support, claim workflows, AI-driven analysis, public adjuster support, or getting your team started.\n\nPick an option below or tell me about your claim — loss type, whether you have a carrier estimate, or what you're trying to solve. For final legal, policy, or coverage determinations, the Claims Ninja team will confirm specifics with you.",
  followUps: ["pricing", "view-ai-analysis", "talk-to-team"],
};

/**
 * Local, rule-based response engine for Phase 2.
 *
 * This is the single seam to replace later with a network call, e.g.:
 *   const res = await fetch("/api/chat", { method: "POST", body: ... });
 * The UI only depends on the `AssistantReply` shape, so swapping this out
 * requires no component changes.
 */
export function getAssistantReply(input: string): AssistantReply {
  const normalized = normalizeInput(input);

  if (!normalized) {
    return DEFAULT_REPLY;
  }

  const matched = matchRule(normalized, RULES);

  if (matched) {
    return {
      content: matched.reply.content,
      followUps: capFollowUps(matched.reply.followUps),
    };
  }

  return DEFAULT_REPLY;
}
