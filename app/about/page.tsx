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
          description="我做过模型运营、AIGC 产品评测和增长项目，但真正稳定下来的，是一套更偏产品的做事方法。"
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
