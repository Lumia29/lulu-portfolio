import type { MetadataRoute } from "next";

const publicRoutes = [
  "",
  "/projects",
  "/about",
  "/contact",
  "/projects/ai-job-match-analyzer",
  "/projects/ai-risk-governance",
  "/projects/huiwa-aigc",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `https://lululiu.cn${route}`,
  }));
}
