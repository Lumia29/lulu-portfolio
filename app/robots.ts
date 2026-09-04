import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://lululiu.cn/sitemap.xml",
    host: "https://lululiu.cn",
  };
}
