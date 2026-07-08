import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getAllBlogSlugs } from "@/lib/blog-registry";
import { CLAIM_GUIDES } from "@/lib/guides";
import { getGuidePathForGuide } from "@/lib/guide-page";

import {
  BLOG_GUIDE_COMPANIONS,
  getAllBlogGuideCompanionBlogSlugs,
  getPracticeGuidesForBlog,
  validateBlogGuideCompanions,
} from "./blog-guide-companions";

describe("blog-guide-companions", () => {
  it("passes registry validation", () => {
    const { ok, errors } = validateBlogGuideCompanions();
    assert.equal(ok, true, errors.join("; "));
  });

  it("maps exactly 31 blog articles", () => {
    assert.equal(getAllBlogGuideCompanionBlogSlugs().length, 31);
  });

  it("resolves every blog slug to an existing post", () => {
    const blogSlugs = new Set(getAllBlogSlugs());

    for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
      assert.ok(blogSlugs.has(blogSlug), `Missing blog post: ${blogSlug}`);
    }
  });

  it("resolves every guide slug to an existing guide", () => {
    const guideSlugs = new Set(CLAIM_GUIDES.map((guide) => guide.slug));

    for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
      for (const guideSlug of BLOG_GUIDE_COMPANIONS[blogSlug].guideSlugs) {
        assert.ok(
          guideSlugs.has(guideSlug),
          `Missing guide "${guideSlug}" on blog "${blogSlug}"`,
        );
      }
    }
  });

  it("has no duplicate guide slugs within a single blog entry", () => {
    for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
      const slugs = BLOG_GUIDE_COMPANIONS[blogSlug].guideSlugs;
      assert.equal(
        slugs.length,
        new Set(slugs).size,
        `Duplicate guide slugs on blog "${blogSlug}"`,
      );
    }
  });

  it("caps companion guides at four per blog", () => {
    for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
      assert.ok(
        BLOG_GUIDE_COMPANIONS[blogSlug].guideSlugs.length <= 4,
        `Blog "${blogSlug}" exceeds 4 companion guides`,
      );
    }
  });

  it("resolves canonical guide paths under /resources/guides", () => {
    for (const blogSlug of getAllBlogGuideCompanionBlogSlugs()) {
      for (const guide of getPracticeGuidesForBlog(blogSlug)) {
        const path = getGuidePathForGuide(guide);
        assert.match(path, /^\/resources\/guides\/[^/]+\/[^/]+$/);
        assert.doesNotMatch(path, /^\/guides/);
      }
    }
  });

  it("returns empty companions for blogs without registry entries", () => {
    assert.deepEqual(getPracticeGuidesForBlog("when-to-bring-in-supplementing-partner"), []);
  });
});
