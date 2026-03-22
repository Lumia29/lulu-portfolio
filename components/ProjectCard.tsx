import Link from "next/link";

import type { Project } from "@/data/siteContent";
import { ProjectCover } from "@/components/Illustrations";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="project-card surface-card">
      <div className="project-cover">
        <div className="project-cover-top">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-cover-badge">{project.company}</span>
        </div>
        <ProjectCover cover={project.cover} />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-role-pill">{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.oneLiner}</p>
        <div className="project-outcome">
          <span>代表结果</span>
          <strong>{project.results[0]}</strong>
        </div>
        <div className="tag-row project-tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-footer">
          <Link href={`/projects/${project.slug}`} className="project-link">
            查看详情
          </Link>
        </div>
      </div>
      <Link href={`/projects/${project.slug}`} className="project-link">
        查看详情
      </Link>
    </article>
  );
}
