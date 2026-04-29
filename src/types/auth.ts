export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "customer" | "admin";
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}