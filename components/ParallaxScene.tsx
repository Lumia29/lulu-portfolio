"use client";

import { useEffect } from "react";

export function ParallaxScene() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return undefined;
    }

    const root = document.documentElement;
    let frameId = 0;
    let isTicking = false;

    const update = () => {
      const offset = window.scrollY;
      root.style.setProperty("--parallax-a", `${offset * 0.08}px`);
      root.style.setProperty("--parallax-b", `${offset * -0.06}px`);
      root.style.setProperty("--parallax-noise", `${offset * 0.03}px`);
      isTicking = false;
    };

    const onScroll = () => {
      if (isTicking) {
        return;
      }

      isTicking = true;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frameId);
      root.style.removeProperty("--parallax-a");
      root.style.removeProperty("--parallax-b");
      root.style.removeProperty("--parallax-noise");
    };
  }, []);

  return null;
}
