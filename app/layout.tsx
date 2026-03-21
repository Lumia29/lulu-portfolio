import type { Metadata } from "next";

import { NavBar } from "@/components/NavBar";
import { SiteFooter } from "@/components/SiteFooter";
import { siteMeta } from "@/data/siteContent";

import "./globals.css";

export const metadata: Metadata = {
  title: `${siteMeta.name} | AI Portfolio`,
  description: siteMeta.title,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="page-bg" />
        <NavBar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
