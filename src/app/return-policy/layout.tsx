import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "سياسة الإرجاع | YEZHABK",
  description: "سياسة إرجاع واسترداد متجر يزهابك — ٧ أيام إرجاع، خطوات سهلة، استرداد سريع.",
  alternates: { canonical: "https://yezhabk.om/return-policy" },
};

export default function ReturnPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
