"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";
import { Shield } from "lucide-react";

const sections = {
  ar: [
    {
      title: "المعلومات التي نجمعها",
      body: "عند إنشاء حساب أو إتمام طلب، نجمع: الاسم الكامل، البريد الإلكتروني، رقم الهاتف، عنوان الشحن، وتفاصيل الطلبات. كما نجمع بيانات تصفح مجهولة الهوية لتحسين تجربتك.",
    },
    {
      title: "كيف نستخدم بياناتك",
      body: "نستخدم بياناتك حصرياً لمعالجة طلباتك، إرسال تحديثات الشحن، والرد على استفساراتك. لن نرسل رسائل تسويقية دون موافقتك الصريحة.",
    },
    {
      title: "مشاركة البيانات",
      body: "لا نبيع أو نشارك بياناتك الشخصية مع أطراف ثالثة إلا مع شركات الشحن المعتمدة لتوصيل طلبك فحسب، وذلك بالحد الأدنى الضروري.",
    },
    {
      title: "ملفات تعريف الارتباط (Cookies)",
      body: "يستخدم موقعنا ملفات تعريف الارتباط للحفاظ على محتويات سلتك، وتذكر تفضيلاتك (اللغة)، وقياس أداء الموقع عبر Google Analytics وVercel Analytics.",
    },
    {
      title: "حماية البيانات",
      body: "تُشفَّر كلمات المرور بخوارزمية bcrypt. تنتقل جميع البيانات عبر HTTPS. لا نخزن أي بيانات بطاقات مصرفية — تُعالج المدفوعات عبر بوابات دفع مرخصة.",
    },
    {
      title: "حقوقك",
      body: "يحق لك في أي وقت طلب الاطلاع على بياناتك، تصحيحها، أو حذفها. للتواصل: hello@yezhabk.om أو عبر واتساب +968 9492 4300.",
    },
    {
      title: "تحديثات السياسة",
      body: "نحتفظ بالحق في تحديث هذه السياسة. سيُبلَّغ المستخدمون المسجلون بأي تغيير جوهري عبر البريد الإلكتروني.",
    },
  ],
  en: [
    {
      title: "Information We Collect",
      body: "When you create an account or place an order, we collect: full name, email address, phone number, shipping address, and order details. We also collect anonymous browsing data to improve your experience.",
    },
    {
      title: "How We Use Your Data",
      body: "We use your data exclusively to process orders, send shipping updates, and respond to your inquiries. We will not send marketing communications without your explicit consent.",
    },
    {
      title: "Data Sharing",
      body: "We do not sell or share your personal data with third parties, except with approved shipping companies to deliver your order — and only to the minimum extent necessary.",
    },
    {
      title: "Cookies",
      body: "Our website uses cookies to maintain your cart contents, remember your preferences (language), and measure site performance via Google Analytics and Vercel Analytics.",
    },
    {
      title: "Data Protection",
      body: "Passwords are encrypted with bcrypt. All data is transmitted over HTTPS. We do not store any card data — payments are processed through licensed payment gateways.",
    },
    {
      title: "Your Rights",
      body: "You may at any time request access to, correction of, or deletion of your data. Contact us: hello@yezhabk.om or WhatsApp +968 9492 4300.",
    },
    {
      title: "Policy Updates",
      body: "We reserve the right to update this policy. Registered users will be notified of any material change via email.",
    },
  ],
};

export default function PrivacyPage() {
  const { locale } = useLanguage();
  const isAr = locale === "ar";
  const content = sections[isAr ? "ar" : "en"];

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
            <Shield size={28} className="text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-widest uppercase mb-4"
          >
            {isAr ? "الخصوصية والأمان" : "Privacy & Security"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6"
          >
            {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            {isAr ? "آخر تحديث: مايو ٢٠٢٦" : "Last updated: May 2026"}
          </motion.p>
        </section>

        <section className="container-apple max-w-3xl pb-12">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 space-y-10">
            {content.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="font-bold text-xl mb-3 text-text-primary">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
