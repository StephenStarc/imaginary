import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint checks during builds
  },
  // Add other Next.js config options if needed
};

export default nextConfig;
