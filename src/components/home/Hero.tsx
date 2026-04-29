"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/store/languageStore";

export default function Hero() {
  const { locale, t } = useLanguage();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container-apple text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-primary font-medium tracking-widest uppercase mb-4"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-6"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="group bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-link transition-all flex items-center gap-2 hover:gap-3"
          >
            {t.hero.cta_shop}
            <Arrow size={18} className="transition-transform" />
          </Link>

          <Link
            href="/about"
            className="px-8 py-3.5 rounded-full font-medium text-primary hover:bg-primary/5 transition-colors"
          >
            {t.hero.cta_learn}
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}