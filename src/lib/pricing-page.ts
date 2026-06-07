export type PricingRateRow = {
  range: string;
  rate: string;
};

export type PricingOverviewCard = {
  title: string;
  description: string;
};

export type PricingAdditionalService = {
  title: string;
  description: string;
};

export type PricingBillingStep = {
  label: string;
  title: string;
  description: string;
};

export const PRICING_META = {
  path: "/pricing",
  metaTitle: "Pricing",
  metaDescription:
    "Transparent Claims Ninja pricing for estimate writing, supplement support, insurance negotiation, and advanced claim services — structured by claim stage and value recovered.",
} as const;

export const PRICING_HERO = {
  eyebrow: "Pricing",
  title: "Transparent pricing for claim operations",
  description:
    "Pricing is structured around the work required, the claim stage, and the value recovered. Whether you need estimate writing, supplement support, negotiation, or advanced claim services, Claims Ninja keeps pricing clear before work begins.",
  primaryCtaLabel: "Start Claim Review",
  secondaryCtaLabel: "Schedule Strategy Call",
} as const;

export const PRICING_OVERVIEW = {
  eyebrow: "Services",
  title: "Pricing by claim service",
  description:
    "Each service has a defined fee structure so your team knows what to expect before work starts.",
  cards: [
    {
      title: "Estimate writing",
      description:
        "For contractors who need accurate estimate development based on claim size and scope.",
    },
    {
      title: "Supplement support",
      description:
        "For missed scope, hidden damage, pricing discrepancies, and approved supplemental increases.",
    },
    {
      title: "Insurance negotiation",
      description:
        "For carrier estimate gaps, settlement increases, and claim recovery support.",
    },
    {
      title: "Advanced claim support",
      description:
        "For appraisal, complex claims, prolonged files, and supporting documentation needs.",
    },
  ] satisfies readonly PricingOverviewCard[],
} as const;

export const PRICING_ESTIMATE_WRITING = {
  eyebrow: "Estimate writing",
  title: "Estimate writing rates",
  intro:
    "Estimate writing rates are tiered by estimate value so pricing scales fairly with project size.",
  rows: [
    { range: "Under $12,500 estimate value", rate: "$100 minimum" },
    { range: "$12,500 – $100,000", rate: "1.25%" },
    { range: "$100,001 – $200,000", rate: "0.75%" },
    { range: "Over $200,000", rate: "0.50%" },
  ] satisfies readonly PricingRateRow[],
  invoiceNote:
    "Estimate invoices are issued upon completion and client approval through the Client Portal.",
} as const;

export const PRICING_NEGOTIATION = {
  eyebrow: "Insurance negotiation",
  title: "Insurance negotiation rates",
  rows: [
    { range: "Minimum fee", rate: "$150" },
    {
      range: "When a carrier estimate is available",
      rate: "15% of documented settlement increase above the carrier's original estimate",
    },
    {
      range: "When no carrier estimate has been provided",
      rate: "4% of final RCV settlement",
    },
  ] satisfies readonly PricingRateRow[],
  invoiceNote:
    "Negotiation invoices are issued after successful negotiation and final approval.",
} as const;

export const PRICING_SUPPLEMENT = {
  eyebrow: "Supplement support",
  title: "Supplement support rates",
  rows: [
    {
      range: "Approved supplemental scope",
      rate: "15% of documented increase approved by the insurance carrier from submitted supplemental scope",
    },
  ] satisfies readonly PricingRateRow[],
  invoiceNote:
    "Supplement invoices are issued after successful negotiation and final approval.",
} as const;

export const PRICING_NEGOTIATION_SUPPLEMENT_SECTION = {
  eyebrow: "Negotiation & supplements",
  title: "Recovery-based pricing",
  description:
    "Negotiation and supplement fees align to documented carrier-approved increases — not gross invoice totals.",
  sharedInvoiceNote:
    "Negotiation and supplement invoices are issued after successful negotiation and final approval.",
} as const;

export const PRICING_ADDITIONAL_SERVICES = {
  eyebrow: "Additional services",
  title: "Supporting services and payment options",
  description:
    "Complex files and documentation needs may include pass-through or fixed service fees.",
  services: [
    {
      title: "Appraisal support",
      description:
        "$500 – $1,200 depending on claim complexity and scope.",
    },
    {
      title: "EagleView reports",
      description:
        "$60 per project when required for roofing documentation.",
    },
    {
      title: "Payment processing",
      description:
        "ACH is available with no processing fee. Credit card payments include a 3% convenience fee.",
    },
  ] satisfies readonly PricingAdditionalService[],
} as const;

export const PRICING_BILLING = {
  eyebrow: "How billing works",
  title: "From submission to payment",
  description:
    "Invoices are tied to completed work and client approval — then due immediately once approved.",
  steps: [
    {
      label: "1",
      title: "File or service is submitted",
      description:
        "Your team submits a claim file or requests estimate, supplement, negotiation, or support work.",
    },
    {
      label: "2",
      title: "Claims Ninja completes the work",
      description:
        "Estimate development, supplement strategy, negotiation, or supporting claim services are performed.",
    },
    {
      label: "3",
      title: "Client reviews and approves",
      description:
        "You review deliverables and approve completed work through the Client Portal.",
    },
    {
      label: "4",
      title: "Invoice is issued",
      description:
        "An invoice is generated based on the approved service and applicable fee structure.",
    },
    {
      label: "5",
      title: "Payment is processed",
      description:
        "Payment is processed through the method on file — ACH with no fee, or credit card with a 3% convenience fee.",
    },
  ] satisfies readonly PricingBillingStep[],
} as const;
