import { callout, defineArticle, h, p, ul } from "@/lib/help-center/builder";
import { CLIENT_FEE_SCHEDULE } from "@/lib/help-center/fees";

const UPDATED = "2026-06-08";

export const supplementArticles = [
  defineArticle({
    slug: "supplement-expectations",
    sectionSlug: "supplement-process",
    title: "Supplement Expectations",
    excerpt: "How supplements work and when additional scope may be pursued.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "Supplements may be pursued when additional scope becomes identifiable during or after project execution. Post-completion review may reveal recoverable items not reasonably identifiable at initial inspection.",
      ),
      ul([
        "Request supplements via your Claims Ninja Dash with supporting photos, files, and description",
        "Such efforts do not imply prior withholding of scope — they are part of comprehensive claim review",
        `Supplement fee: ${CLIENT_FEE_SCHEDULE.supplements}`,
      ]),
      p("See Legal Appendix Section 8 for full contract language on supplements and post-project review."),
    ],
  }),
  defineArticle({
    slug: "free-money-supplement",
    sectionSlug: "supplement-process",
    title: "Free Money Supplement Program",
    excerpt: "Post-completion scope review program — enrollment and expectations.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      callout(
        "warning",
        "The Free Money Supplement program is being rolled out to select clients. Contact your Client Success Manager to confirm enrollment status.",
      ),
      h(2, "What Is a Free Money Supplement?"),
      p(
        "Upon or near project completion, The Claims Ninja reviews documentation across the entire project lifecycle to identify additional claim value that was supported by field evidence gathered during the project but not included in the initial scope.",
      ),
      h(2, "If You Signed Up for Free Money Supplement"),
      ul([
        "TCN conducts a post-completion documentation review",
        "Additional recoverable scope is identified where merited",
        "Supplements are created, submitted, and negotiated on your behalf",
        "You are informed when a supplement settlement is reached",
      ]),
      p(
        "This program is separate from standard supplement requests initiated during active construction. Fees and enrollment terms are outlined in your client agreement.",
      ),
    ],
  }),
];
