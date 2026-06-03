/**
 * Central SEO / site configuration.
 * Single source of truth for canonical URL, brand name and default
 * descriptions used across metadata, sitemap, robots and structured data.
 */
export const siteConfig = {
  name: "Banksia",
  legalName: "Banksia London",
  // Canonical production URL. Override with NEXT_PUBLIC_SITE_URL in the
  // environment (e.g. preview deployments) if it ever changes.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL || "https://banksialondon.com"
  ).replace(/\/$/, ""),
  description:
    "Banksia is London's modern rental platform. Discover verified properties, connect with landlords and rent your ideal home or commercial space — with the option to pay rent in Bitcoin or Ethereum.",
  locale: "en_GB",
  // Open Graph fallback image (place a 1200x630 image at /public/og-image.jpg).
  ogImage: "/og-image.jpg",
  keywords: [
    "Banksia",
    "Banksia London",
    "rent in London",
    "London rental properties",
    "rooms to rent London",
    "flats to rent London",
    "house share London",
    "verified rental listings",
    "pay rent with cryptocurrency",
    "pay rent with Bitcoin",
    "pay rent with Ethereum",
  ],
  twitterHandle: "@banksialondon",
} as const;

export type SiteConfig = typeof siteConfig;