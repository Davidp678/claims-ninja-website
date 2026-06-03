import type { BlogPost } from "@/lib/blog-types";

export const claimDocumentationApprovalRates: BlogPost = {
  slug: "claim-documentation-approval-rates",
  title: "How Better Claim Documentation Improves Approval Rates",
  excerpt:
    "Approval rates are not luck — they are documentation discipline. Learn what carriers need to say yes on supplements and re-inspections.",
  category: "claim-documentation",
  tags: ["Documentation", "Photos", "Approvals"],
  publishedAt: "2025-08-05",
  readingTimeMinutes: 7,
  visualVariant: "darkGrid",
  authorId: "claims-ninja-editorial",
  seoTitle: "Claim Documentation Improves Approval Rates",
  seoDescription:
    "How better insurance claim documentation improves supplement approval rates for contractors — photos, moisture logs, scope notes, and estimate alignment.",
  relatedPostSlugs: [
    "insurance-supplementing-guide-contractors",
    "dry-log-documentation-guide-insurance-claims",
    "why-carrier-estimates-miss-line-items",
  ],
  sections: [
    {
      id: "approval-equation",
      heading: "The approval equation",
      paragraphs: [
        "Carriers approve what they can defend to their superiors. Documentation is that defense: labeled photos, continuous narrative from intake through completion, moisture or equipment logs where applicable, and an estimate that mirrors the story.",
        "When a supplement is denied, the same documentation standards apply on resubmission — organized evidence tied to each line, not a larger photo dump without a cover letter map.",
        "Teams that batch-upload random photos at supplement time lose weeks. Teams that document daily win faster — even on difficult carriers.",
        "When a supplement is denied, the same documentation standards apply on resubmission — organized evidence tied to each line, not a larger photo dump without a cover letter map.",
        "On water mitigation files, dry logs and equipment placement notes are the approval equation — see the dry log documentation guide for daily standards and the water mitigation supplement playbook for field phases and line items.",
      ],
      links: [
        {
          label: "Supplement denial recovery guide",
          href: "/resources/blog/supplement-denial-recovery-guide",
        },
        {
          label: "Dry log documentation guide",
          href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
        },
        {
          label: "Water mitigation supplement playbook",
          href: "/resources/blog/water-damage-mitigation-supplement-playbook",
        },
        {
          label: "Moisture mapping best practices",
          href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
        },
      ],
    },
    {
      id: "field-standards",
      heading: "Field standards that move approvals",
      bullets: [
        "Wide and close photos per room with consistent naming.",
        "Intake moisture maps with labeled reading points on water jobs.",
        "Pre-mitigation and post-mitigation moisture readings on water jobs.",
        "Inventory or pack-out lists tied to room locations on contents losses.",
        "Code references only when jurisdiction actually requires them.",
        "Daily dry log entries with moisture readings and equipment changes on water jobs.",
        "Roof elevation photos, pitch labels, and measurement reports on storm and replacement jobs.",
      ],
      links: [
        { label: "Fire damage claims", href: "/solutions/fire-damage" },
        {
          label: "Roofing supplement playbook",
          href: "/resources/blog/roofing-supplement-playbook",
        },
        {
          label: "Water mitigation supplement playbook",
          href: "/resources/blog/water-damage-mitigation-supplement-playbook",
        },
        {
          label: "Dry log documentation guide",
          href: "/resources/blog/dry-log-documentation-guide-insurance-claims",
        },
        {
          label: "Moisture mapping best practices",
          href: "/resources/blog/moisture-mapping-best-practices-insurance-claims",
        },
      ],
    },
    {
      id: "platform-support",
      heading: "Platform support for consistency",
      paragraphs: [
        "Claims Ninja combines expert review with tools that keep documentation organized for adjusters and owners. Consistency across estimators and PMs is what raises approval rates company-wide — not one hero negotiator.",
        "On multi-trade files, documentation that supports general contractor coordination also supports overhead and profit eligibility when policy allows — schedules, sub contracts, and phased narratives belong in the same organized file.",
      ],
      links: [
        { label: "Communication hub", href: "/platform/communication-hub" },
        {
          label: "O&P on insurance claims",
          href: "/resources/blog/op-on-insurance-claims",
        },
        { label: "Full FAQ library", href: "/faq" },
      ],
    },
  ],
};
