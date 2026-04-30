"use client";

import { useState, useEffect } from "react";
import { Package, ShoppingBag, Users, TrendingUp } from "lucide-react";
import { useAuth } from "@/store/authStore";

interface RecentOrder {
  _id: string;
  total: number;
  status: string;
  shippingAddress?: { name?: string };
}

interface Stats {
  totalRevenue: number;
  totalOrders: number;
  productCount: number;
  pendingOrders: number;
  recentOrders: RecentOrder[];
}

export default function AdminDashboard() {
  const { token } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    fetch("/api/admin/stats", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => setStats(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  const cards = stats
    ? [
        { label: "Total Revenue", value: `${stats.totalRevenue.toFixed(3)} OMR`, icon: TrendingUp, color: "bg-green-100 text-green-600" },
        { label: "Total Orders", value: stats.totalOrders, icon: ShoppingBag, color: "bg-blue-100 text-blue-600" },
        { label: "Products", value: stats.productCount, icon: Package, color: "bg-purple-100 text-purple-600" },
        { label: "Pending", value: stats.pendingOrders, icon: Users, color: "bg-yellow-100 text-yellow-600" },
      ]
    : [];

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Dashboard</h1>

      {loading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 animate-pulse">
              <div className="w-10 h-10 rounded-xl bg-gray-100 mb-3" />
              <div className="h-7 bg-gray-100 rounded w-2/3 mb-2" />
              <div className="h-4 bg-gray-100 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {cards.map((s) => (
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
            {!stats?.recentOrders?.length ? (
              <p className="text-center py-6 text-gray-400">No orders yet</p>
            ) : (
              stats.recentOrders.map((o) => (
                <div key={o._id} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-mono text-sm">{o._id.slice(-10).toUpperCase()}</p>
                    <p className="text-xs text-gray-500">{o.shippingAddress?.name ?? "—"}</p>
                  </div>
                  <div className="text-end">
                    <p className="font-semibold">{(o.total ?? 0).toFixed(3)} OMR</p>
                    <p className="text-xs text-gray-500 capitalize">{o.status}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
