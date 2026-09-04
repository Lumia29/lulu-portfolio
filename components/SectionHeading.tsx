import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", as: Heading = "h2", action }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "centered" : ""}`}>
      <div>
        <span className="section-eyebrow">{eyebrow}</span>
        <Heading className="section-heading-title">{title}</Heading>
        {description ? <p>{description}</p> : null}
      </div>
      {action ? <div className="section-heading-action">{action}</div> : null}
    </div>
  );
}
