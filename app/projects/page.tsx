import type { Metadata } from "next";

import { FeaturedProjectCard } from "@/components/FeaturedProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { additionalExperiences, featuredProjects } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "项目 | 刘露露",
  description: "AI 岗位匹配分析器、AI 风险治理工具闭环与绘蛙 AIGC 产品评测案例。",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-section projects-index-hero">
        <div className="container">
          <SectionHeading as="h1" eyebrow="PROJECTS" title="围绕 AI 产品与策略的代表实践" description="三个核心项目分别证明独立产品构建、真实企业 AI 治理与 AIGC 产品评测能力。" />
          <div className="featured-project-grid projects-index-grid">
            {featuredProjects.map((project) => <FeaturedProjectCard key={project.slug} project={project} compact source="projects" />)}
          </div>
        </div>
      </section>
      <section id="additional-experience" className="section-block section-last additional-section">
        <div className="container">
          <SectionHeading eyebrow="ADDITIONAL EXPERIENCE" title="补充经历" description="这些经历不与 AI 主线争夺权重，但补充了我对市场、用户现场与业务协作的理解。" />
          <div className="experience-index">
            {additionalExperiences.map((item) => (
              <article key={item.company}>
                <div><span>{item.period}</span><h3>{item.company}</h3></div>
                <div><strong>{item.role}</strong><p>{item.detail}</p><div className="tag-row">{item.tags?.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
