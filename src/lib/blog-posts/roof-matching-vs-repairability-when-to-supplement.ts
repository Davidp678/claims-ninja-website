import type { BlogPost } from "@/lib/blog-types";

export const roofMatchingVsRepairabilityWhenToSupplement: BlogPost = {
  slug: "roof-matching-vs-repairability-when-to-supplement",
  title: "Roof Matching vs Repairability: When to Supplement for Full Replacement",
  excerpt:
    "Contractor guide to roof matching vs repairability disputes: when partial repair fails, how to document each argument, carrier denial patterns, and when to supplement for slope or full replacement.",
  category: "roofing-claims",
  tags: [
    "Roof Matching",
    "Repairability",
    "Roofing Supplements",
    "Storm Claims",
    "Documentation",
    "Insurance Claims",
  ],
  publishedAt: "2026-06-26",
  readingTimeMinutes: 12,
  visualVariant: "redGlow",
  recommended: true,
  authorId: "claims-ninja-editorial",
  seoTitle: "Roof Matching vs Repairability: When to Supplement for Full Replacement",
  seoDescription:
    "Roof matching vs repairability for contractors: document when partial repair fails, when discontinued shingles require full slope replacement, and how to supplement carrier partial scope.",
  relatedPostSlugs: [
    "roofing-supplement-playbook",
    "hail-damage-roof-claims-documentation-supplement",
    "wind-damage-roof-claims-what-carriers-miss",
    "supplement-denial-recovery-guide",
  ],
  faq: [
    {
      question: "What is the difference between roof matching and repairability?",
      answer:
        "Repairability asks whether existing shingles can be partially removed or lifted without breaking adjacent courses. Matching asks whether replacement materials align with existing color, profile, and appearance when partial repair is approved. Both can affect scope but require separate documentation — brittle material is not the same argument as color mismatch.",
    },
    {
      question: "When should contractors supplement for full slope replacement?",
      answer:
        "When documented repairability testing shows brittle or fragile material, when discontinued shingles prevent reasonable match on partial scope, or when collateral damage during repair extends beyond carrier-approved boundaries. Each argument needs its own photo set, field notes, and scope comparison — outcomes vary by carrier and policy.",
    },
    {
      question: "Can matching and repairability arguments be combined in one supplement?",
      answer:
        "Yes, but keep evidence separated. Index repairability photos and test results under repair limitation lines; index matching research and slope comparison photos under appearance and material availability lines. Combined narratives without separated evidence confuse desk reviewers.",
    },
  ],
  sections: [
    {
      id: "introduction",
      heading: "Introduction",
      paragraphs: [
        "Partial roof repair disputes split into two documentation tracks: repairability and matching. Carriers approve isolated tab or square repairs on storm files; contractors discover brittle shingles that crack when lifted, or discontinued products that leave visible mismatch across the slope. Treating both as one argument weakens supplements at desk review.",
        "This guide is roof matching vs repairability for roofing contractors, supplement coordinators, and field inspectors. It explains when each dispute applies, how to document them separately, and when combined evidence supports slope or full replacement scope.",
        "Field execution standards live in the Roof Matching Documentation Guide and Roof Repairability Documentation Guide. This article is the hub that connects both workflows to supplement strategy.",
      ],
      links: [{ label: "Roofing claims solutions", href: "/solutions/roofing" }],
    },
    {
      id: "repairability-basics",
      heading: "When repairability limits partial scope",
      paragraphs: [
        "Repairability documentation captures whether existing material survives repair attempts — brittle tests, seal strip failure, collateral damage on adjacent tabs, and manufacturer repair guidance. Carriers deny expanded scope when contractors assert fragility without test observations or photos tied to the approved repair boundary.",
      ],
      links: [
        {
          label: "Roof Repairability Documentation Guide",
          href: "/resources/guides/roofing-claims/roof-repairability-documentation-guide",
        },
      ],
    },
    {
      id: "matching-basics",
      heading: "When matching limits partial scope",
      paragraphs: [
        "Matching documentation captures material identification, color and profile comparison, discontinued product research, and slope-by-slope appearance differences when partial replacement leaves visible lines. Carriers evaluate matching against field photos and availability records — not contractor opinion alone.",
        "On HOA communities with multiple buildings, matching disputes intensify when damaged and undamaged structures show different weathering — document elevation comparisons per building.",
      ],
      links: [
        {
          label: "Roof Matching Documentation Guide",
          href: "/resources/guides/roofing-claims/roof-matching-documentation-guide",
        },
        {
          label: "HOA roofing claims guide",
          href: "/resources/guides/roofing-claims/hoa-roofing-claims-guide",
        },
      ],
    },
    {
      id: "when-both-apply",
      heading: "When both repairability and matching apply",
      bullets: [
        "Aged shingles that are both brittle and visibly weathered across the slope.",
        "Discontinued product on fragile material where partial repair risks collateral damage.",
        "Storm damage on one section of a slope with mismatched prior repairs on adjacent courses.",
        "Carrier-approved repair square on material that cannot be lifted and cannot be matched.",
      ],
      paragraphs: [
        "Build separate evidence sections in the supplement packet — repairability test results and matching research indexed to different estimate lines. A combined narrative without separated documentation is the most common denial trigger on dual-dispute files.",
      ],
    },
    {
      id: "carrier-denials",
      heading: "Common carrier responses",
      bullets: [
        "Repair approved — matching is cosmetic and not covered under policy language.",
        "Material is repairable — no brittle test or collateral damage documented.",
        "Replacement product is available — discontinued argument unsupported.",
        "Partial slope repair is sufficient — no slope-wide appearance comparison provided.",
        "Reinspection denied — documentation package incomplete before request.",
      ],
      links: [
        {
          label: "Roof reinspection guide",
          href: "/resources/guides/roofing-claims/roof-reinspection-guide",
        },
        {
          label: "Supplement denial recovery guide",
          href: "/resources/blog/supplement-denial-recovery-guide",
        },
      ],
    },
    {
      id: "supplement-packaging",
      heading: "Packaging matching and repairability supplements",
      paragraphs: [
        "Submit repairability evidence with test square photos, collateral damage shots, and manufacturer references. Submit matching evidence with material identification, availability research, and slope comparison photos. Tie each section to specific estimate lines in a scope comparison table and one-page contractor narrative.",
        "On storm files, capture hail or wind damage documentation first — then layer repairability and matching arguments when carrier partial scope is physically or aesthetically insufficient.",
      ],
      links: [
        {
          label: "Roofing supplement playbook",
          href: "/resources/blog/roofing-supplement-playbook",
        },
        {
          label: "Roofing supplement checklist",
          href: "/resources/guides/roofing-claims/roofing-supplement-checklist",
        },
      ],
    },
    {
      id: "final-takeaway",
      heading: "Final takeaway",
      paragraphs: [
        "Matching and repairability are related but distinct supplement arguments. Document each with its own evidence track, index photos to estimate lines, and combine only in the narrative summary — not in the photo set. Stronger separated documentation makes partial-replacement disputes easier to resolve at desk review and reinspection.",
      ],
    },
  ],
};
