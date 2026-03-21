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
            title="三种能力，组成我做 AI 产品的底盘"
            description="先快速讲清楚我是谁、擅长什么，以及为什么值得继续往下看。"
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
              title="设计出身，但现在更着迷于让 AI 真正接上业务和体验"
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
            description="先快速扫过方向，再进入详情页看完整背景、动作和结果。"
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
              description="我更关心它替代了什么、节省了什么、下一步会长成什么。"
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
            title="如果你也在做 AI 产品、增长或工作流创新，可以来聊"
            description="轻松一点，但信息要足够清楚。"
          />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
