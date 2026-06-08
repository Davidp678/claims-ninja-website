import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { blogHubMetadata } from "@/lib/metadata";

export const metadata = blogHubMetadata();

export default function ResourcesBlogPage() {
  return <BlogHubPage />;
}
