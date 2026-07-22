import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), priority: 1 },
    { url: `${SITE.url}/privacy-policy`, lastModified: new Date(), priority: 0.3 },
    { url: `${SITE.url}/terms`, lastModified: new Date(), priority: 0.3 },
  ];
}
