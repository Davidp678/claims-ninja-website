import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getAllCategorySlugs } from "@/lib/blog-categories";
import { getAllGuideCategorySlugs } from "@/lib/guide-categories";

import { GLYPH_COMPONENTS } from "./CategoryIllustrationGlyph";
import {
  BLOG_CATEGORY_ILLUSTRATIONS,
  GUIDE_CATEGORY_ILLUSTRATIONS,
  resolveCategoryIllustration,
  resolveGuideCategoryIllustration,
} from "./category-illustration-map";
import { CATEGORY_ILLUSTRATION_KEYS } from "./category-illustration-types";

describe("category-illustration-map", () => {
  it("maps every blog category slug to a non-generic illustration key", () => {
    for (const slug of getAllCategorySlugs()) {
      const key = resolveCategoryIllustration(slug);
      assert.notEqual(key, "generic", `Expected mapped illustration for ${slug}`);
      assert.equal(BLOG_CATEGORY_ILLUSTRATIONS[slug], key);
    }
  });

  it("maps every guide category slug to a defined illustration key", () => {
    for (const slug of getAllGuideCategorySlugs()) {
      const key = resolveGuideCategoryIllustration(slug);
      assert.ok(key, `Expected mapped illustration for guide ${slug}`);
      assert.equal(GUIDE_CATEGORY_ILLUSTRATIONS[slug], key);
    }
  });

  it("falls back to generic for unknown blog category slugs", () => {
    assert.equal(
      resolveCategoryIllustration("unknown-category" as never),
      "generic",
    );
  });

  it("registers a glyph component for every illustration key", () => {
    for (const key of CATEGORY_ILLUSTRATION_KEYS) {
      assert.ok(
        GLYPH_COMPONENTS[key],
        `Missing glyph component for ${key}`,
      );
    }
  });
});
