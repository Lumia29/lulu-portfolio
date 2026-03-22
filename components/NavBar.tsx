"use client";

import { useState } from "react";
import Link from "next/link";

import { navigation, siteMeta } from "@/data/siteContent";

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <div className="nav-top">
          <Link href="/" className="brand-mark" onClick={() => setIsMenuOpen(false)}>
            <span className="brand-orb" />
            <span className="brand-copy">
              <strong>{siteMeta.name}</strong>
            </span>
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
        <nav
          id="site-navigation"
          className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
          aria-label="主导航"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{item.label}</span>
              {item.badge ? <em>{item.badge}</em> : null}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
