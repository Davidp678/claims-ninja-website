/**
 * Canonical client-facing fee schedule (authoritative for /help billing content).
 * Internal "Profit Points" in /tcnhc reflect margin targets for ops — not client invoices.
 */
export const CLIENT_FEE_SCHEDULE = {
  estimates: [
    { range: "Under $12,500", fee: "$100 minimum" },
    { range: "$12,500 – $100,000", fee: "1.25% of estimate value" },
    { range: "$100,001 – $200,000", fee: "0.75% of estimate value" },
    { range: "$200,000+", fee: "0.50% of estimate value" },
  ],
  negotiations: {
    minimum: "$150",
    withCarrierEstimate:
      "15% of the documented settlement increase above the carrier's original estimate",
    withoutCarrierEstimate: "4% of the final Replacement Cost Value (RCV) settlement",
  },
  supplements:
    "15% of the documented increase approved by the insurance carrier resulting from the submitted supplemental scope",
  passThrough: [
    { item: "Appraisal (when required)", fee: "$500 – $1,200 average" },
    { item: "Eagleview (roofing, when required)", fee: "$60 per project" },
  ],
  enterpriseOverride:
    "If an enterprise deal was already negotiated, those prices supersede these templated prices.",
} as const;

/** Internal margin reference — for staff only; do not publish on client billing pages. */
export const INTERNAL_MARGIN_REFERENCE = {
  note: "Profit Points in internal docs describe target margins, not client-facing invoices. Always use CLIENT_FEE_SCHEDULE for contractor billing.",
  settlements: [
    { range: "$5,000 – $24,999", rate: "4.00%" },
    { range: "Up to $49,999", rate: "3.66%" },
    { range: "Up to $124,999", rate: "3.33%" },
    { range: "$200,000+", rate: "3.00%" },
  ],
  supplements: "8–10% internal margin target",
  freeMoneySupplements: "50% internal margin target (program not yet enacted with clients)",
} as const;
