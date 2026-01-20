import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.imranmurtaza.com",
      },
      {
        protocol: "https",
        hostname: "cms.imranmurtaza.com",
      },
      {
        protocol: "https", // Fallback for various WP setups
        hostname: "cms.imranmurtaza.com",
      },
    ],
  },
};

if (process.env.NODE_ENV === "development") {
  (async () => {
    await setupDevPlatform();
  })();
}

export default nextConfig;
