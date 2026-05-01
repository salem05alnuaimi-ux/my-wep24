"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  Truck,
  AlertCircle,
  Search,
  ChevronDown,
} from "lucide-react";
import { useAuth } from "@/store/authStore";

type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

interface DbOrder {
  _id: string;
  total: number;
  status: OrderStatus;
  createdAt: string;
  shippingAddress?: {
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
  };
  items?: { name?: string; quantity?: number; price?: number }[];
}

const statusConfig: Record<
  OrderStatus,
  { label: string; icon: React.ElementType; color: string; bg: string; border: string }
> = {
  pending:    { label: "Pending",    icon: Clock,        color: "text-amber-700",  bg: "bg-amber-50",   border: "border-amber-200" },
  processing: { label: "Processing", icon: AlertCircle,  color: "text-blue-700",   bg: "bg-blue-50",    border: "border-blue-200" },
  shipped:    { label: "Shipped",    icon: Truck,        color: "text-purple-700", bg: "bg-purple-50",  border: "border-purple-200" },
  delivered:  { label: "Delivered",  icon: CheckCircle2, color: "text-green-700",  bg: "bg-green-50",   border: "border-green-200" },
  cancelled:  { label: "Cancelled",  icon: AlertCircle,  color: "text-red-600",    bg: "bg-red-50",     border: "border-red-200" },
};

const ALL_STATUSES = Object.keys(statusConfig) as OrderStatus[];

export default function AdminOrdersPage() {
  const { token } = useAuth();
  const [orders, setOrders] = useState<DbOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<OrderStatus | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    if (!token) return;
    const res = await fetch("/api/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setOrders(data.orders ?? []);
    setLoading(false);
  }, [token]);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  const updateStatus = async (id: string, status: OrderStatus) => {
    setUpdating(id);
    setOrders((prev) => prev.map((o) => (o._id === id ? { ...o, status } : o)));
    await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    setUpdating(null);
  };

  const filtered = orders.filter((o) => {
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      o._id.toLowerCase().includes(q) ||
      o.shippingAddress?.name?.toLowerCase().includes(q) ||
      o.shippingAddress?.city?.toLowerCase().includes(q) ||
      o.shippingAddress?.phone?.includes(q);
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const counts = ALL_STATUSES.reduce(
    (acc, s) => ({ ...acc, [s]: orders.filter((o) => o.status === s).length }),
    {} as Record<OrderStatus, number>
  );

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
        <p className="text-sm text-gray-400 mt-0.5">{orders.length} total orders</p>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        <button
          onClick={() => setFilterStatus("all")}
          className={`shrink-0 px-3.5 py-1.5 rounded-xl text-sm font-medium transition-colors border ${
            filterStatus === "all"
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
          }`}
        >
          All ({orders.length})
        </button>
        {ALL_STATUSES.map((s) => {
          const cfg = statusConfig[s];
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-sm font-medium transition-colors border ${
                filterStatus === s
                  ? `${cfg.bg} ${cfg.color} ${cfg.border}`
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300"
              }`}
            >
              <cfg.icon size={13} />
              {cfg.label} ({counts[s]})
            </button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, city, phone, or order ID..."
          className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-colors"
        />
      </div>

      {/* Orders List */}
      <div className="space-y-3">
        {loading ? (
          [...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 animate-pulse">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-32" />
                  <div className="h-3 bg-gray-100 rounded w-24" />
                </div>
                <div className="h-8 bg-gray-100 rounded-xl w-28" />
              </div>
            </div>
          ))
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 py-16 flex flex-col items-center text-center">
            <ShoppingBag size={40} className="text-gray-200 mb-3" />
            <p className="text-sm font-medium text-gray-400">
              {search || filterStatus !== "all" ? "No orders match your filters" : "No orders yet"}
            </p>
          </div>
        ) : (
          filtered.map((o) => {
            const cfg = statusConfig[o.status] ?? statusConfig.pending;
            const StatusIcon = cfg.icon;
            const isExpanded = expanded === o._id;
            return (
              <div
                key={o._id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                {/* Row */}
                <div className="flex items-center gap-4 p-4">
                  {/* Status Icon */}
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${cfg.bg}`}>
                    <StatusIcon size={16} className={cfg.color} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-mono text-sm font-semibold text-gray-800">
                        #{o._id.slice(-8).toUpperCase()}
                      </p>
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                        {cfg.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {o.shippingAddress?.name ?? "—"}
                      {o.shippingAddress?.city ? ` · ${o.shippingAddress.city}` : ""}
                    </p>
                  </div>

                  {/* Date + Amount */}
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-gray-900">{(o.total ?? 0).toFixed(3)} OMR</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {new Date(o.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Status Select */}
                  <div className="relative">
                    <select
                      value={o.status}
                      disabled={updating === o._id}
                      onChange={(e) => updateStatus(o._id, e.target.value as OrderStatus)}
                      className={`appearance-none text-xs font-medium pl-3 pr-7 py-2 rounded-xl border cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors disabled:opacity-50 ${cfg.bg} ${cfg.color} ${cfg.border}`}
                    >
                      {ALL_STATUSES.map((s) => (
                        <option key={s} value={s}>
                          {statusConfig[s].label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={12} className={`absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none ${cfg.color}`} />
                  </div>

                  {/* Expand */}
                  <button
                    onClick={() => setExpanded(isExpanded ? null : o._id)}
                    className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-4 py-4 bg-gray-50/50">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Shipping */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Shipping Address
                        </p>
                        <div className="text-sm text-gray-700 space-y-1">
                          <p className="font-medium">{o.shippingAddress?.name ?? "—"}</p>
                          {o.shippingAddress?.phone && <p>{o.shippingAddress.phone}</p>}
                          {o.shippingAddress?.address && <p>{o.shippingAddress.address}</p>}
                          {o.shippingAddress?.city && <p>{o.shippingAddress.city}</p>}
                        </div>
                      </div>

                      {/* Order Info */}
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                          Order Info
                        </p>
                        <div className="text-sm text-gray-700 space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Order ID</span>
                            <span className="font-mono text-xs">{o._id}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Date</span>
                            <span>{new Date(o.createdAt).toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between font-semibold pt-1 border-t border-gray-200 mt-2">
                            <span>Total</span>
                            <span>{(o.total ?? 0).toFixed(3)} OMR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
