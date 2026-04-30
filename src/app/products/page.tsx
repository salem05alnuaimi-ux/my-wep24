"use client";

import { useState, useMemo, useEffect } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { Product, ProductCategory, SortOption } from "@/types";
import { useLanguage } from "@/store/languageStore";

function ProductsContent() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ProductCategory | null;

  const [category, setCategory] = useState<ProductCategory | undefined>(
    initialCategory ?? undefined
  );
  const [sort, setSort] = useState<SortOption>("newest");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = category ? `/api/products?category=${category}` : "/api/products";
    fetch(url)
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? []))
      .finally(() => setLoading(false));
  }, [category]);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      case "bestseller":
        list = [...list].sort(
          (a, b) => Number(!!b.isBestseller) - Number(!!a.isBestseller)
        );
        break;
      case "newest":
      default:
        list = [...list].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
    return list;
  }, [products, sort, priceRange]);

  return (
    <main className="pt-24 pb-20">
      <div className="container-apple">
        <Breadcrumb
          items={[
            { label: t.nav.home, href: "/" },
            { label: t.nav.products },
          ]}
        />

        <div className="mt-6 mb-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gold-gradient mb-3 tracking-wide">
            {category ? t.categories[category] : t.nav.products}
          </h1>
          <p className="text-[#2C1810]/45 text-base font-medium">
            {locale === "ar"
              ? `${filtered.length} منتج`
              : `${filtered.length} products`}
          </p>
        </div>

        <div className="flex gap-8">
          <ProductFilters
            selectedCategory={category}
            onCategoryChange={setCategory}
            sort={sort}
            onSortChange={setSort}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
          />

          <div className="flex-1">
            {loading ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  {locale === "ar" ? "جارٍ التحميل..." : "Loading..."}
                </p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">
                  {locale === "ar"
                    ? "لا توجد منتجات مطابقة"
                    : "No products match your filters"}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={{
                      id: p.id,
                      name: p.name,
                      price: p.price,
                      originalPrice: p.originalPrice,
                      image: p.images[0],
                      category: p.category,
                      isNewArrival: p.isNewArrival,
                      inStock: p.inStock,
                    }}
                    fullProduct={p}
                    index={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <Suspense fallback={<div className="pt-32 text-center">Loading...</div>}>
        <ProductsContent />
      </Suspense>
      <Footer />
    </>
  );
}
