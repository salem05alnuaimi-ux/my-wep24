"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { useCart } from "@/store/cartStore";
import { useLanguage } from "@/store/languageStore";
import { useToast } from "@/components/ui/Toast";

export default function CartPage() {
  const { locale, t } = useLanguage();
  const { show } = useToast();
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    getSubtotal,
    getShipping,
    getTotal,
  } = useCart();

  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const subtotal = getSubtotal();
  const shipping = getShipping();
  const total = getTotal();

  const handleRemove = (id: string, name: string) => {
    removeItem(id);
    show(
      locale === "ar"
        ? `تم حذف "${name}" من السلة`
        : `Removed "${name}" from cart`,
      "info"
    );
  };

  return (
    <>
      <FloatingShapes />
      <Navbar />

      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple">
          <Breadcrumb
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.nav.cart },
            ]}
          />

          <h1 className="font-display text-4xl md:text-5xl font-bold mt-6 mb-10">
            {locale === "ar" ? "سلة التسوق" : "Shopping Cart"}
          </h1>

          {items.length === 0 ? (
            <EmptyCartFull />
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Items list */}
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.article
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      className="flex gap-5 p-5 bg-white rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <Link
                        href={`/products/${item.productId}`}
                        className="relative w-28 h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-50 shrink-0"
                      >
                        <Image
                          src={item.image}
                          alt={item.name[locale]}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </Link>

                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <Link
                              href={`/products/${item.productId}`}
                              className="font-medium text-text-primary hover:text-primary transition-colors line-clamp-2"
                            >
                              {item.name[locale]}
                            </Link>
                            {item.variantName && (
                              <p className="text-sm text-gray-500 mt-1">
                                {item.variantName[locale]}
                              </p>
                            )}
                          </div>

                          <button
                            onClick={() =>
                              handleRemove(item.id, item.name[locale])
                            }
                            className="p-2 hover:bg-red-50 rounded-full text-gray-400 hover:text-red-600 transition-colors shrink-0"
                            aria-label="Remove"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="flex items-end justify-between mt-auto pt-4">
                          <div className="flex items-center border border-gray-200 rounded-full">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-2 hover:bg-gray-50 rounded-s-full"
                              aria-label="Decrease"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-4 font-medium min-w-[3rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              disabled={item.quantity >= item.maxStock}
                              className="p-2 hover:bg-gray-50 rounded-e-full disabled:opacity-30 disabled:cursor-not-allowed"
                              aria-label="Increase"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <div className="text-end">
                            <p className="text-lg font-bold text-text-primary">
                              {(item.price * item.quantity).toFixed(3)}{" "}
                              {t.product.currency}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-gray-500">
                                {item.price.toFixed(3)} ×{item.quantity}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>

                {items.length > 1 && (
                  <button
                    onClick={() => {
                      clearCart();
                      show(
                        locale === "ar" ? "تم تفريغ السلة" : "Cart cleared",
                        "info"
                      );
                    }}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors mt-4"
                  >
                    {locale === "ar" ? "تفريغ السلة" : "Clear cart"}
                  </button>
                )}
              </div>

              {/* Summary */}
              <aside className="lg:sticky lg:top-24 h-fit">
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h2 className="font-display text-xl font-bold mb-5">
                    {locale === "ar" ? "ملخص الطلب" : "Order Summary"}
                  </h2>

                  <div className="space-y-3 pb-4 border-b border-gray-100">
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
                    {shipping > 0 && (
                      <p className="text-xs text-primary bg-blue-50 rounded-lg p-2">
                        {locale === "ar"
                          ? `أضف ${(50 - subtotal).toFixed(3)} ر.ع للشحن المجاني!`
                          : `Add ${(50 - subtotal).toFixed(3)} OMR for free shipping!`}
                      </p>
                    )}
                  </div>

                  <div className="flex justify-between py-4 border-b border-gray-100 mb-5">
                    <span className="font-semibold text-lg">
                      {locale === "ar" ? "الإجمالي" : "Total"}
                    </span>
                    <span className="font-bold text-2xl">
                      {total.toFixed(3)} {t.product.currency}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full bg-primary text-white py-4 rounded-full font-medium hover:bg-link transition-colors flex items-center justify-center gap-2"
                  >
                    {locale === "ar" ? "إتمام الطلب" : "Proceed to Checkout"}
                    <Arrow size={16} />
                  </Link>

                  <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-500">
                    <ShieldCheck size={14} />
                    <span>
                      {locale === "ar"
                        ? "دفع آمن ومشفّر"
                        : "Secure encrypted checkout"}
                    </span>
                  </div>
                </div>

                <Link
                  href="/products"
                  className="block text-center text-sm text-primary hover:underline mt-4"
                >
                  {locale === "ar" ? "← متابعة التسوق" : "← Continue shopping"}
                </Link>
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

function EmptyCartFull() {
  const { locale } = useLanguage();

  return (
    <div className="text-center py-20 max-w-md mx-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8"
      >
        <ShoppingBag size={48} className="text-gray-400" />
      </motion.div>
      <h2 className="font-display text-3xl font-bold mb-3">
        {locale === "ar" ? "سلتك فارغة" : "Your cart is empty"}
      </h2>
      <p className="text-gray-500 mb-8">
        {locale === "ar"
          ? "اكتشف منتجاتنا الراقية وأضف ما يعجبك إلى السلة"
          : "Discover our premium products and add what you love"}
      </p>
      <Link
        href="/products"
        className="inline-block bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-link transition-colors"
      >
        {locale === "ar" ? "تصفح المنتجات" : "Browse Products"}
      </Link>
    </div>
  );
}