import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for Hostinger shared hosting
  output: "export",

  // Required for static export — no server to optimize images
  images: {
    unoptimized: true,
  },

  // Generates folders with index.html for reliable static hosting routing (Fixes 403 Forbidden on refresh)
  trailingSlash: true,

  // Note: HTTP security headers are handled via .htaccess on Hostinger
  // The headers() config below only works in SSR mode, kept as documentation
  // async headers() { ... }
};

export default nextConfig;
