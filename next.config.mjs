/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow Next.js Image component to optimise images that are stored on Notion/CDN or S3
  images: {
    remotePatterns: [
      // Notion (covers /image/ redirect URLs)
      {
        protocol: 'https',
        hostname: 'www.notion.so',
        pathname: '/image/**',
      },
      // Direct secure S3 links that Notion returns
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
        pathname: '/**',
      },
      // Catch-all for other Amazon S3 buckets (optional but handy if your bucket name changes)
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
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
