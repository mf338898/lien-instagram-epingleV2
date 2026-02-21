import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http:",
              "style-src 'self' 'unsafe-inline' https:",
              "frame-src 'self' https:",
              "connect-src 'self' https: wss:",
              "img-src 'self' data: blob: https:",
              "font-src 'self' https: data:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
