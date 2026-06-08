import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/case-studies"].metaTitle,
  description: ES_PAGE_META["/case-studies"].metaDescription,
  path: "/es/case-studies",
  locale: "es",
});

export default function SpanishCaseStudiesPage() {
  return <CaseStudiesPage locale="es" />;
}
