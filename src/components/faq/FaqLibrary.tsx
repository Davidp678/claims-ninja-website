import { FAQ_LIBRARY_SECTION } from "@/lib/faq-page";

import { FaqLibraryContent } from "./FaqLibraryContent";
import { FaqPageSection } from "./FaqPageSection";

export function FaqLibrary() {
  return (
    <FaqPageSection
      eyebrow={FAQ_LIBRARY_SECTION.eyebrow}
      title={FAQ_LIBRARY_SECTION.title}
      description={FAQ_LIBRARY_SECTION.description}
    >
      <FaqLibraryContent />
    </FaqPageSection>
  );
}
