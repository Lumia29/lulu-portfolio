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
          description="项目覆盖风险治理、AIGC 产品和增长场景，但它们的共通点不是技术堆叠，而是先把问题定义清楚，再把结果真正做出来。"
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
