import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/guides",
        destination: "/resources/guides",
        permanent: true,
      },
      {
        source: "/guides/:category/:slug",
        destination: "/resources/guides/:category/:slug",
        permanent: true,
      },
      {
        source: "/guides/:category",
        destination: "/resources/guides/:category",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
