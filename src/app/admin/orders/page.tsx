"use client";

import { useOrders, OrderStatus } from "@/store/orderStore";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
  shipped: "bg-purple-100 text-purple-700",
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AdminOrdersPage() {
  const { orders, updateStatus } = useOrders();

  return (
    <div>
      <h1 className="font-display text-3xl font-bold mb-8">Orders</h1>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-x-auto">
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
              <tr key={o.id} className="border-t border-gray-100">
                <td className="p-4 font-mono text-xs">{o.id}</td>
                <td className="p-4 text-sm">
                  <p className="font-medium">{o.shipping.fullName}</p>
                  <p className="text-xs text-gray-500">{o.shipping.email}</p>
                </td>
                <td className="p-4 text-sm">{new Date(o.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-sm font-medium">{o.total.toFixed(3)} OMR</td>
                <td className="p-4">
                  <select
                    value={o.status}
                    onChange={(e) => updateStatus(o.id, e.target.value as OrderStatus)}
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
        {orders.length === 0 && <p className="text-center py-12 text-gray-500">No orders yet</p>}
      </div>
    </div>
  );
}