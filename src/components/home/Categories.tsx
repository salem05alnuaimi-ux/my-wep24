"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/store/languageStore";

const ICONS: Record<string, ReactNode> = {
  shemagh: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect x="6" y="8" width="28" height="3" rx="1.5" fill="currentColor" opacity="0.9" />
      <rect x="6" y="14" width="20" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="6" y="19" width="24" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <rect x="6" y="24" width="18" height="2" rx="1" fill="currentColor" opacity="0.6" />
      <path d="M6 29 Q20 36 34 29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8"/>
    </svg>
  ),
  iqal: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="20" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.9" />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.9" />
      <path d="M20 9 L20 6M20 31 L20 34M9 20 L6 20M31 20 L34 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  watches: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect x="13" y="12" width="14" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
      <rect x="16" y="7" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.55" />
      <rect x="16" y="28" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.55" />
      <path d="M20 16 L20 20 L23 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pens: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M28 8 L32 12 L16 28 L12 32 L12 28 L28 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" opacity="0.9" />
      <path d="M24 12 L28 16" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M10 30 L12 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  misbaha: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.9" />
      <circle cx="10" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />
      <circle cx="20" cy="30" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />
      <circle cx="30" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />
      <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="26" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="14" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <circle cx="26" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  ),
  caps: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <path d="M8 24 Q20 10 32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M8 24 L32 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
      <path d="M5 24 L9 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.6" />
    </svg>
  ),
  bracelet: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.9" />
      <circle cx="20" cy="8" r="2.5" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="32" cy="20" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  ring: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <circle cx="20" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.9" />
      <circle cx="20" cy="22" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M16 14 L20 8 L24 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.9" />
      <circle cx="20" cy="8" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  ),
  makeup: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect x="14" y="8" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
      <rect x="16" y="28" width="8" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M17 16 Q20 19 23 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
    </svg>
  ),
  bags: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect x="7" y="16" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
      <path d="M14 16 L14 12 Q14 8 20 8 Q26 8 26 12 L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M7 22 L33 22" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
  boxes: (
    <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
      <rect x="7" y="18" width="26" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.9" />
      <path d="M7 18 L13 10 L27 10 L33 18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" opacity="0.7" />
      <path d="M7 18 L33 18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path d="M20 18 L20 34" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    </svg>
  ),
};

const categories = [
  { key: "shemagh", slug: "shemagh" },
  { key: "iqal", slug: "iqal" },
  { key: "watches", slug: "watches" },
  { key: "pens", slug: "pens" },
  { key: "misbaha", slug: "misbaha" },
  { key: "caps", slug: "caps" },
  { key: "bracelet", slug: "bracelet" },
  { key: "ring", slug: "ring" },
  { key: "makeup", slug: "makeup" },
  { key: "bags", slug: "bags" },
  { key: "boxes", slug: "boxes" },
] as const;

export default function Categories() {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container-apple">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm text-[#C9996B]/70 tracking-[0.35em] uppercase mb-4 font-medium">
            {t.categories.title}
          </p>
          <div className="gold-rule w-16 mx-auto opacity-40" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
            >
              <Link
                href={`/products?category=${cat.slug}`}
                className="group block aspect-square glass-card rounded-2xl flex flex-col items-center justify-center gap-3 gold-glow-hover relative overflow-hidden"
              >
                {/* Hover background shimmer */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 80% at 50% 120%, rgba(201,153,107,0.14) 0%, transparent 70%)",
                  }}
                />

                {/* Icon */}
                <span className="relative text-[#C9996B]/60 group-hover:text-[#C9996B] transition-all duration-400 group-hover:scale-110 transform">
                  {ICONS[cat.key]}
                </span>

                {/* Label */}
                <span className="relative text-sm font-semibold text-[#2C1810]/50 group-hover:text-[#C9996B]/90 transition-colors duration-300 tracking-wide">
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
