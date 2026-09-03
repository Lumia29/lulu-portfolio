import Link from "next/link";

import { ProjectVisualGraphic } from "@/components/ProjectVisuals";
import type { FeaturedProject } from "@/data/siteContent";

type ProjectSource = "home" | "projects";

export function FeaturedProjectCard({ project, compact = false, source }: { project: FeaturedProject; compact?: boolean; source: ProjectSource }) {
  const caseStudyHref = `/projects/${project.slug}?from=${source}`;

  return (
    <article className={`featured-project-card ${project.flagship ? "is-flagship" : ""} ${compact ? "is-compact" : ""}`}>
      <div className="featured-project-copy">
        <div className="project-card-topline"><span>{project.number}</span><span>{project.organization}</span></div>
        <h3>{project.title}</h3>
        <p>{project.oneLiner}</p>
        <div className="project-role"><span>我的角色</span><strong>{project.role}</strong></div>
        <div className="tag-row">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
        <div className="project-result"><span>代表性判断</span><strong>{project.result}</strong></div>
        <Link className="text-link" href={caseStudyHref}>View Case Study <span aria-hidden="true">↗</span></Link>
      </div>
      <Link href={caseStudyHref} className="featured-project-visual" aria-label={`查看${project.title}案例`}>
        <ProjectVisualGraphic visual={project.visual} compact={compact} />
      </Link>
    </article>
  );
}
