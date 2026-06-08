/**
 * Generates new-site URL inventory and legacy WordPress redirect map.
 * Run: npx tsx scripts/seo-migration-audit.ts
 *
 * WordPress live sitemap was unavailable during audit (500/timeout).
 * After export from WP admin, diff legacy-redirects.csv against WP URLs.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { getAllCategorySlugs } from "../src/lib/blog-categories";
import { getAllBlogSlugs } from "../src/lib/blog-registry";
import { getBlogPostPath } from "../src/lib/blog-page";
import { getCategoryPath } from "../src/lib/blog-categories";
import { getAllGuidePathParams } from "../src/lib/guide-registry";
import { getGuideCategoryPath } from "../src/lib/guide-categories";
import { getGuidePathForGuide } from "../src/lib/guide-page";
import { INDEXABLE_MARKETING_PATHS } from "../src/lib/site-seo";

const OUT_DIR = join(import.meta.dirname, "seo-migration");

type CsvRow = Record<string, string>;

function toCsv(rows: CsvRow[], columns: string[]): string {
  const escape = (value: string) =>
    value.includes(",") || value.includes('"') || value.includes("\n")
      ? `"${value.replace(/"/g, '""')}"`
      : value;

  const lines = [columns.join(",")];
  for (const row of rows) {
    lines.push(columns.map((col) => escape(row[col] ?? "")).join(","));
  }
  return lines.join("\n");
}

function buildNewUrls(): CsvRow[] {
  const rows: CsvRow[] = [];

  for (const path of INDEXABLE_MARKETING_PATHS) {
    rows.push({ type: "marketing", canonical_path: path, status: "indexable" });
  }

  for (const slug of getAllCategorySlugs()) {
    rows.push({
      type: "blog_category",
      canonical_path: getCategoryPath(slug),
      status: "indexable",
    });
  }

  for (const slug of getAllBlogSlugs()) {
    rows.push({
      type: "blog_post",
      canonical_path: getBlogPostPath(slug),
      status: "indexable",
    });
  }

  for (const category of getAllGuidePathParams()) {
    rows.push({
      type: "guide",
      canonical_path: getGuidePathForGuide(category),
      status: "indexable",
    });
  }

  const guideCategories = new Set(
    getAllGuidePathParams().map((entry) => entry.category),
  );
  for (const slug of guideCategories) {
    rows.push({
      type: "guide_category",
      canonical_path: getGuideCategoryPath(slug),
      status: "indexable",
    });
  }

  return rows;
}

function buildLegacyRedirects(): CsvRow[] {
  const rows: CsvRow[] = [
    {
      legacy_path: "/blog",
      new_path: "/resources/blog",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/guides",
      new_path: "/resources/guides",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/guides/:category",
      new_path: "/resources/guides/:category",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/guides/:category/:slug",
      new_path: "/resources/guides/:category/:slug",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/videos",
      new_path: "/platform",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/blog/category/:slug",
      new_path: "/resources/blog/category/:slug",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/blog/:slug",
      new_path: "/resources/blog/:slug",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/feed",
      new_path: "/resources/blog",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/feed/rss",
      new_path: "/resources/blog",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
    {
      legacy_path: "/comments/feed",
      new_path: "/resources/blog",
      redirect_type: "301",
      configured_in: "next.config.ts",
    },
  ];

  for (const slug of getAllBlogSlugs()) {
    rows.push({
      legacy_path: `/blog/${slug}`,
      new_path: getBlogPostPath(slug),
      redirect_type: "301",
      configured_in: "wildcard /blog/:slug",
    });
  }

  for (const slug of getAllCategorySlugs()) {
    rows.push({
      legacy_path: `/blog/category/${slug}`,
      new_path: getCategoryPath(slug),
      redirect_type: "301",
      configured_in: "wildcard /blog/category/:slug",
    });
  }

  for (const guide of getAllGuidePathParams()) {
    const path = getGuidePathForGuide(guide);
    rows.push({
      legacy_path: `/guides/${guide.category}/${guide.slug}`,
      new_path: path,
      redirect_type: "301",
      configured_in: "wildcard /guides/:category/:slug",
    });
  }

  return rows;
}

mkdirSync(OUT_DIR, { recursive: true });

const newUrls = buildNewUrls();
const legacyRedirects = buildLegacyRedirects();

writeFileSync(
  join(OUT_DIR, "new-urls.csv"),
  toCsv(newUrls, ["type", "canonical_path", "status"]),
);
writeFileSync(
  join(OUT_DIR, "legacy-redirects.csv"),
  toCsv(legacyRedirects, [
    "legacy_path",
    "new_path",
    "redirect_type",
    "configured_in",
  ]),
);

console.log("SEO migration audit complete");
console.log(`  New indexable URLs: ${newUrls.length}`);
console.log(`  Legacy redirect rows: ${legacyRedirects.length}`);
console.log(`  Output: ${OUT_DIR}/`);
console.log("");
console.log("WordPress sitemap was not available live — export from WP admin and diff:");
console.log("  1. WP Admin → Yoast/RankMath → sitemap, or /wp-sitemap.xml");
console.log("  2. Compare URLs against legacy-redirects.csv");
console.log("  3. Add explicit 301 rules in next.config.ts for slug mismatches");
console.log("");
console.log("Post-launch Google Search Console:");
console.log("  1. Add property https://theclaimsninja.com");
console.log("  2. Verify via DNS TXT or HTML tag in layout metadata");
console.log("  3. Submit https://theclaimsninja.com/sitemap.xml");
console.log("  4. Monitor Pages → Not found for 2 weeks; add redirects for 404 spikes");
