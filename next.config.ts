import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all HTTPS sources
      },
      {
        protocol: "http",
        hostname: "**", // Allow all HTTP sources (not recommended)
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
