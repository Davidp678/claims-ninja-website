export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

/** Homepage intake CTAs now stay in the current tab. */
export function opensStartHereInNewTab(): boolean {
  return false;
}
