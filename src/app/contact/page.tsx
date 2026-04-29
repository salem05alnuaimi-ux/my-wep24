"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useLanguage } from "@/store/languageStore";
import { MessageCircle, Camera, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const { locale } = useLanguage();

  const contacts = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+968 0000 0000",
      href: "https://wa.me/96800000000",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Camera,
      title: "Instagram",
      value: "@yezhabk1.om",
      href: "https://instagram.com/yezhabk1.om",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Mail,
      title: locale === "ar" ? "البريد الإلكتروني" : "Email",
      value: "hello@yezhabk.om",
      href: "mailto:hello@yezhabk.om",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: MapPin,
      title: locale === "ar" ? "الموقع" : "Location",
      value: locale === "ar" ? "سلطنة عُمان 🇴🇲" : "Sultanate of Oman 🇴🇲",
      href: null as string | null,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
            </h1>
            <p className="text-gray-600 text-lg">
              {locale === "ar"
                ? "نحن هنا للمساعدة. تواصل معنا عبر أي من القنوات التالية"
                : "We're here to help. Reach out through any of the channels below"}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {contacts.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-all group"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${c.color}`}
                    >
                      <c.icon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {c.title}
                      </p>
                      <p className="text-gray-500 text-sm">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${c.color}`}
                    >
                      <c.icon size={22} />
                    </div>
                    <div>
                      <p className="font-semibold">{c.title}</p>
                      <p className="text-gray-500 text-sm">{c.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Clock size={20} className="text-primary" />
              <h3 className="font-semibold">
                {locale === "ar" ? "أوقات الرد" : "Response Hours"}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              {locale === "ar"
                ? "السبت – الخميس: ٩ ص – ١٠ م (بتوقيت مسقط)"
                : "Sat – Thu: 9 AM – 10 PM (Muscat time)"}
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
