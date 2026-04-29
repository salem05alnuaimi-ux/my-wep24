"use client";

import { useState, useMemo } from "react";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { products } from "@/data/products";
import { ProductCategory, SortOption } from "@/types";
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

  const filtered = useMemo(() => {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    list = list.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "bestseller":
        list.sort((a, b) => Number(!!b.isBestseller) - Number(!!a.isBestseller));
        break;
      case "newest":
      default:
        list.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
    }
    return list;
  }, [category, sort, priceRange]);

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
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
            {category ? t.categories[category] : t.nav.products}
          </h1>
          <p className="text-gray-500">
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
            {filtered.length === 0 ? (
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
                      isNew: p.isNew,
                      inStock: p.inStock,
                    }}
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
