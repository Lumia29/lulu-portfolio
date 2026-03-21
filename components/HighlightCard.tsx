import type { Highlight } from "@/data/siteContent";

type HighlightCardProps = {
  item: Highlight;
};

export function HighlightCard({ item }: HighlightCardProps) {
  return (
    <article className="feature-card surface-card">
      <span className="feature-pill">{item.metric}</span>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </article>
  );
}
