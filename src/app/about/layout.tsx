import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن المتجر | YEZHABK يزهابك",
  description: "يزهابك — متجر عُماني متخصص في منتجات الرجل الراقي: شماغ، ساعات، أقلام، مسابيح. ثقة تُبنى وتميّز يُحترم.",
  openGraph: {
    title: "عن يزهابك | YEZHABK",
    description: "ثقة تُبنى وتميّز يُحترم — قصة متجر يزهابك العُماني للمنتجات الراقية.",
    url: "https://yezhabk.om/about",
    siteName: "YEZHABK",
    locale: "ar_OM",
  },
  alternates: { canonical: "https://yezhabk.om/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
