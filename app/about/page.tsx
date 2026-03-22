import { PortraitPanel } from "@/components/PortraitPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillRadar } from "@/components/SkillRadar";
import { about } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="关于我"
          description="从设计训练到业务现场，再到 AIGC 评测和复杂系统治理，这些经历最后都汇到同一件事上：转向 AI 产品方向。"
        />

        <div className="about-page-grid">
          <div className="about-main-stack">
            <article className="surface-card prose-card">
              <h3>开场白</h3>
              <p>{about.intro}</p>
            </article>

            <article className="surface-card prose-card">
              <h3>我的背景</h3>
              <p>{about.education}</p>
              <div className="experience-list">
                {about.experiences.map((item) => (
                  <div key={item.company} className="experience-row">
                    <div>
                      <span>{item.period}</span>
                      <h4>{item.company}</h4>
                    </div>
                    <div>
                      <strong>{item.role}</strong>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface-card prose-card">
              <h3>技能栈</h3>
              <div className="two-column-tags">
                <div>
                  <h4>硬核能力</h4>
                  <div className="tag-row">
                    {about.hardSkills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>软实力</h4>
                  <div className="tag-row">
                    {about.softSkills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <article className="surface-card prose-card">
              <h3>工作理念</h3>
              <p>{about.philosophy}</p>
              <ul className="bullet-list">
                {about.beyondWork.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="about-side-stack">
            <PortraitPanel />
            <SkillRadar items={about.radar} />
          </div>
        </div>
      </div>
    </section>
  );
}
