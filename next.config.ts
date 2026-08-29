import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "10.17.71.124",
    '10.161.159.124',
    "*.local",
  ],
};

export default nextConfig;
