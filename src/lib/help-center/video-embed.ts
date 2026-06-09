const SHAREPOINT_EMBED_PARAMS = new URLSearchParams({
  embed: '{"ust":true}',
  referrer: "StreamWebApp",
  referrerScenario: "EmbedDialog.Create",
  ClientRender: "1",
  action: "embedview",
});

function toSharePointEmbedUrl(shareUrl: string): string {
  if (
    shareUrl.includes("/embed.aspx") ||
    shareUrl.includes("action=embedview")
  ) {
    return shareUrl;
  }

  const parsed = new URL(shareUrl);
  const shareMatch = parsed.pathname.match(/\/:v:\/p\/([^/]+)\/([^/]+)/);
  if (!shareMatch) {
    return shareUrl;
  }

  const [, username, uniqueId] = shareMatch;
  const hostMatch = parsed.hostname.match(/^(.+)-my\.sharepoint\.com$/);
  const orgSlug = hostMatch?.[1];
  if (!orgSlug) {
    return shareUrl;
  }

  const personalSite = `${username}_${orgSlug}_com`;
  const embedParams = new URLSearchParams(SHAREPOINT_EMBED_PARAMS);
  embedParams.set("UniqueId", uniqueId);

  return `https://${parsed.hostname}/personal/${personalSite}/_layouts/15/embed.aspx?${embedParams}`;
}

export function getVideoEmbedUrl(url: string): string {
  if (url.includes("loom.com/share/")) {
    return url.replace("/share/", "/embed/");
  }

  if (url.includes("sharepoint.com")) {
    return toSharePointEmbedUrl(url);
  }

  return url;
}
