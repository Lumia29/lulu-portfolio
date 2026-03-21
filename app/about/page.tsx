import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/data/siteContent";

export default function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="关于我"
          description="设计训练给了我结构化表达和审美判断，AI 业务经历让我更关注系统性、落地性和增长结果。"
        />
        <div className="detail-grid">
          <article className="surface-card detail-card">
            <h3>教育经历</h3>
            <p>{about.education}</p>
          </article>
          <article className="surface-card detail-card">
            <h3>技能栈</h3>
            <div className="tag-row">
              {about.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
        <div className="timeline-grid">
          {about.experiences.map((item) => (
            <article key={item.name} className="surface-card timeline-card">
              <span className="timeline-role">{item.role}</span>
              <h3>{item.name}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
