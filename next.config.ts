import withPWA, { PWAConfig } from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig | PWAConfig = withPWA({
  dest: "public", // The folder where service-worker files will be generated
  // disable: process.env.NODE_ENV === "development", // Disable PWA in development
})({
  /* Add your other Next.js config options here */
  experimental: {
    turbo: { rules: {} },
  },
});

export default nextConfig;
