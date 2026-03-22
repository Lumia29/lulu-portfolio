import type { SkillScore } from "@/data/siteContent";

type SkillRadarProps = {
  items: SkillScore[];
};

export function SkillRadar({ items }: SkillRadarProps) {
  const center = 140;
  const radius = 94;
  const points = items
    .map((item, index) => {
      const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
      const distance = (item.score / 5) * radius;
      const x = center + Math.cos(angle) * distance;
      const y = center + Math.sin(angle) * distance;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="radar-card surface-card">
      <div className="radar-header">
        <span className="section-eyebrow">Skill Map</span>
        <h3>Capabilities</h3>
      </div>
      <svg viewBox="0 0 280 280" className="radar-chart" aria-label="Skill radar chart">
        {[1, 2, 3, 4, 5].map((step) => {
          const stepRadius = (radius * step) / 5;
          const grid = items
            .map((_, index) => {
              const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
              const x = center + Math.cos(angle) * stepRadius;
              const y = center + Math.sin(angle) * stepRadius;
              return `${x},${y}`;
            })
            .join(" ");

          return <polygon key={step} points={grid} className="radar-grid" />;
        })}

        {items.map((item, index) => {
          const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
          const x = center + Math.cos(angle) * radius;
          const y = center + Math.sin(angle) * radius;

          return (
            <g key={item.label}>
              <line x1={center} y1={center} x2={x} y2={y} className="radar-axis" />
              <text
                x={center + Math.cos(angle) * (radius + 28)}
                y={center + Math.sin(angle) * (radius + 28)}
                textAnchor="middle"
                className="radar-label"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        <polygon points={points} className="radar-fill" />
        {items.map((item, index) => {
          const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
          const distance = (item.score / 5) * radius;
          const x = center + Math.cos(angle) * distance;
          const y = center + Math.sin(angle) * distance;
          return <circle key={item.label} cx={x} cy={y} r="5" className="radar-dot" />;
        })}
      </svg>
    </div>
  );
}
