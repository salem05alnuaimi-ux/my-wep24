import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنتجات | YEZHABK يزهابك",
  description: "تسوق شماغ، عُقُل، ساعات، أقلام، مسابيح، وإكسسوارات راقية من متجر يزهابك. توصيل لعُمان والإمارات.",
  openGraph: {
    title: "منتجات يزهابك | YEZHABK",
    description: "مجموعة منتجات راقية مختارة بعناية للرجل العربي — شماغ، ساعات، أقلام وأكثر.",
    url: "https://yezhabk.om/products",
    siteName: "YEZHABK",
    locale: "ar_OM",
  },
  alternates: { canonical: "https://yezhabk.om/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
