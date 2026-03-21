import type { Highlight } from "@/data/siteContent";

import { HighlightIcon } from "@/components/Illustrations";

type HighlightCardProps = {
  item: Highlight;
};

export function HighlightCard({ item }: HighlightCardProps) {
  return (
    <article className="highlight-card surface-card">
      <div className="highlight-top">
        <HighlightIcon kind={item.id} />
        <span className="metric-chip">{item.metric}</span>
      </div>
      <h3>{item.title}</h3>
      <ul className="bullet-list">
        {item.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}
