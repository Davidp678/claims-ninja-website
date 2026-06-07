import { FAQ_SEARCH } from "@/lib/faq-page";

import { FaqPageSection } from "./FaqPageSection";
import { FaqSearchPanel } from "./FaqSearchPanel";

export function FaqSearchSection() {
  return (
    <FaqPageSection
      eyebrow={FAQ_SEARCH.eyebrow}
      title={FAQ_SEARCH.title}
      description={FAQ_SEARCH.description}
      tight
    >
      <FaqSearchPanel />
    </FaqPageSection>
  );
}
