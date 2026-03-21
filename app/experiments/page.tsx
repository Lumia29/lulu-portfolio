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
          description="实验页用来展示我如何把工具、流程和人机协作真正跑进日常工作里，而不是停留在 demo。"
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
