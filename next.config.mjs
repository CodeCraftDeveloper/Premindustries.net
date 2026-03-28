import { LEGACY_PATH_REDIRECTS } from "./lib/seo/routeRules.mjs";

/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return LEGACY_PATH_REDIRECTS;
  },

  images: {
    unoptimized: process.env.NODE_ENV === "development",
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "logos.hunter.io",
      },
    ],
  },

  async headers() {
    return [
      {
        // Avoid stale HMR runtimes and hot-update manifests during local dev.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: isProduction
              ? "public, max-age=31536000, immutable"
              : "no-store, must-revalidate",
          },
        ],
      },
      {
        // Security & performance headers for all HTML pages
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
