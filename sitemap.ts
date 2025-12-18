import { MetadataRoute } from "next";
import { site } from "@/components/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${site.domain}`;
  const routes = ["", "/about", "/programs", "/impact", "/media", "/donate", "/contact", "/privacy"];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }));
}
