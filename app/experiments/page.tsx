import { ExperimentCard } from "@/components/ExperimentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { experiments } from "@/data/siteContent";

export default function ExperimentsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading
          eyebrow="Experiments"
          title="AI 实验"
          description="我会先在自己的工作流里验证新工具和新方法，确认它真的有效，再考虑它是否值得走向更大的场景。"
        />
        <div className="stack-grid large-gap">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.title} experiment={experiment} />
          ))}
        </div>
      </div>
    </section>
  );
}
