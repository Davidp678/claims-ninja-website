export const MOLD_META = {
  path: "/solutions/mold",
  metaTitle: "Mold Claims",
  metaDescription:
    "We help restoration contractors organize mold remediation, containment, clearance, rebuild, and carrier documentation into claim support built for disputed or protocol-driven losses.",
} as const;

export const MOLD_HERO = {
  eyebrow: "Solutions",
  title: "Mold Claims",
  description:
    "We help restoration contractors organize mold remediation, containment, clearance, rebuild, and carrier documentation into claim support built for disputed or protocol-driven losses.",
} as const;

/** Add a licensed cinematic mold remediation/restoration photo at this path. */
export const MOLD_HERO_IMAGE = {
  src: "/images/solutions/mold-hero.webp",
  alt: "Restoration contractor documenting mold remediation containment and protocol-driven scope at a loss site",
} as const;

export const MOLD_SEGMENTS = {
  eyebrow: "Mold claim support",
  title: "Built for remediation scopes, containment work, and disputed files",
  description:
    "Mold claims require clean documentation, careful scope alignment, and a clear connection between remediation, testing, rebuild work, and carrier review. Claims Ninja helps contractors build files that are easier to defend.",
  items: [
    {
      title: "Remediation Protocols",
      description:
        "Support for containment, demolition, cleaning, HEPA vacuuming, antimicrobial treatment, and protocol-driven scope review.",
    },
    {
      title: "Clearance & Documentation",
      description:
        "Help organizing photos, testing records, moisture data, remediation notes, and clearance-related documentation.",
    },
    {
      title: "Rebuild Continuity",
      description:
        "Scope support for drywall, insulation, trim, paint, flooring, cabinetry, and affected assemblies after remediation.",
    },
  ],
} as const;

export const MOLD_WORKFLOW = {
  eyebrow: "How it works",
  title: "From mold file to claim strategy",
  steps: [
    {
      step: "01",
      title: "Submit Claim Materials",
      description:
        "Upload photos, inspection notes, remediation estimates, testing information, moisture readings, carrier letters, and rebuild details.",
    },
    {
      step: "02",
      title: "We Organize the Loss Picture",
      description:
        "Our team reviews affected materials, containment needs, remediation scope, clearance documentation, rebuild requirements, and estimate gaps.",
    },
    {
      step: "03",
      title: "Supplement Opportunities Are Identified",
      description:
        "We flag missing line items, pricing issues, documentation gaps, rebuild disconnects, and items that may warrant carrier review.",
    },
    {
      step: "04",
      title: "Contractor Gets a Clear Path Forward",
      description:
        "You receive organized next steps, documentation direction, and claim support for mold files that carriers often scrutinize.",
    },
  ],
} as const;

export const MOLD_FEATURES = {
  eyebrow: "What we handle",
  title: "Mold claim details carriers love to question",
  items: [
    {
      title: "Containment Scope",
      description:
        "Containment barriers, negative air, zipper doors, protection, and work-area separation should align with the protocol and affected areas.",
    },
    {
      title: "Remediation Labor",
      description:
        "Demolition, HEPA vacuuming, cleaning, antimicrobial treatment, detail labor, and material handling may require careful documentation.",
    },
    {
      title: "Testing & Clearance",
      description:
        "Lab results, clearance documentation, inspection notes, and testing requirements can shape the claim file and scope review.",
    },
    {
      title: "Moisture & Source Documentation",
      description:
        "Moisture readings, leak source details, affected assemblies, and dry-out history help connect the mold condition to the claim narrative.",
    },
    {
      title: "Rebuild Scope Alignment",
      description:
        "Drywall, insulation, trim, paint, flooring, cabinets, and affected finishes should connect cleanly to the remediation scope.",
    },
    {
      title: "Dispute-Ready Files",
      description:
        "Photos, notes, protocols, estimates, invoices, reports, and correspondence should tell one consistent story before carrier review.",
    },
  ],
} as const;

export const MOLD_MISSED_ITEMS = {
  title: "Common mold claim items that deserve a second look",
  description:
    "Not every item is owed on every claim. These are common areas that may require review depending on documentation, policy, protocol, scope, and loss conditions.",
  items: [
    "Containment barriers and zipper doors",
    "Negative air equipment",
    "HEPA vacuuming and detail cleaning",
    "Antimicrobial treatment",
    "Selective demolition",
    "Protection and masking",
    "Moisture readings and source documentation",
    "Testing or clearance documentation",
    "Debris handling and disposal",
    "Rebuild scope after remediation",
    "Contents manipulation or protection",
    "Documentation gaps that trigger carrier pushback",
  ],
} as const;

export const MOLD_FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
