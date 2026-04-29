"use client";

import Link from "next/link";
import { Camera, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/store/languageStore";

export default function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-apple py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              {locale === "ar" ? "يزهابك" : "YEZHABK"}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              {t.footer.about_text}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://instagram.com/yezhabk1.om"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href="https://wa.me/96800000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.links_title}</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/products" className="hover:text-blue-600 transition-colors">{t.nav.products}</Link></li>
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">{t.nav.about}</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">{t.nav.contact}</Link></li>
              <li><Link href="/wishlist" className="hover:text-blue-600 transition-colors">{t.nav.wishlist}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact_title}</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>{locale === "ar" ? "سلطنة عُمان 🇴🇲" : "Oman 🇴🇲"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <a href="mailto:hello@yezhabk.om" className="hover:text-blue-600">hello@yezhabk.om</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-sm text-gray-500">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}