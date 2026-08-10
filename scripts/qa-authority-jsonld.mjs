/**
 * Local production JSON-LD QA probe for the authority sprint.
 * Usage: node scripts/qa-authority-jsonld.mjs [baseUrl]
 */

const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");

const pages = [
  { path: "/", expectFaq: true, label: "home" },
  { path: "/pricing", expectFaq: true, label: "pricing" },
  { path: "/about", expectFaq: true, label: "about" },
  { path: "/solutions/roofing", expectFaq: true, label: "roofing" },
  {
    path: "/resources/blog/how-to-choose-insurance-supplementing-partner",
    expectFaq: true,
    expectBlogPosting: true,
    label: "buyer-blog",
  },
  {
    path: "/resources/guides/general-claims/insurance-estimate-review-scope-validation-guide",
    expectGuide: true,
    label: "guide",
  },
  { path: "/case-studies", expectFaq: true, label: "case-hub" },
  {
    path: "/case-studies/commercial-roofing-portfolio",
    expectArticle: true,
    label: "case-detail",
  },
];

function extractJsonLd(html) {
  const blocks = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = re.exec(html))) {
    blocks.push(JSON.parse(match[1]));
  }
  return blocks.flatMap((block) => (Array.isArray(block) ? block : [block]));
}

function collectTypes(nodes) {
  const types = [];
  for (const node of nodes) {
    if (!node || typeof node !== "object") continue;
    if (node["@type"]) types.push(node["@type"]);
  }
  return types;
}

function hasUndefinedDeep(value) {
  if (value === undefined) return true;
  if (value === null || typeof value !== "object") return false;
  return Object.values(value).some(hasUndefinedDeep);
}

let failures = 0;

for (const page of pages) {
  const url = `${base}${page.path}`;
  const res = await fetch(url);
  const html = await res.text();
  const nodes = extractJsonLd(html);
  const types = collectTypes(nodes);
  const faqNodes = nodes.filter((n) => n["@type"] === "FAQPage");
  const orgNodes = nodes.filter((n) => n["@type"] === "Organization");
  const blogNodes = nodes.filter((n) => n["@type"] === "BlogPosting");
  const articleNodes = nodes.filter((n) => n["@type"] === "Article");
  const guideNodes = nodes.filter(
    (n) => n["@type"] === "HowTo" || n["@type"] === "TechArticle",
  );

  const issues = [];
  if (res.status !== 200) issues.push(`HTTP ${res.status}`);
  if (hasUndefinedDeep(nodes)) issues.push("undefined schema values");
  if (page.expectFaq && faqNodes.length === 0) issues.push("missing FAQPage");
  if (page.expectFaq && faqNodes.length > 1) {
    issues.push(`duplicate FAQPage count=${faqNodes.length}`);
  }
  if (page.expectBlogPosting && blogNodes.length !== 1) {
    issues.push(`BlogPosting count=${blogNodes.length}`);
  }
  if (page.expectArticle && articleNodes.length !== 1) {
    issues.push(`Article count=${articleNodes.length}`);
  }
  if (page.expectGuide && guideNodes.length === 0) {
    issues.push("missing HowTo/TechArticle");
  }

  const siteOrg = orgNodes.find((n) => n["@id"]?.includes("#organization"));
  if (!siteOrg && page.path === "/") {
    issues.push("missing Organization @id on home");
  }

  if (blogNodes[0]) {
    const authorType = blogNodes[0].author?.["@type"];
    if (authorType !== "Organization") {
      issues.push(`blog author type=${authorType}`);
    }
    if (blogNodes[0].publisher?.["@id"] && !blogNodes[0].publisher["@id"].includes("#organization")) {
      issues.push("blog publisher @id mismatch");
    }
  }

  if (articleNodes[0]) {
    if (!articleNodes[0].headline) issues.push("article missing headline");
    if (!/commercial roofing|multi-family|fire restoration/i.test(articleNodes[0].headline || "")) {
      // only check on commercial page
      if (page.path.includes("commercial-roofing")) {
        issues.push("article headline mismatch");
      }
    }
  }

  // Visible FAQ count vs schema for commercial pages using SiteFaqSection
  if (page.expectFaq && !page.expectBlogPosting && !page.expectGuide) {
    const visibleQuestions = (html.match(/data-state=/g) || []).length; // weak
    const schemaQuestions = faqNodes[0]?.mainEntity?.length ?? 0;
    if (schemaQuestions === 0) issues.push("FAQPage empty");
    // Accordion buttons usually contain the questions
    for (const q of faqNodes[0]?.mainEntity ?? []) {
      const name = q.name;
      if (!name || !html.includes(name.slice(0, Math.min(40, name.length)))) {
        issues.push(`FAQ not visible: ${name?.slice(0, 60)}`);
        break;
      }
    }
  }

  const status = issues.length ? "FAIL" : "OK";
  if (issues.length) failures += 1;
  console.log(
    `${status} ${page.label} ${page.path} types=${types.join(",")} faqQ=${faqNodes[0]?.mainEntity?.length ?? 0}${issues.length ? " :: " + issues.join("; ") : ""}`,
  );
}

// Redirect check
const redirectRes = await fetch(`${base}/results-insights`, { redirect: "manual" });
const loc = redirectRes.headers.get("location") || "";
if (![301, 308].includes(redirectRes.status) || !loc.includes("/case-studies")) {
  failures += 1;
  console.log(`FAIL results-insights redirect status=${redirectRes.status} loc=${loc}`);
} else {
  console.log(`OK results-insights redirect -> ${loc}`);
}

// Sitemap includes case studies
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
for (const slug of [
  "commercial-roofing-portfolio",
  "multi-family-water-loss",
  "fire-restoration-project",
  "how-to-choose-insurance-supplementing-partner",
]) {
  if (!sm.includes(slug)) {
    failures += 1;
    console.log(`FAIL sitemap missing ${slug}`);
  } else {
    console.log(`OK sitemap has ${slug}`);
  }
}

if (failures > 0) {
  console.error(`\nJSON-LD QA failures: ${failures}`);
  process.exit(1);
}
console.log("\nJSON-LD QA passed");
