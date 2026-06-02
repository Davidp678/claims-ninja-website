import { FAQ_ITEMS } from "@/lib/faq-data";
import { FAQ_LIBRARY_SECTION, getFaqsByCategory } from "@/lib/faq-page";

import { FaqAccordionSection } from "./FaqAccordionSection";
import { FaqPageSection } from "./FaqPageSection";

export function FaqLibrary() {
  const groups = getFaqsByCategory(FAQ_ITEMS);

  return (
    <FaqPageSection
      eyebrow={FAQ_LIBRARY_SECTION.eyebrow}
      title={FAQ_LIBRARY_SECTION.title}
      description={FAQ_LIBRARY_SECTION.description}
    >
      <div className="mt-12">
        {groups.map(({ category, items }) => (
          <FaqAccordionSection
            key={category.id}
            categoryId={category.id}
            title={category.title}
            description={category.description}
            items={items}
          />
        ))}
      </div>
    </FaqPageSection>
  );
}
