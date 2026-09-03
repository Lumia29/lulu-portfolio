import Link from "next/link";

import { capabilities } from "@/data/siteContent";

export function CapabilityEvidence() {
  return (
    <div className="capability-evidence surface-card">
      {capabilities.map((item) => (
        <article key={item.id} className="capability-item">
          <span className="capability-number">{item.id}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Link href={item.href} aria-label={item.linkLabel}>{item.evidence}<span aria-hidden="true"> ↗</span></Link>
        </article>
      ))}
    </div>
  );
}
