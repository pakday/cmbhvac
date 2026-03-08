import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // allow remote images from Unsplash; `remotePatterns` is preferred
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cmbhvac.com",
      },
    ],
  },
};

export default nextConfig;
