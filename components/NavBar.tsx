"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation, siteMeta } from "@/data/siteContent";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-top">
          <Link href="/" className="brand-mark" aria-label={`${siteMeta.name}，返回首页`}>
            <span className="brand-orb" aria-hidden="true" />
            <strong>{siteMeta.name}</strong>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={isMenuOpen ? "关闭导航菜单" : "打开导航菜单"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav id="site-navigation" className={`nav-links ${isMenuOpen ? "is-open" : ""}`} aria-label="主导航">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-link ${active ? "is-active" : ""}`} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
