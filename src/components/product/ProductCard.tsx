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
import { Product } from "@/types";

export interface ProductCardData {
  id: string;
  name: { ar: string; en: string };
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNewArrival?: boolean;
  inStock: boolean;
}

interface ProductCardProps {
  product: ProductCardData;
  fullProduct?: Product;
  index?: number;
}

export default function ProductCard({ product, fullProduct, index = 0 }: ProductCardProps) {
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const { show } = useToast();
  const { has, toggle } = useWishlist();
  const [imgError, setImgError] = useState(false);
  const isWishlisted = has(product.id);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    let full = fullProduct;
    if (!full) {
      const res = await fetch(`/api/products/${product.id}`);
      if (!res.ok) return;
      const data = await res.json();
      full = data.product;
    }
    if (!full) return;

    const firstAvailableVariant = full.variants?.find((v) => v.stock > 0);
    addItem(full, firstAvailableVariant);
    show(
      locale === "ar"
        ? `تمت إضافة "${product.name.ar}" إلى السلة`
        : `Added "${product.name.en}" to cart`,
      "success"
    );
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
    show(
      isWishlisted
        ? locale === "ar"
          ? "أزيل من المفضلة"
          : "Removed from wishlist"
        : locale === "ar"
        ? "أضيف للمفضلة"
        : "Added to wishlist",
      "success"
    );
  };

  const discountPct =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass-card rounded-2xl overflow-hidden gold-glow-hover"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-[#E8E0D6]">
          <Image
            src={imgError ? "/images/placeholder.svg" : product.image}
            alt={product.name[locale]}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
            onError={() => setImgError(true)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(201,153,107,0.25)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute top-3 start-3 flex flex-col gap-1.5">
            {product.isNewArrival && (
              <span className="bg-[#C9996B] text-white text-[9px] font-bold px-2.5 py-1 rounded-full tracking-[0.08em] uppercase">
                {locale === "ar" ? "جديد" : "New"}
              </span>
            )}
            {discountPct && (
              <span className="bg-white/80 border border-[rgba(201,153,107,0.4)] text-[#C9996B] text-[9px] font-bold px-2.5 py-1 rounded-full tracking-[0.08em]">
                -{discountPct}%
              </span>
            )}
          </div>

          {!product.inStock && (
            <div className="absolute inset-0 bg-[rgba(237,233,231,0.75)] flex items-center justify-center backdrop-blur-sm">
              <span className="bg-white/80 border border-[rgba(201,153,107,0.4)] text-[#C9996B] text-sm px-4 py-2 rounded-full font-semibold tracking-wide">
                {t.product.out_of_stock}
              </span>
            </div>
          )}

          <button
            onClick={handleWishlist}
            className={`absolute top-3 end-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isWishlisted
                ? "bg-[#C9996B] text-white opacity-100 shadow-[0_0_12px_rgba(201,153,107,0.5)]"
                : "bg-white/70 border border-[rgba(201,153,107,0.3)] text-[#C9996B]/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm hover:border-[rgba(201,153,107,0.6)] hover:text-[#C9996B]"
            }`}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart size={13} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-xs text-[#C9996B]/50 mb-1.5 uppercase tracking-[0.18em] font-medium">
            {product.category}
          </p>

          <h3 className="text-base font-semibold text-[#2C1810]/80 mb-3 line-clamp-1 group-hover:text-[#2C1810] transition-colors duration-300">
            {product.name[locale]}
          </h3>

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-bold text-[#C9996B]">
                {product.price.toFixed(3)}
                <span className="text-xs text-[#C9996B]/60 ms-1">
                  {t.product.currency}
                </span>
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#2C1810]/30 line-through">
                  {product.originalPrice.toFixed(3)}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-9 h-9 rounded-full bg-[rgba(201,153,107,0.12)] border border-[rgba(201,153,107,0.3)] text-[#C9996B] flex items-center justify-center hover:bg-[#C9996B] hover:text-white hover:border-[#C9996B] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 shadow-[0_0_0_0_rgba(201,153,107,0)] hover:shadow-[0_0_16px_rgba(201,153,107,0.4)]"
              aria-label={t.product.add_to_cart}
            >
              <ShoppingBag size={14} />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
