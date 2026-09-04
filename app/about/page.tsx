import type { Metadata } from "next";

import { PortraitPanel } from "@/components/PortraitPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { about, careerExperiences, contact, resumeIsPublic } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "关于 | 刘露露",
  description: "从设计与用户现场，到模型评测、AI 风险策略、Agent / Workflow 与独立 AI 产品构建。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <section className="page-section about-page">
      <div className="container">
        <SectionHeading as="h1" eyebrow="ABOUT" title="我如何形成现在的 AI 产品与策略方法" description="我把体验判断、业务理解、模型评测和产品化实践逐步连接起来，形成现在解决 AI 应用问题的方法。" />
        <div className="about-page-grid">
          <div className="about-story">
            <p className="about-story-lead">{about.intro}</p>
            {about.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <blockquote>{about.method}</blockquote>
            <div className="about-actions">{resumeIsPublic ? <a href={contact.resumeLink} className="button button-primary" target="_blank" rel="noreferrer">查看简历</a> : null}<a href={`mailto:${contact.email}`} className="button button-secondary">联系我</a></div>
          </div>
          <PortraitPanel />
        </div>
        <div className="career-timeline">
          {careerExperiences.map((item, index) => (
            <article key={`${item.company}-${item.role}`}>
              <span className="timeline-index">0{index + 1}</span>
              <div><span>{item.period}</span><h3>{item.company}</h3></div>
              <div><strong>{item.role}</strong><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
