export type BlogAuthorId = "claims-ninja-editorial";

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogAuthorProfile = BlogAuthor & {
  id: BlogAuthorId;
  bio?: string;
};

export const BLOG_AUTHORS: Record<BlogAuthorId, BlogAuthorProfile> = {
  "claims-ninja-editorial": {
    id: "claims-ninja-editorial",
    name: "Claims Ninja Editorial Team",
    role: "Contractor Claims Operations",
    bio: "Practical claim recovery guidance for restoration and roofing contractors.",
  },
} as const;

export function resolveBlogAuthor(post: { authorId: BlogAuthorId }): BlogAuthor {
  const profile = BLOG_AUTHORS[post.authorId];
  if (!profile) {
    throw new Error(`Unknown blog author: ${post.authorId}`);
  }
  return { name: profile.name, role: profile.role };
}
