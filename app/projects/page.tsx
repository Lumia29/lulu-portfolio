import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/siteContent";

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="项目案例"
          description="每个项目都围绕一个明确目标展开：要么提升识别效果，要么压缩成本，要么把混乱的流程变成可运营的系统。"
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
