"use client";

import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { useOrders } from "@/store/orderStore";
import { products } from "@/data/products";

export default function AdminDashboard() {
  const { orders } = useOrders();
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingOrders = orders.filter((o) => o.status === "pending").length;

  const stats = [
    { label: "Total Revenue", value: `${totalRevenue.toFixed(3)} OMR`, icon: TrendingUp, color: "bg-green-100 text-green-600" },
    { label: "Total Orders", value: orders.length, icon: ShoppingBag, color: "bg-blue-100 text-blue-600" },
    { label: "Products", value: products.length, icon: Package, color: "bg-purple-100 text-purple-600" },
    { label: "Pending", value: pendingOrders, icon: Users, color: "bg-yellow-100 text-yellow-600" },
  ];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${s.color}`}>
              <s.icon size={18} />
            </div>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <h2 className="font-semibold mb-4">Recent Orders</h2>
        {orders.slice(0, 5).map((o) => (
          <div key={o.id} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-mono text-sm">{o.id}</p>
              <p className="text-xs text-gray-500">{o.shipping.fullName}</p>
            </div>
            <div className="text-end">
              <p className="font-semibold">{o.total.toFixed(3)} OMR</p>
              <p className="text-xs text-gray-500 capitalize">{o.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}