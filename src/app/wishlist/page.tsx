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
          <h1 className="font-display text-5xl md:text-6xl font-bold text-gold-gradient mb-8 flex items-center gap-3 tracking-wide">
            <Heart className="text-[#C9996B]" size={36} />
            {locale === "ar" ? "المفضلة" : "Wishlist"}
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={48} className="text-[#C9996B]/30 mx-auto mb-4" />
              <p className="text-[#2C1810]/45 mb-6 font-medium">
                {locale === "ar" ? "ما عندك مفضلات بعد" : "No favorites yet"}
              </p>
              <Link
                href="/products"
                className="bg-[#C9996B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D4A574] transition-colors text-base"
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
                    isNewArrival: p.isNewArrival,
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