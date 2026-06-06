export const CASE_STUDIES_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const CASE_STUDIES_HERO = {
  eyebrow: "PROVEN RESULTS ACROSS THOUSANDS OF CLAIMS",
  title: "Recovery Results That Scale With Your Business",
  description:
    "Claims Ninja helps roofing, mitigation, restoration, and reconstruction contractors recover more from insurance claims through expert supplement development, estimate review, documentation support, and claims operations guidance. From individual losses to entire books of business, we help contractors maximize recoverable revenue without building an internal claims department.",
} as const;

export const CASE_STUDIES_HERO_METRICS = [
  { value: "$100M+", label: "Recovery Generated" },
  { value: "5,000+", label: "Claims Reviewed" },
  { value: "40%", label: "Average Recovery Increase" },
  { value: "Nationwide", label: "Contractor Partnerships" },
] as const;

export const CASE_STUDIES_RECOVERY_PROCESS = {
  eyebrow: "How recovery happens",
  title: "From estimate review to recovered revenue",
  steps: [
    {
      step: "01",
      title: "Review",
      description:
        "Every estimate, scope, and supporting document is evaluated for missing revenue opportunities.",
    },
    {
      step: "02",
      title: "Identify",
      description:
        "Code requirements, pricing gaps, scope omissions, documentation deficiencies, and recoverability opportunities are uncovered.",
    },
    {
      step: "03",
      title: "Supplement",
      description:
        "Claims Ninja develops carrier-ready supplements supported by estimate analysis, documentation, and industry expertise.",
    },
    {
      step: "04",
      title: "Recover",
      description:
        "Contractors achieve stronger claim outcomes while reducing internal administrative burden.",
    },
  ],
} as const;

export const CASE_STUDIES_PORTFOLIO = {
  title: "Portfolio Recovery Review",
  situation:
    "A growing restoration contractor was managing dozens of active insurance claims across multiple trades. While claims were being approved and projects were moving forward, leadership suspected significant recovery opportunities were being overlooked due to workload, supplement capacity limitations, and inconsistent documentation practices.",
  commonChallenges: [
    "Limited internal supplementing resources",
    "Inconsistent estimate review processes",
    "Pricing discrepancies across claims",
    "Missed code-related opportunities",
    "Delayed supplement submissions",
    "Administrative strain on project teams",
  ],
  reviewFindings: [
    "Building code compliance",
    "O&P eligibility",
    "Material pricing discrepancies",
    "Labor under-scoping",
    "Equipment reimbursement",
    "Documentation deficiencies",
    "Scope omissions",
  ],
  outcomes: [
    { value: "43", label: "Claims Reviewed" },
    { value: "$2.8M", label: "Additional Recovery Identified" },
    { value: "38%", label: "Average Recovery Increase" },
    { value: "Hundreds", label: "Administrative Hours Saved" },
  ],
  operationalImpact: [
    "Improved claim visibility",
    "More consistent supplement workflows",
    "Faster turnaround times",
    "Reduced burden on project managers",
    "Increased profitability across the claim portfolio",
  ],
} as const;

export const CASE_STUDIES_OPPORTUNITY_LIBRARY = {
  title: "What We Commonly Find",
  description:
    "Representative recovery categories identified across roofing, mitigation, restoration, and reconstruction claims.",
  categories: [
    {
      title: "Scope Opportunities",
      items: [
        "Missing line items",
        "Accessory omissions",
        "Temporary repairs",
        "Detach and reset operations",
        "Debris removal",
        "Interior scope gaps",
      ],
    },
    {
      title: "Pricing Opportunities",
      items: [
        "Material pricing discrepancies",
        "Labor burden issues",
        "Market condition adjustments",
        "Regional pricing variations",
        "Equipment rate deficiencies",
      ],
    },
    {
      title: "Code Opportunities",
      items: [
        "Building code upgrades",
        "Ice and water barrier requirements",
        "Ventilation requirements",
        "Safety regulations",
        "Permit-related costs",
      ],
    },
    {
      title: "Operational Opportunities",
      items: [
        "O&P eligibility",
        "General conditions",
        "Equipment reimbursement",
        "Project supervision",
        "Administrative scope",
      ],
    },
    {
      title: "Restoration Opportunities",
      items: [
        "Drying equipment",
        "Monitoring",
        "Containment",
        "HEPA filtration",
        "Cleaning scope",
        "Pack-out services",
        "Contents handling",
        "Specialty restoration procedures",
      ],
    },
  ],
} as const;

export type IndustryResultCard = {
  id: string;
  title: string;
  recoveryRange: string;
  commonChallenges: readonly string[];
  reviews: readonly string[];
  typicalOutcomes: readonly string[];
};

export const CASE_STUDIES_INDUSTRY_RESULTS: readonly IndustryResultCard[] = [
  {
    id: "roofing",
    title: "ROOFING",
    recoveryRange: "25%–50%",
    commonChallenges: [
      "Missing accessories",
      "Underestimated waste",
      "Code compliance gaps",
      "Material pricing discrepancies",
    ],
    reviews: [
      "Roofing estimates",
      "Code requirements",
      "Accessory scope",
      "Labor and material pricing",
    ],
    typicalOutcomes: [
      "Expanded approved scope",
      "Increased recovery values",
      "Stronger documentation packages",
    ],
  },
  {
    id: "water-mitigation",
    title: "WATER MITIGATION",
    recoveryRange: "20%–45%",
    commonChallenges: [
      "Incomplete moisture documentation",
      "Under-scoped drying equipment",
      "Mitigation-to-rebuild disconnects",
      "Missing monitoring and containment",
    ],
    reviews: [
      "Moisture mapping and dry logs",
      "Mitigation scope and equipment days",
      "Category and class considerations",
      "Rebuild scope alignment",
    ],
    typicalOutcomes: [
      "Stronger mitigation documentation",
      "Expanded drying and demo scope",
      "Clearer phase separation for carrier review",
    ],
  },
  {
    id: "fire-restoration",
    title: "FIRE RESTORATION",
    recoveryRange: "20%–40%",
    commonChallenges: [
      "Under-scoped smoke and odor treatment",
      "Missing structural and trade coordination",
      "Incomplete demolition and debris scope",
      "Contents and structure scope gaps",
    ],
    reviews: [
      "Structural and multi-trade scopes",
      "Smoke sealing and deodorization",
      "Code and ordinance items",
      "Demolition, debris, and protection",
    ],
    typicalOutcomes: [
      "More complete rebuild scopes",
      "Better trade coordination documentation",
      "Stronger carrier-ready file organization",
    ],
  },
  {
    id: "mold-remediation",
    title: "MOLD REMEDIATION",
    recoveryRange: "15%–35%",
    commonChallenges: [
      "Insufficient containment documentation",
      "Missing HEPA and antimicrobial scope",
      "Testing and clearance gaps",
      "Rebuild disconnect after remediation",
    ],
    reviews: [
      "Containment and remediation protocols",
      "HEPA vacuuming and detail cleaning",
      "Moisture source documentation",
      "Clearance and rebuild alignment",
    ],
    typicalOutcomes: [
      "Dispute-ready remediation files",
      "Expanded protocol-driven scope",
      "Cleaner rebuild continuity",
    ],
  },
  {
    id: "reconstruction",
    title: "RECONSTRUCTION",
    recoveryRange: "20%–45%",
    commonChallenges: [
      "Interior finish scope gaps",
      "Multi-trade labor under-scoping",
      "Code upgrade omissions",
      "Matching and transition inconsistencies",
    ],
    reviews: [
      "Drywall, flooring, and finish scopes",
      "Cabinet, trim, and paint transitions",
      "Electrical and mechanical rebuild items",
      "Code-required upgrades and permits",
    ],
    typicalOutcomes: [
      "More accurate rebuild estimates",
      "Expanded interior and finish scope",
      "Stronger documentation for carrier review",
    ],
  },
  {
    id: "contents-restoration",
    title: "CONTENTS RESTORATION",
    recoveryRange: "15%–35%",
    commonChallenges: [
      "Inventory and chain-of-custody gaps",
      "Under-documented specialty items",
      "Storage and handling omissions",
      "Cleaning method documentation deficiencies",
    ],
    reviews: [
      "Inventory and pack-out operations",
      "Cleaning and restoration protocols",
      "Storage duration and warehouse logs",
      "Electronics and high-value item files",
    ],
    typicalOutcomes: [
      "More complete contents documentation",
      "Stronger pricing support for specialty items",
      "Organized carrier-ready submissions",
    ],
  },
] as const;

export type ProofMetric = {
  id: string;
  value: string;
  label: string;
};

export const CASE_STUDIES_PROOF_METRICS: readonly ProofMetric[] = [
  { id: "recovery_generated", value: "$100M+", label: "Recovery Generated" },
  { id: "claims_reviewed", value: "5,000+", label: "Claims Reviewed" },
  { id: "avg_increase", value: "40%", label: "Average Recovery Increase" },
  {
    id: "supplemental_revenue",
    value: "Millions",
    label: "In Supplemental Revenue Identified",
  },
  {
    id: "hours_saved",
    value: "Thousands",
    label: "Of Contractor Hours Saved",
  },
  {
    id: "nationwide",
    value: "Nationwide",
    label: "Contractor Partnerships",
  },
] as const;

export const CASE_STUDIES_OPERATIONAL_IMPACT = [
  {
    title: "Revenue Recovery",
    description:
      "Contractors capture more recoverable revenue across individual claims and entire portfolios without expanding internal claims staff.",
  },
  {
    title: "Workflow Efficiency",
    description:
      "Supplement development, estimate review, and documentation organization move through a consistent process instead of ad hoc project-manager effort.",
  },
  {
    title: "Documentation Quality",
    description:
      "Claim files become more organized, defensible, and carrier-ready — reducing rework and strengthening supplement outcomes.",
  },
  {
    title: "Carrier Communication",
    description:
      "Adjusters receive clearer change summaries and supporting evidence, improving response quality and reducing back-and-forth.",
  },
  {
    title: "Faster Turnaround",
    description:
      "Dedicated supplement capacity helps contractors submit sooner, follow up consistently, and keep production schedules aligned with claim progress.",
  },
  {
    title: "Claim Visibility",
    description:
      "Leadership gains portfolio-level insight into recovery opportunities, supplement status, and claim performance across active jobs.",
  },
] as const;

export type CaseStudyLibraryCard = {
  slug: string;
  title: string;
  description: string;
  href?: string;
};

export const CASE_STUDIES_LIBRARY: readonly CaseStudyLibraryCard[] = [
  {
    slug: "roofing",
    title: "Roofing Recovery Outcomes",
    description:
      "Representative recovery patterns across storm, retail, and commercial roofing claims — accessories, code items, waste, and pricing gaps.",
  },
  {
    slug: "water-mitigation",
    title: "Water Mitigation Recovery Outcomes",
    description:
      "Portfolio-level patterns in drying documentation, equipment scope, mitigation-to-rebuild alignment, and carrier scrutiny on water losses.",
  },
  {
    slug: "fire-restoration",
    title: "Fire Restoration Recovery Outcomes",
    description:
      "Multi-trade fire and smoke loss recovery themes — structural scope, odor treatment, demolition, and contents coordination.",
  },
  {
    slug: "mold-remediation",
    title: "Mold Remediation Recovery Outcomes",
    description:
      "Protocol-driven remediation scope, containment, clearance documentation, and rebuild continuity across disputed mold files.",
  },
  {
    slug: "reconstruction",
    title: "Reconstruction Recovery Outcomes",
    description:
      "Interior rebuild, finish scope, code upgrades, and multi-trade coordination patterns across complex reconstruction claims.",
  },
  {
    slug: "contents-restoration",
    title: "Contents Restoration Recovery Outcomes",
    description:
      "Inventory-heavy contents losses — pack-out, specialty restoration, storage, and documentation patterns that drive recovery.",
  },
] as const;

export const CASE_STUDIES_REVIEWS_BRIDGE = {
  title: "Trusted By Contractors Nationwide",
  description:
    "Contractors across roofing, mitigation, restoration, and reconstruction rely on Claims Ninja to strengthen claim outcomes, improve operational efficiency, and maximize recoverable revenue.",
} as const;
