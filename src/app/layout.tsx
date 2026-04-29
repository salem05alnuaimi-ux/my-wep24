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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Cairo:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        <CartDrawer />
        <ToastContainer />
      </body>
    </html>
  );
}