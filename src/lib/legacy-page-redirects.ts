export const LEGACY_PAGE_REDIRECTS = [
  { from: "/about-us", to: "/about" },
  { from: "/client-portal", to: "/platform/client-portal" },
  { from: "/roofing-claim", to: "/solutions/roofing" },
  { from: "/water-damage-claim", to: "/solutions/water-damage" },
  { from: "/fire-claim", to: "/solutions/fire-damage" },
  { from: "/case-study", to: "/case-studies" },
] as const;

export function resolveLegacyPageRedirect(pathname: string): string | null {
  const key =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const match = LEGACY_PAGE_REDIRECTS.find((entry) => entry.from === key);
  return match?.to ?? null;
}
