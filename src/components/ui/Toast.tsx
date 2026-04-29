"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, AlertCircle, Info } from "lucide-react";
import { create } from "zustand";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastStore {
  toasts: Toast[];
  show: (message: string, type?: ToastType) => void;
  dismiss: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  show: (message, type = "success") => {
    const id = Math.random().toString(36).slice(2);
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 3500);
  },
  dismiss: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));

export function ToastContainer() {
  const { toasts, dismiss } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const icons = {
    success: <CheckCircle2 size={18} className="text-green-600" />,
    error: <AlertCircle size={18} className="text-red-600" />,
    info: <Info size={18} className="text-primary" />,
  };

  return (
    <div className="fixed top-24 end-4 z-[100] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="pointer-events-auto bg-white shadow-lg rounded-2xl border border-gray-100 p-4 pe-12 min-w-[280px] max-w-sm flex items-start gap-3 relative"
          >
            {icons[toast.type]}
            <p className="text-sm text-text-primary leading-relaxed flex-1">
              {toast.message}
            </p>
            <button
              onClick={() => dismiss(toast.id)}
              className="absolute end-3 top-3 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Dismiss"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}