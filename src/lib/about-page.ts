export const ABOUT_CARD_CLASS =
  "rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45";

export const ABOUT_META = {
  path: "/about",
  metaTitle: "About Claims Ninja",
  metaDescription:
    "Claims Ninja is the contractor claims operations platform—expert insurance claim support, claims management technology, and workflows for restoration and roofing contractors nationwide.",
} as const;

export const ABOUT_HERO = {
  eyebrow: "Company",
  title: "Claim recovery expertise. Enterprise-level execution.",
  paragraphs: [
    "Founded in 2024, Claims Ninja was created to help contractors manage insurance claims with the structure, expertise, and visibility of a professional claims department—without having to build one in-house.",
    "We support roofing, restoration, mitigation, reconstruction, and contents contractors with the workflows, technology, and claim expertise needed to recover more, move faster, and stay focused on growth.",
  ],
} as const;

export const ABOUT_WHY_WE_EXIST = {
  eyebrow: "Why we exist",
  title: "Contractors shouldn't need an in-house claims department",
  paragraphs: [
    "Growing claim volume creates operational complexity that most production-focused teams were never built to absorb. Documentation, supplements, carrier communication, estimate review, claim tracking, and workflow management all compete for the same limited bandwidth.",
    "Most contractors don't want to build an entire internal claims department—they want to run jobs, serve customers, and grow revenue without leaving money trapped in underdeveloped files.",
  ],
  closing:
    "Claims Ninja exists to provide the expertise, systems, workflows, and technology needed to support claim operations at scale.",
  complexityItems: [
    "Documentation",
    "Supplements",
    "Carrier communication",
    "Estimate review",
    "Claim tracking",
    "Workflow management",
  ],
} as const;

export const ABOUT_BELIEFS = {
  eyebrow: "What we believe",
  title: "Principles that guide how we work",
  items: [
    {
      title: "Contractors deserve to be paid for the work they perform",
      description:
        "Insurance claims should accurately reflect the work required to restore a property.",
    },
    {
      title: "Process creates predictable outcomes",
      description:
        "Strong documentation, disciplined workflows, and clear communication consistently outperform reactive claim management.",
    },
    {
      title: "Technology should support experts, not replace them",
      description:
        "Technology accelerates efficiency. Experience drives results. Claims Ninja combines both.",
    },
  ],
} as const;

export type AboutAudienceItem = {
  title: string;
  description: string;
  href?: string;
};

export const ABOUT_AUDIENCE = {
  eyebrow: "Who we serve",
  title: "Built for contractors across restoration and roofing",
  description:
    "Claims Ninja supports the trades and operators that manage insurance-driven work every day—from single-location restoration companies to multi-state operators scaling claim volume.",
  items: [
    {
      title: "Roofing contractors",
      description:
        "Storm, hail, and repair claims with supplement strategy, scope development, and carrier negotiation built for roofing production teams.",
      href: "/solutions/roofing",
    },
    {
      title: "Water mitigation companies",
      description:
        "Mitigation documentation, moisture mapping, dry logs, and rebuild scope alignment for water losses that move fast and get scrutinized.",
      href: "/solutions/water-damage",
    },
    {
      title: "Fire restoration contractors",
      description:
        "Smoke, soot, odor, and structural scope support for fire losses that require coordinated trades and documentation-heavy carrier review.",
      href: "/solutions/fire-damage",
    },
    {
      title: "Mold remediation firms",
      description:
        "Containment, remediation protocols, and scope documentation for mold claims where carrier scrutiny and compliance matter.",
      href: "/solutions/mold",
    },
    {
      title: "Reconstruction contractors",
      description:
        "Rebuild scope development, estimate review, and supplement support for complex restoration projects from demo through completion.",
    },
    {
      title: "Contents restoration companies",
      description:
        "Pack-out, inventory, cleaning, and storage scope support for contents claims that require detailed documentation and valuation.",
      href: "/solutions/contents",
    },
    {
      title: "Multi-location operators",
      description:
        "Centralized claim visibility, consistent workflows, and expert support across branches without building regional claims departments.",
    },
    {
      title: "Growing restoration businesses",
      description:
        "Scalable claim operations for teams adding volume, new trades, or geographic reach without sacrificing file quality or recovery.",
    },
  ] satisfies readonly AboutAudienceItem[],
} as const;

export const ABOUT_JOURNEY = {
  eyebrow: "Our journey",
  title: "From claim support to claims operations platform",
  steps: [
    {
      label: "2024",
      title: "Founded with a clear mission",
      description:
        "Claims Ninja launches with a mission to deliver structured insurance claim operations for contractors.",
    },
    {
      label: "2025",
      title: "Expanded trade support",
      description:
        "Expanded support capabilities across roofing, restoration, mitigation, reconstruction, and contents restoration trades.",
    },
    {
      label: "Today",
      title: "Stronger operations, better visibility",
      description:
        "Helping contractors operate with stronger workflows, better visibility, and improved recovery opportunities.",
    },
    {
      label: "Tomorrow",
      title: "The complete claims operations platform",
      description:
        "Building the contractor claims operations platform contractors rely on at scale, powered by expertise, technology, and claims intelligence.",
    },
  ],
} as const;

export const ABOUT_VALUES = {
  title: "Mission · vision · approach · impact",
  items: [
    {
      title: "Mission",
      description:
        "Help contractors scale without building an internal claims department.",
    },
    {
      title: "Vision",
      description:
        "Create the most trusted claims operations platform in the industry.",
    },
    {
      title: "Approach",
      description:
        "Combine technology, process, and expert claim support.",
    },
    {
      title: "Impact",
      description:
        "Support contractors with systems that improve efficiency, visibility, and recovery opportunities.",
    },
  ],
} as const;

export const ABOUT_PARTNERSHIP = {
  title: "More than a supplementing company",
  paragraphs: [
    "Claims Ninja is not a transactional supplement vendor.",
    "Our goal is to become an extension of a contractor's operation—helping teams improve claim outcomes, strengthen workflows, increase visibility, and scale confidently as they grow.",
  ],
} as const;
