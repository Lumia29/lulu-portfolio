import Link from "next/link";

import type { Project } from "@/data/siteContent";
import { ProjectCover } from "@/components/Illustrations";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const previewRole = project.previewRole ?? project.role;
  const previewOneLiner = project.previewOneLiner ?? project.oneLiner;
  const previewResult = project.previewResult ?? project.results[0];

  return (
    <Link href={`/projects/${project.slug}`} className="project-card surface-card">
      <div className="project-cover">
        <div className="project-cover-top">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-cover-badge">{project.company}</span>
        </div>
        <ProjectCover cover={project.cover} />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-index project-index-inline">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-role-pill">{previewRole}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{previewOneLiner}</p>
        <div className="project-outcome">
          <span>代表结果</span>
          <strong>{previewResult}</strong>
        </div>
        <div className="tag-row project-tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-footer">
          <span className="project-link">
            查看详情
          </span>
        </div>
      </div>
    </Link>
  );
}
