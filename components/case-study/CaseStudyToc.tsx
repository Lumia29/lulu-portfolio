"use client";

import { useEffect, useRef, useState } from "react";

export type TocItem = { id: string; number: string; label: string };

export function CaseStudyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const asideRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let frame = 0;
    const updateActiveSection = () => {
      frame = 0;
      const activationLine = window.innerHeight * 0.3;
      let current = sections[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) current = section;
        else break;
      }

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1];
      }

      setActiveId((previous) => previous === current.id ? previous : current.id);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    };

    const observer = new IntersectionObserver(scheduleUpdate, {
      rootMargin: "-26% 0px -62% 0px",
      threshold: [0, 0.01, 0.5, 1],
    });

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    const handleHashChange = () => {
      const hashId = decodeURIComponent(window.location.hash.slice(1));
      if (sections.some((section) => section.id === hashId)) setActiveId(hashId);
      scheduleUpdate();
    };

    let hashAlignmentTimer = 0;
    const alignInitialHash = () => {
      const hashId = decodeURIComponent(window.location.hash.slice(1));
      const target = sections.find((section) => section.id === hashId);
      if (!target) return;

      hashAlignmentTimer = window.setTimeout(() => {
        target.scrollIntoView({ block: "start", behavior: "auto" });
        setActiveId(hashId);
        scheduleUpdate();
      }, 100);
    };

    window.addEventListener("hashchange", handleHashChange);
    if (document.readyState === "complete") alignInitialHash();
    else window.addEventListener("load", alignInitialHash, { once: true });
    handleHashChange();
    scheduleUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (hashAlignmentTimer) window.clearTimeout(hashAlignmentTimer);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("load", alignInitialHash);
    };
  }, [items]);

  useEffect(() => {
    const aside = asideRef.current;
    const activeLink = linkRefs.current[activeId];
    if (!aside || !activeLink || !window.matchMedia("(max-width: 1080px)").matches) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targetLeft = activeLink.offsetLeft - (aside.clientWidth - activeLink.clientWidth) / 2;
    aside.scrollTo({ left: Math.max(0, targetLeft), behavior: prefersReducedMotion ? "auto" : "smooth" });
  }, [activeId]);

  return (
    <aside ref={asideRef} className="case-study-toc" aria-label="案例目录">
      <span>Case study</span>
      <nav aria-label="案例章节">
        {items.map((item) => (
          <a
            key={item.id}
            ref={(node) => { linkRefs.current[item.id] = node; }}
            href={`#${item.id}`}
            className={activeId === item.id ? "is-active" : undefined}
            aria-current={activeId === item.id ? "location" : undefined}
            onClick={() => setActiveId(item.id)}
          >
            <b>{item.number}</b>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
