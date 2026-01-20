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
        hostname: "faustexample.wpengine.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
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
