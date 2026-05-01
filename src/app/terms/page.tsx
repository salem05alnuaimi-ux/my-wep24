"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";
import { FileText } from "lucide-react";

const sections = {
  ar: [
    {
      title: "القبول بالشروط",
      body: "باستخدام موقع يزهابك أو إتمام أي عملية شراء، فإنك توافق على هذه الشروط كاملةً. إذا كنت لا توافق على أي بند، يُرجى التوقف عن استخدام الموقع.",
    },
    {
      title: "الطلبات والأسعار",
      body: "جميع الأسعار بالريال العُماني (ر.ع) وتشمل ضريبة القيمة المضافة حيثما تنطبق. نحتفظ بحق تعديل الأسعار دون إشعار مسبق. يُعدّ الطلب ملزماً عند تأكيده من طرفنا.",
    },
    {
      title: "التوصيل",
      body: "نوصّل إلى سلطنة عُمان والإمارات العربية المتحدة خلال ٢–٤ أيام عمل. قد تتأخر التوصيلات في المناسبات والأعياد. أي تأخير ناجم عن شركة الشحن لا يُلزمنا بتعويض.",
    },
    {
      title: "المسؤولية",
      body: "يزهابك غير مسؤول عن أي أضرار غير مباشرة ناجمة عن استخدام الموقع أو المنتجات. مسؤوليتنا القصوى تقتصر على قيمة الطلب المُدفوع.",
    },
    {
      title: "الحسابات",
      body: "أنت مسؤول عن سرية بيانات حسابك. أي نشاط يتم من خلال حسابك هو مسؤوليتك. أبلغنا فوراً عن أي اختراق مشتبه به.",
    },
    {
      title: "الملكية الفكرية",
      body: "جميع المحتويات — صور، نصوص، شعارات، تصميمات — ملك حصري لمتجر يزهابك ومحمية بموجب قوانين حقوق النشر. يُحظر نسخها أو إعادة نشرها دون إذن خطي.",
    },
    {
      title: "القانون المطبّق",
      body: "تخضع هذه الشروط لقوانين سلطنة عُمان. أي نزاع يُحال إلى المحاكم المختصة في مسقط.",
    },
  ],
  en: [
    {
      title: "Acceptance of Terms",
      body: "By using the YEZHABK website or completing any purchase, you agree to these terms in full. If you disagree with any clause, please stop using the site.",
    },
    {
      title: "Orders & Pricing",
      body: "All prices are in Omani Rial (OMR) and include VAT where applicable. We reserve the right to modify prices without prior notice. An order is binding upon confirmation from our side.",
    },
    {
      title: "Delivery",
      body: "We deliver to Oman and the UAE within 2–4 business days. Deliveries may be delayed during holidays and occasions. Delays caused by the shipping company do not obligate us to compensation.",
    },
    {
      title: "Liability",
      body: "YEZHABK is not liable for any indirect damages resulting from use of the site or products. Our maximum liability is limited to the value of the paid order.",
    },
    {
      title: "Accounts",
      body: "You are responsible for the confidentiality of your account credentials. Any activity through your account is your responsibility. Notify us immediately of any suspected breach.",
    },
    {
      title: "Intellectual Property",
      body: "All content — images, texts, logos, designs — is the exclusive property of YEZHABK and protected by copyright law. Copying or republishing without written permission is prohibited.",
    },
    {
      title: "Governing Law",
      body: "These terms are governed by the laws of the Sultanate of Oman. Any dispute shall be referred to the competent courts in Muscat.",
    },
  ],
};

export default function TermsPage() {
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
            <FileText size={28} className="text-primary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-widest uppercase mb-4"
          >
            {isAr ? "الشروط والأحكام" : "Terms & Conditions"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6"
          >
            {isAr ? "شروط الاستخدام" : "Terms of Use"}
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
