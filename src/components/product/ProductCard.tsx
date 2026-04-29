"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/store/languageStore";
import { useCart } from "@/store/cartStore";
import { useToast } from "@/components/ui/Toast";
import { useWishlist } from "@/store/wishlistStore";
import { getProductById } from "@/data/products";

export interface ProductCardData {
  id: string;
  name: { ar: string; en: string };
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  inStock: boolean;
}

interface ProductCardProps {
  product: ProductCardData;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const { show } = useToast();
  const { has, toggle } = useWishlist();
  const [imgError, setImgError] = useState(false);
  const isWishlisted = has(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const fullProduct = getProductById(product.id);
    if (!fullProduct) return;

    const firstAvailableVariant = fullProduct.variants?.find((v) => v.stock > 0);
    addItem(fullProduct, firstAvailableVariant);
    show(
      locale === "ar"
        ? `تمت إضافة "${product.name.ar}" إلى السلة 🛍️`
        : `Added "${product.name.en}" to cart 🛍️`,
      "success"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={imgError ? "/images/placeholder.svg" : product.image}
            alt={product.name[locale]}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onError={() => setImgError(true)}
          />

          {product.isNew && (
            <span className="absolute top-3 start-3 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
              {locale === "ar" ? "جديد" : "New"}
            </span>
          )}

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
                {t.product.out_of_stock}
              </span>
            </div>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggle(product.id);
              show(
                isWishlisted
                  ? locale === "ar"
                    ? "أزيل من المفضلة"
                    : "Removed from wishlist"
                  : locale === "ar"
                  ? "أضيف للمفضلة ❤️"
                  : "Added to wishlist ❤️",
                "success"
              );
            }}
            className={`absolute top-3 end-3 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isWishlisted
                ? "bg-red-500 text-white opacity-100"
                : "bg-white/90 backdrop-blur opacity-0 group-hover:opacity-100 hover:bg-white"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">
            {product.category}
          </p>
          <h3 className="font-medium text-text-primary mb-2 line-clamp-1">
            {product.name[locale]}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-text-primary">
                {product.price.toFixed(3)} {t.product.currency}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice.toFixed(3)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-9 h-9 rounded-full bg-text-primary text-white flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50 active:scale-95"
              aria-label={t.product.add_to_cart}
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
