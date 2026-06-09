/**
 * Smoke-test legacy redirects against a running Next.js server.
 * Run: npx tsx scripts/seo-redirect-smoke.ts
 * Env: BASE_URL (default http://localhost:3000)
 */
import { getAllCategorySlugs } from "../src/lib/blog-categories";
import { getAllBlogSlugs } from "../src/lib/blog-registry";
import { getAllGuidePathParams } from "../src/lib/guide-registry";
import { LEGACY_PAGE_REDIRECTS } from "../src/lib/legacy-page-redirects";

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

  for (const { from, to } of LEGACY_PAGE_REDIRECTS) {
    checks.push({
      label: `legacy page ${from}`,
      path: from,
      expectStatus: 308,
      expectLocation: to,
    });
    checks.push({
      label: `legacy page ${from} trailing slash`,
      path: `${from}/`,
      expectStatus: 308,
      expectLocation: to,
    });
  }

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

function normalizeLocation(location: string): string {
  try {
    const url = new URL(location, BASE_URL);
    return `${url.pathname}${url.search}`;
  } catch {
    return location.replace(BASE_URL, "");
  }
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
      const normalizedLocation = normalizeLocation(location);
      if (typeof check.expectLocation === "string") {
        if (normalizedLocation !== check.expectLocation) {
          return `${check.label}: expected Location ${check.expectLocation}, got ${location}`;
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

async function runChainCheck(
  path: string,
  expectedDestination: string,
): Promise<string | null> {
  const response = await fetch(`${BASE_URL}${path}`, { redirect: "manual" });

  if (response.status !== 308) {
    return `chain ${path}: expected single 308, got ${response.status}`;
  }

  const location = normalizeLocation(response.headers.get("location") ?? "");
  if (location !== expectedDestination) {
    return `chain ${path}: expected Location ${expectedDestination}, got ${location}`;
  }

  const destResponse = await fetch(`${BASE_URL}${expectedDestination}`, {
    redirect: "manual",
  });
  if (destResponse.status !== 200) {
    return `chain ${path}: destination ${expectedDestination} returned ${destResponse.status}`;
  }

  return null;
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

  console.log("\nChain checks (single hop to final destination):\n");

  for (const { from, to } of LEGACY_PAGE_REDIRECTS) {
    for (const path of [from, `${from}/`]) {
      const failure = await runChainCheck(path, to);
      if (failure) {
        failures.push(failure);
        console.log(`FAIL  ${path}`);
      } else {
        console.log(`OK    ${path} → ${to}`);
      }
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

  console.log(`All ${checks.length} redirect checks and chain checks passed.`);
}

main();
