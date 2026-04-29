"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LogOut, User as UserIcon, Package, Heart, Settings } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { useAuth } from "@/store/authStore";
import { useLanguage } from "@/store/languageStore";

export default function AccountPage() {
  const { locale } = useLanguage();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth/login");
  }, [isAuthenticated, router]);

  if (!user) return null;

  const sections = [
    { href: "/account/orders", icon: Package, label: locale === "ar" ? "طلباتي" : "My Orders" },
    { href: "/wishlist", icon: Heart, label: locale === "ar" ? "المفضلة" : "Wishlist" },
    { href: "/account/settings", icon: Settings, label: locale === "ar" ? "الإعدادات" : "Settings" },
    ...(user.role === "admin" ? [{ href: "/admin", icon: UserIcon, label: locale === "ar" ? "لوحة الإدارة" : "Admin" }] : []),
  ];

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple max-w-3xl">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold">{user.name}</h1>
                <p className="text-gray-500 text-sm">{user.email}</p>
                {user.role === "admin" && (
                  <span className="inline-block mt-1 bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full">
                    Admin
                  </span>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {sections.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-3 p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <s.icon size={18} className="text-primary" />
                  <span className="font-medium">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="w-full bg-white border border-red-200 text-red-600 py-3.5 rounded-full font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
          >
            <LogOut size={16} />
            {locale === "ar" ? "تسجيل الخروج" : "Sign out"}
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}