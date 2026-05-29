export const PLATFORM_HERO = {
  eyebrow: "Platform",
  title: "The contractor claims operations platform",
  description:
    "Claims Ninja combines seasoned supplement professionals, a live management platform, and an expanding AI intelligence layer—so restoration and roofing teams run claims with the rigor of a dedicated operations department.",
} as const;

export const PLATFORM_PILLARS = [
  {
    title: "Expert claim support",
    description:
      "Supplement professionals, negotiation support, and public adjuster services when you need full claim ownership—without building an in-house team.",
  },
  {
    title: "Claims management technology",
    description:
      "Client portal, claim tracking, document management, real-time communication, billing, and project visibility—operational today across your book of business.",
  },
  {
    title: "AI intelligence",
    description:
      "AI-assisted triage, opportunity scoring, and scope analysis that accelerate expert review and surface recovery potential before money is left on the table.",
  },
] as const;

export const PLATFORM_AI = {
  eyebrow: "AI intelligence layer",
  title: "Intelligence built on the platform you already use",
  description:
    "AI does not replace your team or our experts—it accelerates them. Claims Ninja intelligence runs on the same files, workflows, and claim context your operation uses every day.",
  capabilities: [
    {
      title: "Recovery opportunity scoring",
      description: "Prioritize claims with the highest supplement and uplift potential across your pipeline.",
    },
    {
      title: "Scope gap detection",
      description: "Flag line items and documentation gaps common in carrier estimates before submission.",
    },
    {
      title: "Expert-validated output",
      description: "Machine triage feeds specialist review—final strategy and negotiation stay human-led.",
    },
  ],
} as const;

export const PLATFORM_VISION = {
  eyebrow: "Ecosystem expansion",
  title: "A platform that grows with your operation",
  description:
    "Claims Ninja is actively expanding the ecosystem you use today—not a roadmap slide. New capabilities layer onto the same portal, tracking, and communication foundation.",
  items: [
    "Claims intelligence engine for pattern recognition across your book",
    "Recovery opportunity scoring integrated with intake and tracking",
    "Claims operating system that unifies field, office, and expert workflows",
    "CRM replacement purpose-built for contractor claim operations",
  ],
} as const;
