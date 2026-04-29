"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useLanguage } from "@/store/languageStore";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const { locale, t } = useLanguage();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const results = query.trim()
    ? products.filter((p) =>
        p.name.ar.includes(query) ||
        p.name.en.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[92%] max-w-2xl z-[100] bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 p-5 border-b border-gray-100">
              <Search size={20} className="text-gray-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.nav.search}
                className="flex-1 outline-none text-base"
              />
              <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query && results.length === 0 && (
                <p className="text-center text-gray-500 py-12">
                  {locale === "ar" ? "ما لقينا نتائج" : "No results"}
                </p>
              )}
              {results.map((p) => (
                <Link
                  key={p.id} href={`/products/${p.id}`} onClick={onClose}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50">
                    <Image src={p.images[0]} alt={p.name[locale]} fill sizes="48px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium line-clamp-1">{p.name[locale]}</p>
                    <p className="text-xs text-gray-500 capitalize">{p.category}</p>
                  </div>
                  <span className="font-semibold">{p.price.toFixed(3)} {t.product.currency}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}