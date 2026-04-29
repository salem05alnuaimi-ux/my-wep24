import { create } from "zustand";
import { persist } from "zustand/middleware";
import ar from "@/i18n/ar.json";
import en from "@/i18n/en.json";

type Locale = "ar" | "en";
type Translations = typeof ar;

interface LanguageStore {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      locale: "ar",
      t: ar,
      setLocale: (locale) => {
        const translations = locale === "ar" ? ar : en;
        if (typeof document !== "undefined") {
          document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
          document.documentElement.lang = locale;
        }
        set({ locale, t: translations });
      },
    }),
    {
      name: "yezhabk-language",
      onRehydrateStorage: () => (state) => {
        if (state && typeof document !== "undefined") {
          document.documentElement.dir = state.locale === "ar" ? "rtl" : "ltr";
          document.documentElement.lang = state.locale;
        }
      },
    }
  )
);