"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/store/authStore";
import { useLanguage } from "@/store/languageStore";
import { useToast } from "@/components/ui/Toast";
import { loginSchema, LoginInput } from "@/lib/validations";

export default function LoginPage() {
  const { locale } = useLanguage();
  const router = useRouter();
  const { login } = useAuth();
  const { show } = useToast();
  const [serverError, setServerError] = useState("");

  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginInput) => {
    setServerError("");
    const result = await login(data.email, data.password);
    if (result.ok) {
      show(locale === "ar" ? "تم تسجيل الدخول بنجاح" : "Logged in successfully", "success");
      router.push("/account");
    } else {
      setServerError(result.error || "Login failed");
    }
  };

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen flex items-center">
        <div className="container-apple w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10"
          >
            <h1 className="font-display text-3xl font-bold text-center mb-2">
              {locale === "ar" ? "مرحباً بعودتك" : "Welcome back"}
            </h1>
            <p className="text-center text-gray-500 mb-8">
              {locale === "ar" ? "سجّل دخولك للمتابعة" : "Sign in to continue"}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label={locale === "ar" ? "البريد الإلكتروني" : "Email"}
                type="email"
                icon={<Mail size={16} />}
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                label={locale === "ar" ? "كلمة المرور" : "Password"}
                type="password"
                icon={<Lock size={16} />}
                error={errors.password?.message}
                {...register("password")}
              />

              {serverError && (
                <div className="bg-red-50 text-red-600 text-sm p-3 rounded-xl">
                  {serverError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3.5 rounded-full font-medium hover:bg-link transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting
                  ? locale === "ar" ? "جارٍ..." : "Loading..."
                  : (
                    <>
                      {locale === "ar" ? "تسجيل الدخول" : "Sign in"}
                      <Arrow size={16} />
                    </>
                  )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              {locale === "ar" ? "ما عندك حساب؟" : "Don't have an account?"}{" "}
              <Link href="/auth/register" className="text-primary font-medium hover:underline">
                {locale === "ar" ? "أنشئ حساب" : "Sign up"}
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}