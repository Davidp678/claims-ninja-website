import { ContactPage } from "@/components/contact/ContactPage";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/contact"].metaTitle,
  description: ES_PAGE_META["/contact"].metaDescription,
  path: "/es/contact",
  locale: "es",
});

export default function SpanishContactPage() {
  return <ContactPage locale="es" />;
}
