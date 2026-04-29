"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Mail, Lock, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/store/authStore";
import { useLanguage } from "@/store/languageStore";
import { useToast } from "@/components/ui/Toast";
import { registerSchema, RegisterInput } from "@/lib/validations";

export default function RegisterPage() {
  const { locale } = useLanguage();
  const router = useRouter();
  const { register: registerUser } = useAuth();
  const { show } = useToast();
  const [serverError, setServerError] = useState("");

  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (data: RegisterInput) => {
    setServerError("");
    const result = await registerUser(data.name, data.email, data.password, data.phone);
    if (result.ok) {
      show(locale === "ar" ? "تم إنشاء الحساب 🎉" : "Account created 🎉", "success");
      router.push("/account");
    } else {
      setServerError(result.error || "Registration failed");
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
              {locale === "ar" ? "إنشاء حساب" : "Create account"}
            </h1>
            <p className="text-center text-gray-500 mb-8">
              {locale === "ar" ? "انضم إلى عائلة يزهابك" : "Join the YEZHABK family"}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label={locale === "ar" ? "الاسم" : "Name"}
                icon={<User size={16} />}
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label={locale === "ar" ? "البريد الإلكتروني" : "Email"}
                type="email"
                icon={<Mail size={16} />}
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                label={locale === "ar" ? "الجوال (اختياري)" : "Phone (optional)"}
                type="tel"
                icon={<Phone size={16} />}
                error={errors.phone?.message}
                {...register("phone")}
              />
              <Input
                label={locale === "ar" ? "كلمة المرور" : "Password"}
                type="password"
                icon={<Lock size={16} />}
                error={errors.password?.message}
                {...register("password")}
              />
              <Input
                label={locale === "ar" ? "تأكيد كلمة المرور" : "Confirm password"}
                type="password"
                icon={<Lock size={16} />}
                error={errors.confirmPassword?.message}
                {...register("confirmPassword")}
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
                      {locale === "ar" ? "إنشاء الحساب" : "Create account"}
                      <Arrow size={16} />
                    </>
                  )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              {locale === "ar" ? "عندك حساب؟" : "Already have an account?"}{" "}
              <Link href="/auth/login" className="text-primary font-medium hover:underline">
                {locale === "ar" ? "سجّل دخول" : "Sign in"}
              </Link>
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}