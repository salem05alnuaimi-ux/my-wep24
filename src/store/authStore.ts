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

// Mock users (replaced with real API in Step 7)
const MOCK_USERS_KEY = "yezhabk-mock-users";

const getMockUsers = (): Array<User & { password: string }> => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(MOCK_USERS_KEY);
  if (stored) return JSON.parse(stored);
  // Seed with admin
  const seed = [
    {
      id: "admin-1",
      name: "Salem Admin",
      email: "admin@yezhabk.om",
      password: "admin123",
      role: "admin" as const,
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(seed));
  return seed;
};

const saveMockUsers = (users: Array<User & { password: string }>) => {
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email, password) => {
        set({ isLoading: true });
        await new Promise((r) => setTimeout(r, 600)); // simulate latency
        const users = getMockUsers();
        const user = users.find(
          (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );

        if (!user) {
          set({ isLoading: false });
          return { ok: false, error: "Invalid credentials" };
        }

        const { password: _, ...safeUser } = user;
        const token = `mock-token-${user.id}-${Date.now()}`;

        set({
          user: safeUser,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
        return { ok: true };
      },

      register: async (name, email, password, phone) => {
        set({ isLoading: true });
        await new Promise((r) => setTimeout(r, 600));
        const users = getMockUsers();

        if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
          set({ isLoading: false });
          return { ok: false, error: "Email already registered" };
        }

        const newUser = {
          id: `user-${Date.now()}`,
          name,
          email,
          phone,
          password,
          role: "customer" as const,
          createdAt: new Date().toISOString(),
        };

        users.push(newUser);
        saveMockUsers(users);

        const { password: _, ...safeUser } = newUser;
        const token = `mock-token-${newUser.id}-${Date.now()}`;

        set({
          user: safeUser,
          token,
          isAuthenticated: true,
          isLoading: false,
        });
        return { ok: true };
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