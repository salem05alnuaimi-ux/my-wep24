import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا | YEZHABK يزهابك",
  description: "تواصل مع فريق يزهابك عبر واتساب أو البريد الإلكتروني. نحن هنا للمساعدة.",
  alternates: { canonical: "https://yezhabk.om/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
