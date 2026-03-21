import Link from "next/link";

import type { Project } from "@/data/siteContent";
import { ProjectCover } from "@/components/Illustrations";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card surface-card">
      <div className="project-cover">
        <ProjectCover cover={project.cover} />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.company}</span>
          <span>{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.oneLiner}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="project-link">
          查看详情
        </Link>
      </div>
    </article>
  );
}
