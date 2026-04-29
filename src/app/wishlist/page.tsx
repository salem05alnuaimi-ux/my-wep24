"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import ProductCard from "@/components/product/ProductCard";
import { useWishlist } from "@/store/wishlistStore";
import { useLanguage } from "@/store/languageStore";
import { products } from "@/data/products";

export default function WishlistPage() {
  const { locale } = useLanguage();
  const { ids } = useWishlist();
  const items = products.filter((p) => ids.includes(p.id));

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 flex items-center gap-3">
            <Heart className="text-red-500" />
            {locale === "ar" ? "المفضلة" : "Wishlist"}
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-6">
                {locale === "ar" ? "ما عندك مفضلات بعد" : "No favorites yet"}
              </p>
              <Link
                href="/products"
                className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-link transition-colors"
              >
                {locale === "ar" ? "تصفح المنتجات" : "Browse Products"}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {items.map((p, i) => (
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
      </main>
      <Footer />
    </>
  );
}