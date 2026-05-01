"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";
import { RefreshCw, CheckCircle, XCircle, Phone } from "lucide-react";

export default function ReturnPolicyPage() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";

  const steps = isAr
    ? [
        "تواصل معنا خلال ٧ أيام من استلام المنتج عبر واتساب أو البريد الإلكتروني",
        "أرسل صوراً واضحة للمنتج وسبب الإرجاع",
        "سنرسل لك تعليمات الإرجاع وعنوان الشحن",
        "بعد استلامنا للمنتج وفحصه، يُعالَج الاسترداد خلال ٥–٧ أيام عمل",
      ]
    : [
        "Contact us within 7 days of receiving the product via WhatsApp or email",
        "Send clear photos of the product and the reason for return",
        "We will send you return instructions and the shipping address",
        "After receiving and inspecting the product, refunds are processed within 5–7 business days",
      ];

  const eligible = isAr
    ? ["منتج خاطئ أُرسل بدلاً من المطلوب", "منتج معيب أو تالف عند الاستلام", "منتج مختلف عن وصفه في الموقع"]
    : ["Wrong product sent instead of what was ordered", "Defective or damaged product upon receipt", "Product differs from its description on the site"];

  const notEligible = isAr
    ? ["منتجات مُستخدمة أو مفتوحة التغليف الداخلي", "منتجات بها علامات استخدام", "طلبات مضى عليها أكثر من ٧ أيام", "منتجات مُخصصة أو مُطبوعة حسب الطلب"]
    : ["Used or opened products (inner packaging removed)", "Products showing signs of use", "Requests made more than 7 days after delivery", "Personalized or custom-printed products"];

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <section className="container-apple text-center py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <RefreshCw size={28} className="text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-widest uppercase mb-4"
          >
            {isAr ? "الإرجاع والاسترداد" : "Returns & Refunds"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6"
          >
            {isAr ? "سياسة الإرجاع" : "Return Policy"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-xl mx-auto"
          >
            {isAr
              ? "راحتك تهمنا — نقبل الإرجاع خلال ٧ أيام من الاستلام"
              : "Your satisfaction matters — we accept returns within 7 days of receipt"}
          </motion.p>
        </section>

        <section className="container-apple max-w-3xl pb-12 space-y-6">
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10"
          >
            <h2 className="font-bold text-2xl mb-6">
              {isAr ? "خطوات الإرجاع" : "How to Return"}
            </h2>
            <ol className="space-y-4">
              {steps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Eligible / Not eligible */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-gray-100 p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle size={20} className="text-green-500" />
                <h2 className="font-bold text-lg">
                  {isAr ? "حالات مقبولة" : "Eligible Cases"}
                </h2>
              </div>
              <ul className="space-y-3">
                {eligible.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 p-8"
            >
              <div className="flex items-center gap-2 mb-5">
                <XCircle size={20} className="text-red-400" />
                <h2 className="font-bold text-lg">
                  {isAr ? "حالات غير مقبولة" : "Non-eligible Cases"}
                </h2>
              </div>
              <ul className="space-y-3">
                {notEligible.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-3xl p-8 text-center"
          >
            <Phone size={24} className="text-primary mx-auto mb-3" />
            <p className="font-bold text-lg mb-1">
              {isAr ? "للتواصل بشأن الإرجاع" : "Contact Us About a Return"}
            </p>
            <p className="text-gray-600 text-sm mb-4">
              {isAr
                ? "واتساب: +968 9492 4300 — البريد: hello@yezhabk.om"
                : "WhatsApp: +968 9492 4300 — Email: hello@yezhabk.om"}
            </p>
            <a
              href="https://wa.me/96894924300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              {isAr ? "تواصل عبر واتساب" : "WhatsApp Us"}
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
