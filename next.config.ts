import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', hostname: 'images.unsplash.com'
      }, 
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com'
      }

    ]
  }
};

export default nextConfig;
