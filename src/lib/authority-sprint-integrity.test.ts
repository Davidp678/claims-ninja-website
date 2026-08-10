import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { BLOG_AUTHORS, resolveBlogAuthorProfile } from "@/lib/blog-authors";
import { buildBlogPostingSchema } from "@/lib/blog-seo";
import { howToChooseInsuranceSupplementingPartner } from "@/lib/blog-posts/how-to-choose-insurance-supplementing-partner";
import { buildCaseStudyArticleSchema } from "@/lib/case-study-seo";
import {
  CASE_STUDIES_RECOVERY_EXAMPLES,
  CASE_STUDIES_TRADE_CARDS,
} from "@/lib/case-studies-page";
import {
  getAllClaimRecoveryCaseStudies,
  getCaseStudyPath,
} from "@/lib/claim-recovery-case-studies";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { FAQ_ITEMS_ES } from "@/lib/i18n/content/faq-data-es";
import { resolveGuideFaqItems } from "@/lib/guide-seo";
import { CLAIM_GUIDES } from "@/lib/guide-data";
import { getCaseStudySitemapEntries } from "@/lib/site-seo";
import { ORGANIZATION_ID, buildOrganizationSchema } from "@/lib/site-schema";
import { SITE_FAQ } from "@/lib/site-faq-selections";

const NEW_FAQ_IDS = [
  "supplements-how-to-choose-partner",
  "supplements-what-to-look-for",
  "supplements-how-to-compare",
] as const;

function hasUndefinedDeep(value: unknown): boolean {
  if (value === undefined) return true;
  if (value === null || typeof value !== "object") return false;
  return Object.values(value as Record<string, unknown>).some(hasUndefinedDeep);
}

describe("authority sprint integrity", () => {
  it("keeps EN/ES FAQ id parity including new buyer FAQs", () => {
    const enIds = FAQ_ITEMS.map((item) => item.id).sort();
    const esIds = FAQ_ITEMS_ES.map((item) => item.id).sort();
    assert.deepEqual(enIds, esIds);
    for (const id of NEW_FAQ_IDS) {
      assert.ok(enIds.includes(id), `missing EN FAQ ${id}`);
      assert.ok(esIds.includes(id), `missing ES FAQ ${id}`);
    }
  });

  it("keeps new buyer FAQs distinct from prior library questions", () => {
    const questions = FAQ_ITEMS.filter((item) =>
      (NEW_FAQ_IDS as readonly string[]).includes(item.id),
    ).map((item) => item.question.toLowerCase());
    assert.equal(new Set(questions).size, NEW_FAQ_IDS.length);
    for (const question of questions) {
      assert.ok(
        /choose|look for|compare/.test(question),
        `unexpected buyer FAQ wording: ${question}`,
      );
    }
  });

  it("types editorial author as Organization without Person fabrication", () => {
    const profile = resolveBlogAuthorProfile({
      authorId: "claims-ninja-editorial",
    });
    assert.equal(profile.schemaType, "Organization");
    assert.equal(profile.credentials, undefined);
    assert.equal(profile.sameAs, undefined);
    assert.equal(profile.profilePath, undefined);

    const schema = buildBlogPostingSchema(howToChooseInsuranceSupplementingPartner);
    assert.equal(schema.author["@type"], "Organization");
    assert.equal(schema.publisher["@id"], ORGANIZATION_ID);
    assert.equal("worksFor" in schema.author, false);
    assert.equal("sameAs" in schema.author, false);
    assert.equal("credentials" in schema.author, false);
    assert.equal(hasUndefinedDeep(schema), false);

    const personAuthors = Object.values(BLOG_AUTHORS).filter(
      (author) => author.schemaType === "Person",
    );
    assert.equal(personAuthors.length, 0);
  });

  it("keeps Organization @id stable and non-conflicting", () => {
    const org = buildOrganizationSchema();
    assert.equal(org["@id"], ORGANIZATION_ID);
    assert.equal(org.name, "The Claims Ninja");
  });

  it("aligns guide FAQ schema with visible faq + faqIds", () => {
    const guide = CLAIM_GUIDES.find(
      (entry) => entry.faqIds && entry.faqIds.length > 0 && !entry.faq?.length,
    );
    assert.ok(guide, "expected a guide with faqIds only");
    const resolved = resolveGuideFaqItems(guide);
    assert.equal(resolved.length, guide.faqIds!.length);
  });

  it("keeps case-study facts sourced from approved hub/trade data", () => {
    const studies = getAllClaimRecoveryCaseStudies();
    assert.equal(studies.length, 3);

    for (const study of studies) {
      const hub = CASE_STUDIES_RECOVERY_EXAMPLES.find(
        (example) => example.id === study.hubExampleId,
      );
      assert.ok(hub, `missing hub example for ${study.slug}`);
      assert.equal(study.carrierEstimate, hub.carrierEstimate);
      assert.equal(study.additionalRecovery, hub.additionalRecovery);
      assert.equal(study.recoveryIncrease, hub.recoveryIncrease);
      assert.deepEqual([...study.keyFindings], [...hub.keyFindings]);
      assert.deepEqual([...study.documentationGaps], [...hub.keyFindings]);
      assert.match(study.methodologyNote, /not a guarantee/i);
      assert.doesNotMatch(study.summary, /\bdrove\b|\bguaranteed?\b/i);
      assert.doesNotMatch(study.outcomeSummary, /\bdrove\b|\bguaranteed?\b/i);

      const trade = CASE_STUDIES_TRADE_CARDS.find(
        (card) => card.title === study.tradeFocus,
      );
      assert.ok(trade, `missing trade card for ${study.tradeFocus}`);
      for (const area of trade.areasReviewed) {
        assert.ok(
          study.recoveryApproach.some((item) => item.includes(area)),
          `recoveryApproach missing trade area ${area}`,
        );
      }

      const schema = buildCaseStudyArticleSchema(study);
      assert.equal(schema["@type"], "Article");
      assert.equal(schema.publisher["@id"], ORGANIZATION_ID);
      assert.equal(hasUndefinedDeep(schema), false);
    }

    const sitemapUrls = getCaseStudySitemapEntries().map((entry) => entry.url);
    for (const study of studies) {
      assert.ok(
        sitemapUrls.some((url) => url.endsWith(getCaseStudyPath(study.slug))),
      );
    }
  });

  it("emits commercial FAQ selections that resolve in the library", () => {
    for (const id of [
      ...SITE_FAQ.home.faqIds,
      ...SITE_FAQ.pricing.faqIds,
      ...SITE_FAQ.about.faqIds,
    ]) {
      assert.ok(
        FAQ_ITEMS.some((item) => item.id === id),
        `unknown commercial FAQ id ${id}`,
      );
    }
    assert.ok(
      SITE_FAQ.home.faqIds.includes("supplements-how-to-choose-partner"),
    );
    assert.ok(SITE_FAQ.pricing.faqIds.includes("supplements-how-to-compare"));
    assert.ok(SITE_FAQ.about.faqIds.includes("supplements-what-to-look-for"));
  });
});
