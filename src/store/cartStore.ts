import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product, ProductVariant } from "@/types";

export interface CartItem {
  id: string; // unique key: productId + variantId
  productId: string;
  variantId?: string;
  name: { ar: string; en: string };
  price: number;
  image: string;
  quantity: number;
  variantName?: { ar: string; en: string };
  maxStock: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (product: Product, variant?: ProductVariant, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Computed (called as functions)
  getTotalItems: () => number;
  getSubtotal: () => number;
  getShipping: () => number;
  getTotal: () => number;
}

const SHIPPING_THRESHOLD = 50; // Free shipping over 50 OMR
const SHIPPING_COST = 3; // 3 OMR

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, variant, quantity = 1) => {
        const id = variant ? `${product.id}-${variant.id}` : product.id;
        const finalPrice = product.price + (variant?.priceModifier || 0);
        const maxStock = variant?.stock ?? product.stockCount;

        set((state) => {
          const existing = state.items.find((item) => item.id === id);

          if (existing) {
            // Increase quantity (don't exceed stock)
            return {
              items: state.items.map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: Math.min(item.quantity + quantity, maxStock),
                    }
                  : item
              ),
              isOpen: true,
            };
          }

          return {
            items: [
              ...state.items,
              {
                id,
                productId: product.id,
                variantId: variant?.id,
                name: product.name,
                price: finalPrice,
                image: product.images[0],
                quantity,
                variantName: variant?.name,
                maxStock,
              },
            ],
            isOpen: true,
          };
        });
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.min(quantity, item.maxStock) }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

      getTotalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),

      getShipping: () => {
        const subtotal = get().getSubtotal();
        if (subtotal === 0) return 0;
        return subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
      },

      getTotal: () => get().getSubtotal() + get().getShipping(),
    }),
    {
      name: "yezhabk-cart",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }), // Don't persist isOpen
    }
  )
);