import { FAQ_SEARCH } from "@/lib/faq-page";

import { FaqPageSection } from "./FaqPageSection";
import { FaqSearchBar } from "./FaqSearchBar";

export function FaqSearchSection() {
  return (
    <FaqPageSection
      eyebrow={FAQ_SEARCH.eyebrow}
      title={FAQ_SEARCH.title}
      description={FAQ_SEARCH.description}
    >
      <FaqSearchBar />
    </FaqPageSection>
  );
}
