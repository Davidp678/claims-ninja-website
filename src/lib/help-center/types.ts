export type HelpPortal = "client" | "internal";

export type InternalRole = "cm" | "pa" | "appraiser" | "tl" | "exec" | "all";

export type HelpBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; variant: "info" | "critical" | "success" | "warning"; text: string }
  | { type: "video"; url: string; title: string; duration?: string }
  | { type: "link"; url: string; label: string }
  | { type: "checklist"; items: { label: string; required?: boolean }[] }
  | { type: "prompt"; title: string; text: string }
  | { type: "divider" };

export type HelpArticle = {
  slug: string;
  sectionSlug: string;
  title: string;
  excerpt: string;
  portal: HelpPortal;
  roles?: readonly InternalRole[];
  tags?: readonly string[];
  updatedAt: string;
  blocks: readonly HelpBlock[];
  hidden?: boolean;
};

export type HelpSection = {
  slug: string;
  title: string;
  description: string;
  portal: HelpPortal;
  order: number;
  roles?: readonly InternalRole[];
};

export type HelpNavItem = {
  sectionSlug: string;
  sectionTitle: string;
  articles: { slug: string; title: string; roles?: readonly InternalRole[]; hidden?: boolean }[];
};
