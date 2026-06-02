import { FaqCategoryGrid } from "@/components/faq/FaqCategoryGrid";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqJsonLd } from "@/components/faq/FaqJsonLd";
import { FaqLibrary } from "@/components/faq/FaqLibrary";
import { FaqPopularQuestions } from "@/components/faq/FaqPopularQuestions";
import { FaqSearchProvider } from "@/components/faq/FaqSearchProvider";
import { FaqSearchSection } from "@/components/faq/FaqSearchSection";
import { MarketingCtaPanel } from "@/components/marketing/MarketingCtaPanel";
import { FAQ_META } from "@/lib/faq-page";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: FAQ_META.metaTitle,
  description: FAQ_META.metaDescription,
  path: FAQ_META.path,
});

export default function FaqPage() {
  return (
    <>
      <FaqHero />
      <FaqSearchProvider>
        <FaqSearchSection />
        <FaqCategoryGrid />
        <FaqPopularQuestions />
        <FaqLibrary />
      </FaqSearchProvider>
      <MarketingCtaPanel />
      <FaqJsonLd />
    </>
  );
}
