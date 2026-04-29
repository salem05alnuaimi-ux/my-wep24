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

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: locale === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`fixed top-0 ${
              locale === "ar" ? "left-0" : "right-0"
            } bottom-0 w-full sm:w-[440px] bg-white z-[100] flex flex-col shadow-2xl`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="font-display text-xl font-bold">
                  {t.nav.cart}
                </h2>
                {totalItems > 0 && (
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free shipping progress */}
            {items.length > 0 && remainingForFreeShipping > 0 && (
              <div className="px-6 py-4 bg-blue-50/50 border-b border-blue-100">
                <p className="text-sm text-text-primary mb-2">
                  {locale === "ar"
                    ? `أضف ${remainingForFreeShipping.toFixed(3)} ر.ع للشحن المجاني! 🚚`
                    : `Add ${remainingForFreeShipping.toFixed(3)} OMR for free shipping! 🚚`}
                </p>
                <div className="h-1.5 bg-white rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((subtotal / 50) * 100, 100)}%` }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            )}

            {/* Items */}
            {items.length === 0 ? (
              <EmptyCart onClose={closeCart} />
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="flex gap-4 py-4 border-b border-gray-100 last:border-0"
                      >
                        <Link
                          href={`/products/${item.productId}`}
                          onClick={closeCart}
                          className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0"
                        >
                          <Image
                            src={item.image}
                            alt={item.name[locale]}
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </Link>

                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/products/${item.productId}`}
                            onClick={closeCart}
                            className="block font-medium text-text-primary line-clamp-1 hover:text-primary transition-colors"
                          >
                            {item.name[locale]}
                          </Link>
                          {item.variantName && (
                            <p className="text-xs text-gray-500 mt-0.5">
                              {item.variantName[locale]}
                            </p>
                          )}
                          <p className="text-sm font-semibold text-text-primary mt-1">
                            {(item.price * item.quantity).toFixed(3)}{" "}
                            {t.product.currency}
                          </p>

                          <div className="flex items-center justify-between mt-3">
                            <div className="flex items-center border border-gray-200 rounded-full">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-1.5 hover:bg-gray-50 rounded-s-full"
                                aria-label="Decrease"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="px-3 text-sm min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                disabled={item.quantity >= item.maxStock}
                                className="p-1.5 hover:bg-gray-50 rounded-e-full disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Increase"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-600 transition-colors"
                              aria-label="Remove"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {locale === "ar" ? "المجموع الفرعي" : "Subtotal"}
                    </span>
                    <span className="font-medium">
                      {subtotal.toFixed(3)} {t.product.currency}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      {locale === "ar" ? "الشحن" : "Shipping"}
                    </span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">
                          {locale === "ar" ? "مجاني" : "Free"}
                        </span>
                      ) : (
                        `${shipping.toFixed(3)} ${t.product.currency}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-100">
                    <span className="font-semibold">
                      {locale === "ar" ? "الإجمالي" : "Total"}
                    </span>
                    <span className="font-bold text-lg">
                      {total.toFixed(3)} {t.product.currency}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="w-full bg-primary text-white py-3.5 rounded-full font-medium hover:bg-link transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    {locale === "ar" ? "إتمام الطلب" : "Checkout"}
                    <Arrow size={16} />
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
        transition={{ delay: 0.1 }}
        className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
      >
        <ShoppingBag size={36} className="text-gray-400" />
      </motion.div>
      <h3 className="font-display text-xl font-bold mb-2">
        {locale === "ar" ? "سلتك فارغة" : "Your cart is empty"}
      </h3>
      <p className="text-gray-500 text-sm mb-6 max-w-xs">
        {locale === "ar"
          ? "تصفح منتجاتنا الراقية وابدأ التسوق"
          : "Browse our premium products to start shopping"}
      </p>
      <Link
        href="/products"
        onClick={onClose}
        className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-link transition-colors"
      >
        {locale === "ar" ? "تصفح المنتجات" : "Browse Products"}
      </Link>
    </div>
  );
}
