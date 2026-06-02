import { FAQ_POPULAR_QUESTIONS, FAQ_POPULAR_SECTION } from "@/lib/faq-page";

import { FaqPageSection } from "./FaqPageSection";
import { PopularQuestionCard } from "./PopularQuestionCard";

export function FaqPopularQuestions() {
  return (
    <FaqPageSection
      eyebrow={FAQ_POPULAR_SECTION.eyebrow}
      title={FAQ_POPULAR_SECTION.title}
      description={FAQ_POPULAR_SECTION.description}
    >
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-6">
        {FAQ_POPULAR_QUESTIONS.map((item) => (
          <li key={item.question}>
            <PopularQuestionCard
              question={item.question}
              preview={item.preview}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    </FaqPageSection>
  );
}
