import type { Experiment } from "@/data/siteContent";

type ExperimentCardProps = {
  experiment: Experiment;
};

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <article className="experiment-card surface-card">
      <div className="experiment-head">
        <div>
          <span className="section-eyebrow">Experiment</span>
          <h3>{experiment.title}</h3>
        </div>
        <span className="status-chip">{experiment.status}</span>
      </div>
      <p className="experiment-intro">{experiment.oneLiner}</p>
      <div className="experiment-columns">
        <div>
          <h4>我做了什么</h4>
          <ul className="bullet-list">
            {experiment.modules.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>下一步</h4>
          <ul className="bullet-list">
            {experiment.future.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
