import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "شروط الاستخدام | YEZHABK",
  description: "شروط وأحكام استخدام متجر يزهابك — الطلبات، التوصيل، المسؤولية، والملكية الفكرية.",
  alternates: { canonical: "https://yezhabk.om/terms" },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
