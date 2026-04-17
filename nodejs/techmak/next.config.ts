import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Hostinger shared hosting
  output: "export",

  // Required for static export — no server to optimize images
  images: {
    unoptimized: true,
  },

  // Note: HTTP security headers are handled via .htaccess on Hostinger
  // The headers() config below only works in SSR mode, kept as documentation
  // async headers() { ... }
};

export default nextConfig;
