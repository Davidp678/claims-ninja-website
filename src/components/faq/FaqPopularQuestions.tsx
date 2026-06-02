import { FAQ_ITEMS } from "@/lib/faq-data";
import {
  FAQ_POPULAR_SECTION,
  getCategoryTitle,
  getFeaturedFaqs,
  getFaqPreview,
} from "@/lib/faq-page";

import { FaqPageSection } from "./FaqPageSection";
import { PopularQuestionCard } from "./PopularQuestionCard";

export function FaqPopularQuestions() {
  const featured = getFeaturedFaqs(FAQ_ITEMS, 8);

  return (
    <FaqPageSection
      eyebrow={FAQ_POPULAR_SECTION.eyebrow}
      title={FAQ_POPULAR_SECTION.title}
      description={FAQ_POPULAR_SECTION.description}
    >
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {featured.map((item) => (
          <li key={item.id}>
            <PopularQuestionCard
              question={item.question}
              preview={getFaqPreview(item)}
              category={getCategoryTitle(item.category)}
              href={`#faq-${item.id}`}
            />
          </li>
        ))}
      </ul>
    </FaqPageSection>
  );
}
