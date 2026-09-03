import Link from "next/link";

import { contact, navigation, resumeIsPublic, siteMeta } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">Lulu Liu</p>
          <h3>把复杂问题，变成清晰、可信、可落地的 AI 产品。</h3>
          <p>{siteMeta.description}</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Navigate</p>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {resumeIsPublic ? <a href={contact.resumeLink} target="_blank" rel="noreferrer">查看简历</a> : null}
        </div>
      </div>
    </footer>
  );
}
