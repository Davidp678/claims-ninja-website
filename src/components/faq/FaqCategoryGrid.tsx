import type { Locale } from "@/lib/i18n/config";
import { getFaqPageContent } from "@/lib/i18n/content/faq";

import { FaqCategoryCard } from "./FaqCategoryCard";
import { FaqPageSection } from "./FaqPageSection";

export function FaqCategoryGrid({ locale = "en" }: { locale?: Locale }) {
  const { categorySection, categories } = getFaqPageContent(locale);

  return (
    <FaqPageSection
      eyebrow={categorySection.eyebrow}
      title={categorySection.title}
      description={categorySection.description}
      tight
    >
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li key={category.id}>
            <FaqCategoryCard
              id={category.id}
              title={category.title}
              description={category.description}
            />
          </li>
        ))}
      </ul>
    </FaqPageSection>
  );
}
