"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/store/languageStore";
import Button from "@/components/ui/Button";

const HeroBackground = dynamic(() => import("./HeroBackground"), { ssr: false });

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
      {/* 3D Blob Background */}
      <HeroBackground />

      {/* Soft radial overlay so text stays readable at center */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(244,244,243,0.0) 0%, rgba(244,244,243,0.30) 55%, rgba(244,244,243,0.72) 100%)",
        }}
      />

      <div className="container-apple text-center relative z-10 flex flex-col items-center">
        {/* Eyebrow */}
        <motion.div {...rise(0)} className="mb-6">
          <span className="inline-flex items-center gap-3 text-sm md:text-base text-primary/95 font-medium tracking-[0.35em] uppercase drop-shadow-sm">
            <span className="w-8 h-px bg-primary/50" />
            {t.hero.tagline}
            <span className="w-8 h-px bg-primary/50" />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          {...rise(0.1)}
          className="font-display font-bold leading-[0.88] tracking-tight mb-8"
          style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)" }}
        >
          <span className="block text-gold-shimmer">{t.hero.title}</span>
        </motion.h1>

        {/* Amber divider */}
        <motion.div {...rise(0.2)} className="gold-rule w-24 mb-8 opacity-60" />

        {/* Subtitle */}
        <motion.p
          {...rise(0.25)}
          className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-lg mx-auto mb-12 font-medium leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...rise(0.35)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/products">
            <Button variant="primary" size="lg" className="group" as="span">
              <span>{t.hero.cta_shop}</span>
              <Arrow
                size={18}
                className={`transition-transform duration-300 ${
                  isRtl ? "group-hover:-translate-x-1" : "group-hover:translate-x-1"
                }`}
              />
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="outline" size="lg" as="span">
              {t.hero.cta_learn}
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...rise(0.5)}
          className="mt-16 flex items-center justify-center gap-8 md:gap-14"
        >
          {[
            { num: "500+", label: locale === "ar" ? "عميل راضٍ" : "Happy clients" },
            { num: "100%", label: locale === "ar" ? "أصالة مضمونة" : "Authentic" },
            { num: "2h",   label: locale === "ar" ? "توصيل سريع" : "Fast delivery" },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <p
                className="font-display text-3xl md:text-4xl font-bold mb-0.5"
                style={{
                  background: "linear-gradient(135deg, var(--color-red-light), var(--color-red), var(--color-red-dark))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.3))",
                }}
              >
                {stat.num}
              </p>
              <p className="text-xs md:text-sm text-primary/85 tracking-[0.15em] uppercase font-medium">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
        <span className="text-xs text-primary/50 tracking-[0.3em] uppercase">
          {locale === "ar" ? "انزل" : "Scroll"}
        </span>
      </motion.div>
    </section>
  );
}
