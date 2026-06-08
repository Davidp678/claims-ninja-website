import type { HelpArticle } from "@/lib/help-center/types";

import { accountSetupArticles } from "./account-setup";
import { billingArticles } from "./billing";
import { documentationArticles } from "./documentation";
import { faqArticles } from "./faq";
import { firstClaimArticles } from "./first-claim";
import { gettingStartedArticles } from "./getting-started";
import { affiliateArticle, legalArticles } from "./legal";
import { mondayTrainingArticles } from "./monday-training";
import { supplementArticles } from "./supplements";
import { supportArticles } from "./support";
import { trainingVideoArticles } from "./training-videos";
import { workflowArticles } from "./workflow";

export const CLIENT_ARTICLES: HelpArticle[] = [
  ...gettingStartedArticles,
  ...accountSetupArticles,
  ...mondayTrainingArticles,
  ...firstClaimArticles,
  ...documentationArticles,
  ...supplementArticles,
  ...workflowArticles,
  ...billingArticles,
  ...faqArticles,
  ...trainingVideoArticles,
  ...supportArticles,
  ...legalArticles,
  affiliateArticle,
];
