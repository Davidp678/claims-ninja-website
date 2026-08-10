import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyDetailPage } from "@/components/case-studies/CaseStudyDetailPage";
import {
  getAllClaimRecoveryCaseStudySlugs,
  getCaseStudyPath,
  getClaimRecoveryCaseStudyBySlug,
} from "@/lib/claim-recovery-case-studies";
import { pageMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllClaimRecoveryCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getClaimRecoveryCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case study not found" };
  }

  return pageMetadata({
    title: study.seoTitle,
    description: study.seoDescription,
    path: getCaseStudyPath(study.slug),
  });
}

export default async function CaseStudyDetailRoute({ params }: PageProps) {
  const { slug } = await params;
  const study = getClaimRecoveryCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailPage study={study} />;
}
