import type { HelpArticle } from "@/lib/help-center/types";

import { communicationArticles } from "./communication";
import { companyArticles } from "./company";
import { estimatingArticles } from "./estimating";
import { internalFaqArticles } from "./faq";
import { negotiationArticles } from "./negotiation";
import { onboardingArticles } from "./onboarding";
import { operationsArticles } from "./operations";
import { resourcesArticles } from "./resources";
import { sopArticles } from "./sops";
import { xactimateArticles } from "./xactimate";

export const INTERNAL_ARTICLES: HelpArticle[] = [
  ...companyArticles,
  ...operationsArticles,
  ...estimatingArticles,
  ...xactimateArticles,
  ...negotiationArticles,
  ...communicationArticles,
  ...sopArticles,
  ...onboardingArticles,
  ...resourcesArticles,
  ...internalFaqArticles,
];
