"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/store/languageStore";

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { locale, t } = useLanguage();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const isRtl = locale === "ar";

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Subtle center radial ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,153,107,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container-apple text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div {...rise(0)} className="mb-6">
          <span className="inline-flex items-center gap-3 text-sm md:text-base text-[#C9996B]/80 font-medium tracking-[0.35em] uppercase">
            <span className="w-8 h-px bg-[#C9996B]/40" />
            {t.hero.tagline}
            <span className="w-8 h-px bg-[#C9996B]/40" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...rise(0.1)}
          className="font-display font-bold leading-[0.88] tracking-tight mb-8 text-[#2C1810]"
          style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)" }}
        >
          <span className="block text-gold-shimmer">{t.hero.title}</span>
        </motion.h1>

        {/* Amber divider */}
        <motion.div {...rise(0.2)} className="gold-rule w-24 mb-8 opacity-60" />

        {/* Subtitle */}
        <motion.p
          {...rise(0.25)}
          className="text-lg md:text-xl text-[#2C1810]/55 max-w-lg mx-auto mb-12 font-medium leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.35)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group relative overflow-hidden bg-[#C9996B] text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-[#D4A574] transition-all duration-300 flex items-center gap-2.5 text-base shadow-[0_0_30px_rgba(201,153,107,0.35)]"
          >
            <span>{t.hero.cta_shop}</span>
            <Arrow
              size={18}
              className={`transition-transform duration-300 ${
                isRtl
                  ? "group-hover:-translate-x-1"
                  : "group-hover:translate-x-1"
              }`}
            />
          </Link>

          <Link
            href="/about"
            className="px-10 py-4 rounded-full text-base font-semibold text-[#C9996B] border-2 border-[rgba(201,153,107,0.4)] hover:border-[rgba(201,153,107,0.8)] hover:bg-[rgba(201,153,107,0.08)] transition-all duration-300 tracking-wide"
          >
            {t.hero.cta_learn}
          </Link>
        </motion.div>

        {/* Floating stat badges */}
        <motion.div
          {...rise(0.5)}
          className="mt-16 flex items-center justify-center gap-8 md:gap-14"
        >
          {[
            {
              num: "500+",
              label: locale === "ar" ? "عميل راضٍ" : "Happy clients",
            },
            {
              num: "100%",
              label: locale === "ar" ? "أصالة مضمونة" : "Authentic",
            },
            {
              num: "2h",
              label: locale === "ar" ? "توصيل سريع" : "Fast delivery",
            },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-0.5">
                {stat.num}
              </p>
              <p className="text-xs md:text-sm text-[#2C1810]/45 tracking-[0.15em] uppercase font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-[rgba(201,153,107,0.6)] to-transparent" />
        <span className="text-xs text-[#C9996B]/50 tracking-[0.3em] uppercase">
          {locale === "ar" ? "انزل" : "Scroll"}
        </span>
      </motion.div>
    </section>
  );
}
