import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AnalyzerCaseStudy } from "@/components/case-study/AnalyzerCaseStudy";
import { HuiwaCaseStudy } from "@/components/case-study/HuiwaCaseStudy";
import { RiskGovernanceCaseStudy } from "@/components/case-study/RiskGovernanceCaseStudy";
import type { CaseStudyBackLink } from "@/components/case-study/CaseStudyLayout";
import { featuredProjects } from "@/data/siteContent";

const studies = {
  "ai-job-match-analyzer": AnalyzerCaseStudy,
  "ai-risk-governance": RiskGovernanceCaseStudy,
  "huiwa-aigc": HuiwaCaseStudy,
};

type Slug = keyof typeof studies;
type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ from?: string | string[] }>;
};

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = featuredProjects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | 刘露露`,
    description: project.oneLiner,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: project.title, description: project.oneLiner, type: "article" },
  };
}

export default async function ProjectDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const fromParam = (await searchParams)?.from;
  const source = Array.isArray(fromParam) ? fromParam[0] : fromParam;
  const Study = studies[slug as Slug];
  if (!Study) notFound();
  const backLink: CaseStudyBackLink = source === "home"
    ? { href: "/", label: "返回首页" }
    : { href: "/projects", label: "返回项目" };
  return <div className="case-study-page"><Study backLink={backLink} /></div>;
}
