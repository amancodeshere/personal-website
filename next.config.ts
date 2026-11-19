import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/projects/unsw-sdg-research-classification",
        destination: "/projects/abstract-2-sdg",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
