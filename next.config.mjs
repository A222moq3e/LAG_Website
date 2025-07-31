/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add PostHog rewrites to proxy requests to the PostHog API and assets
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/flags",
        destination: "https://us.i.posthog.com/flags",
      },
    ];
  },

  // Required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
