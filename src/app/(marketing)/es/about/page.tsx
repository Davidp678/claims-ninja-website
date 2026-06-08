import { AboutPage } from "@/components/about/AboutPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/about"].metaTitle,
  description: ES_PAGE_META["/about"].metaDescription,
  path: "/es/about",
  locale: "es",
});

export default function SpanishAboutPage() {
  return <AboutPage locale="es" />;
}
