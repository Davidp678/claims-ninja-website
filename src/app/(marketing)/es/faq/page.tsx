import { FaqBrowseSections } from "@/components/faq/FaqBrowseSections";
import { FaqCategoryGrid } from "@/components/faq/FaqCategoryGrid";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqJsonLd } from "@/components/faq/FaqJsonLd";
import { FaqLibrary } from "@/components/faq/FaqLibrary";
import { FaqPopularQuestions } from "@/components/faq/FaqPopularQuestions";
import { FaqSearchProvider } from "@/components/faq/FaqSearchProvider";
import { FaqSearchSection } from "@/components/faq/FaqSearchSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { ES_PAGE_META } from "@/lib/i18n/es-meta";
import { pageMetadataWithLocale } from "@/lib/metadata";

export const metadata = pageMetadataWithLocale({
  title: ES_PAGE_META["/faq"].metaTitle,
  description: ES_PAGE_META["/faq"].metaDescription,
  path: "/es/faq",
  locale: "es",
});

export default function SpanishFaqPage() {
  return (
    <>
      <FaqHero locale="es" />
      <FaqSearchProvider locale="es">
        <FaqSearchSection locale="es" />
        <FaqBrowseSections>
          <FaqCategoryGrid locale="es" />
          <FaqPopularQuestions locale="es" />
          <FaqLibrary locale="es" />
        </FaqBrowseSections>
      </FaqSearchProvider>
      <MarketingCtaPanel locale="es" />
      <FaqJsonLd locale="es" />
    </>
  );
}
