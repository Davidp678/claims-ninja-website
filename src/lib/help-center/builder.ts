import type { HelpArticle, HelpBlock } from "@/lib/help-center/types";

export function defineArticle(article: HelpArticle): HelpArticle {
  return article;
}

export function p(text: string): HelpBlock {
  return { type: "paragraph", text };
}

export function h(level: 2 | 3 | 4, text: string): HelpBlock {
  return { type: "heading", level, text };
}

export function ul(items: string[]): HelpBlock {
  return { type: "list", items };
}

export function callout(
  variant: "info" | "critical" | "success" | "warning",
  text: string,
): HelpBlock {
  return { type: "callout", variant, text };
}

export function video(url: string, title: string, duration?: string): HelpBlock {
  return { type: "video", url, title, duration };
}

export function link(url: string, label: string): HelpBlock {
  return { type: "link", url, label };
}

export function prompt(title: string, text: string): HelpBlock {
  return { type: "prompt", title, text };
}

export function checklist(items: { label: string; required?: boolean }[]): HelpBlock {
  return { type: "checklist", items };
}

export function divider(): HelpBlock {
  return { type: "divider" };
}
