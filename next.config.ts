import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/danduola-ai-site',
  assetPrefix: '/danduola-ai-site',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
