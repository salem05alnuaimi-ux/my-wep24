import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "@/components/ui/Toast";
import CartDrawer from "@/components/cart/CartDrawer";

export const metadata: Metadata = {
  title: "YEZHABK | يزهابك - ثقة تُبنى وتميّز يُحترم",
  description: "Premium shemagh, watches, pens, and accessories. Order from Oman & UAE.",
  keywords: ["yezhabk", "يزهابك", "shemagh", "شماغ", "oman", "luxury"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="antialiased">
        {children}
        <CartDrawer />
        <ToastContainer />
      </body>
    </html>
  );
}