/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/projects/multimodal-risk", destination: "/projects/ai-risk-governance", permanent: true },
      { source: "/projects/contact-review-workflow", destination: "/projects/ai-risk-governance", permanent: true },
      { source: "/projects/im-traffic-agent", destination: "/projects/ai-risk-governance", permanent: true },
      { source: "/projects/global-growth", destination: "/projects#additional-experience", permanent: true },
      { source: "/projects/nio-user-ops", destination: "/projects#additional-experience", permanent: true },
    ];
  },
};

export default nextConfig;
