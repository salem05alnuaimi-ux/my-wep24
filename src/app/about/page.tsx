"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";
import { ShieldCheck, Star, Package, Globe } from "lucide-react";

export default function AboutPage() {
  const { locale } = useLanguage();

  const values = [
    {
      icon: ShieldCheck,
      title: locale === "ar" ? "الجودة أولاً" : "Quality First",
      desc:
        locale === "ar"
          ? "نختار كل منتج بعناية لضمان أعلى مستويات الجودة والأصالة"
          : "We carefully select every product to ensure the highest standards of quality and authenticity",
    },
    {
      icon: Star,
      title: locale === "ar" ? "تميّز حقيقي" : "Genuine Excellence",
      desc:
        locale === "ar"
          ? "منتجات أصيلة من أفضل العلامات التجارية العالمية"
          : "Authentic products from the world's finest brands",
    },
    {
      icon: Package,
      title: locale === "ar" ? "تغليف فاخر" : "Luxury Packaging",
      desc:
        locale === "ar"
          ? "كل طلب يُغلَّف بعناية ليصل كهدية استثنائية"
          : "Every order is carefully packaged to arrive as an exceptional gift",
    },
    {
      icon: Globe,
      title: locale === "ar" ? "توصيل سريع" : "Fast Delivery",
      desc:
        locale === "ar"
          ? "توصيل لعُمان والإمارات خلال ٢-٤ أيام عمل"
          : "Delivery to Oman & UAE within 2–4 business days",
    },
  ];

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        {/* Hero */}
        <section className="container-apple text-center py-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-widest uppercase mb-4"
          >
            {locale === "ar" ? "قصتنا" : "Our Story"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6"
          >
            {locale === "ar" ? "يزهابك" : "YEZHABK"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {locale === "ar"
              ? "ثقة تُبنى... وتميّز يُحترم"
              : "Trust earned. Excellence respected."}
          </motion.p>
        </section>

        {/* Story */}
        <section className="container-apple max-w-3xl py-4">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12">
            <h2 className="font-display text-3xl font-bold mb-6">
              {locale === "ar" ? "من نحن" : "Who We Are"}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                {locale === "ar"
                  ? "يزهابك متجر عُماني متخصص في المنتجات الراقية للرجل العربي الأنيق. نؤمن بأن الأناقة الحقيقية تبدأ من التفاصيل — من شماغ يُلبَس بثقة، إلى ساعة تعكس الشخصية، إلى قلم يُوقَّع به المواقف."
                  : "YEZHABK is an Omani store specializing in premium products for the stylish Arab man. We believe true elegance begins in the details — from a shemagh worn with confidence, to a watch that reflects personality, to a pen that signs meaningful moments."}
              </p>
              <p>
                {locale === "ar"
                  ? "أسسنا يزهابك بهدف جلب أفضل العلامات التجارية العالمية إلى المستهلك العُماني والخليجي بخدمة شخصية ومتميزة."
                  : "We founded YEZHABK to bring the world's finest brands to Omani and Gulf customers with personal, distinguished service."}
              </p>
              <p>
                {locale === "ar"
                  ? "كل منتج في متجرنا يمر بمعايير صارمة من الجودة والأصالة قبل أن يصل إليك. لأنك تستحق الأفضل."
                  : "Every product in our store passes strict quality and authenticity standards before it reaches you. Because you deserve the best."}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container-apple py-12">
          <h2 className="font-display text-3xl font-bold text-center mb-10">
            {locale === "ar" ? "قيمنا" : "Our Values"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 p-6"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
