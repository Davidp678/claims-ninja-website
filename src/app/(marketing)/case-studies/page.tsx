import { CaseStudiesPage } from "@/components/case-studies/CaseStudiesPage";
import { pageMetadata } from "@/lib/metadata";
import { caseStudiesPage } from "@/lib/marketing-pages";

export const metadata = pageMetadata({
  title: caseStudiesPage.metaTitle,
  description: caseStudiesPage.metaDescription,
  path: caseStudiesPage.path,
});

export default function CaseStudiesRoute() {
  return <CaseStudiesPage />;
}
