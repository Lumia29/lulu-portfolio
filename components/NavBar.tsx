import Link from "next/link";

import { navigation, siteMeta } from "@/data/siteContent";

export function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <span className="brand-orb" />
          <span className="brand-copy">
            <strong>{siteMeta.name}</strong>
            <small>AI Product Portfolio</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              <span>{item.label}</span>
              {item.badge ? <em>{item.badge}</em> : null}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
