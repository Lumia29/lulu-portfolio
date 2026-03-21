import Link from "next/link";

import { ContactPanel } from "@/components/ContactPanel";
import { ExperimentCard } from "@/components/ExperimentCard";
import { HeroSection } from "@/components/HeroSection";
import { HighlightCard } from "@/components/HighlightCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { about, experiments, highlights, projects } from "@/data/siteContent";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Highlights"
            title="把复杂 AI 工作，做成有结果的方案"
            description="我擅长在模型能力、业务问题和产品体验之间找平衡，既能把指标拉起来，也能把策略讲清楚。"
          />
          <div className="three-column-grid">
            {highlights.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="About"
              title="设计背景出身，在 AI 与产品之间搭桥"
              description="我习惯把抽象能力翻译成具体体验，也能把零散需求重新组织成清晰的问题定义。"
            />
            <div className="surface-card about-summary">
              <p>
                <strong>教育经历：</strong>
                {about.education}
              </p>
              <p>
                <strong>工作经历：</strong>
                字节跳动（模型运营）、阿里淘天（绘蛙实习）、长亭科技（海外增长）
              </p>
              <div className="tag-row">
                {about.skills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="surface-card note-card">
            <span className="section-eyebrow">Method</span>
            <h3>我的工作方式</h3>
            <p>先拆问题，再建机制，最后验证结果。无论是策略治理还是产品优化，我都会把每一步做成可复盘的结构。</p>
            <Link href="/about" className="text-link">
              查看完整 About
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="项目案例"
            description="这些项目覆盖风险治理、AIGC 产品与增长场景，核心是把 AI 能力变成真正可执行的业务方案。"
          />
          <div className="projects-grid">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="section-actions">
            <Link href="/projects" className="button button-secondary">
              查看全部项目
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container split-layout">
          <div>
            <SectionHeading
              eyebrow="Experiments"
              title="AI 实验"
              description="我会把新工具和新想法先放进自己的工作流里跑通，再决定它值不值得走向更大的场景。"
            />
            <div className="stack-grid">
              {experiments.map((experiment) => (
                <ExperimentCard key={experiment.title} experiment={experiment} />
              ))}
            </div>
          </div>
          <div className="surface-card note-card accent-card">
            <span className="section-eyebrow">In Progress</span>
            <h3>AI 个人网站建设</h3>
            <p>把个人品牌、项目表达和联系入口整合在一个可迭代站点里，本身也是一次产品化实验。</p>
            <Link href="/experiments" className="text-link">
              继续查看实验记录
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block section-last">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="如果你也在做 AI 产品或业务创新，可以来聊"
            description="适合一起交流业务治理、产品设计、增长叙事和 AI 落地。"
          />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
