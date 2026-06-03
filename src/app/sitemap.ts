import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { listingData } from "./(commonLayout)/component/page/Listing/listingData";
import { getAllProperties } from "@/actions/query.action";
import { TProperty } from "@/types/property.type";

// Revalidate the sitemap daily so newly listed properties are picked up.
export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Public, indexable static routes. (/properties redirects to / and /login is
  // private, so neither is listed here.)
  const routes: {
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "/", changeFrequency: "daily", priority: 1 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/partnership", changeFrequency: "monthly", priority: 0.7 },
    { path: "/team", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
    {
      path: "/cryptocurrency-payment",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/investors", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms-and-condition", changeFrequency: "yearly", priority: 0.3 },
  ];
  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Static listing pages bundled with the app.
  const listingRoutes: MetadataRoute.Sitemap = listingData.map((listing) => ({
    url: `${siteConfig.url}/listing/${listing.id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  // Live property pages from the API. Guarded so a fetch failure never breaks
  // the build — the sitemap simply omits dynamic properties in that case.
  let propertyRoutes: MetadataRoute.Sitemap = [];
  try {
    const { data } = await getAllProperties({ limit: "1000" });
    if (Array.isArray(data)) {
      propertyRoutes = (data as TProperty[])
        .filter((property) => property?._id)
        .map((property) => ({
          url: `${siteConfig.url}/properties/${property._id}`,
          lastModified: property.modified
            ? new Date(property.modified)
            : now,
          changeFrequency: "weekly",
          priority: 0.7,
        }));
    }
  } catch {
    // Swallow — keep the static sitemap valid even if the API is unavailable.
  }

  return [...staticRoutes, ...listingRoutes, ...propertyRoutes];
}