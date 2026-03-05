import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pleasantpharmacy.com",
      lastModified: new Date(),
    },
    {
      url: "https://pleasantpharmacy.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://pleasantpharmacy.com/services",
      lastModified: new Date(),
    },
  ];
}