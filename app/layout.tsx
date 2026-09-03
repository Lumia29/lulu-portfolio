import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { ParallaxScene } from "@/components/ParallaxScene";
import { SiteFooter } from "@/components/SiteFooter";
import { siteMeta } from "@/data/siteContent";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lululiu.cn"),
  title: `${siteMeta.name} | ${siteMeta.title}`,
  description: siteMeta.description,
  openGraph: {
    title: `${siteMeta.name} | ${siteMeta.title}`,
    description: siteMeta.description,
    type: "website",
    locale: "zh_CN",
  },
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
