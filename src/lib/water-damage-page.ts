export const WATER_DAMAGE_META = {
  path: "/solutions/water-damage",
  metaTitle: "Water Damage Claims",
  metaDescription:
    "Water damage claim support from Claims Ninja—mitigation documentation, moisture readings, rebuild scopes, and supplement strategy built for restoration contractors.",
} as const;

export const WATER_DAMAGE_HERO = {
  eyebrow: "Solutions",
  title: "Water Damage Claims",
  description:
    "We turn mitigation documentation, moisture readings, rebuild scopes, and carrier correspondence into organized claim support built for restoration contractors.",
} as const;

/** Add a licensed cinematic water mitigation/restoration photo at this path. */
export const WATER_DAMAGE_HERO_IMAGE = {
  src: "/images/solutions/water-damage-hero.webp",
  alt: "Restoration contractor documenting moisture readings and mitigation equipment at a water-damaged property",
} as const;

export const WATER_DAMAGE_SEGMENTS = {
  eyebrow: "Water claim support",
  title: "Built for mitigation, rebuilds, and documentation-heavy losses",
  description:
    "Water losses move quickly and carriers scrutinize every detail. Claims Ninja helps restoration contractors organize the file, connect mitigation to reconstruction, and identify supplement opportunities.",
  items: [
    {
      title: "Emergency Mitigation",
      description:
        "Documentation support for dry-out, equipment, moisture mapping, demolition, containment, and carrier review.",
    },
    {
      title: "Reconstruction Scopes",
      description:
        "Scope development for drywall, flooring, cabinets, trim, paint, contents handling, and affected assemblies.",
    },
    {
      title: "Complex Water Losses",
      description:
        "Support for category/class considerations, multi-room damage, hidden moisture, access issues, and documentation-heavy claims.",
    },
  ],
} as const;

export const WATER_DAMAGE_WORKFLOW = {
  eyebrow: "How it works",
  title: "From mitigation file to claim strategy",
  steps: [
    {
      step: "01",
      title: "Submit Claim Materials",
      description:
        "Upload photos, moisture readings, estimates, drying logs, equipment records, carrier correspondence, and rebuild details.",
    },
    {
      step: "02",
      title: "We Organize the Loss Picture",
      description:
        "Our team reviews affected areas, drying documentation, demolition scope, rebuild requirements, and estimate gaps.",
    },
    {
      step: "03",
      title: "Supplement Opportunities Are Identified",
      description:
        "We flag missing line items, pricing issues, scope gaps, and documentation needs that may warrant carrier review.",
    },
    {
      step: "04",
      title: "Contractor Gets a Clear Path Forward",
      description:
        "You receive organized next steps, documentation direction, and claim support without building an internal claims department.",
    },
  ],
} as const;

export const WATER_DAMAGE_FEATURES = {
  eyebrow: "What we handle",
  title: "Water damage claim details carriers love to question",
  items: [
    {
      title: "Moisture Documentation",
      description:
        "Moisture readings, dry logs, affected materials, equipment usage, and drying timelines should support the scope being presented.",
    },
    {
      title: "Mitigation Scope",
      description:
        "Water extraction, containment, demolition, antimicrobial treatment, equipment, monitoring, and labor details may require careful review.",
    },
    {
      title: "Rebuild Scope Alignment",
      description:
        "Drywall, insulation, flooring, trim, paint, cabinetry, and affected assemblies should connect cleanly to the mitigation file.",
    },
    {
      title: "Category & Class Considerations",
      description:
        "Category of water, class of loss, affected areas, and material porosity can shape documentation and estimate review.",
    },
    {
      title: "Contents & Protection",
      description:
        "Pack-out, manipulation, protection, cleaning, storage, and reset considerations may affect the claim depending on scope.",
    },
    {
      title: "Carrier Documentation",
      description:
        "Photos, notes, logs, invoices, estimates, and correspondence should tell one consistent story before submission.",
    },
  ],
} as const;

export const WATER_DAMAGE_MISSED_ITEMS = {
  title: "Common water damage items that deserve a second look",
  description:
    "Not every item is owed on every claim. These are common areas that may require review depending on documentation, policy, scope, and loss conditions.",
  items: [
    "Moisture mapping and dry logs",
    "Equipment days and monitoring",
    "Content manipulation or pack-out",
    "Baseboard, trim, and paint transitions",
    "Drywall cuts and insulation",
    "Cabinet detach/reset or replacement",
    "Flooring removal and matching concerns",
    "Containment and dust protection",
    "Antimicrobial treatment",
    "Demo labor and debris handling",
    "Access, masking, and protection",
    "Rebuild scope alignment after mitigation",
  ],
} as const;

export const WATER_DAMAGE_FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
