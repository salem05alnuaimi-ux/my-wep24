"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "@/store/cartStore";
import { useLanguage } from "@/store/languageStore";

export default function CartDrawer() {
  const { locale, t } = useLanguage();
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getShipping,
    getTotal,
  } = useCart();

  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeCart]);

  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();
  const remainingForFreeShipping = 50 - subtotal;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
          />

          {/* Drawer panel */}
          <motion.aside
            initial={{ x: locale === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            className={`fixed top-0 ${
              locale === "ar" ? "left-0" : "right-0"
            } bottom-0 w-full sm:w-[420px] bg-[#EDE9E7] border-${
              locale === "ar" ? "r" : "l"
            } border-[rgba(201,153,107,0.2)] z-[100] flex flex-col shadow-[0_0_60px_rgba(0,0,0,0.15)]`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[rgba(201,153,107,0.15)]">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} className="text-[#C9996B]" />
                <h2 className="font-display text-xl font-bold tracking-widest text-[#2C1810]">
                  {t.nav.cart}
                </h2>
                {totalItems > 0 && (
                  <span className="bg-[#C9996B] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#2C1810]/40 hover:text-[#C9996B] rounded-full transition-colors duration-300"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {/* Free shipping progress bar */}
            {items.length > 0 && remainingForFreeShipping > 0 && (
              <div className="px-6 py-4 border-b border-[rgba(201,153,107,0.1)]">
                <p className="text-sm text-[#2C1810]/50 mb-2.5 font-medium">
                  {locale === "ar"
                    ? `أضف ${remainingForFreeShipping.toFixed(3)} ر.ع للشحن المجاني`
                    : `Add ${remainingForFreeShipping.toFixed(3)} OMR for free shipping`}
                </p>
                <div className="h-0.5 bg-[rgba(201,153,107,0.18)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#A0724A] to-[#C9996B]"
                  />
                </div>
              </div>
            )}

            {/* Cart items / Empty state */}
            {items.length === 0 ? (
              <EmptyCart onClose={closeCart} />
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -80 }}
                        className="flex gap-4 py-5 border-b border-[rgba(201,153,107,0.1)] last:border-0"
                      >
                        {/* Product image */}
                        <Link
                          href={`/products/${item.productId}`}
                          onClick={closeCart}
                          className="relative rounded-xl overflow-hidden bg-[#E0D8CE] border border-[rgba(201,153,107,0.2)] shrink-0"
                          style={{ width: 72, height: 72 }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name[locale]}
                            fill
                            sizes="72px"
                            className="object-cover"
                          />
                        </Link>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/products/${item.productId}`}
                            onClick={closeCart}
                            className="block text-base font-semibold text-[#2C1810]/80 line-clamp-1 hover:text-[#C9996B] transition-colors duration-300"
                          >
                            {item.name[locale]}
                          </Link>
                          {item.variantName && (
                            <p className="text-xs text-[#2C1810]/40 mt-0.5 font-medium">
                              {item.variantName[locale]}
                            </p>
                          )}
                          <p className="text-base font-bold text-[#C9996B] mt-1.5">
                            {(item.price * item.quantity).toFixed(3)}{" "}
                            <span className="text-xs text-[#C9996B]/60">{t.product.currency}</span>
                          </p>

                          {/* Quantity + remove */}
                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-[rgba(201,153,107,0.25)] rounded-full bg-white/50">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 text-[#2C1810]/50 hover:text-[#C9996B] rounded-s-full transition-colors"
                                aria-label="Decrease"
                              >
                                <Minus size={11} />
                              </button>
                              <span className="px-3 text-sm text-[#2C1810]/80 min-w-[2rem] text-center font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                disabled={item.quantity >= item.maxStock}
                                className="p-1.5 text-[#2C1810]/50 hover:text-[#C9996B] rounded-e-full transition-colors disabled:opacity-25"
                                aria-label="Increase"
                              >
                                <Plus size={11} />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 text-[#2C1810]/25 hover:text-red-500 rounded-full transition-colors duration-300"
                              aria-label="Remove"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Summary footer */}
                <div className="border-t border-[rgba(201,153,107,0.15)] p-6 space-y-3 bg-[#E8E0D6]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2C1810]/50 font-medium">
                      {locale === "ar" ? "المجموع الفرعي" : "Subtotal"}
                    </span>
                    <span className="text-[#2C1810]/80 font-semibold">
                      {subtotal.toFixed(3)} {t.product.currency}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#2C1810]/50 font-medium">
                      {locale === "ar" ? "الشحن" : "Shipping"}
                    </span>
                    <span className={shipping === 0 ? "text-[#C9996B] font-bold" : "text-[#2C1810]/80 font-semibold"}>
                      {shipping === 0
                        ? locale === "ar" ? "مجاني" : "Free"
                        : `${shipping.toFixed(3)} ${t.product.currency}`}
                    </span>
                  </div>

                  <div className="gold-rule opacity-25" />

                  <div className="flex justify-between pt-1">
                    <span className="text-base font-bold text-[#2C1810]/70">
                      {locale === "ar" ? "الإجمالي" : "Total"}
                    </span>
                    <span className="text-xl font-bold text-gold-gradient">
                      {total.toFixed(3)} {t.product.currency}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="w-full bg-[#C9996B] text-white py-4 rounded-full font-bold hover:bg-[#D4A574] transition-colors flex items-center justify-center gap-2 mt-3 text-base tracking-wide shadow-[0_0_24px_rgba(201,153,107,0.3)]"
                  >
                    {locale === "ar" ? "إتمام الطلب" : "Checkout"}
                    <Arrow size={15} />
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function EmptyCart({ onClose }: { onClose: () => void }) {
  const { locale } = useLanguage();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6"
      >
        <ShoppingBag size={30} className="text-[#C9996B]/50" />
      </motion.div>
      <h3 className="font-display text-2xl font-bold text-[#2C1810]/60 mb-2 tracking-wide">
        {locale === "ar" ? "سلتك فارغة" : "Your cart is empty"}
      </h3>
      <p className="text-[#2C1810]/40 text-base mb-8 max-w-xs font-medium leading-relaxed">
        {locale === "ar"
          ? "تصفح منتجاتنا الراقية وابدأ التسوق"
          : "Browse our premium products to start shopping"}
      </p>
      <Link
        href="/products"
        onClick={onClose}
        className="bg-[#C9996B] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#D4A574] transition-colors text-base tracking-wide"
      >
        {locale === "ar" ? "تصفح المنتجات" : "Browse Products"}
      </Link>
    </div>
  );
}
