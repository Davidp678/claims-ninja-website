export const GENERIC_TEASER_MESSAGES = [
  "Questions about supplements, pricing, or claim recovery?",
  "Need a second set of eyes on a claim?",
  "Claims Ninja AI can explain pricing, supplements, and next steps.",
  "Contractors: ask anything about claim workflows.",
  "Wondering if a claim has supplement potential?",
] as const;

const HOMEPAGE_TEASER_MESSAGES = [
  "Need help understanding what Claims Ninja does?",
  "Ask Claims Ninja AI about supplements, pricing, or next steps.",
  "Wondering if your claim workflow is leaving money behind?",
] as const;

const PRICING_TEASER_MESSAGES = [
  "Questions about Claims Ninja pricing?",
  "Ask how the 15% and 4% pricing models work.",
  "Not sure which billing scenario applies to your claim?",
] as const;

const FAQ_TEASER_MESSAGES = [
  "Looking for a quick answer?",
  "Ask Claims Ninja AI instead of scrolling the full FAQ.",
  "Questions about supplements, billing, or PA support?",
] as const;

const PLATFORM_TEASER_MESSAGES = [
  "Want to understand the Claims Ninja platform?",
  "Ask how our claims workflow support fits your operation.",
  "See how Claims Ninja helps contractors manage claim recovery.",
] as const;

const AI_CLAIM_ANALYSIS_TEASER_MESSAGES = [
  "Curious what AI claim analysis can review?",
  "Ask how AI helps identify missed line items and pricing gaps.",
  "Want to know what documents are useful for AI review?",
] as const;

const BILLING_PAYMENTS_TEASER_MESSAGES = [
  "Questions about billing or payment timing?",
  "Ask how Claims Ninja fees are typically structured.",
  "Need help understanding when payment applies?",
] as const;

const OTHER_PLATFORM_TEASER_MESSAGES = [
  "Questions about this part of the platform?",
  "Ask how this feature supports claim recovery.",
  "Need help choosing the right next step?",
] as const;

const SOLUTIONS_TEASER_MESSAGES = [
  "Wondering how Claims Ninja supports this claim type?",
  "Ask what documentation matters for this type of loss.",
  "Need help spotting supplement opportunities?",
] as const;

const RESOURCES_TEASER_MESSAGES = [
  "Want the quick version?",
  "Ask Claims Ninja AI to explain this topic.",
  "Have a follow-up question about this resource?",
] as const;

const COMPANY_TEASER_MESSAGES = [
  "Want to know how Claims Ninja works with contractors?",
  "Ask about our team, process, or partnership model.",
  "Need help deciding if Claims Ninja is a fit?",
] as const;

export function getChatTeaserMessages(pathname: string): string[] {
  const path = pathname || "";

  if (path === "/") {
    return [...HOMEPAGE_TEASER_MESSAGES];
  }
  if (path === "/pricing") {
    return [...PRICING_TEASER_MESSAGES];
  }
  if (path === "/faq") {
    return [...FAQ_TEASER_MESSAGES];
  }
  if (path === "/platform/ai-claim-analysis") {
    return [...AI_CLAIM_ANALYSIS_TEASER_MESSAGES];
  }
  if (path === "/platform/billing-payments") {
    return [...BILLING_PAYMENTS_TEASER_MESSAGES];
  }
  if (path === "/platform") {
    return [...PLATFORM_TEASER_MESSAGES];
  }
  if (path.startsWith("/platform/")) {
    return [...OTHER_PLATFORM_TEASER_MESSAGES];
  }
  if (path.startsWith("/solutions/")) {
    return [...SOLUTIONS_TEASER_MESSAGES];
  }
  if (path.startsWith("/resources/")) {
    return [...RESOURCES_TEASER_MESSAGES];
  }
  if (path.startsWith("/company/") || path === "/about") {
    return [...COMPANY_TEASER_MESSAGES];
  }

  return [...GENERIC_TEASER_MESSAGES];
}

export function pickTeaserMessage(pathname: string): string {
  const messages = getChatTeaserMessages(pathname);
  const index = Math.floor(Math.random() * messages.length);
  return messages[index] ?? GENERIC_TEASER_MESSAGES[0];
}
