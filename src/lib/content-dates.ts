/**
 * Content date policy.
 *
 * All authored content (blog posts, guides) stores dates as ISO `YYYY-MM-DD`
 * strings in two fields:
 *
 *   - `publishedAt` (required): the date the content first went live. This is
 *     the field that drives chronological sorting and the publish gate.
 *   - `updatedAt` (optional): the date the content was last materially revised.
 *     Set this only on a real edit; it feeds `dateModified` in schema/OG and
 *     `lastmod` in the sitemap. It must never be earlier than `publishedAt`.
 *
 * Rules:
 *   1. Never set `publishedAt` to a future date for content you want live now.
 *      Future-dated posts are treated as scheduled and are hidden from all
 *      public listings, sitemap, and structured data until their date arrives
 *      (see {@link isPublished}).
 *   2. Because the site is statically generated, "now" is evaluated at build
 *      time. A scheduled post only appears after a rebuild/redeploy on or after
 *      its `publishedAt` date.
 *   3. Display formatting lives in `formatBlogDate` (blog-page.ts) and
 *      `formatGuideDate` (guide-page.ts); the sitemap future-date guard lives in
 *      `getSitemapLastModified` (site-seo.ts) as a backstop to this policy.
 */

/** Parses an ISO `YYYY-MM-DD` string to a timestamp, or `NaN` if invalid. */
export function parseContentDate(iso?: string): number {
  if (!iso) return Number.NaN;
  return new Date(iso).getTime();
}

/**
 * Returns true when `publishedAt` is on or before the current time, i.e. the
 * content should be publicly visible. Invalid/missing dates are treated as not
 * published so malformed data fails closed rather than leaking.
 */
export function isPublished(publishedAt?: string, now: number = Date.now()): boolean {
  const time = parseContentDate(publishedAt);
  if (Number.isNaN(time)) return false;
  return time <= now;
}

/** True when `publishedAt` is strictly in the future (scheduled content). */
export function isScheduled(publishedAt?: string, now: number = Date.now()): boolean {
  const time = parseContentDate(publishedAt);
  if (Number.isNaN(time)) return false;
  return time > now;
}
