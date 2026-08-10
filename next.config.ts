import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/blog/category/:slug",
        destination: "/resources/blog/category/:slug",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/resources/blog/:slug",
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
      {
        source: "/videos",
        destination: "/platform",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/feed/rss",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/resources/blog",
        permanent: true,
      },
      {
        source: "/results-insights",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/results-insights/",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
