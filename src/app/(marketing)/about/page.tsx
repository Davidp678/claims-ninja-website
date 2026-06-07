import { AboutPage } from "@/components/about/AboutPage";
import { ABOUT_META } from "@/lib/about-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: ABOUT_META.metaTitle,
  description: ABOUT_META.metaDescription,
  path: ABOUT_META.path,
});

export default function AboutRoute() {
  return <AboutPage />;
}
