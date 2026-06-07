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
  title: "About Claims Ninja",
  paragraphs: [
    "Founded in 2024, Claims Ninja was built with a simple mission: give contractors a reliable claims operation so they can focus on growing their business.",
    "Every year, contractors leave significant revenue trapped inside insurance claims—not because the work wasn't performed, but because documentation, estimate development, supplement strategy, and claim management demand time most teams don't have.",
    "Claims Ninja was created to solve that problem.",
    "We help roofing contractors, restoration companies, mitigation firms, reconstruction teams, and multi-location operators manage the insurance side of the job with the same level of professionalism they bring to production.",
  ],
} as const;

export const ABOUT_WHY_WE_EXIST = {
  eyebrow: "Why we exist",
  title: "Contractors Shouldn't Need an In-House Claims Department",
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
      title: "Contractors Deserve To Be Paid For The Work They Perform",
      description:
        "Insurance claims should accurately reflect the work required to restore a property.",
    },
    {
      title: "Process Creates Predictable Outcomes",
      description:
        "Strong documentation, disciplined workflows, and clear communication consistently outperform reactive claim management.",
    },
    {
      title: "Technology Should Support Experts, Not Replace Them",
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
      title: "Roofing Contractors",
      description:
        "Storm, hail, and repair claims with supplement strategy, scope development, and carrier negotiation built for roofing production teams.",
      href: "/solutions/roofing",
    },
    {
      title: "Water Mitigation Companies",
      description:
        "Mitigation documentation, moisture mapping, dry logs, and rebuild scope alignment for water losses that move fast and get scrutinized.",
      href: "/solutions/water-damage",
    },
    {
      title: "Fire Restoration Contractors",
      description:
        "Smoke, soot, odor, and structural scope support for fire losses that require coordinated trades and documentation-heavy carrier review.",
      href: "/solutions/fire-damage",
    },
    {
      title: "Mold Remediation Firms",
      description:
        "Containment, remediation protocols, and scope documentation for mold claims where carrier scrutiny and compliance matter.",
      href: "/solutions/mold",
    },
    {
      title: "Reconstruction Contractors",
      description:
        "Rebuild scope development, estimate review, and supplement support for complex restoration projects from demo through completion.",
    },
    {
      title: "Contents Restoration Companies",
      description:
        "Pack-out, inventory, cleaning, and storage scope support for contents claims that require detailed documentation and valuation.",
      href: "/solutions/contents",
    },
    {
      title: "Multi-Location Operators",
      description:
        "Centralized claim visibility, consistent workflows, and expert support across branches without building regional claims departments.",
    },
    {
      title: "Growing Restoration Businesses",
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
        "Claims Ninja launches with a mission to simplify insurance claim management for contractors.",
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
        "Building the industry's most complete contractor claims operations platform powered by expertise, technology, and claims intelligence.",
    },
  ],
} as const;

export const ABOUT_VALUES = {
  title: "Mission · Vision · Approach · Impact",
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
  title: "More Than A Supplementing Company",
  paragraphs: [
    "Claims Ninja is not a transactional supplement vendor.",
    "Our goal is to become an extension of a contractor's operation—helping teams improve claim outcomes, strengthen workflows, increase visibility, and scale confidently as they grow.",
  ],
} as const;
