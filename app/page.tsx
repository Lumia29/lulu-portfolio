import Link from "next/link";

import { ContactPanel } from "@/components/ContactPanel";
import { ExperimentCard } from "@/components/ExperimentCard";
import { HeroSection } from "@/components/HeroSection";
import { HighlightCard } from "@/components/HighlightCard";
import { PortraitPanel } from "@/components/PortraitPanel";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillRadar } from "@/components/SkillRadar";
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
          <div className="highlights-grid">
            {highlights.map((item) => (
              <HighlightCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container about-preview-grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="设计背景，在 AI 与产品之间搭桥"
              description={about.intro}
            />
            <article className="about-copy-card surface-card">
              <p>{about.education}</p>
              <p>{about.philosophy}</p>
              <div className="tag-row">
                {about.softSkills.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
              <Link href="/about" className="project-link">
                查看完整 About
              </Link>
            </article>
          </div>
          <div className="about-side-stack">
            <PortraitPanel />
            <SkillRadar items={about.radar} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="项目案例"
            description="这些项目覆盖风险治理、AIGC 产品与增长场景，核心是把 AI 能力变成可执行的业务方案。"
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container experiments-home-grid">
          <div>
            <SectionHeading
              eyebrow="Experiments"
              title="把新工具先放进自己的工作流里跑通"
              description="我会把新工具和新想法先放进自己的工作流里跑通，再决定它值不值得走向更大的场景。"
            />
            <Link href="/experiments" className="button button-secondary inline-button">
              看完整实验记录
            </Link>
          </div>
          <div className="stack-grid">
            {experiments.map((experiment) => (
              <ExperimentCard key={experiment.title} experiment={experiment} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-last">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="欢迎联系，交流学习~"
            description="轻松一点，但信息要足够清楚。"
          />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
