import { Product } from "@/types";

export const products: Product[] = [
  // ========== SHEMAGH ==========
  {
    id: "p001",
    slug: "classic-shemagh-white",
    name: { ar: "شماغ كلاسيكي أبيض", en: "Classic White Shemagh" },
    description: {
      ar: "شماغ كلاسيكي بنسيج قطني فاخر، مصنوع من أجود أنواع القطن المصري. مثالي للمناسبات الرسمية والاستخدام اليومي. يتميز بنعومة فائقة ومتانة عالية.",
      en: "A classic shemagh crafted from premium Egyptian cotton. Perfect for formal occasions and daily wear. Exceptionally soft with superior durability.",
    },
    shortDescription: {
      ar: "قطن مصري فاخر · نعومة فائقة",
      en: "Premium Egyptian cotton · Exceptionally soft",
    },
    price: 25.0,
    currency: "OMR",
    category: "shemagh",
    images: [
      "/images/products/shemagh-white-1.jpg",
      "/images/products/shemagh-white-2.jpg",
      "/images/products/shemagh-white-3.jpg",
    ],
    variants: [
      {
        id: "v001",
        name: { ar: "أبيض", en: "White" },
        type: "color",
        value: "#FFFFFF",
        stock: 15,
      },
      {
        id: "v002",
        name: { ar: "بيج", en: "Beige" },
        type: "color",
        value: "#E8DCC4",
        stock: 8,
      },
    ],
    features: [
      { ar: "قطن مصري ١٠٠٪", en: "100% Egyptian cotton" },
      { ar: "مقاس قياسي ١٢٠×١٢٠ سم", en: "Standard 120×120 cm" },
      { ar: "قابل للغسيل في الغسالة", en: "Machine washable" },
      { ar: "تغليف هدية مجاني", en: "Free gift packaging" },
    ],
    specs: [
      {
        label: { ar: "المادة", en: "Material" },
        value: { ar: "قطن ١٠٠٪", en: "100% Cotton" },
      },
      {
        label: { ar: "المقاس", en: "Size" },
        value: { ar: "١٢٠×١٢٠ سم", en: "120×120 cm" },
      },
      {
        label: { ar: "بلد المنشأ", en: "Origin" },
        value: { ar: "مصر", en: "Egypt" },
      },
    ],
    reviews: [
      {
        id: "r001",
        userName: "Ahmed Al-Balushi",
        rating: 5,
        comment: {
          ar: "جودة ممتازة، النعومة فوق المتوقع. التغليف راقي جداً.",
          en: "Excellent quality, softer than expected. Premium packaging.",
        },
        date: "2026-04-10T10:00:00Z",
        verified: true,
      },
      {
        id: "r002",
        userName: "خالد الكندي",
        rating: 5,
        comment: {
          ar: "ثاني مرة أطلب منهم، الخدمة سريعة والمنتج أصلي.",
          en: "Second order, fast service and authentic product.",
        },
        date: "2026-04-15T14:30:00Z",
        verified: true,
      },
    ],
    rating: 5.0,
    reviewCount: 2,
    inStock: true,
    stockCount: 23,
    isNew: true,
    isBestseller: true,
    tags: ["shemagh", "white", "classic", "cotton"],
    createdAt: "2026-04-01T00:00:00Z",
  },

  // ========== WATCHES ==========
  {
    id: "p002",
    slug: "casio-titanium-tiffany",
    name: { ar: "ساعة كاسيو تيفاني", en: "Casio Tiffany Edition" },
    description: {
      ar: "ساعة كاسيو بإصدار خاص بلون التيفاني المميز. تصميم مربع عصري، حركة كوارتز دقيقة، وسوار من الستانلس ستيل عالي الجودة.",
      en: "Casio in exclusive Tiffany blue. Modern square design, precise quartz movement, and high-grade stainless steel bracelet.",
    },
    shortDescription: {
      ar: "إصدار محدود · لون تيفاني",
      en: "Limited edition · Tiffany blue",
    },
    price: 45.0,
    originalPrice: 55.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-tiffany-1.jpg",
      "/images/products/watch-tiffany-2.jpg",
    ],
    variants: [
      {
        id: "v003",
        name: { ar: "تيفاني", en: "Tiffany" },
        type: "color",
        value: "#0ABAB5",
        stock: 5,
      },
      {
        id: "v004",
        name: { ar: "كحلي", en: "Navy" },
        type: "color",
        value: "#1B2951",
        stock: 7,
      },
      {
        id: "v005",
        name: { ar: "تيتانيوم", en: "Titanium" },
        type: "color",
        value: "#878681",
        stock: 4,
      },
      {
        id: "v006",
        name: { ar: "خشبي", en: "Wood" },
        type: "color",
        value: "#8B6F47",
        stock: 3,
      },
    ],
    features: [
      { ar: "حركة كوارتز يابانية", en: "Japanese quartz movement" },
      { ar: "مقاومة للماء حتى ٣٠ متر", en: "30M water resistant" },
      { ar: "زجاج معدني مقاوم للخدش", en: "Mineral scratch-resistant glass" },
      { ar: "ضمان سنتين", en: "2-year warranty" },
    ],
    specs: [
      {
        label: { ar: "الحركة", en: "Movement" },
        value: { ar: "كوارتز", en: "Quartz" },
      },
      {
        label: { ar: "قطر العلبة", en: "Case size" },
        value: { ar: "٤١ مم", en: "41mm" },
      },
      {
        label: { ar: "السوار", en: "Bracelet" },
        value: { ar: "ستانلس ستيل", en: "Stainless steel" },
      },
    ],
    reviews: [
      {
        id: "r003",
        userName: "Salem M.",
        rating: 5,
        comment: {
          ar: "اللون التيفاني أحلى بالواقع من الصورة، شكله راقي.",
          en: "Tiffany color is even better in person. Looks premium.",
        },
        date: "2026-04-20T09:00:00Z",
        verified: true,
      },
    ],
    rating: 5.0,
    reviewCount: 1,
    inStock: true,
    stockCount: 19,
    isBestseller: true,
    tags: ["watch", "casio", "tiffany"],
    createdAt: "2026-03-15T00:00:00Z",
  },

  // ========== PENS ==========
  {
    id: "p003",
    slug: "cartier-pen-silver",
    name: { ar: "قلم كارتييه فضي", en: "Cartier Pen Silver" },
    description: {
      ar: "قلم كارتييه فضي بتصميم أيقوني، يأتي في علبة هدية فاخرة. هدية مثالية للمناسبات الخاصة وكبار الشخصيات.",
      en: "Iconic silver Cartier pen in luxury gift box. Perfect gift for special occasions and VIPs.",
    },
    shortDescription: {
      ar: "تصميم أيقوني · علبة فاخرة",
      en: "Iconic design · Luxury box",
    },
    price: 80.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/pen-cartier-1.jpg",
      "/images/products/pen-cartier-2.jpg",
    ],
    features: [
      { ar: "تصميم Cartier أصلي", en: "Authentic Cartier design" },
      { ar: "علبة هدية فاخرة", en: "Luxury gift box" },
      { ar: "كتابة ناعمة وسلسة", en: "Smooth writing experience" },
    ],
    specs: [
      {
        label: { ar: "اللون", en: "Color" },
        value: { ar: "فضي", en: "Silver" },
      },
      {
        label: { ar: "النوع", en: "Type" },
        value: { ar: "قلم حبر", en: "Ballpoint" },
      },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 6,
    tags: ["pen", "cartier", "luxury", "gift"],
    createdAt: "2026-04-05T00:00:00Z",
  },

  // ========== MISBAHA ==========
  {
    id: "p004",
    slug: "blue-misbaha",
    name: { ar: "مسبحة زرقاء كريستال", en: "Blue Crystal Misbaha" },
    description: {
      ar: "مسبحة بحبات كريستال زرقاء فاخرة، ٣٣ حبة، تأتي مع علاقة فضية مزخرفة.",
      en: "Premium blue crystal misbaha with 33 beads and decorative silver pendant.",
    },
    shortDescription: {
      ar: "كريستال فاخر · ٣٣ حبة",
      en: "Premium crystal · 33 beads",
    },
    price: 18.0,
    currency: "OMR",
    category: "misbaha",
    images: ["/images/products/misbaha-blue-1.jpg"],
    variants: [
      {
        id: "v007",
        name: { ar: "أزرق", en: "Blue" },
        type: "color",
        value: "#1E40AF",
        stock: 10,
      },
      {
        id: "v008",
        name: { ar: "أخضر", en: "Green" },
        type: "color",
        value: "#15803D",
        stock: 6,
      },
      {
        id: "v009",
        name: { ar: "أحمر", en: "Red" },
        type: "color",
        value: "#B91C1C",
        stock: 4,
      },
    ],
    features: [
      { ar: "كريستال طبيعي", en: "Natural crystal" },
      { ar: "علاقة فضة ٩٢٥", en: "925 silver pendant" },
      { ar: "٣٣ حبة", en: "33 beads" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNew: true,
    tags: ["misbaha", "crystal", "blue"],
    createdAt: "2026-04-18T00:00:00Z",
  },

  // ========== CAPS ==========
  {
    id: "p005",
    slug: "loro-piana-cap-olive",
    name: { ar: "كاب Loro Piana زيتي", en: "Loro Piana Cap Olive" },
    description: {
      ar: "كاب Loro Piana بلون زيتي راقي، مصنوع من قماش عالي الجودة بشعار مطرز.",
      en: "Premium Loro Piana cap in olive green, made from high-quality fabric with embroidered logo.",
    },
    shortDescription: {
      ar: "Loro Piana · شعار مطرز",
      en: "Loro Piana · Embroidered logo",
    },
    price: 35.0,
    currency: "OMR",
    category: "caps",
    images: ["/images/products/cap-loro-olive-1.jpg"],
    variants: [
      {
        id: "v010",
        name: { ar: "زيتي", en: "Olive" },
        type: "color",
        value: "#556B2F",
        stock: 5,
      },
      {
        id: "v011",
        name: { ar: "كريمي", en: "Cream" },
        type: "color",
        value: "#F5F5DC",
        stock: 3,
      },
      {
        id: "v012",
        name: { ar: "تركوازي", en: "Turquoise" },
        type: "color",
        value: "#40E0D0",
        stock: 4,
      },
    ],
    features: [
      { ar: "قماش Loro Piana أصلي", en: "Authentic Loro Piana fabric" },
      { ar: "مقاس قابل للتعديل", en: "Adjustable size" },
      { ar: "شعار مطرز", en: "Embroidered logo" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 12,
    isNew: true,
    tags: ["cap", "loro-piana", "olive"],
    createdAt: "2026-04-12T00:00:00Z",
  },

  // ========== IQAL ==========
  {
    id: "p006",
    slug: "classic-iqal",
    name: { ar: "عقال كلاسيكي", en: "Classic Iqal" },
    description: {
      ar: "عقال خليجي كلاسيكي مصنوع من شعر الماعز الطبيعي، بأناقة تقليدية.",
      en: "Classic Gulf iqal made from natural goat hair with traditional elegance.",
    },
    shortDescription: {
      ar: "شعر ماعز طبيعي",
      en: "Natural goat hair",
    },
    price: 12.0,
    currency: "OMR",
    category: "iqal",
    images: ["/images/products/iqal-1.jpg"],
    features: [
      { ar: "شعر ماعز طبيعي ١٠٠٪", en: "100% natural goat hair" },
      { ar: "تصميم خليجي تقليدي", en: "Traditional Gulf design" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 30,
    tags: ["iqal", "classic"],
    createdAt: "2026-03-20T00:00:00Z",
  },
];

// ============== Helper functions ==============

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const current = getProductById(productId);
  if (!current) return [];
  return products
    .filter((p) => p.id !== productId && p.category === current.category)
    .slice(0, limit);
}

export function getFeaturedProducts(limit = 4): Product[] {
  return products.filter((p) => p.isBestseller || p.isNew).slice(0, limit);
}