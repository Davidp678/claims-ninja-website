export function getVideoEmbedUrl(url: string): string {
  if (url.includes("loom.com/share/")) {
    return url.replace("/share/", "/embed/");
  }

  return url;
}
