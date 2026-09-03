import Link from "next/link";
import type { ReactNode } from "react";

import { CaseStudyToc, type TocItem } from "@/components/case-study/CaseStudyToc";

export type CaseStudyBackLink = {
  href: "/" | "/projects";
  label: "返回首页" | "返回项目";
};

export function CaseStudyLayout({ toc, children, next }: { toc: TocItem[]; children: ReactNode; next: { href: string; label: string } }) {
  return (
    <>
      <div className="container case-study-shell">
        <CaseStudyToc items={toc} />
        <article className="case-study-content">{children}</article>
      </div>
      <div className="container case-study-next"><span>Next case study</span><Link href={next.href}>{next.label} <span aria-hidden="true">↗</span></Link></div>
    </>
  );
}

export function CaseStudyHero({ eyebrow, title, definition, role, tags, backLink, children }: { eyebrow: string; title: string; definition: string; role: string; tags: string[]; backLink: CaseStudyBackLink; children?: ReactNode }) {
  return (
    <header className="case-study-hero">
      <div className="case-study-hero-copy">
        <Link href={backLink.href} className="back-link">← {backLink.label}</Link>
        <span className="section-eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{definition}</p>
        <div className="case-role"><span>我的角色</span><strong>{role}</strong></div>
        <div className="tag-row">{tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
      </div>
      {children ? <div className="case-study-hero-visual">{children}</div> : null}
    </header>
  );
}

export function CaseSection({ id, number, eyebrow, title, intro, children, tone = "plain" }: { id: string; number: string; eyebrow?: string; title: string; intro?: string; children: ReactNode; tone?: "plain" | "soft" | "warm" }) {
  return (
    <section id={id} className={`case-section tone-${tone}`}>
      <div className="case-section-heading"><span>{number}</span><div>{eyebrow ? <em>{eyebrow}</em> : null}<h2>{title}</h2>{intro ? <p>{intro}</p> : null}</div></div>
      <div className="case-section-body">{children}</div>
    </section>
  );
}

export function MediaFigure({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={`media-figure ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
