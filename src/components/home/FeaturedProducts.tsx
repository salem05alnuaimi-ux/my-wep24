"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/store/languageStore";
import ProductCard from "@/components/product/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const { locale, t } = useLanguage();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const featuredProducts = getFeaturedProducts(4);

  return (
    <section className="py-24 md:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,153,107,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-apple relative">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-[#C9996B]/70 tracking-[0.35em] uppercase mb-3 font-medium">
              {t.featured.subtitle}
            </p>
            <h2 className="font-display font-bold text-[#2C1810] leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t.featured.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-base text-[#C9996B]/70 hover:text-[#C9996B] transition-colors duration-300 group font-medium"
            >
              <span className="tracking-wide">{t.featured.view_all}</span>
              <Arrow
                size={16}
                className={`transition-transform duration-300 ${
                  locale === "ar" ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                }`}
              />
            </Link>
          </motion.div>
        </div>

        {/* Amber rule */}
        <div className="gold-rule mb-14 opacity-30" />

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
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
                isNewArrival: product.isNewArrival,
                inStock: product.inStock,
              }}
              index={i}
            />
          ))}
        </div>

        {/* Mobile view-all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center md:hidden"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-base text-[#C9996B]/80 hover:text-[#C9996B] transition-colors font-medium"
          >
            {t.featured.view_all}
            <Arrow size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
