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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
      >
        <nav className="container-apple flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-display font-bold tracking-tight">
              {locale === "ar" ? "يزهابك" : "YEZHABK"}
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-primary hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe size={18} />
              <span className="text-xs font-medium hidden sm:inline">
                {locale === "ar" ? "EN" : "ع"}
              </span>
            </button>

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
              aria-label={t.nav.search}
            >
              <Search size={20} />
            </button>

            <Link
              href="/wishlist"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
              aria-label={t.nav.wishlist}
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/account"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block"
              aria-label={t.nav.account}
            >
              <User size={20} />
            </Link>

            <Link
              href="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
              aria-label={t.nav.cart}
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full min-w-[16px] h-4 px-1 flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-gray-200/50 overflow-hidden"
            >
              <ul className="container-apple py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-base text-text-primary hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      setSearchOpen(true);
                    }}
                    className="block py-2 text-base text-text-primary hover:text-primary w-full text-start"
                  >
                    {t.nav.search}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
