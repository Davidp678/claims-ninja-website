import { callout, defineArticle, link, p, ul } from "@/lib/help-center/builder";
import { EXTERNAL_LINKS } from "@/lib/help-center/videos";

const UPDATED = "2026-06-08";

export const workflowArticles = [
  defineArticle({
    slug: "certificate-of-completion",
    sectionSlug: "claim-workflow",
    title: "Certificate of Completion (COC)",
    excerpt: "Use the TCN COC link to release insurance final funds (depreciation).",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p(
        "If you would like The Claims Ninja to handle the Certificate of Completion upon project completion to release insurance final funds (depreciation), you are required to use our COC link.",
      ),
      ul([
        "The COC link is in a column near the far right of Account 1 and Account 2",
        "Takes the policyholder about 1 minute to complete",
        "Helps our follow-up systems get final funds released quickly",
        "COC auto-emails adjuster, client, policyholder receipt, and our CM team",
      ]),
      link(EXTERNAL_LINKS.cocJotform, "COC Form Link"),
    ],
  }),
  defineArticle({
    slug: "common-causes-of-delays",
    sectionSlug: "claim-workflow",
    title: "Common Causes of Delays",
    excerpt: "Eight preventable issues that slow negotiations.",
    portal: "client",
    updatedAt: UPDATED,
    blocks: [
      p("For Account 1 and 2, the most common causes of delays:"),
      ul([
        "Missing or limited photos",
        "Documentation uploaded days after site visit",
        "Contracts not uploaded with intake",
        "Measurements missing or unclear",
        "Demo completed before documentation",
        "Multiple parties communicating pricing to insurance",
        "Partial file uploads requiring follow-ups",
        "Adjuster questions that could have been answered with better documentation",
      ]),
      callout(
        "success",
        "When documentation is complete upfront, negotiations move significantly faster. A few extra minutes documenting early often saves weeks later.",
      ),
    ],
  }),
];
