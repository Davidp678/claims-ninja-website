import { expect, test, type Page } from "@playwright/test";

const BASE = process.env.SMOKE_BASE_URL ?? "http://localhost:3000";

function visibleToggle(page: Page) {
  return page.locator('button[aria-label^="Language:"]:visible');
}

async function selectLocale(page: Page, label: "Español" | "US English") {
  await visibleToggle(page).click();
  const option = page.getByRole("option", { name: label });
  await option.waitFor({ state: "visible" });
  await option.click({ force: true });
}

test.describe("Local QA pass", () => {
  test.describe.configure({ mode: "serial" });
  test.setTimeout(60_000);
  test.use({ baseURL: BASE });

  const heroViewports = [
    { name: "desktop-xl", width: 1440, height: 900 },
    { name: "desktop", width: 1280, height: 900 },
    { name: "laptop", width: 1024, height: 768 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 390, height: 844 },
  ] as const;

  for (const vp of heroViewports) {
    test(`/es hero CTA does not overlap video at ${vp.name} (${vp.width}px)`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/es", { waitUntil: "domcontentloaded" });

      const hero = page.locator('section[aria-labelledby="hero-heading"]');
      const ctaButtons = hero.getByRole("link", {
        name: /Iniciar revisión de reclamación|Agendar llamada estratégica/i,
      });
      const videoCard = hero.locator("video, iframe").first();

      await expect(ctaButtons.first()).toBeVisible();
      await expect(videoCard).toBeVisible();

      const ctaBox = await ctaButtons.first().boundingBox();
      const videoBox = await videoCard.boundingBox();
      expect(ctaBox).not.toBeNull();
      expect(videoBox).not.toBeNull();

      // When side-by-side (video to the right of text column), CTA right edge must not cross video left edge.
      if (videoBox!.x > ctaBox!.x + 50) {
        const ctaGroup = page
          .locator('section[aria-labelledby="hero-heading"]')
          .locator("div.flex.gap-4")
          .first();
        const groupBox = (await ctaGroup.boundingBox()) ?? ctaBox!;
        expect(groupBox.x + groupBox.width).toBeLessThanOrEqual(videoBox!.x + 8);
      }
    });
  }

  test("English homepage hero keeps horizontal CTA row at desktop widths", async ({
    page,
  }) => {
    for (const width of [1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/", { waitUntil: "domcontentloaded" });

      const hero = page.locator('section[aria-labelledby="hero-heading"]');
      const primary = hero.getByRole("link", { name: "Start Claim Review" });
      const secondary = hero.getByRole("link", { name: "Schedule Strategy Call" });

      await expect(primary).toBeVisible();
      await expect(secondary).toBeVisible();

      const primaryBox = await primary.boundingBox();
      const secondaryBox = await secondary.boundingBox();
      expect(primaryBox).not.toBeNull();
      expect(secondaryBox).not.toBeNull();
      // Side-by-side: secondary starts to the right of primary (same row).
      expect(secondaryBox!.x).toBeGreaterThan(primaryBox!.x + primaryBox!.width * 0.5);
      expect(Math.abs(primaryBox!.y - secondaryBox!.y)).toBeLessThan(20);
    }
  });

  const spanishRoutes = [
    { path: "/es/platform/client-portal", titlePattern: /Portal del cliente/i },
    { path: "/es/platform/ai-claim-analysis", titlePattern: /Análisis|IA/i },
    { path: "/es/solutions/roofing", titlePattern: /Techado|Reclamaciones/i },
    { path: "/es/resources/guides", titlePattern: /Guías/i },
    { path: "/es/faq", titlePattern: /Preguntas frecuentes|FAQ/i },
    { path: "/es/about", titlePattern: /Nosotros|Claims Ninja/i },
    { path: "/es/reviews", titlePattern: /Reseñas/i },
  ] as const;

  for (const route of spanishRoutes) {
    test(`Spanish route ${route.path} loads with Spanish chrome`, async ({
      page,
      request,
    }) => {
      const res = await request.get(route.path);
      expect(res.status()).toBe(200);

      await page.goto(route.path, { waitUntil: "domcontentloaded" });
      await expect(page).toHaveTitle(route.titlePattern);
      await expect(
        page.getByRole("navigation").getByRole("button", { name: "Plataforma" }),
      ).toBeVisible();
      await expect(
        page.getByRole("contentinfo").getByText("Empresa", { exact: true }),
      ).toBeVisible();
    });
  }

  test("/es/faq Spanish categories, answers, and search", async ({ page }) => {
    await page.goto("/es/faq", { waitUntil: "domcontentloaded" });

    await expect(
      page.locator("#faq-category-getting_started").getByRole("heading", {
        name: "Primeros pasos",
      }),
    ).toBeVisible();
    await expect(
      page.locator("#faq-category-pricing").getByRole("heading", { name: "Precios" }),
    ).toBeVisible();

    const search = page.getByPlaceholder(/Buscar preguntas/i);
    await search.fill("precios");
    await expect(page.getByText(/tarifas|precios/i).first()).toBeVisible();

    await search.fill("suplementos");
    await expect(page.getByText(/suplemento/i).first()).toBeVisible();

    // Expand first visible accordion if present
    const question = page.getByRole("button", { name: /¿Cómo funciona la incorporación/i }).first();
    if (await question.isVisible()) {
      await question.click();
      await expect(page.getByText(/incorporación comienza/i)).toBeVisible();
    }
  });

  test("language toggle routing matrix", async ({ page, baseURL }) => {
    await page.goto("/platform/client-portal");
    await selectLocale(page, "Español");
    await expect(page).toHaveURL(`${baseURL}/es/platform/client-portal`);

    await selectLocale(page, "US English");
    await expect(page).toHaveURL(`${baseURL}/platform/client-portal`);

    await page.goto("/resources/blog/recover-revenue-without-in-house-claims");
    await selectLocale(page, "Español");
    await expect(page).toHaveURL(`${baseURL}/es`);

    await selectLocale(page, "US English");
    await expect(page).toHaveURL(`${baseURL}/`);
  });

  test("SEO: noindex, sitemap exclusion, no hreflang", async ({ request }) => {
    for (const path of ["/es", "/es/faq", "/es/platform/client-portal"]) {
      const res = await request.get(path);
      expect(res.ok()).toBeTruthy();
      const html = await res.text();
      expect(html).toContain("noindex");
      expect(html).toContain("follow");
      expect(html.toLowerCase()).not.toContain("hreflang");
    }

    const homeRes = await request.get("/");
    const homeHtml = await homeRes.text();
    expect(homeHtml.toLowerCase()).not.toContain("hreflang");

    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.ok()).toBeTruthy();
    const sitemap = await sitemapRes.text();
    expect(sitemap).not.toMatch(/\/es(\/|<)/);
  });
});
