import posthog from "posthog-js";

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2025-05-24",
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking
    debug: process.env.NODE_ENV === "development",
    loaded: (posthog) => {
      // Add PostHog to window object for toolbar and other features
      window.posthog = posthog;
    },
  });
}
