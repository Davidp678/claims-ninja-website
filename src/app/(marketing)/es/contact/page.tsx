import { ContactPage } from "@/components/contact/ContactPage";
import { WAVE1_ES_META } from "@/lib/i18n/wave1-es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: WAVE1_ES_META["/contact"].metaTitle,
  description: WAVE1_ES_META["/contact"].metaDescription,
  path: "/es/contact",
  locale: "es",
});

export default function SpanishContactPage() {
  return <ContactPage locale="es" />;
}
