# Legacy WordPress Redirect Audit

Generated for The Claims Ninja Next.js migration. Blog/guides/feed redirects live in [`next.config.ts`](../../next.config.ts). Legacy WordPress page slugs are handled in [`src/proxy.ts`](../../src/proxy.ts) via [`src/lib/legacy-page-redirects.ts`](../../src/lib/legacy-page-redirects.ts) for single-hop redirects (including trailing-slash URLs).

**Last updated:** 2026-06-09  
**Legacy redirect inventory:** [`legacy-redirects.csv`](legacy-redirects.csv) (85 rows)  
**Regenerate:** `npm run audit:seo`

---

## A. Existing redirects already present

These rules were in place before this audit. Next.js `permanent: true` returns **308 Permanent Redirect** in production.

| Legacy source | Destination | Configured in |
|---|---|---|
| `/blog` | `/resources/blog` | `next.config.ts` |
| `/blog/category/:slug` | `/resources/blog/category/:slug` | `next.config.ts` (wildcard) |
| `/blog/:slug` | `/resources/blog/:slug` | `next.config.ts` (wildcard) |
| `/guides` | `/resources/guides` | `next.config.ts` |
| `/guides/:category` | `/resources/guides/:category` | `next.config.ts` (wildcard) |
| `/guides/:category/:slug` | `/resources/guides/:category/:slug` | `next.config.ts` (wildcard) |
| `/videos` | `/platform` | `next.config.ts` |
| `/feed` | `/resources/blog` | `next.config.ts` |
| `/feed/rss` | `/resources/blog` | `next.config.ts` |
| `/comments/feed` | `/resources/blog` | `next.config.ts` |

**Wildcard coverage** (documented in CSV, not separate config rows):

| Pattern | Count |
|---|---|
| `/blog/:slug` → `/resources/blog/:slug` | 25 blog posts |
| `/blog/category/:slug` → `/resources/blog/category/:slug` | 10 categories |
| `/guides/:category/:slug` → `/resources/guides/:category/:slug` | 28 guides |

**Other redirect mechanisms (not HTTP 301/308 from next.config.ts):**

- [`src/proxy.ts`](../../src/proxy.ts) — legacy WordPress page redirects (308, single hop), locale cookies, Supabase auth
- App Router `redirect()` — internal routes (`/help`, `/dashboard`, etc.)

---

## B. New redirects added

High-confidence legacy WordPress page slugs. Handled in [`src/proxy.ts`](../../src/proxy.ts) at the start of the request (before Next.js trailing-slash normalization) so **both** `/path` and `/path/` redirect in **one 308 hop** to the final destination.

| Legacy path | Destination | Configured in |
|---|---|---|
| `/about-us` | `/about` | `src/proxy.ts` |
| `/client-portal` | `/platform/client-portal` | `src/proxy.ts` |
| `/roofing-claim` | `/solutions/roofing` | `src/proxy.ts` |
| `/water-damage-claim` | `/solutions/water-damage` | `src/proxy.ts` |
| `/fire-claim` | `/solutions/fire-damage` | `src/proxy.ts` |
| `/case-study` | `/case-studies` | `src/proxy.ts` |

**Shared map:** [`src/lib/legacy-page-redirects.ts`](../../src/lib/legacy-page-redirects.ts)  
**CSV rows:** 12 in [`legacy-redirects.csv`](legacy-redirects.csv) (with and without trailing slash documented)

**Trailing-slash behavior:** `skipTrailingSlashRedirect: true` in [`next.config.ts`](../../next.config.ts) prevents Next.js from stripping trailing slashes before proxy runs. Proxy resolves both `/about-us/` and `/about-us` to `/about` via an absolute 308 redirect in **one hop**. No redirect chains or loops.

---

## C. Recommended mappings (not auto-added)

Review against Google Search Console “Not found” export before adding. Only add when destination relevance is obvious.

| Legacy pattern (likely WP) | Suggested destination | Why not auto-added |
|---|---|---|
| `/mold-claim/` | `/solutions/mold` | Parallel to fire/water/roofing; not confirmed in GSC list |
| `/contents-claim/` | `/solutions/contents` | Same naming pattern; unconfirmed |
| `/contact-us/` | `/contact` | Common WP rename; slug not verified |
| `/platform/` | `/platform` | Same slug — likely returns 200 already, not a redirect |

---

## D. Legacy URLs that should remain 404

Do **not** add catch-all redirects.

**WordPress system paths:**

- `/wp-admin`, `/wp-admin/*`
- `/wp-content`, `/wp-content/*`
- `/wp-includes`, `/wp-includes/*`
- `/wp-login.php`
- `/wp-json`, `/wp-json/*`
- `/xmlrpc.php`
- `/wp-sitemap.xml`

**WordPress taxonomy / archives with no 1:1 page:**

- `/tag/*`, `/author/*`
- Non-blog `/category/*` archives
- Date archives `/20XX/*`

**Other:**

- Unknown old slugs with unclear destination
- Retired content with no equivalent on the new site

**Note:** The live WordPress sitemap was unavailable during the original migration audit. Export GSC “Not found” URLs and diff against [`legacy-redirects.csv`](legacy-redirects.csv) to prioritize further redirects.

---

## E. Manual mapping decisions needed

Triaging remaining GSC 404s may require case-by-case decisions:

1. **Blog slug mismatches** — Wildcard `/blog/:slug` redirects to `/resources/blog/:slug`, but the destination **404s** if that slug never existed on the new site. Fix by either adding a specific redirect to the correct new slug or leaving 404 if content was retired.

2. **Old landing pages with non-obvious names** — Examples: `/services/`, `/insurance-supplementing/`, `/get-started/`, `/supplementing/`. Map only after confirming the closest current page.

3. **Spanish or duplicate WP paths** — Old WP may have had `/es/*` or duplicate service URLs under different structures. Spanish marketing lives under `/es/*` on the new site; do not redirect English legacy URLs to Spanish pages without explicit approval.

4. **Case study detail pages** — `/case-study/` (singular) now redirects to `/case-studies` hub. Individual old case study URLs (e.g. `/case-study/some-slug/`) need manual mapping if they appear in GSC.

---

## Verification

```bash
npm run build
npm run start          # or npm run dev
npm run test:seo-redirects
```

The smoke script ([`scripts/seo-redirect-smoke.ts`](../seo-redirect-smoke.ts)) checks:

- All legacy hub/wildcard redirects (308 + correct `Location`)
- All six new WordPress page redirects
- Trailing-slash variant (`/about-us/`)
- **Chain guard:** each legacy page URL redirects in a single hop to a 200 destination

No catch-all redirects were added.
