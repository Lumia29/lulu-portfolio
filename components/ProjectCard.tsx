import Link from "next/link";

import type { Project } from "@/data/siteContent";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card surface-card">
      <div className="project-topline">
        <span className="project-tagline">Case Study</span>
        <span className="project-impact">{project.impact}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
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
    </article>
  );
}
