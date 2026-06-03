import { CTA_LINKS } from "@/lib/constants";
import type { QuickAction, QuickActionId } from "./types";

/**
 * All quick actions. External conversion links open in a new tab; internal
 * site CTAs navigate in the same tab. Prompt-based actions inject a user
 * message that the local response engine answers.
 */
export const QUICK_ACTIONS: readonly QuickAction[] = [
  {
    id: "get-started",
    label: "Get Started",
    startLeadFlow: true,
  },
  {
    id: "pricing",
    label: "See Pricing",
    prompt: "How does Claims Ninja pricing work?",
  },
  {
    id: "how-it-works",
    label: "How It Works",
    prompt: "How does Claims Ninja work?",
  },
  {
    id: "supplements",
    label: "Ask About Supplements",
    prompt: "Can you help with supplements?",
  },
  {
    id: "public-adjuster",
    label: "Public Adjuster Support",
    prompt: "Do you offer public adjuster support?",
  },
  {
    id: "talk-to-team",
    label: "Talk to the Team",
    href: CTA_LINKS.schedule,
    external: true,
  },
  {
    id: "view-pricing",
    label: "Pricing Page",
    href: "/pricing",
    external: false,
  },
  {
    id: "view-faq",
    label: "FAQ",
    href: "/faq",
    external: false,
  },
  {
    id: "view-platform",
    label: "Platform Overview",
    href: "/platform",
    external: false,
  },
  {
    id: "view-ai-analysis",
    label: "AI Claim Analysis",
    href: "/platform/ai-claim-analysis",
    external: false,
  },
  {
    id: "view-billing",
    label: "Billing & Payments",
    href: "/platform/billing-payments",
    external: false,
  },
] as const;

const QUICK_ACTION_MAP: Record<QuickActionId, QuickAction> = QUICK_ACTIONS.reduce(
  (acc, action) => {
    acc[action.id] = action;
    return acc;
  },
  {} as Record<QuickActionId, QuickAction>,
);

export function getQuickAction(id: QuickActionId): QuickAction {
  return QUICK_ACTION_MAP[id];
}

export function isQuickActionId(id: unknown): id is QuickActionId {
  return typeof id === "string" && id in QUICK_ACTION_MAP;
}

export function isExternalAction(action: QuickAction): boolean {
  if (action.external !== undefined) {
    return action.external;
  }
  return Boolean(action.href?.startsWith("http"));
}
