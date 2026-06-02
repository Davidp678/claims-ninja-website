export const CONTENTS_RESTORATION_META = {
  path: "/solutions/contents",
  metaTitle: "Contents Restoration Claims",
  metaDescription:
    "Claims support for inventory-heavy, documentation-heavy contents losses—pack-out operations, specialty restoration, chain of custody, and carrier-ready files for contents restoration firms.",
} as const;

export const CONTENTS_RESTORATION_HERO = {
  eyebrow: "Solutions",
  title: "Contents Restoration Claims",
  description:
    "Claims support for inventory-heavy, documentation-heavy contents losses. We help pack-out companies, inventory specialists, and specialty restoration firms organize inventory records, cleaning documentation, storage logs, and carrier submissions into files built for review.",
} as const;

/** Add a licensed contents restoration warehouse / inventory photo at this path. */
export const CONTENTS_RESTORATION_HERO_IMAGE = {
  src: "/images/solutions/contents-restoration-hero.webp",
  alt: "Contents restoration technician documenting barcoded inventory and packed personal property in a warehouse environment",
} as const;

export const CONTENTS_RESTORATION_SEGMENTS = {
  eyebrow: "Industry support",
  title: "Built for pack-out firms, inventory operations, and specialty restoration",
  description:
    "Contents losses live or die on documentation. Claims Ninja helps contents restoration companies connect inventory, cleaning, storage, chain of custody, and pricing into claim files carriers can actually review.",
  items: [
    {
      title: "Pack-Out & Inventory Operations",
      description:
        "Support for room-by-room inventories, barcoding, tagging, boxing, transport logs, and warehouse intake documentation.",
    },
    {
      title: "Textile & Specialty Restoration",
      description:
        "Help organizing cleaning methods, process documentation, specialty handling notes, and valuation support for garments, upholstery, and delicate items.",
    },
    {
      title: "Electronics & High-Value Contents",
      description:
        "Documentation support for testing records, restoration protocols, serial numbers, appraisals, and high-value item files that carriers scrutinize closely.",
    },
  ],
} as const;

export const CONTENTS_RESTORATION_WORKFLOW = {
  eyebrow: "How it works",
  title: "From contents file to claim strategy",
  steps: [
    {
      step: "01",
      title: "Submit Claim Materials",
      description:
        "Upload inventories, pack-out records, photos, cleaning documentation, storage logs, testing reports, estimates, carrier letters, and specialty restoration details.",
    },
    {
      step: "02",
      title: "We Organize the Contents Picture",
      description:
        "Our team reviews inventory completeness, chain of custody, cleaning and storage records, specialty restoration scope, pricing, and carrier documentation requirements.",
    },
    {
      step: "03",
      title: "Supplement Opportunities Are Identified",
      description:
        "We flag missing line items, under-documented high-value items, pricing disputes, storage or handling gaps, and contents items that may warrant carrier review.",
    },
    {
      step: "04",
      title: "Your Team Gets a Clear Path Forward",
      description:
        "You receive organized next steps, documentation direction, and claim support for inventory-heavy files that depend on proof, not assumptions.",
    },
  ],
} as const;

export const CONTENTS_RESTORATION_FEATURES = {
  eyebrow: "What we handle",
  title: "Contents claim details carriers love to question",
  items: [
    {
      title: "Inventory Documentation",
      description:
        "Room inventories, item descriptions, quantities, condition notes, photos, and barcoding should tell a complete story from loss site to warehouse.",
    },
    {
      title: "Pack-Out Operations",
      description:
        "Labor, materials, boxing, tagging, transport, protection, and on-site handling often need clear documentation tied to the inventory file.",
    },
    {
      title: "Cleaning Documentation",
      description:
        "Cleaning methods, process notes, specialty handling, deodorization, and restoration labor should align with item type and carrier expectations.",
    },
    {
      title: "Storage Records",
      description:
        "Warehouse intake, shelving, climate considerations, duration, handling logs, and retrieval documentation can shape claim review and pricing disputes.",
    },
    {
      title: "Electronics Restoration",
      description:
        "Testing records, restoration protocols, parts replacement, data recovery notes, and serial-number tracking help defend specialty electronics scopes.",
    },
    {
      title: "Textile Restoration",
      description:
        "Garment, upholstery, and fabric restoration often requires process documentation, specialty cleaning methods, and careful valuation support.",
    },
  ],
} as const;

export const CONTENTS_RESTORATION_MISSED_ITEMS = {
  title: "Common contents claim items that deserve a second look",
  description:
    "Not every item is owed on every claim. These are common areas that may require review depending on documentation, policy, inventory completeness, storage conditions, and carrier requirements.",
  items: [
    "Chain of custody and intake documentation",
    "Barcoding, tagging, or inventory gaps",
    "High-value item photos and supporting records",
    "Cleaning method and process documentation",
    "Storage duration and warehouse handling logs",
    "Electronics testing and restoration records",
    "Textile process and specialty cleaning documentation",
    "Pack-out labor, materials, and transport",
    "Contents manipulation and on-site handling",
    "Pricing disputes on specialty or antique items",
    "Carrier-specific documentation format requirements",
    "Documentation gaps that trigger carrier pushback",
  ],
} as const;

export const CONTENTS_RESTORATION_FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
