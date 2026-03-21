import Link from "next/link";

import { navigation, siteMeta } from "@/data/siteContent";

export function NavBar() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand-mark">
          <span className="brand-dot" />
          <span>{siteMeta.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
