import Link from "next/link";

import { contact, navigation, siteMeta } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <p className="footer-kicker">Lulu Liu</p>
          <h3>把 AI 做得更像真实工作里好用的工具。</h3>
          <p>{siteMeta.description}</p>
        </div>
        <div className="footer-column">
          <p className="footer-label">Navigate</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-label">Contact</p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
