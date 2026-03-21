import type { Experiment } from "@/data/siteContent";

type ExperimentCardProps = {
  experiment: Experiment;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <article className="experiment-card surface-card">
      <div className="experiment-head">
        <h3>{experiment.title}</h3>
        <span className="status-chip">{experiment.status}</span>
      </div>
      <p>{experiment.description}</p>
    </article>
  );
}
