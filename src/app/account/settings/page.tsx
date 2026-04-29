"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/store/authStore";
import { useLanguage } from "@/store/languageStore";
import { useToast } from "@/components/ui/Toast";

const settingsSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional(),
});

type SettingsInput = z.infer<typeof settingsSchema>;

export default function SettingsPage() {
  const { locale } = useLanguage();
  const router = useRouter();
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { show } = useToast();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth/login");
  }, [isAuthenticated, router]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SettingsInput>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: user?.name ?? "",
      phone: user?.phone ?? "",
    },
  });

  const onSubmit = (data: SettingsInput) => {
    updateProfile(data);
    show(
      locale === "ar" ? "تم حفظ التغييرات ✓" : "Changes saved ✓",
      "success"
    );
  };

  if (!user) return null;

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container-apple max-w-lg">
          <Link
            href="/account"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft size={14} />
            {locale === "ar" ? "العودة للحساب" : "Back to Account"}
          </Link>

          <h1 className="font-display text-3xl font-bold mb-8">
            {locale === "ar" ? "الإعدادات" : "Settings"}
          </h1>

          <div className="bg-white rounded-3xl border border-gray-100 p-8">
            <h2 className="font-semibold mb-5">
              {locale === "ar" ? "معلوماتي الشخصية" : "Personal Information"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Input
                label={locale === "ar" ? "الاسم الكامل" : "Full Name"}
                error={errors.name?.message}
                {...register("name")}
              />
              <div>
                <label className="block text-sm font-medium mb-1.5 text-gray-700">
                  {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                </label>
                <input
                  value={user.email}
                  disabled
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-500 cursor-not-allowed"
                />
                <p className="text-xs text-gray-400 mt-1">
                  {locale === "ar"
                    ? "البريد الإلكتروني لا يمكن تغييره"
                    : "Email cannot be changed"}
                </p>
              </div>
              <Input
                label={locale === "ar" ? "رقم الجوال" : "Phone Number"}
                type="tel"
                {...register("phone")}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3.5 rounded-full font-medium hover:bg-link transition-colors disabled:opacity-50"
              >
                {locale === "ar" ? "حفظ التغييرات" : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
