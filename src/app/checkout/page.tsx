"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Banknote, Truck, ShieldCheck, Lock } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { Input } from "@/components/ui/Input";
import { useCart } from "@/store/cartStore";
import { useAuth } from "@/store/authStore";
import { useOrders, PaymentMethod } from "@/store/orderStore";
import { useLanguage } from "@/store/languageStore";
import { useToast } from "@/components/ui/Toast";
import { shippingSchema, ShippingInput } from "@/lib/validations";

export default function CheckoutPage() {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const { items, getSubtotal, getShipping, getTotal, clearCart } = useCart();
  const { user, token } = useAuth();
  const { createOrder } = useOrders();
  const { show } = useToast();

  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingInput>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      fullName: user?.name,
      email: user?.email,
      phone: user?.phone,
      country: locale === "ar" ? "سلطنة عُمان" : "Oman",
    },
  });

  // Redirect if cart empty
  useEffect(() => {
    if (items.length === 0) router.push("/cart");
  }, [items, router]);

  const subtotal = getSubtotal();
  const shippingCost = getShipping();
  const total = getTotal();

  const onSubmit = async (shippingData: ShippingInput) => {
    if (payment === "paypal") {
      show(locale === "ar" ? "باي بال غير متاح حالياً، اختر طريقة أخرى" : "PayPal not available yet, please choose another method", "error");
      return;
    }

    setLoading(true);

    const order = createOrder({
      userId: user?.id,
      items,
      shipping: shippingData,
      payment,
      subtotal,
      shippingCost,
      total,
    });

    // Save order to database
    let dbOrderId = order.id;
    try {
      const dbRes = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          userId: user?.id,
          items: items.map((item) => ({
            productId: item.productId,
            name: item.name.ar || item.name.en,
            price: item.price,
            quantity: item.quantity,
            image: item.image,
          })),
          total,
          shippingAddress: {
            name: shippingData.fullName,
            phone: shippingData.phone,
            address: shippingData.address,
            city: shippingData.city,
          },
        }),
      });
      if (dbRes.ok) {
        const { order: saved } = await dbRes.json();
        dbOrderId = saved._id;
      }
    } catch {
      // Non-fatal: order still proceeds locally
    }

    if (payment === "card") {
      try {
        const res = await fetch("/api/checkout/stripe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items, orderId: dbOrderId, email: shippingData.email }),
        });
        if (!res.ok) throw new Error("Stripe session failed");
        const { url } = await res.json();
        window.location.href = url;
      } catch {
        show(locale === "ar" ? "خطأ في بوابة الدفع، حاول مرة أخرى" : "Payment gateway error, please try again", "error");
        setLoading(false);
      }
      return;
    }

    // COD flow
    clearCart();
    fetch("/api/notify/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order }),
    }).catch(() => {});
    show(locale === "ar" ? "تم إنشاء طلبك بنجاح! 🎉" : "Order placed successfully! 🎉", "success");
    router.push(`/checkout/success?order=${dbOrderId}`);
  };

  if (items.length === 0) return null;

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple">
          <h1 className="font-display text-4xl font-bold mb-8">
            {locale === "ar" ? "إتمام الطلب" : "Checkout"}
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <form onSubmit={handleSubmit(onSubmit)} className="lg:col-span-2 space-y-6">
              {/* Shipping */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <Truck size={20} className="text-primary" />
                  {locale === "ar" ? "عنوان الشحن" : "Shipping Address"}
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label={locale === "ar" ? "الاسم الكامل" : "Full Name"}
                    error={errors.fullName?.message}
                    {...register("fullName")}
                  />
                  <Input
                    label={locale === "ar" ? "البريد" : "Email"}
                    type="email"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <Input
                    label={locale === "ar" ? "الجوال" : "Phone"}
                    type="tel"
                    error={errors.phone?.message}
                    {...register("phone")}
                  />
                  <Input
                    label={locale === "ar" ? "الدولة" : "Country"}
                    error={errors.country?.message}
                    {...register("country")}
                  />
                  <Input
                    label={locale === "ar" ? "المدينة" : "City"}
                    error={errors.city?.message}
                    {...register("city")}
                  />
                  <Input
                    label={locale === "ar" ? "الرمز البريدي" : "Postal Code"}
                    {...register("postalCode")}
                  />
                  <div className="sm:col-span-2">
                    <Input
                      label={locale === "ar" ? "العنوان التفصيلي" : "Detailed Address"}
                      error={errors.address?.message}
                      {...register("address")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5">
                      {locale === "ar" ? "ملاحظات (اختياري)" : "Notes (optional)"}
                    </label>
                    <textarea
                      {...register("notes")}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                  <CreditCard size={20} className="text-primary" />
                  {locale === "ar" ? "طريقة الدفع" : "Payment Method"}
                </h2>

                <div className="space-y-3">
                  {[
                    { value: "cod" as const, icon: Banknote, label: locale === "ar" ? "الدفع عند الاستلام" : "Cash on Delivery", desc: locale === "ar" ? "ادفع نقداً عند توصيل الطلب" : "Pay in cash when you receive" },
                    { value: "card" as const, icon: CreditCard, label: locale === "ar" ? "بطاقة (Stripe)" : "Card (Stripe)", desc: locale === "ar" ? "Visa, Mastercard, Apple Pay" : "Visa, Mastercard, Apple Pay" },
                    { value: "paypal" as const, icon: CreditCard, label: locale === "ar" ? "PayPal (قريباً)" : "PayPal (Coming soon)", desc: locale === "ar" ? "ادفع بحسابك في باي بال" : "Pay with your PayPal account" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-start gap-3 p-4 border rounded-xl cursor-pointer transition-all ${
                        payment === method.value
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.value}
                        checked={payment === method.value}
                        onChange={() => setPayment(method.value)}
                        className="mt-1"
                      />
                      <method.icon size={20} className="mt-0.5 text-gray-600" />
                      <div className="flex-1">
                        <div className="font-medium">{method.label}</div>
                        <div className="text-sm text-gray-500">{method.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>

                <p className="text-xs text-gray-500 mt-4 flex items-center gap-1.5">
                  <Lock size={12} />
                  {locale === "ar"
                    ? "بوابة الدفع تفعّل مع Stripe في النشر النهائي"
                    : "Payment gateway activates with Stripe on final deployment"}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-4 rounded-full font-medium hover:bg-link transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <ShieldCheck size={18} />
                )}
                {payment === "card"
                  ? (locale === "ar" ? `الدفع ببطاقة Stripe ←` : `Pay with Card (Stripe) →`)
                  : (locale === "ar" ? `تأكيد الطلب (${total.toFixed(3)} ر.ع)` : `Place Order (${total.toFixed(3)} OMR)`)}
              </button>
            </form>

            {/* Summary sidebar */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-display text-lg font-bold mb-4">
                  {locale === "ar" ? "ملخص الطلب" : "Order Summary"}
                </h3>

                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                        <Image src={item.image} alt={item.name[locale]} fill sizes="56px" className="object-cover" />
                        <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-1">{item.name[locale]}</p>
                        <p className="text-xs text-gray-500">{(item.price * item.quantity).toFixed(3)} {t.product.currency}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 py-4 border-y border-gray-100 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">{locale === "ar" ? "المجموع الفرعي" : "Subtotal"}</span><span>{subtotal.toFixed(3)}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">{locale === "ar" ? "الشحن" : "Shipping"}</span><span>{shippingCost === 0 ? (locale === "ar" ? "مجاني" : "Free") : shippingCost.toFixed(3)}</span></div>
                </div>

                <div className="flex justify-between pt-4">
                  <span className="font-semibold">{locale === "ar" ? "الإجمالي" : "Total"}</span>
                  <span className="font-bold text-xl">{total.toFixed(3)} {t.product.currency}</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}