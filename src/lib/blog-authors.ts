/**
 * Blog authorship registry.
 *
 * Only register real, approved people as Person authors. Keep the editorial
 * team as Organization until named experts are approved with accurate bios.
 * Do not invent credentials, licenses, or years of experience.
 */

export type BlogAuthorSchemaType = "Person" | "Organization";

export type BlogAuthorId = "claims-ninja-editorial";

export type BlogAuthor = {
  name: string;
  role?: string;
  bio?: string;
};

export type BlogAuthorProfile = BlogAuthor & {
  id: BlogAuthorId;
  /** schema.org @type — Person only for real individuals. */
  schemaType: BlogAuthorSchemaType;
  /** Optional public profile path (e.g. /author/jane-doe) when an author page exists. */
  profilePath?: string;
  /** Optional sameAs URLs (LinkedIn, etc.) for Person authors. */
  sameAs?: readonly string[];
  /** Optional credential labels — only populate with verified facts. */
  credentials?: readonly string[];
  /**
   * When schemaType is Person, link worksFor to the site Organization via @id.
   * Defaults to true for Person authors.
   */
  worksForOrganization?: boolean;
};

export const BLOG_AUTHORS: Record<BlogAuthorId, BlogAuthorProfile> = {
  "claims-ninja-editorial": {
    id: "claims-ninja-editorial",
    name: "Claims Ninja Editorial Team",
    role: "Contractor Claims Operations",
    bio: "Practical claim recovery guidance for restoration and roofing contractors.",
    schemaType: "Organization",
  },
} as const;

export function resolveBlogAuthorProfile(post: {
  authorId: BlogAuthorId;
}): BlogAuthorProfile {
  const profile = BLOG_AUTHORS[post.authorId];
  if (!profile) {
    throw new Error(`Unknown blog author: ${post.authorId}`);
  }
  return profile;
}

export function resolveBlogAuthor(post: { authorId: BlogAuthorId }): BlogAuthor {
  const profile = resolveBlogAuthorProfile(post);
  return {
    name: profile.name,
    role: profile.role,
    bio: profile.bio,
  };
}

/** List registered author ids — useful when wiring future /author/[slug] routes. */
export function getAllBlogAuthorIds(): readonly BlogAuthorId[] {
  return Object.keys(BLOG_AUTHORS) as BlogAuthorId[];
}

export function getBlogAuthorById(id: BlogAuthorId): BlogAuthorProfile {
  return resolveBlogAuthorProfile({ authorId: id });
}
