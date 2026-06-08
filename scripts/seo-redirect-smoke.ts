/**
 * Smoke-test legacy redirects against a running Next.js server.
 * Run: npx tsx scripts/seo-redirect-smoke.ts
 * Env: BASE_URL (default http://localhost:3000)
 */
import { getAllCategorySlugs } from "../src/lib/blog-categories";
import { getAllBlogSlugs } from "../src/lib/blog-registry";
import { getAllGuidePathParams } from "../src/lib/guide-registry";

const BASE_URL = (process.env.BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");

type Check = {
  label: string;
  path: string;
  expectStatus: number;
  expectLocation?: string | RegExp;
};

function buildChecks(): Check[] {
  const blogSlug = getAllBlogSlugs()[0];
  const categorySlug = getAllCategorySlugs()[0];
  const guide = getAllGuidePathParams()[0];

  const checks: Check[] = [
    { label: "blog hub", path: "/blog", expectStatus: 308, expectLocation: "/resources/blog" },
    { label: "guides hub", path: "/guides", expectStatus: 308, expectLocation: "/resources/guides" },
    { label: "videos", path: "/videos", expectStatus: 308, expectLocation: "/platform" },
    { label: "feed", path: "/feed", expectStatus: 308, expectLocation: "/resources/blog" },
    { label: "sitemap", path: "/sitemap.xml", expectStatus: 200 },
    { label: "robots", path: "/robots.txt", expectStatus: 200 },
    { label: "home", path: "/", expectStatus: 200 },
    { label: "pricing", path: "/pricing", expectStatus: 200 },
  ];

  if (blogSlug) {
    checks.push({
      label: "blog post legacy",
      path: `/blog/${blogSlug}`,
      expectStatus: 308,
      expectLocation: `/resources/blog/${blogSlug}`,
    });
  }

  if (categorySlug) {
    checks.push({
      label: "blog category legacy",
      path: `/blog/category/${categorySlug}`,
      expectStatus: 308,
      expectLocation: `/resources/blog/category/${categorySlug}`,
    });
  }

  if (guide) {
    checks.push({
      label: "guide legacy",
      path: `/guides/${guide.category}/${guide.slug}`,
      expectStatus: 308,
      expectLocation: `/resources/guides/${guide.category}/${guide.slug}`,
    });
  }

  return checks;
}

async function runCheck(check: Check): Promise<string | null> {
  const url = `${BASE_URL}${check.path}`;

  try {
    const response = await fetch(url, { redirect: "manual" });
    const location = response.headers.get("location") ?? "";

    if (response.status !== check.expectStatus) {
      return `${check.label}: expected ${check.expectStatus}, got ${response.status} (${url})`;
    }

    if (check.expectLocation) {
      const normalizedLocation = location.replace(BASE_URL, "");
      if (typeof check.expectLocation === "string") {
        if (!normalizedLocation.includes(check.expectLocation)) {
          return `${check.label}: expected Location containing ${check.expectLocation}, got ${location}`;
        }
      } else if (!check.expectLocation.test(normalizedLocation)) {
        return `${check.label}: Location ${location} did not match ${check.expectLocation}`;
      }
    }

    return null;
  } catch (error) {
    return `${check.label}: ${error instanceof Error ? error.message : String(error)}`;
  }
}

async function main() {
  const checks = buildChecks();
  const failures: string[] = [];

  console.log(`Redirect smoke test → ${BASE_URL}\n`);

  for (const check of checks) {
    const failure = await runCheck(check);
    if (failure) {
      failures.push(failure);
      console.log(`FAIL  ${check.path}`);
    } else {
      console.log(`OK    ${check.path}`);
    }
  }

  console.log("");
  if (failures.length > 0) {
    console.error(`${failures.length} failure(s):`);
    for (const failure of failures) {
      console.error(`  - ${failure}`);
    }
    process.exit(1);
  }

  console.log(`All ${checks.length} checks passed.`);
}

main();
