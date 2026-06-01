export const AI_CLAIM_WORKFLOW = {
  eyebrow: "AI Workflow",
  title: "What the AI Reviews",
  description:
    "AI Claim Analysis reviews claim documentation before expert review, helping identify opportunities, documentation gaps, and areas that may warrant further investigation.",
  cards: [
    {
      title: "Documents Reviewed",
      items: [
        "Carrier Estimates",
        "Contractor Estimates",
        "Scope Sheets",
        "Claim Documentation",
      ],
    },
    {
      title: "What It Detects",
      items: [
        "Missing Line Items",
        "Code Opportunities",
        "Pricing Discrepancies",
        "Documentation Gaps",
      ],
    },
    {
      title: "Output",
      items: [
        "Opportunity Scoring",
        "Supplement Recommendations",
        "Recovery Insights",
        "Expert Review Queue",
      ],
    },
  ],
} as const;
