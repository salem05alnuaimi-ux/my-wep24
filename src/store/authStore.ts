import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "@/types/auth";

interface AuthStore {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => void;
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });
        try {
          const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          if (!res.ok) {
            set({ isLoading: false });
            return { ok: false, error: data.error ?? "Login failed" };
          }
          set({ user: data.user, token: data.token, isAuthenticated: true, isLoading: false });
          return { ok: true };
        } catch {
          set({ isLoading: false });
          return { ok: false, error: "Network error" };
        }
      },

      register: async (name, email, password, phone) => {
        set({ isLoading: true });
        try {
          const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, phone }),
          });
          const data = await res.json();
          if (!res.ok) {
            set({ isLoading: false });
            return { ok: false, error: data.error ?? "Registration failed" };
          }
          set({ user: data.user, token: data.token, isAuthenticated: true, isLoading: false });
          return { ok: true };
        } catch {
          set({ isLoading: false });
          return { ok: false, error: "Network error" };
        }
      },

      logout: () => set({ user: null, token: null, isAuthenticated: false }),

      updateProfile: (data) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        })),
    }),
    {
      name: "yezhabk-auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
