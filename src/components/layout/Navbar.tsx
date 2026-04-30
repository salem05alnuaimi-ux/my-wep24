"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Heart, User, Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/cartStore";
import { useLanguage } from "@/store/languageStore";
import SearchModal from "@/components/layout/SearchModal";

export default function Navbar() {
  const { locale, t, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const totalItems = useCart((s) =>
    s.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/products?category=watches", label: t.nav.categories },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-[rgba(184,92,56,0.18)] shadow-[0_1px_40px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-apple flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-widest text-gold-gradient transition-opacity duration-300 group-hover:opacity-80">
              {locale === "ar" ? "يزهابك" : "YEZHABK"}
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-base transition-colors duration-300 group ${
                    scrolled
                      ? "text-[#1A1A1A]/70 hover:text-[#B85C38]"
                      : "text-[rgba(184,92,56,0.85)] hover:text-[#E09070]"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 start-0 h-px w-0 bg-[#B85C38] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Icon actions */}
          <div className="flex items-center gap-1 md:gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className={`p-2.5 rounded-full transition-colors duration-300 flex items-center gap-1 ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.9)] hover:text-[#E09070]"
              }`}
              aria-label="Toggle language"
            >
              <Globe size={17} />
              <span className="text-sm font-medium hidden sm:inline tracking-wide">
                {locale === "ar" ? "EN" : "ع"}
              </span>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2.5 rounded-full transition-colors duration-300 hidden sm:flex ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.8)] hover:text-[#E09070]"
              }`}
              aria-label={t.nav.search}
            >
              <Search size={18} />
            </button>

            <Link
              href="/wishlist"
              className={`p-2.5 rounded-full transition-colors duration-300 hidden sm:flex ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.8)] hover:text-[#E09070]"
              }`}
              aria-label={t.nav.wishlist}
            >
              <Heart size={18} />
            </Link>

            <Link
              href="/account"
              className={`p-2.5 rounded-full transition-colors duration-300 hidden sm:flex ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.8)] hover:text-[#E09070]"
              }`}
              aria-label={t.nav.account}
            >
              <User size={18} />
            </Link>

            <Link
              href="/cart"
              className={`p-2.5 rounded-full transition-colors duration-300 relative ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.8)] hover:text-[#E09070]"
              }`}
              aria-label={t.nav.cart}
            >
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 bg-[#B85C38] text-white text-[9px] rounded-full min-w-[15px] h-[15px] px-0.5 flex items-center justify-center font-semibold"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2.5 rounded-full transition-colors duration-300 ${
                scrolled ? "text-[#1A1A1A]/60 hover:text-[#B85C38]" : "text-[rgba(184,92,56,0.9)] hover:text-[#E09070]"
              }`}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden bg-[#F4F4F3]/97 backdrop-blur-xl border-t border-[rgba(184,92,56,0.18)] overflow-hidden"
            >
              <ul className="container-apple py-6 flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-1.5 text-lg text-[#1A1A1A]/80 hover:text-[#B85C38] transition-colors font-medium tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06 }}
                >
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setSearchOpen(true);
                    }}
                    className="block py-1.5 text-lg text-[#1A1A1A]/80 hover:text-[#B85C38] transition-colors font-medium tracking-wide w-full text-start"
                  >
                    {t.nav.search}
                  </button>
                </motion.li>
              </ul>

              {/* Mobile amber rule */}
              <div className="gold-rule mx-6 mb-6 opacity-40" />
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
