import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "@/components/ui/Toast";
import CartDrawer from "@/components/cart/CartDrawer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next";

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
        {/* Custom fonts — place files in /public/fonts/ */}
        <style>{`
          @font-face {
            font-family: "HacenNewspaper";
            src: url("/fonts/HacenNewspaper.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Dima";
            src: url("/fonts/Dima.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "Palestine";
            src: url("/fonts/Palestine-Regular.ttf") format("truetype");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: "LyonArabicDisplay";
            src: url("/fonts/LyonArabicDisplay-Light.otf") format("opentype");
            font-weight: 300; font-display: swap;
          }
          @font-face {
            font-family: "LyonArabicDisplay";
            src: url("/fonts/LyonArabicDisplay-Regular.otf") format("opentype");
            font-weight: 400; font-display: swap;
          }
          @font-face {
            font-family: "LyonArabicDisplay";
            src: url("/fonts/LyonArabicDisplay-Bold.otf") format("opentype");
            font-weight: 700; font-display: swap;
          }
        `}</style>
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <CartDrawer />
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}