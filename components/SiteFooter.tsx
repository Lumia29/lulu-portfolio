import Link from "next/link";

import { contact, navigation } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">Lulu Liu Portfolio</p>
          <p className="footer-copy">用项目证明产品思维，也用 AI 持续改造工作方式。</p>
        </div>
        <div className="footer-links">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <a href={`mailto:${contact.email}`} className="footer-mail">
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
