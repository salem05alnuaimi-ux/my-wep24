import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "./cartStore";

export interface ShippingAddress {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  postalCode?: string;
  notes?: string;
}

export type PaymentMethod = "card" | "paypal" | "cod";
export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled";

export interface Order {
  id: string;
  userId?: string;
  items: CartItem[];
  shipping: ShippingAddress;
  payment: PaymentMethod;
  subtotal: number;
  shippingCost: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

interface OrderStore {
  orders: Order[];
  createOrder: (data: Omit<Order, "id" | "createdAt" | "status">) => Order;
  updateStatus: (id: string, status: OrderStatus) => void;
  getUserOrders: (userId?: string) => Order[];
}

export const useOrders = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      createOrder: (data) => {
        const order: Order = {
          ...data,
          id: `ORD-${Date.now().toString(36).toUpperCase()}`,
          status: "pending",
          createdAt: new Date().toISOString(),
        };
        set((state) => ({ orders: [order, ...state.orders] }));
        return order;
      },
      updateStatus: (id, status) =>
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, status } : o)),
        })),
      getUserOrders: (userId) => {
        if (!userId) return [];
        return get().orders.filter((o) => o.userId === userId);
      },
    }),
    {
      name: "yezhabk-orders",
      storage: createJSONStorage(() => localStorage),
    }
  )
);