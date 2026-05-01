"use client";

import Link from "next/link";
import { Camera, MessageCircle, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/store/languageStore";

export default function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="relative border-t border-[rgba(201,153,107,0.18)] mt-20 bg-[#E0D8CE]">
      {/* Top ambient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,153,107,0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-apple py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold tracking-widest text-gold-gradient mb-4">
              {locale === "ar" ? "يزهابك" : "YEZHABK"}
            </h3>
            <p className="text-[#2C1810]/50 text-base leading-relaxed max-w-sm font-medium">
              {t.footer.about_text}
            </p>

            <div className="flex items-center gap-3 mt-7">
              <a
                href="https://instagram.com/yezhabk1.om"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#2C1810]/40 hover:text-[#C9996B] hover:border-[rgba(201,153,107,0.5)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera size={16} />
              </a>
              <a
                href="https://wa.me/96894924300"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#2C1810]/40 hover:text-[#C9996B] hover:border-[rgba(201,153,107,0.5)] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm text-[#C9996B]/70 font-semibold tracking-[0.2em] uppercase mb-5">
              {t.footer.links_title}
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <Link href="/products" className="text-[#2C1810]/50 hover:text-[#C9996B] transition-colors duration-300 font-medium">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#2C1810]/50 hover:text-[#C9996B] transition-colors duration-300 font-medium">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#2C1810]/50 hover:text-[#C9996B] transition-colors duration-300 font-medium">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-[#2C1810]/50 hover:text-[#C9996B] transition-colors duration-300 font-medium">
                  {t.nav.wishlist}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm text-[#C9996B]/70 font-semibold tracking-[0.2em] uppercase mb-5">
              {t.footer.contact_title}
            </h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#C9996B]/60 shrink-0" />
                <span className="text-[#2C1810]/50 font-medium">
                  {locale === "ar" ? "سلطنة عُمان 🇴🇲" : "Oman 🇴🇲"}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C9996B]/60 shrink-0" />
                <a
                  href="mailto:hello@yezhabk.om"
                  className="text-[#2C1810]/50 hover:text-[#C9996B] transition-colors duration-300 font-medium"
                >
                  hello@yezhabk.om
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div className="gold-rule mt-12 mb-6 opacity-25" />
        <p className="text-center text-sm text-[#2C1810]/35 font-medium tracking-wide">
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
