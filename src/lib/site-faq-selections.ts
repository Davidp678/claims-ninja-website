export type SiteFaqPageKey =
  | "home"
  | "platform"
  | "pricing"
  | "billingPayments"
  | "aiClaimAnalysis"
  | "clientPortal"
  | "claimTracking"
  | "communicationHub"
  | "roofing"
  | "waterDamage"
  | "fireDamage"
  | "mold"
  | "contents"
  | "about"
  | "contact"
  | "partnerNetwork"
  | "reviews"
  | "blog"
  | "guides"
  | "caseStudies"
  | "videos";

export type SiteFaqConfig = {
  topic: string;
  faqIds: readonly string[];
};

export const SITE_FAQ: Record<SiteFaqPageKey, SiteFaqConfig> = {
  home: {
    topic: "Claims Ninja",
    faqIds: [
      "getting-started-who-for",
      "getting-started-onboarding",
      "supplements-whats-included",
      "pricing-fee-structure",
      "carrier-how-handled",
      "ai-how-helps",
      "carrier-public-adjuster",
    ],
  },
  platform: {
    topic: "the Claims Ninja platform",
    faqIds: [
      "getting-started-who-for",
      "getting-started-field-vs-support",
      "platform-data-secure",
      "platform-access-controls",
      "platform-claim-tracking",
      "platform-communication",
      "supplements-whats-included",
      "carrier-public-adjuster",
    ],
  },
  pricing: {
    topic: "Claims Ninja pricing and billing",
    faqIds: [
      "pricing-fee-structure",
      "pricing-estimate-writing",
      "pricing-minimum-fees",
      "pricing-15-percent",
      "pricing-4-percent-rcv",
      "pricing-payment-processing",
      "pricing-when-charged",
      "pricing-additional-services",
    ],
  },
  billingPayments: {
    topic: "billing and payments",
    faqIds: [
      "billing-how-paid",
      "billing-percentage-charged",
      "billing-upfront-fees",
      "billing-fee-calculated",
      "billing-payment-due",
      "billing-long-term-contracts",
      "billing-selective-claims",
      "billing-replace-estimator",
    ],
  },
  aiClaimAnalysis: {
    topic: "AI claim analysis",
    faqIds: [
      "ai-how-helps",
      "ai-replace-experts",
      "ai-accuracy",
      "ai-what-analyzed",
      "ai-data-privacy",
      "help-missed-line-items",
    ],
  },
  clientPortal: {
    topic: "the client portal",
    faqIds: [
      "platform-access-controls",
      "documentation-platform-upload",
      "platform-data-secure",
      "getting-started-intake-info",
      "getting-started-first-claim",
    ],
  },
  claimTracking: {
    topic: "claim tracking",
    faqIds: [
      "platform-claim-tracking",
      "carrier-timeline",
      "supplements-turnaround",
      "carrier-who-talks",
      "documentation-essentials",
    ],
  },
  communicationHub: {
    topic: "carrier communication",
    faqIds: [
      "platform-communication",
      "carrier-who-talks",
      "carrier-how-handled",
      "carrier-timeline",
      "carrier-disputes",
    ],
  },
  roofing: {
    topic: "roofing claims",
    faqIds: [
      "roofing-carrier-documentation",
      "roofing-storm-vs-retail",
      "roofing-code-items",
      "roofing-measurements",
      "roofing-op",
      "supplements-whats-included",
    ],
  },
  waterDamage: {
    topic: "water damage claims",
    faqIds: [
      "water-mitigation-scope",
      "water-drying-documentation",
      "resources-water-mitigation-documentation",
      "water-category-class",
      "water-rebuild-supplements",
      "water-emergency-vs-rebuild",
    ],
  },
  fireDamage: {
    topic: "fire damage claims",
    faqIds: [
      "fire-smoke-soot",
      "resources-fire-damage-documentation",
      "fire-structural-vs-contents",
      "fire-demo-rebuild",
      "fire-odor-deodorization",
      "fire-total-loss-partial",
    ],
  },
  mold: {
    topic: "mold claims",
    faqIds: [
      "mold-remediation-docs",
      "mold-testing",
      "mold-carrier-pushback",
      "mold-containment-equipment",
      "mold-water-relationship",
    ],
  },
  contents: {
    topic: "contents restoration",
    faqIds: [
      "contents-pack-out",
      "contents-inventory",
      "contents-storage",
      "contents-specialty-items",
      "contents-fire-water",
    ],
  },
  about: {
    topic: "Claims Ninja",
    faqIds: [
      "getting-started-who-for",
      "getting-started-onboarding",
      "getting-started-field-vs-support",
      "carrier-public-adjuster",
      "platform-data-secure",
      "supplements-whats-included",
    ],
  },
  contact: {
    topic: "contacting Claims Ninja",
    faqIds: [
      "contact-response-time",
      "contact-multiple-claims",
      "contact-carrier-estimate",
      "getting-started-who-for",
      "getting-started-onboarding",
    ],
  },
  partnerNetwork: {
    topic: "partnering with Claims Ninja",
    faqIds: [
      "partner-network-strategic-partners",
      "partner-network-services-required",
      "partner-network-how-selected",
      "partner-network-request-introduction",
      "partner-network-who-eligible",
      "partner-network-financing",
      "partner-network-legal-partner",
      "partner-network-911-restoration",
      "partner-network-become-partner",
    ],
  },
  reviews: {
    topic: "contractor reviews and partnerships",
    faqIds: [
      "getting-started-who-for",
      "supplements-whats-included",
      "supplements-turnaround",
      "carrier-how-handled",
      "carrier-timeline",
    ],
  },
  blog: {
    topic: "contractor claims operations",
    faqIds: [
      "resources-water-mitigation-documentation",
      "resources-fire-damage-documentation",
      "help-denied-supplements",
      "supplements-whats-included",
      "documentation-essentials",
    ],
  },
  guides: {
    topic: "claims documentation and supplements",
    faqIds: [
      "documentation-essentials",
      "supplements-process",
      "documentation-photos",
      "getting-started-onboarding",
      "supplements-documentation",
      "help-denied-supplements",
    ],
  },
  caseStudies: {
    topic: "Results & Insights and recovery outcomes",
    faqIds: [
      "results-insights-what-is-page",
      "results-insights-real-examples",
      "results-insights-recovery-increase",
      "results-insights-trade-opportunities",
      "results-insights-portfolio-review",
      "results-insights-common-issues",
      "results-insights-commercial-portfolios",
      "results-insights-book-of-business",
    ],
  },
  videos: {
    topic: "the Claims Ninja platform",
    faqIds: [
      "getting-started-onboarding",
      "platform-claim-tracking",
      "ai-how-helps",
      "platform-communication",
      "getting-started-first-claim",
    ],
  },
} as const;

export function getSiteFaqConfig(key: SiteFaqPageKey): SiteFaqConfig {
  return SITE_FAQ[key];
}
