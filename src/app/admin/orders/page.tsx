"use client";

import { useState, useEffect, useCallback } from "react";
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
}

const statusColors: Record<OrderStatus, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminOrdersPage() {
  const { token } = useAuth();
  const [orders, setOrders] = useState<DbOrder[]>([]);
  const [loading, setLoading] = useState(true);

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
    setOrders((prev) => prev.map((o) => (o._id === id ? { ...o, status } : o)));
    await fetch(`/api/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
  };

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Orders</h1>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
        {loading ? (
          <p className="text-center py-12 text-gray-400">Loading...</p>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
              <tr>
                <th className="text-start p-4">Order</th>
                <th className="text-start p-4">Customer</th>
                <th className="text-start p-4">Date</th>
                <th className="text-start p-4">Total</th>
                <th className="text-start p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id} className="border-t border-gray-100">
                  <td className="p-4 font-mono text-xs">{o._id.slice(-8).toUpperCase()}</td>
                  <td className="p-4 text-sm">
                    <p className="font-medium">{o.shippingAddress?.name ?? "—"}</p>
                    <p className="text-xs text-gray-500">{o.shippingAddress?.city ?? ""}</p>
                  </td>
                  <td className="p-4 text-sm">{new Date(o.createdAt).toLocaleDateString()}</td>
                  <td className="p-4 text-sm font-medium">{(o.total ?? 0).toFixed(3)} OMR</td>
                  <td className="p-4">
                    <select
                      value={o.status}
                      onChange={(e) => updateStatus(o._id, e.target.value as OrderStatus)}
                      className={`text-xs px-2 py-1 rounded-full border-0 font-medium cursor-pointer ${statusColors[o.status]}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!loading && orders.length === 0 && (
          <p className="text-center py-12 text-gray-500">No orders yet</p>
        )}
      </div>
    </div>
  );
}
