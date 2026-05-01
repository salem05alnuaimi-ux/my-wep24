"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Truck,
} from "lucide-react";
import { useAuth } from "@/store/authStore";

interface RecentOrder {
  _id: string;
  total: number;
  status: string;
  createdAt: string;
  shippingAddress?: { name?: string; city?: string };
}

interface Stats {
  totalRevenue: number;
  totalOrders: number;
  productCount: number;
  pendingOrders: number;
  recentOrders: RecentOrder[];
}

const statusConfig: Record<string, { label: string; icon: React.ElementType; color: string; bg: string }> = {
  pending:    { label: "Pending",    icon: Clock,         color: "text-amber-600",  bg: "bg-amber-50" },
  processing: { label: "Processing", icon: AlertCircle,   color: "text-blue-600",   bg: "bg-blue-50" },
  shipped:    { label: "Shipped",    icon: Truck,         color: "text-purple-600", bg: "bg-purple-50" },
  delivered:  { label: "Delivered",  icon: CheckCircle2,  color: "text-green-600",  bg: "bg-green-50" },
  cancelled:  { label: "Cancelled",  icon: AlertCircle,   color: "text-red-500",    bg: "bg-red-50" },
};

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  accent,
}: {
  label: string;
  value: string | number;
  sub?: string;
  icon: React.ElementType;
  accent: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${accent}`}>
          <Icon size={18} />
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-0.5">{value}</p>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 animate-pulse">
      <div className="w-10 h-10 rounded-xl bg-gray-100 mb-4" />
      <div className="h-7 bg-gray-100 rounded-lg w-3/4 mb-2" />
      <div className="h-4 bg-gray-100 rounded w-1/2" />
    </div>
  );
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
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [token]);

  const cards = stats
    ? [
        {
          label: "Total Revenue",
          value: `${stats.totalRevenue.toFixed(3)} OMR`,
          sub: "All time",
          icon: TrendingUp,
          accent: "bg-emerald-100 text-emerald-600",
        },
        {
          label: "Total Orders",
          value: stats.totalOrders,
          sub: `${stats.pendingOrders} pending`,
          icon: ShoppingBag,
          accent: "bg-blue-100 text-blue-600",
        },
        {
          label: "Products",
          value: stats.productCount,
          sub: "In catalog",
          icon: Package,
          accent: "bg-violet-100 text-violet-600",
        },
        {
          label: "Pending Orders",
          value: stats.pendingOrders,
          sub: "Awaiting action",
          icon: Clock,
          accent: "bg-amber-100 text-amber-600",
        },
      ]
    : [];

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {loading
          ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
          : cards.map((c) => <StatCard key={c.label} {...c} />)}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Orders</h2>
          <Link
            href="/admin/orders"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        {loading ? (
          <div className="divide-y divide-gray-50">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="px-6 py-4 flex justify-between animate-pulse">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-28" />
                  <div className="h-3 bg-gray-100 rounded w-20" />
                </div>
                <div className="h-6 bg-gray-100 rounded-full w-20" />
              </div>
            ))}
          </div>
        ) : !stats?.recentOrders?.length ? (
          <div className="px-6 py-12 text-center">
            <ShoppingBag size={32} className="mx-auto mb-3 text-gray-200" />
            <p className="text-sm text-gray-400">No orders yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {stats.recentOrders.map((o) => {
              const cfg = statusConfig[o.status] ?? statusConfig.pending;
              const StatusIcon = cfg.icon;
              return (
                <div key={o._id} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-sm font-medium text-gray-800">
                      #{o._id.slice(-8).toUpperCase()}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {o.shippingAddress?.name ?? "—"}
                      {o.shippingAddress?.city ? ` · ${o.shippingAddress.city}` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-sm font-semibold text-gray-800">
                      {(o.total ?? 0).toFixed(3)} OMR
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}
                    >
                      <StatusIcon size={11} />
                      {cfg.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
