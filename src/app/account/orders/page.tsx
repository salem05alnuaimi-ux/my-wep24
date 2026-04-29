"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Package } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useAuth } from "@/store/authStore";
import { useOrders } from "@/store/orderStore";
import { useLanguage } from "@/store/languageStore";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { getUserOrders } = useOrders();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth/login");
  }, [isAuthenticated, router]);

  if (!user) return null;
  const orders = getUserOrders(user.id);

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple max-w-4xl">
          <h1 className="font-display text-4xl font-bold mb-8">
            {locale === "ar" ? "طلباتي" : "My Orders"}
          </h1>

          {orders.length === 0 ? (
            <div className="text-center py-20">
              <Package size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-6">{locale === "ar" ? "ما عندك طلبات بعد" : "No orders yet"}</p>
              <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-full font-medium">
                {locale === "ar" ? "ابدأ التسوق" : "Start Shopping"}
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl border border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">{locale === "ar" ? "رقم الطلب" : "Order"}</p>
                      <p className="font-mono font-semibold">{order.id}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {new Date(order.createdAt).toLocaleDateString(locale === "ar" ? "ar-OM" : "en-US")}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {order.items.length} {locale === "ar" ? "منتج" : "items"}
                    </span>
                    <span className="font-bold text-lg">{order.total.toFixed(3)} {t.product.currency}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}