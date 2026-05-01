export type Locale = "ar" | "en";

export interface BilingualText {
  ar: string;
  en: string;
}

export interface ProductVariant {
  id: string;
  name: BilingualText;
  type: "color" | "size" | "style";
  value: string; // hex color or size label
  image?: string;
  stock: number;
  priceModifier?: number; // +5 OMR for example
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: BilingualText;
  date: string; // ISO
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: BilingualText;
  description: BilingualText;
  shortDescription: BilingualText;
  price: number;
  originalPrice?: number;
  currency: "OMR";
  category: ProductCategory;
  images: string[];
  variants?: ProductVariant[];
  features: BilingualText[];
  specs?: { label: BilingualText; value: BilingualText }[];
  reviews: ProductReview[];
  rating: number; // calculated avg
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  tags: string[];
  createdAt: string;
}

export type ProductCategory =
  | "shemagh"
  | "iqal"
  | "watches"
  | "pens"
  | "misbaha"
  | "caps"
  | "bracelet"
  | "ring"
  | "makeup"
  | "bags"
  | "boxes"
  | "perfumes"
  | "slippers"
  | "wallets";

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "bestseller";

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  search?: string;
}