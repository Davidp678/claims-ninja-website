export const FIRE_DAMAGE_META = {
  path: "/solutions/fire-damage",
  metaTitle: "Fire Damage Claims",
  metaDescription:
    "We help restoration contractors organize fire, smoke, structural, contents, and rebuild documentation into claim support built for complex carrier review.",
} as const;

export const FIRE_DAMAGE_HERO = {
  eyebrow: "Solutions",
  title: "Fire Damage Claims",
  description:
    "We help restoration contractors organize fire, smoke, structural, contents, and rebuild documentation into claim support built for complex carrier review.",
} as const;

/** Add a licensed cinematic fire-loss restoration photo at this path. */
export const FIRE_DAMAGE_HERO_IMAGE = {
  src: "/images/solutions/fire-damage-hero.webp",
  alt: "Restoration contractor documenting fire and smoke damage in a structural rebuild environment",
} as const;

export const FIRE_DAMAGE_SEGMENTS = {
  eyebrow: "Fire claim support",
  title: "Built for complex rebuilds, smoke losses, and multi-trade scopes",
  description:
    "Fire claims rarely involve one clean scope. Claims Ninja helps contractors organize the structure, contents, mitigation, cleaning, code, and rebuild documentation needed to support the claim.",
  items: [
    {
      title: "Structural Rebuilds",
      description:
        "Support for demolition, framing, roofing, mechanical trades, finishes, and reconstruction scope alignment.",
    },
    {
      title: "Smoke & Odor Losses",
      description:
        "Documentation support for cleaning, sealing, deodorization, HVAC concerns, and affected material review.",
    },
    {
      title: "Contents Coordination",
      description:
        "Help aligning structure and personal property workflows when pack-out, cleaning, storage, or replacement are in play.",
    },
  ],
} as const;

export const FIRE_DAMAGE_WORKFLOW = {
  eyebrow: "How it works",
  title: "From fire file to claim strategy",
  steps: [
    {
      step: "01",
      title: "Submit Claim Materials",
      description:
        "Upload photos, estimates, mitigation records, engineering notes, contents documentation, carrier letters, and rebuild details.",
    },
    {
      step: "02",
      title: "We Build the Loss Picture",
      description:
        "Our team reviews affected areas, fire and smoke damage, structural considerations, trade scopes, code items, and estimate gaps.",
    },
    {
      step: "03",
      title: "Supplement Opportunities Are Identified",
      description:
        "We flag missing line items, pricing issues, scope gaps, documentation needs, and items that may warrant carrier review.",
    },
    {
      step: "04",
      title: "Contractor Gets a Clear Path Forward",
      description:
        "You receive organized next steps, documentation direction, and claim support through a longer, more complex recovery cycle.",
    },
  ],
} as const;

export const FIRE_DAMAGE_FEATURES = {
  eyebrow: "What we handle",
  title: "Fire damage claim details carriers love to question",
  items: [
    {
      title: "Structural Scope",
      description:
        "Framing, roof systems, sheathing, drywall, insulation, and finish materials should align with damage conditions and rebuild requirements.",
    },
    {
      title: "Smoke & Odor Treatment",
      description:
        "Cleaning, sealing, deodorization, HVAC considerations, and affected porous materials may require detailed documentation.",
    },
    {
      title: "Code & Ordinance Items",
      description:
        "Electrical, mechanical, framing, fire separation, insulation, and jurisdiction-specific upgrades may require review.",
    },
    {
      title: "Demolition & Debris",
      description:
        "Tear-out, selective demolition, debris handling, access, protection, and labor conditions can materially affect the scope.",
    },
    {
      title: "Contents & Pack-Out",
      description:
        "Manipulation, inventory, cleaning, storage, disposal, and reset considerations may affect the claim depending on scope.",
    },
    {
      title: "Multi-Trade Coordination",
      description:
        "Fire losses often involve roofing, framing, electrical, HVAC, plumbing, drywall, flooring, paint, and specialty trades.",
    },
  ],
} as const;

export const FIRE_DAMAGE_MISSED_ITEMS = {
  title: "Common fire damage items that deserve a second look",
  description:
    "Not every item is owed on every claim. These are common areas that may require review depending on documentation, policy, code, scope, and loss conditions.",
  items: [
    "Smoke sealing and odor treatment",
    "HVAC cleaning or evaluation",
    "Electrical and mechanical scope",
    "Framing, sheathing, and structural repairs",
    "Insulation replacement",
    "Drywall, texture, and paint transitions",
    "Roofing and exterior components",
    "Contents manipulation or pack-out",
    "Debris removal and disposal",
    "Temporary protection and board-up",
    "Code-required upgrades",
    "Trade coordination and supervision",
  ],
} as const;

export const FIRE_DAMAGE_FEATURE_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";
