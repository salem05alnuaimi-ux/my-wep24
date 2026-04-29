"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/store/languageStore";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const { locale, t } = useLanguage();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const featuredProducts = getFeaturedProducts(4);

  return (
    <section className="py-20 md:py-32">
      <div className="container-apple">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-3">
              {t.featured.title}
            </h2>
            <p className="text-gray-600 text-lg">{t.featured.subtitle}</p>
          </div>

          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            {t.featured.view_all}
            <Arrow size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                originalPrice: product.originalPrice,
                image: product.images[0],
                category: product.category,
                isNew: product.isNew,
                inStock: product.inStock,
              }}
              index={i}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            {t.featured.view_all}
            <Arrow size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
