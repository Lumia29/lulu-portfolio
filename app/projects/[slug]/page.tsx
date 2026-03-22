import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCover } from "@/components/Illustrations";
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
            ← 返回项目列表
          </Link>
          <SectionHeading
            eyebrow={project.company}
            title={project.title}
            description={project.oneLiner}
          />
          <div className="project-detail-card surface-card">
            <h3>背景</h3>
            <p>{project.background}</p>
            <h3>我的角色</h3>
            <p>{project.role}</p>
            <h3>行动</h3>
            <ul className="bullet-list">
              {project.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>结果</h3>
            <ul className="bullet-list">
              {project.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>关键洞察</h3>
            <p>{project.insight}</p>
          </div>
        </div>
        <aside className="project-detail-side">
          <div className="surface-card sticky-card">
            <div className="project-cover detail-cover">
              <ProjectCover cover={project.cover} />
            </div>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
