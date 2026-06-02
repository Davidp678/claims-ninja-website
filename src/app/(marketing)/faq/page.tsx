import { FaqCategoryGrid } from "@/components/faq/FaqCategoryGrid";
import { FaqHero } from "@/components/faq/FaqHero";
import { FaqLibraryPlaceholder } from "@/components/faq/FaqLibraryPlaceholder";
import { FaqPopularQuestions } from "@/components/faq/FaqPopularQuestions";
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
      <FaqSearchSection />
      <FaqCategoryGrid />
      <FaqPopularQuestions />
      <FaqLibraryPlaceholder />
      <MarketingCtaPanel />
    </>
  );
}
