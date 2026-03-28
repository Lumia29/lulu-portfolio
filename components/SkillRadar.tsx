import type { SkillScore } from "@/data/siteContent";

type SkillRadarProps = {
  items: SkillScore[];
};

export function SkillRadarChart({ items }: SkillRadarProps) {
  const centerX = 220;
  const centerY = 170;
  const radius = 106;
  const points = items
    .map((item, index) => {
      const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
      const distance = (item.score / 5) * radius;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 450 340" className="radar-chart" aria-label="Skill radar chart">
      {[1, 2, 3, 4, 5].map((step) => {
        const stepRadius = (radius * step) / 5;
        const grid = items
          .map((_, index) => {
            const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
            const x = centerX + Math.cos(angle) * stepRadius;
            const y = centerY + Math.sin(angle) * stepRadius;
            return `${x},${y}`;
          })
          .join(" ");

        return <polygon key={step} points={grid} className="radar-grid" />;
      })}

      {items.map((item, index) => {
        const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        const labelDistance = radius + 40;
        const labelX = centerX + Math.cos(angle) * labelDistance;
        const labelY = centerY + Math.sin(angle) * labelDistance;
        const textAnchor =
          Math.cos(angle) > 0.35 ? "start" : Math.cos(angle) < -0.35 ? "end" : "middle";

        return (
          <g key={item.label}>
            <line x1={centerX} y1={centerY} x2={x} y2={y} className="radar-axis" />
            <text x={labelX} y={labelY + 4} textAnchor={textAnchor} className="radar-label">
              {item.label}
            </text>
          </g>
        );
      })}

      <polygon points={points} className="radar-fill" />
      {items.map((item, index) => {
        const angle = (-Math.PI / 2) + (index * (Math.PI * 2)) / items.length;
        const distance = (item.score / 5) * radius;
        const x = centerX + Math.cos(angle) * distance;
        const y = centerY + Math.sin(angle) * distance;
        return <circle key={item.label} cx={x} cy={y} r="5" className="radar-dot" />;
      })}
    </svg>
  );
}

export function SkillRadar(props: SkillRadarProps) {
  return (
    <div className="radar-card surface-card">
      <div className="radar-header">
        <span className="section-eyebrow">Skill Map</span>
      </div>
      <SkillRadarChart {...props} />
    </div>
  );
}
