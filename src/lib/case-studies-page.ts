export const CASE_STUDIES_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const CASE_STUDIES_HERO = {
  title: "Results & Insights",
  description:
    "Insights gathered from thousands of insurance claims across roofing, restoration, mitigation, reconstruction, and commercial projects nationwide. Explore common recovery opportunities, trade-specific trends, and the claim patterns we see every day.",
} as const;

export const CASE_STUDIES_TRADE_RESULTS = {
  eyebrow: "Industry intelligence",
  title: "Recovery Results by Trade",
  description:
    "Patterns consistently observed across the trades we review most — what carriers miss, where estimates fall short, and where recovery opportunity typically exists.",
} as const;

export type TradeResultCard = {
  id: string;
  title: string;
  recoveryRange: string;
  commonFindings: readonly string[];
  areasReviewed: readonly string[];
  opportunities: readonly string[];
};

export const CASE_STUDIES_TRADE_CARDS: readonly TradeResultCard[] = [
  {
    id: "roofing",
    title: "Roofing",
    recoveryRange: "25%–50%",
    commonFindings: [
      "Missing accessories",
      "Underestimated waste",
      "Code compliance gaps",
      "Material pricing discrepancies",
    ],
    areasReviewed: [
      "Roofing estimates",
      "Code requirements",
      "Accessory scope",
      "Labor and material pricing",
    ],
    opportunities: [
      "Expanded approved scope",
      "Increased recovery values",
      "Stronger documentation packages",
    ],
  },
  {
    id: "water-mitigation",
    title: "Water Mitigation",
    recoveryRange: "20%–45%",
    commonFindings: [
      "Incomplete moisture documentation",
      "Under-scoped drying equipment",
      "Mitigation-to-rebuild disconnects",
      "Missing monitoring and containment",
    ],
    areasReviewed: [
      "Moisture mapping and dry logs",
      "Mitigation scope and equipment days",
      "Category and class considerations",
      "Rebuild scope alignment",
    ],
    opportunities: [
      "Stronger mitigation documentation",
      "Expanded drying and demo scope",
      "Clearer phase separation for carrier review",
    ],
  },
  {
    id: "fire-restoration",
    title: "Fire Restoration",
    recoveryRange: "20%–40%",
    commonFindings: [
      "Under-scoped smoke and odor treatment",
      "Missing structural and trade coordination",
      "Incomplete demolition and debris scope",
      "Contents and structure scope gaps",
    ],
    areasReviewed: [
      "Structural and multi-trade scopes",
      "Smoke sealing and deodorization",
      "Code and ordinance items",
      "Demolition, debris, and protection",
    ],
    opportunities: [
      "More complete rebuild scopes",
      "Better trade coordination documentation",
      "Stronger carrier-ready file organization",
    ],
  },
  {
    id: "mold-remediation",
    title: "Mold Remediation",
    recoveryRange: "15%–35%",
    commonFindings: [
      "Insufficient containment documentation",
      "Missing HEPA and antimicrobial scope",
      "Testing and clearance gaps",
      "Rebuild disconnect after remediation",
    ],
    areasReviewed: [
      "Containment and remediation protocols",
      "HEPA vacuuming and detail cleaning",
      "Moisture source documentation",
      "Clearance and rebuild alignment",
    ],
    opportunities: [
      "Dispute-ready remediation files",
      "Expanded protocol-driven scope",
      "Cleaner rebuild continuity",
    ],
  },
  {
    id: "reconstruction",
    title: "Reconstruction",
    recoveryRange: "20%–45%",
    commonFindings: [
      "Interior finish scope gaps",
      "Multi-trade labor under-scoping",
      "Code upgrade omissions",
      "Matching and transition inconsistencies",
    ],
    areasReviewed: [
      "Drywall, flooring, and finish scopes",
      "Cabinet, trim, and paint transitions",
      "Electrical and mechanical rebuild items",
      "Code-required upgrades and permits",
    ],
    opportunities: [
      "More accurate rebuild estimates",
      "Expanded interior and finish scope",
      "Stronger documentation for carrier review",
    ],
  },
  {
    id: "contents-restoration",
    title: "Contents Restoration",
    recoveryRange: "15%–35%",
    commonFindings: [
      "Inventory and chain-of-custody gaps",
      "Under-documented specialty items",
      "Storage and handling omissions",
      "Cleaning method documentation deficiencies",
    ],
    areasReviewed: [
      "Inventory and pack-out operations",
      "Cleaning and restoration protocols",
      "Storage duration and warehouse logs",
      "Electronics and high-value item files",
    ],
    opportunities: [
      "More complete contents documentation",
      "Stronger pricing support for specialty items",
      "Organized carrier-ready submissions",
    ],
  },
] as const;

export const CASE_STUDIES_COMMON_FINDINGS = {
  eyebrow: "Pattern recognition",
  title: "What We Commonly Find",
  description:
    "Recurring deficiency categories identified across thousands of reviewed claims — the issues carriers overlook and contractors leave uncaptured without systematic estimate review.",
  categories: [
    {
      title: "Scope Omissions",
      description:
        "Line items and assemblies frequently absent from carrier estimates — often because field conditions, access requirements, or trade sequencing were not reflected in the initial scope.",
      items: [
        "Missing accessory and trim line items",
        "Temporary repairs and protection",
        "Detach and reset operations",
        "Debris removal and disposal",
        "Interior scope gaps after mitigation",
      ],
    },
    {
      title: "Code Compliance Gaps",
      description:
        "Jurisdiction-specific upgrades and code-driven work that carriers omit when estimates are based on pre-loss conditions rather than current code requirements.",
      items: [
        "Building code upgrades",
        "Ice and water barrier requirements",
        "Ventilation and exhaust requirements",
        "Safety and access regulations",
        "Permit-related costs",
      ],
    },
    {
      title: "Pricing Discrepancies",
      description:
        "Material, labor, and equipment rates that do not reflect market conditions, regional pricing, or the actual cost basis required to perform documented work.",
      items: [
        "Material pricing below market",
        "Labor burden and productivity factors",
        "Market condition adjustments",
        "Regional pricing variations",
        "Equipment rate deficiencies",
      ],
    },
    {
      title: "Documentation Opportunities",
      description:
        "Files that lack the organized photos, logs, and supporting records needed to defend scope — creating recoverability gaps even when the work was performed correctly.",
      items: [
        "Incomplete photo documentation",
        "Missing moisture or drying logs",
        "Weak cause-and-origin narratives",
        "Inconsistent estimate-to-field alignment",
        "Gaps in carrier correspondence records",
      ],
    },
    {
      title: "O&P Eligibility",
      description:
        "Overhead and profit considerations on multi-trade losses where contractor coordination, supervision, and general conditions justify review under carrier estimate standards.",
      items: [
        "Multi-trade coordination scope",
        "Project supervision requirements",
        "General conditions on complex losses",
        "Phased billing and trade sequencing",
        "Contractor role documentation gaps",
      ],
    },
    {
      title: "Coordination Costs",
      description:
        "Labor, equipment, and administrative scope tied to project management, trade coordination, and the operational overhead of running complex insurance restoration work.",
      items: [
        "Equipment reimbursement gaps",
        "Project supervision and GC scope",
        "Administrative and scheduling labor",
        "Protection and site management",
        "Trade mobilization and sequencing",
      ],
    },
  ],
} as const;

export const CASE_STUDIES_PORTFOLIO = {
  title: "Portfolio Recovery Review",
  description:
    "Claims Ninja reviews active, closed, and underpaid claims across a contractor's operation to identify recurring estimate deficiencies, workflow issues, supplementing gaps, and recovery opportunities.",
  whatWeAnalyze: [
    "Estimate quality",
    "Supplement frequency",
    "Recovery percentages",
    "Carrier trends",
    "Trade-specific deficiencies",
    "Revenue leakage opportunities",
  ],
  typicalOutcome:
    "Contractors discover systematic revenue left behind across dozens or hundreds of claims — not just one file. Portfolio review surfaces patterns invisible when claims are evaluated individually: recurring scope gaps, inconsistent supplement workflows, and carrier-specific trends that compound across a book of business.",
} as const;

export type RecoveryExample = {
  id: string;
  title: string;
  carrierEstimate: string;
  additionalRecovery: string;
  recoveryIncrease: string;
  keyFindings: readonly string[];
};

export const CASE_STUDIES_RECOVERY_EXAMPLES: readonly RecoveryExample[] = [
  {
    id: "commercial-roofing",
    title: "Commercial Roofing Portfolio",
    carrierEstimate: "$840,000",
    additionalRecovery: "$312,000",
    recoveryIncrease: "37%",
    keyFindings: [
      "Accessory and code item omissions across multiple roofs",
      "Material pricing below regional market rates",
      "Waste and steep charges under-scoped on complex geometry",
    ],
  },
  {
    id: "multi-family-water",
    title: "Multi-Family Water Loss",
    carrierEstimate: "$485,000",
    additionalRecovery: "$178,000",
    recoveryIncrease: "37%",
    keyFindings: [
      "Mitigation equipment days and monitoring under-scoped",
      "Rebuild scope disconnected from drying documentation",
      "O&P eligibility on multi-unit coordination scope",
    ],
  },
  {
    id: "fire-restoration",
    title: "Fire Restoration Project",
    carrierEstimate: "$620,000",
    additionalRecovery: "$198,000",
    recoveryIncrease: "32%",
    keyFindings: [
      "Smoke sealing and HVAC scope gaps",
      "Multi-trade labor under-scoped on structural rebuild",
      "Code upgrade items omitted from carrier estimate",
    ],
  },
] as const;

export const CASE_STUDIES_RECOVERY_EXAMPLES_SECTION = {
  eyebrow: "Proof points",
  title: "Representative Recovery Examples",
  description:
    "Concise benchmarks from reviewed claims — illustrative of recovery patterns, not the focus of this page.",
} as const;
