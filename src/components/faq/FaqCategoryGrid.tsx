import { FAQ_CATEGORIES, FAQ_CATEGORY_SECTION } from "@/lib/faq-page";

import { FaqCategoryCard } from "./FaqCategoryCard";
import { FaqPageSection } from "./FaqPageSection";

export function FaqCategoryGrid() {
  return (
    <FaqPageSection
      eyebrow={FAQ_CATEGORY_SECTION.eyebrow}
      title={FAQ_CATEGORY_SECTION.title}
      description={FAQ_CATEGORY_SECTION.description}
      tight
    >
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FAQ_CATEGORIES.map((category) => (
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
