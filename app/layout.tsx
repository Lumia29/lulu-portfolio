import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { ParallaxScene } from "@/components/ParallaxScene";
import { SiteFooter } from "@/components/SiteFooter";
import { siteMeta } from "@/data/siteContent";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.name} | AI 产品作品集`,
  description: siteMeta.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <ParallaxScene />
        <div className="site-noise" />
        <div className="site-gradient site-gradient-a" />
        <div className="site-gradient site-gradient-b" />
        <NavBar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
