import {
  getAllFaqItems,
  getCategoryTitleLocalized,
  getFaqPageContent,
} from "@/lib/i18n/content/faq";
import type { Locale } from "@/lib/i18n/config";
import { getFeaturedFaqs, getFaqPreview } from "@/lib/faq-page";

import { FaqPageSection } from "./FaqPageSection";
import { PopularQuestionCard } from "./PopularQuestionCard";

export function FaqPopularQuestions({ locale = "en" }: { locale?: Locale }) {
  const popularSection = getFaqPageContent(locale).popularSection;
  const items = getAllFaqItems(locale);
  const featured = getFeaturedFaqs(items, 8);

  return (
    <FaqPageSection
      eyebrow={popularSection.eyebrow}
      title={popularSection.title}
      description={popularSection.description}
      tight
    >
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {featured.map((item) => (
          <li key={item.id}>
            <PopularQuestionCard
              question={item.question}
              preview={getFaqPreview(item)}
              category={getCategoryTitleLocalized(item.category, locale)}
              href={`#faq-${item.id}`}
            />
          </li>
        ))}
      </ul>
    </FaqPageSection>
  );
}
