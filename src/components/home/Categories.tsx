"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/store/languageStore";

export default function Categories() {
  const { t } = useLanguage();

  const categories = [
    { key: "shemagh", emoji: "🧣", slug: "shemagh" },
    { key: "iqal", emoji: "👑", slug: "iqal" },
    { key: "watches", emoji: "⌚", slug: "watches" },
    { key: "pens", emoji: "🖋️", slug: "pens" },
    { key: "misbaha", emoji: "📿", slug: "misbaha" },
    { key: "caps", emoji: "🧢", slug: "caps" },
  ] as const;

  return (
    <section className="py-20 md:py-24">
      <div className="container-apple">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-12 text-center">
          {t.categories.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="block aspect-square rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-primary/10 hover:to-secondary/10 transition-all duration-500 flex flex-col items-center justify-center gap-3 group"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform">
                  {cat.emoji}
                </span>
                <span className="font-medium text-text-primary">
                  {t.categories[cat.key as keyof typeof t.categories]}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}