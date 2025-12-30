import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // required for Netlify
  images: {
    unoptimized: true,       // required for static hosting
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
