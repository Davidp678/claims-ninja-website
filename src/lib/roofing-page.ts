export const ROOFING_META = {
  path: "/solutions/roofing",
  metaTitle: "Roofing Claims",
  metaDescription:
    "Maximize recoveries on residential and commercial roofing losses with Claims Ninja documentation, supplement strategy, and carrier negotiation built for real roofing operations.",
} as const;

export const ROOFING_HERO = {
  eyebrow: "Solutions",
  title: "Roofing Claims",
  description:
    "Maximize recoveries on residential and commercial roofing losses with documentation, supplement strategy, and carrier negotiation built for real roofing operations.",
} as const;

/** Add a licensed cinematic roofing/storm-documentation photo at this path. */
export const ROOFING_HERO_IMAGE = {
  src: "/images/solutions/roofing-hero.webp",
  alt: "Roofing contractor documenting storm damage on a steep-slope residential roof",
} as const;

export const ROOFING_SEGMENTS = {
  eyebrow: "Roofing claim support",
  title: "Built for storm volume, retail roofing, and complex carrier scopes",
  description:
    "Roofing claims move fast. Claims Ninja helps contractors turn photos, estimates, measurements, code requirements, and field documentation into organized supplement opportunities.",
  items: [
    {
      title: "Storm Restoration",
      description:
        "Support for high-volume storm books, repeat claim intake, and documentation consistency across multiple roof losses.",
    },
    {
      title: "Residential Roofing",
      description:
        "Supplement strategy for shingles, accessories, ventilation, code items, waste, steep charges, and carrier scope gaps.",
    },
    {
      title: "Commercial Roofing",
      description:
        "Support for flat roofing, coatings, membranes, metal systems, larger scopes, and documentation-heavy carrier review.",
    },
  ],
} as const;

export const ROOFING_FEATURES = {
  eyebrow: "What we handle",
  title: "Roofing claim details carriers love to miss",
  items: [
    {
      title: "Scope Accuracy",
      description:
        "Line-item detail aligned to manufacturer specs, damage patterns, roof system components, and how the roof was actually built.",
    },
    {
      title: "Code & Compliance Items",
      description:
        "Items such as drip edge, ice and water shield, ventilation, decking requirements, and jurisdiction-specific upgrades may require review.",
    },
    {
      title: "Waste & Measurement Factors",
      description:
        "Roof geometry, waste factors, pitch, layers, cut-up complexity, and measurement discrepancies can materially affect the final scope.",
    },
    {
      title: "Flashing & Penetrations",
      description:
        "Step flashing, counter flashing, pipe boots, vents, valleys, skylights, and wall intersections often deserve a closer look.",
    },
    {
      title: "Steep, High & Access Charges",
      description:
        "Pitch, height, access limitations, safety requirements, and labor conditions may create legitimate scope considerations.",
    },
    {
      title: "Roofing Accessories",
      description:
        "Starter course, ridge cap, hip cap, vents, drip edge, valley components, and other accessories can be missed or under-scoped.",
    },
  ],
} as const;

export const ROOFING_WORKFLOW = {
  eyebrow: "How it works",
  title: "From roof documentation to supplement strategy",
  steps: [
    {
      step: "01",
      title: "Submit Claim Materials",
      description:
        "Photos, estimates, EagleView/measurements, scopes, carrier letters, and job details come into one organized review process.",
    },
    {
      step: "02",
      title: "We Build the Claim Picture",
      description:
        "Our team reviews quantities, roof components, damage documentation, code considerations, and estimate gaps.",
    },
    {
      step: "03",
      title: "Supplement Opportunities Are Identified",
      description:
        "We flag missing line items, pricing issues, scope gaps, and items worth pursuing with the carrier.",
    },
    {
      step: "04",
      title: "Contractor Gets a Clear Path Forward",
      description:
        "You receive organized next steps, documentation direction, and claim support without building an internal claims department.",
    },
  ],
} as const;

export const ROOFING_MISSED_ITEMS = {
  title: "Common roofing items that deserve a second look",
  description:
    "These line items are commonly missed depending on scope, code, and documentation. Each may require review—not every item is owed on every claim.",
  items: [
    "Drip edge and starter course",
    "Ice & water shield",
    "Valley metal or valley lining",
    "Ridge cap and hip cap",
    "Step flashing and counter flashing",
    "Pipe boots, vents, and accessories",
    "Steep and high charges",
    "Tear-off, waste, and labor factors",
    "Code-required upgrades",
    "O&P or supervision where applicable",
  ],
} as const;

export const ROOFING_FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
