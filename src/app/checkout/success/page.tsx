"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Package } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";

function SuccessContent() {
  const { locale } = useLanguage();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order");

  return (
    <div className="container-apple max-w-2xl text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 size={48} className="text-green-600" />
      </motion.div>

      <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
        {locale === "ar" ? "تم استلام طلبك! 🎉" : "Order Received! 🎉"}
      </h1>
      <p className="text-gray-600 text-lg mb-2">
        {locale === "ar" ? "شكراً لثقتك بـ يزهابك" : "Thank you for trusting YEZHABK"}
      </p>
      {orderId && (
        <p className="text-sm text-gray-500 mb-8">
          {locale === "ar" ? "رقم الطلب:" : "Order #:"} <span className="font-mono font-medium">{orderId}</span>
        </p>
      )}

      <div className="bg-blue-50 rounded-2xl p-6 mb-8 text-start">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <Package size={18} className="text-primary" />
          {locale === "ar" ? "ماذا بعد؟" : "What's next?"}
        </h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• {locale === "ar" ? "سنتواصل معك قريباً لتأكيد الطلب" : "We'll contact you to confirm soon"}</li>
          <li>• {locale === "ar" ? "تابع طلبك من حسابك" : "Track your order from your account"}</li>
          <li>• {locale === "ar" ? "وقت التوصيل ٢-٤ أيام" : "Delivery in 2-4 days"}</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/account/orders" className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-link transition-colors">
          {locale === "ar" ? "تتبع الطلب" : "Track Order"}
        </Link>
        <Link href="/products" className="border border-gray-200 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
          {locale === "ar" ? "متابعة التسوق" : "Continue Shopping"}
        </Link>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen flex items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}