import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | YEZHABK",
  description: "سياسة الخصوصية لمتجر يزهابك — كيف نجمع بياناتك ونحميها ونستخدمها.",
  alternates: { canonical: "https://yezhabk.om/privacy" },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
