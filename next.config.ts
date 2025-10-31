import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, 
  images: {
    domains: ["fakestoreapi.com"], 
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", 
  },
};

export default nextConfig;
