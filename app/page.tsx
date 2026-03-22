import Link from "next/link";

import { ContactPanel } from "@/components/ContactPanel";
import { ExperimentCard } from "@/components/ExperimentCard";
import { HeroSection } from "@/components/HeroSection";
import { HighlightCard } from "@/components/HighlightCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillRadar } from "@/components/SkillRadar";
import { about, experiments, highlights, projects } from "@/data/siteContent";

export default function HomePage() {
  const featuredProjects = projects.filter(
    (project) => !["contact-review-workflow", "nio-user-ops"].includes(project.slug),
  );

  return (
    <>
      <HeroSection />

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Highlights"
            title="核心能力"
            description="聚焦三类最能代表我的工作：风险治理、AIGC 产品优化与 AI 工作流实验。"
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
            title="设计背景，让我既看体验，也看落地"
            description="从设计训练到用户运营、增长、AIGC 评测再到模型运营，这条路径一直在把体验判断、业务理解和复杂系统落地慢慢接到一起。"
          />
            <article className="about-copy-card profile-story-card surface-card">
              <p className="profile-lead">{about.intro}</p>
              <p>{about.education}</p>
              <p>{about.philosophy}</p>
              <div className="profile-card-footer">
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
              </div>
            </article>
          </div>
          <div className="about-side-stack">
            <article className="surface-card trajectory-card">
              <span className="section-eyebrow">Trajectory</span>
              <div className="trajectory-list">
                {about.experiences.map((item) => (
                  <div key={item.company} className="trajectory-item">
                    <span className="trajectory-period">{item.period}</span>
                    <strong className="trajectory-title">
                      {item.company} · {item.role}
                    </strong>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </article>
            <SkillRadar items={about.radar} />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionHeading
            eyebrow="Projects"
            title="代表项目"
            description="项目覆盖风险治理、AIGC 产品和增长场景，但共通点都不是技术堆叠，而是把问题定义清楚、把结果做出来。"
          />
          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container experiments-home-grid">
          <div>
            <SectionHeading
              eyebrow="Experiments"
              title="持续进行的小实验"
              description="我会先在自己的工作流里验证新工具和新方法，确认它真的有效，再考虑它是否值得走向更大的场景。"
            />
            <Link href="/experiments" className="button button-secondary inline-button">
              看完整实验记录
            </Link>
          </div>
          <div className="stack-grid">
            {experiments.slice(0, 1).map((experiment) => (
              <ExperimentCard key={experiment.title} experiment={experiment} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-last">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="如果你觉得这些经历和你正在做的事情有关，可以联系我。"
            description="岗位机会、项目合作或经验交流都可以。"
          />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
