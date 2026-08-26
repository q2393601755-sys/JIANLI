import type { NextConfig } from "next";

const isVercel = !!process.env.VERCEL;

const nextConfig: NextConfig = {
  output: isVercel ? undefined : "export",
  assetPrefix: isVercel ? undefined : "./",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
