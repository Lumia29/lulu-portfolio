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
          description="对我来说，实验不是为了追热点，而是用最小成本验证某个工具或工作流到底能不能长期成立。"
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
