import Link from "next/link";
import { notFound } from "next/navigation";

import { SectionHeading } from "@/components/SectionHeading";
import { getProjectBySlug, projects } from "@/data/siteContent";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-section">
      <div className="container project-detail-layout">
        <div>
          <Link href="/projects" className="back-link">
            ← 返回项目案例
          </Link>
          <SectionHeading eyebrow="Project Detail" title={project.title} description={project.summary} />
          <article className="surface-card project-detail-card">
            <h3>项目背景</h3>
            <p>{project.background}</p>

            <h3>我的角色</h3>
            <p>{project.role}</p>

            <h3>关键动作</h3>
            <ul className="detail-list">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>项目结果</h3>
            <ul className="detail-list">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3>关键洞察</h3>
            <p>{project.insight}</p>
          </article>
        </div>

        <aside className="surface-card project-side-card">
          <span className="section-eyebrow">Impact</span>
          <h3>{project.impact}</h3>
          <div className="tag-row">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
