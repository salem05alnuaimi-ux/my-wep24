import type { MetadataRoute } from "next";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";

const BASE = "https://yezhabk.om";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/return-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  try {
    await connectDB();
    const products = await Product.find({}, { slug: 1, updatedAt: 1 }).lean();
    const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
      url: `${BASE}/products/${p.slug}`,
      lastModified: p.updatedAt ?? new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
    return [...staticRoutes, ...productRoutes];
  } catch {
    return staticRoutes;
  }
}
