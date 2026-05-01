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
    isNewArrival: true,
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
    isNewArrival: true,
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
    isNewArrival: true,
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

  // ========== BRACELETS ==========
  {
    id: "p007",
    slug: "cartier-bracelet",
    name: { ar: "إسورة كارتييه", en: "Cartier Bracelet" },
    description: {
      ar: "إسورة كارتييه الأيقونية بتصميم Love الشهير، مصنوعة من الذهب الوردي عالي الجودة. تأتي مع علبة هدية أصلية.",
      en: "Iconic Cartier Love bracelet in premium rose gold. Comes with an original gift box.",
    },
    shortDescription: {
      ar: "تصميم Love الأيقوني · ذهب وردي",
      en: "Iconic Love design · Rose gold",
    },
    price: 95.0,
    currency: "OMR",
    category: "bracelet",
    images: [
      "/images/products/bracelet-cartier-1.jpg",
      "/images/products/bracelet-cartier-2.jpg",
      "/images/products/bracelet-cartier-3.jpg",
      "/images/products/bracelet-cartier-4.jpg",
      "/images/products/bracelet-cartier-5.jpg",
      "/images/products/bracelet-cartier-6.jpg",
      "/images/products/bracelet-cartier-7.jpg",
      "/images/products/bracelet-cartier-8.jpg",
      "/images/products/bracelet-cartier-9.jpg",
      "/images/products/bracelet-cartier-10.jpg",
    ],
    variants: [
      { id: "v020", name: { ar: "١٦", en: "16" }, type: "size", value: "16", stock: 5 },
      { id: "v021", name: { ar: "١٧", en: "17" }, type: "size", value: "17", stock: 7 },
      { id: "v022", name: { ar: "١٨", en: "18" }, type: "size", value: "18", stock: 6 },
      { id: "v023", name: { ar: "١٩", en: "19" }, type: "size", value: "19", stock: 4 },
    ],
    features: [
      { ar: "تصميم Cartier Love الأيقوني", en: "Iconic Cartier Love design" },
      { ar: "ذهب وردي عالي الجودة", en: "Premium rose gold" },
      { ar: "علبة هدية فاخرة", en: "Luxury gift box" },
      { ar: "متوفرة بمقاسات متعددة", en: "Available in multiple sizes" },
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "ذهب وردي", en: "Rose gold" } },
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "كارتييه", en: "Cartier" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 22,
    isNewArrival: true,
    tags: ["bracelet", "cartier", "love", "gold"],
    createdAt: "2026-04-20T00:00:00Z",
  },
  {
    id: "p008",
    slug: "louis-vuitton-bracelet",
    name: { ar: "إسورة لويس فويتون", en: "Louis Vuitton Bracelet" },
    description: {
      ar: "إسورة لويس فويتون بنقشة المونوغرام الشهيرة، تصميم عصري أنيق مناسب لجميع المناسبات.",
      en: "Louis Vuitton bracelet with iconic monogram pattern, elegant modern design for all occasions.",
    },
    shortDescription: {
      ar: "نقشة المونوغرام الشهيرة · تصميم عصري",
      en: "Iconic monogram · Modern design",
    },
    price: 75.0,
    currency: "OMR",
    category: "bracelet",
    images: [
      "/images/products/bracelet-lv-1.jpg",
      "/images/products/bracelet-lv-2.jpg",
      "/images/products/bracelet-lv-3.jpg",
    ],
    features: [
      { ar: "نقشة مونوغرام LV الأيقونية", en: "Iconic LV monogram pattern" },
      { ar: "تشطيب عالي الجودة", en: "High-quality finish" },
      { ar: "علبة هدية", en: "Gift box included" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "لويس فويتون", en: "Louis Vuitton" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 10,
    isNewArrival: true,
    tags: ["bracelet", "louis-vuitton", "lv", "monogram"],
    createdAt: "2026-04-20T00:00:00Z",
  },
  {
    id: "p009",
    slug: "messika-bracelet",
    name: { ar: "إسورة ميسيكا", en: "Messika Bracelet" },
    description: {
      ar: "إسورة ميسيكا الراقية بتصميم Move الأيقوني، مرصعة بالألماس الفاخر للمرأة العصرية الأنيقة.",
      en: "Premium Messika bracelet with iconic Move design, adorned with luxury diamonds for the modern elegant woman.",
    },
    shortDescription: {
      ar: "تصميم Move · ألماس فاخر",
      en: "Move design · Luxury diamonds",
    },
    price: 120.0,
    currency: "OMR",
    category: "bracelet",
    images: [
      "/images/products/bracelet-messika-1.jpg",
      "/images/products/bracelet-messika-2.jpg",
    ],
    features: [
      { ar: "تصميم Move الأيقوني", en: "Iconic Move design" },
      { ar: "مرصعة بالألماس", en: "Diamond embellished" },
      { ar: "تشطيب ذهبي فاخر", en: "Luxury gold finish" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ميسيكا", en: "Messika" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 8,
    isBestseller: true,
    tags: ["bracelet", "messika", "diamond", "luxury"],
    createdAt: "2026-04-22T00:00:00Z",
  },
  {
    id: "p010",
    slug: "van-cleef-bracelet",
    name: { ar: "إسورة فان كليف", en: "Van Cleef & Arpels Bracelet" },
    description: {
      ar: "إسورة فان كليف وآربلز بتصميم Alhambra الشهير، مرصعة بحجارة كريمة خضراء في إطار ذهبي راقٍ.",
      en: "Van Cleef & Arpels bracelet with famous Alhambra design, set with green precious stones in an elegant gold frame.",
    },
    shortDescription: {
      ar: "تصميم Alhambra · حجارة كريمة",
      en: "Alhambra design · Precious stones",
    },
    price: 150.0,
    currency: "OMR",
    category: "bracelet",
    images: [
      "/images/products/bracelet-vancleef-1.jpg",
      "/images/products/bracelet-vancleef-2.jpg",
      "/images/products/bracelet-vancleef-3.jpg",
      "/images/products/bracelet-vancleef-4.jpg",
      "/images/products/bracelet-vancleef-5.jpg",
    ],
    features: [
      { ar: "تصميم Alhambra الأيقوني", en: "Iconic Alhambra design" },
      { ar: "حجارة كريمة طبيعية", en: "Natural precious stones" },
      { ar: "إطار ذهبي راقٍ", en: "Elegant gold frame" },
      { ar: "علبة هدية فاخرة", en: "Luxury gift box" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "فان كليف", en: "Van Cleef & Arpels" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 6,
    isBestseller: true,
    tags: ["bracelet", "van-cleef", "alhambra", "luxury"],
    createdAt: "2026-04-22T00:00:00Z",
  },

  // ========== RINGS ==========
  {
    id: "p011",
    slug: "cartier-ring",
    name: { ar: "خاتم كارتييه", en: "Cartier Ring" },
    description: {
      ar: "خاتم كارتييه الكلاسيكي بتصميم Love الأيقوني، مصنوع من الذهب عالي الجودة. يأتي في علبة هدية أصلية.",
      en: "Classic Cartier Love ring in premium gold. Comes in an original gift box.",
    },
    shortDescription: {
      ar: "تصميم Love · ذهب فاخر",
      en: "Love design · Premium gold",
    },
    price: 85.0,
    currency: "OMR",
    category: "ring",
    images: [
      "/images/products/ring-cartier-1.jpg",
      "/images/products/ring-cartier-2.jpg",
      "/images/products/ring-cartier-3.jpg",
      "/images/products/ring-cartier-4.jpg",
      "/images/products/ring-cartier-5.jpg",
    ],
    variants: [
      { id: "v030", name: { ar: "٦", en: "6" }, type: "size", value: "6", stock: 4 },
      { id: "v031", name: { ar: "٧", en: "7" }, type: "size", value: "7", stock: 6 },
      { id: "v032", name: { ar: "٨", en: "8" }, type: "size", value: "8", stock: 5 },
    ],
    features: [
      { ar: "تصميم Cartier Love الأيقوني", en: "Iconic Cartier Love design" },
      { ar: "ذهب عالي الجودة", en: "Premium gold" },
      { ar: "علبة هدية أصلية", en: "Original gift box" },
      { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "كارتييه", en: "Cartier" } },
      { label: { ar: "المادة", en: "Material" }, value: { ar: "ذهب", en: "Gold" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 15,
    isNewArrival: true,
    tags: ["ring", "cartier", "love", "gold"],
    createdAt: "2026-04-23T00:00:00Z",
  },

  // ========== MAKEUP ==========
  {
    id: "p012",
    slug: "chanel-makeup",
    name: { ar: "مكياج شانيل", en: "Chanel Makeup" },
    description: {
      ar: "مجموعة مكياج شانيل الفاخرة، تمنحك إطلالة أنيقة وراقية تدوم طوال اليوم.",
      en: "Luxury Chanel makeup collection for an elegant look that lasts all day.",
    },
    shortDescription: {
      ar: "شانيل الفاخرة · ثبات طويل",
      en: "Luxury Chanel · Long-lasting",
    },
    price: 55.0,
    currency: "OMR",
    category: "makeup",
    images: ["/images/products/makeup-chanel-1.png"],
    features: [
      { ar: "ماركة شانيل الأصيلة", en: "Authentic Chanel brand" },
      { ar: "ثبات طويل الأمد", en: "Long-lasting formula" },
      { ar: "تغليف فاخر", en: "Luxury packaging" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 12,
    isNewArrival: true,
    tags: ["makeup", "chanel", "luxury", "cosmetics"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p013",
    slug: "dior-eye-palette",
    name: { ar: "باليت عيون ديور", en: "Dior Eye Palette" },
    description: {
      ar: "باليت ظلال العيون من ديور بألوان متناسقة تعكس الأناقة الفرنسية، مناسبة للسهرات والإطلالات اليومية.",
      en: "Dior eye shadow palette with harmonious colors reflecting French elegance, suitable for evenings and daily looks.",
    },
    shortDescription: {
      ar: "ألوان متناسقة · أناقة فرنسية",
      en: "Harmonious colors · French elegance",
    },
    price: 48.0,
    currency: "OMR",
    category: "makeup",
    images: ["/images/products/makeup-dior-eye-palette-1.jpg"],
    features: [
      { ar: "ألوان ديور المتناسقة", en: "Harmonious Dior colors" },
      { ar: "قوام ناعم سهل التطبيق", en: "Smooth easy-to-apply formula" },
      { ar: "مناسبة للسهرات واليومي", en: "Suitable for evening & daily wear" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "باليت عيون", en: "Eye Palette" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 10,
    tags: ["makeup", "dior", "eye-palette", "cosmetics"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p014",
    slug: "dior-glow-face-palette",
    name: { ar: "باليت وجه ديور Glow", en: "Dior Glow Face Palette" },
    description: {
      ar: "باليت إضاءة الوجه من ديور يمنح بشرتك توهجاً طبيعياً وإشراقة ديمومة طوال اليوم.",
      en: "Dior glow face palette for a natural radiant glow that lasts all day.",
    },
    shortDescription: {
      ar: "توهج طبيعي · إشراقة دائمة",
      en: "Natural glow · All-day radiance",
    },
    price: 52.0,
    currency: "OMR",
    category: "makeup",
    images: [
      "/images/products/makeup-dior-glow-1.jpg",
      "/images/products/makeup-dior-glow-2.jpg",
    ],
    features: [
      { ar: "توهج طبيعي للبشرة", en: "Natural skin glow" },
      { ar: "ثبات طوال اليوم", en: "All-day lasting" },
      { ar: "يناسب جميع أنواع البشرة", en: "Suitable for all skin types" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "باليت وجه", en: "Face Palette" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 9,
    isBestseller: true,
    tags: ["makeup", "dior", "glow", "face-palette"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p015",
    slug: "dior-lip-glow",
    name: { ar: "ديور Lip Glow", en: "Dior Lip Glow" },
    description: {
      ar: "بلسم شفاه ديور Lip Glow يرطب ويضفي لوناً طبيعياً على شفتيكِ مع لمعة رائعة ومظهر صحي.",
      en: "Dior Lip Glow balm moisturizes and adds natural color with a beautiful shine and healthy look.",
    },
    shortDescription: {
      ar: "ترطيب · لون طبيعي · لمعة",
      en: "Moisturizing · Natural color · Shine",
    },
    price: 38.0,
    currency: "OMR",
    category: "makeup",
    images: ["/images/products/makeup-dior-lipglow-1.jpg"],
    features: [
      { ar: "ترطيب عميق للشفاه", en: "Deep lip moisturizing" },
      { ar: "لون طبيعي مناسب للبشرة", en: "Natural skin-adapting color" },
      { ar: "لمعة صحية وجذابة", en: "Healthy attractive shine" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "بلسم شفاه", en: "Lip Balm" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 15,
    tags: ["makeup", "dior", "lip-glow", "lipbalm"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p016",
    slug: "dior-lipstick",
    name: { ar: "روج ديور", en: "Dior Lipstick" },
    description: {
      ar: "روج ديور بألوان غنية وتغطية كاملة، يمنح شفتيكِ مظهراً أنيقاً يدوم ساعات طويلة.",
      en: "Dior lipstick with rich colors and full coverage for an elegant look that lasts for hours.",
    },
    shortDescription: {
      ar: "تغطية كاملة · ثبات ساعات",
      en: "Full coverage · Hours-long wear",
    },
    price: 42.0,
    currency: "OMR",
    category: "makeup",
    images: ["/images/products/makeup-dior-lipstick-1.webp"],
    features: [
      { ar: "تغطية كاملة وغنية", en: "Full rich coverage" },
      { ar: "ثبات لساعات طويلة", en: "Long-lasting hours" },
      { ar: "ألوان حيوية وجذابة", en: "Vibrant attractive colors" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "أحمر شفاه", en: "Lipstick" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 18,
    tags: ["makeup", "dior", "lipstick", "rouge"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p017",
    slug: "dior-lotion",
    name: { ar: "لوشن ديور", en: "Dior Lotion" },
    description: {
      ar: "لوشن ديور الفاخر للعناية بالبشرة، يرطب ويغذي بشرتك ويمنحها نعومة وإشراقة استثنائية.",
      en: "Luxury Dior lotion for skin care, moisturizes and nourishes for exceptional softness and radiance.",
    },
    shortDescription: {
      ar: "ترطيب عميق · عناية فاخرة",
      en: "Deep moisture · Luxury care",
    },
    price: 60.0,
    currency: "OMR",
    category: "makeup",
    images: ["/images/products/makeup-dior-lotion-1.png"],
    features: [
      { ar: "ترطيب عميق وفوري", en: "Deep instant moisturizing" },
      { ar: "تغذية البشرة بالمكونات النادرة", en: "Skin nourishment with rare ingredients" },
      { ar: "عطر ديور الأيقوني", en: "Iconic Dior fragrance" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "لوشن عناية", en: "Care Lotion" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 11,
    tags: ["makeup", "dior", "lotion", "skincare"],
    createdAt: "2026-04-24T00:00:00Z",
  },
  {
    id: "p018",
    slug: "dior-rosy-glow",
    name: { ar: "ديور Rosy Glow", en: "Dior Rosy Glow" },
    description: {
      ar: "بودرة الخدود ديور Rosy Glow بلون يتكيف مع بشرتك تلقائياً ليعكس الحيوية والإشراقة الطبيعية.",
      en: "Dior Rosy Glow blush that adapts to your skin tone to reflect vitality and natural radiance.",
    },
    shortDescription: {
      ar: "لون يتكيف مع البشرة · إشراقة طبيعية",
      en: "Skin-adapting color · Natural radiance",
    },
    price: 50.0,
    currency: "OMR",
    category: "makeup",
    images: [
      "/images/products/makeup-dior-rosyglow-1.jpg",
      "/images/products/makeup-dior-rosyglow-2.jpg",
    ],
    features: [
      { ar: "لون يتكيف مع لون البشرة", en: "Skin-tone adapting color" },
      { ar: "إشراقة طبيعية ورائعة", en: "Natural beautiful radiance" },
      { ar: "قوام خفيف كالريشة", en: "Feather-light texture" },
    ],
    specs: [
      { label: { ar: "الماركة", en: "Brand" }, value: { ar: "ديور", en: "Dior" } },
      { label: { ar: "النوع", en: "Type" }, value: { ar: "بودرة خدود", en: "Blush" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 13,
    isBestseller: true,
    tags: ["makeup", "dior", "rosy-glow", "blush"],
    createdAt: "2026-04-24T00:00:00Z",
  },

  // ========== BAGS ==========
  {
    id: "p019",
    slug: "gents-clutch-bag",
    name: { ar: "حقيبة كلتش رجالي", en: "Gents Clutch Bag" },
    description: {
      ar: "حقيبة كلتش رجالية بتصميم عصري أنيق، مصنوعة من جلد عالي الجودة. مثالية للسهرات والاجتماعات الرسمية.",
      en: "Modern elegant men's clutch bag made from high-quality leather. Perfect for evenings and formal meetings.",
    },
    shortDescription: {
      ar: "جلد عالي الجودة · تصميم عصري",
      en: "High-quality leather · Modern design",
    },
    price: 45.0,
    currency: "OMR",
    category: "bags",
    images: [
      "/images/products/bag-gents-clutch-1.jpg",
      "/images/products/bag-gents-clutch-2.jpg",
      "/images/products/bag-gents-clutch-3.jpg",
      "/images/products/bag-gents-clutch-4.jpg",
      "/images/products/bag-gents-clutch-5.jpg",
      "/images/products/bag-gents-clutch-6.jpg",
      "/images/products/bag-gents-clutch-7.jpg",
    ],
    features: [
      { ar: "جلد عالي الجودة", en: "High-quality leather" },
      { ar: "تصميم عصري أنيق", en: "Modern elegant design" },
      { ar: "سعة كافية للاحتياجات اليومية", en: "Ample space for daily needs" },
      { ar: "مثالية للسهرات الرسمية", en: "Perfect for formal evenings" },
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد", en: "Leather" } },
      { label: { ar: "الفئة", en: "Category" }, value: { ar: "رجالي", en: "Gents" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 14,
    isNewArrival: true,
    tags: ["bag", "clutch", "gents", "leather"],
    createdAt: "2026-04-25T00:00:00Z",
  },
  {
    id: "p020",
    slug: "ladies-master-bag",
    name: { ar: "حقيبة نسائية ماستر", en: "Ladies Master Quality Bag" },
    description: {
      ar: "حقيبة نسائية بجودة ماستر فاخرة، تصاميم متنوعة من أشهر الماركات العالمية. تجمع بين الأناقة والعملية.",
      en: "Ladies master quality bag in various designs from top global brands. Combining elegance and practicality.",
    },
    shortDescription: {
      ar: "جودة ماستر · تصاميم متنوعة",
      en: "Master quality · Various designs",
    },
    price: 55.0,
    currency: "OMR",
    category: "bags",
    images: [
      "/images/products/bag-ladies-1.jpg",
      "/images/products/bag-ladies-2.jpg",
      "/images/products/bag-ladies-3.jpg",
      "/images/products/bag-ladies-4.jpg",
      "/images/products/bag-ladies-5.jpg",
      "/images/products/bag-ladies-6.jpg",
      "/images/products/bag-ladies-7.jpg",
      "/images/products/bag-ladies-8.jpg",
    ],
    features: [
      { ar: "جودة ماستر عالية", en: "High master quality" },
      { ar: "تصاميم من أشهر الماركات", en: "Designs from top brands" },
      { ar: "مواد متينة وفاخرة", en: "Durable luxury materials" },
      { ar: "تنوع في الألوان والأشكال", en: "Variety in colors and styles" },
    ],
    specs: [
      { label: { ar: "الفئة", en: "Category" }, value: { ar: "نسائي", en: "Ladies" } },
      { label: { ar: "الجودة", en: "Quality" }, value: { ar: "ماستر", en: "Master" } },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isBestseller: true,
    tags: ["bag", "ladies", "master", "luxury"],
    createdAt: "2026-04-25T00:00:00Z",
  },

  // ========== BOXES ==========
  {
    id: "p021",
    slug: "accessories-box",
    name: { ar: "بوكس إكسسوارات", en: "Accessories Box" },
    description: {
      ar: "علبة هدية فاخرة مخصصة للإكسسوارات، تأتي بتصاميم أصلية لكارتييه وغيرها. مثالية لتقديم الإكسسوارات والمجوهرات.",
      en: "Luxury gift box for accessories with original Cartier and other brand designs. Perfect for gifting accessories and jewelry.",
    },
    shortDescription: {
      ar: "علبة أصلية · تغليف فاخر",
      en: "Original box · Luxury packaging",
    },
    price: 8.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-accessories-1.jpg",
      "/images/products/box-accessories-2.jpg",
      "/images/products/box-accessories-3.jpg",
      "/images/products/box-accessories-4.jpg",
    ],
    features: [
      { ar: "تصميم ماركات أصلية", en: "Original brand design" },
      { ar: "مناسبة للإكسسوارات والمجوهرات", en: "Suitable for accessories and jewelry" },
      { ar: "تغليف فاخر راقٍ", en: "Luxurious elegant packaging" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 50,
    tags: ["box", "accessories", "gift", "cartier"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p022",
    slug: "brand-big-box",
    name: { ar: "بوكس كبير ماركة", en: "Brand Big Box" },
    description: {
      ar: "علبة هدية كبيرة بتصاميم ماركات عالمية فاخرة، مثالية للهدايا الكبيرة والمناسبات المميزة.",
      en: "Large gift box with luxury global brand designs, perfect for big gifts and special occasions.",
    },
    shortDescription: {
      ar: "حجم كبير · تصاميم ماركات",
      en: "Large size · Brand designs",
    },
    price: 12.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-brand-big-1.jpg",
      "/images/products/box-brand-big-2.jpg",
      "/images/products/box-brand-big-3.jpg",
      "/images/products/box-brand-big-4.jpg",
      "/images/products/box-brand-big-5.jpg",
    ],
    features: [
      { ar: "حجم كبير مناسب للهدايا الكبيرة", en: "Large size for big gifts" },
      { ar: "تصاميم ماركات عالمية فاخرة", en: "Luxury global brand designs" },
      { ar: "متانة وجودة عالية", en: "High durability and quality" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 40,
    tags: ["box", "big", "gift", "brand"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p023",
    slug: "brand-kees",
    name: { ar: "كيس ماركة", en: "Brand Bag (Kees)" },
    description: {
      ar: "كيس هدية بتصاميم ماركات عالمية فاخرة، خفيف ومتين للتعبئة والهدايا.",
      en: "Gift bag with luxury global brand designs, lightweight and durable for packaging and gifts.",
    },
    shortDescription: {
      ar: "تصاميم ماركات · خفيف ومتين",
      en: "Brand designs · Light & durable",
    },
    price: 5.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-brand-kees-1.jpg",
      "/images/products/box-brand-kees-2.jpg",
      "/images/products/box-brand-kees-3.jpg",
      "/images/products/box-brand-kees-4.jpg",
      "/images/products/box-brand-kees-5.jpg",
    ],
    features: [
      { ar: "تصاميم ماركات متعددة", en: "Multiple brand designs" },
      { ar: "خفيف ومتين", en: "Lightweight and durable" },
      { ar: "مناسب للهدايا والتعبئة", en: "Suitable for gifts and packaging" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 100,
    tags: ["bag", "kees", "gift", "brand"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p024",
    slug: "brand-kees-big",
    name: { ar: "كيس ماركة كبير ٤٣×٣٣", en: "Brand Bag Big 43×33" },
    description: {
      ar: "كيس هدية كبير ٤٣×٣٣ سم بتصاميم ماركات عالمية، مناسب للهدايا الكبيرة والمنتجات الضخمة.",
      en: "Large 43×33 cm gift bag with global brand designs, suitable for large gifts and bulky products.",
    },
    shortDescription: {
      ar: "مقاس ٤٣×٣٣ · هدايا كبيرة",
      en: "43×33 size · Large gifts",
    },
    price: 7.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-brand-kees-big-1.jpg",
      "/images/products/box-brand-kees-big-2.jpg",
      "/images/products/box-brand-kees-big-3.jpg",
      "/images/products/box-brand-kees-big-4.jpg",
    ],
    features: [
      { ar: "مقاس كبير ٤٣×٣٣ سم", en: "Large size 43×33 cm" },
      { ar: "تصاميم ماركات عالمية فاخرة", en: "Luxury global brand designs" },
      { ar: "مناسب للمنتجات الضخمة", en: "Suitable for bulky products" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 60,
    tags: ["bag", "kees", "big", "gift"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p025",
    slug: "brand-small-box",
    name: { ar: "بوكس صغير ماركة", en: "Brand Small Box" },
    description: {
      ar: "علبة هدية صغيرة بتصاميم ماركات عالمية متنوعة، مثالية لتغليف الإكسسوارات الصغيرة والمجوهرات.",
      en: "Small gift box with various global brand designs, perfect for packaging small accessories and jewelry.",
    },
    shortDescription: {
      ar: "حجم صغير · تصاميم متنوعة",
      en: "Small size · Various designs",
    },
    price: 6.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-brand-small-1.jpg",
      "/images/products/box-brand-small-2.jpg",
      "/images/products/box-brand-small-3.jpg",
      "/images/products/box-brand-small-4.jpg",
      "/images/products/box-brand-small-5.jpg",
      "/images/products/box-brand-small-6.jpg",
      "/images/products/box-brand-small-7.jpg",
      "/images/products/box-brand-small-8.jpg",
    ],
    features: [
      { ar: "حجم صغير مناسب للإكسسوارات", en: "Small size for accessories" },
      { ar: "تصاميم ماركات متنوعة", en: "Various brand designs" },
      { ar: "جودة ممتازة", en: "Excellent quality" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 80,
    tags: ["box", "small", "gift", "brand"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p026",
    slug: "glass-master-box",
    name: { ar: "بوكس نظارات ماستر", en: "Glass Master Box" },
    description: {
      ar: "علبة نظارات بجودة ماستر، تصاميم أصلية لكبرى ماركات النظارات العالمية. حماية مثالية لنظاراتك الفاخرة.",
      en: "Master quality glasses box with original designs from top global eyewear brands. Perfect protection for your luxury glasses.",
    },
    shortDescription: {
      ar: "جودة ماستر · حماية مثالية",
      en: "Master quality · Perfect protection",
    },
    price: 10.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-glass-master-1.jpg",
      "/images/products/box-glass-master-2.jpg",
      "/images/products/box-glass-master-3.jpg",
      "/images/products/box-glass-master-4.jpg",
      "/images/products/box-glass-master-5.jpg",
      "/images/products/box-glass-master-6.jpg",
      "/images/products/box-glass-master-7.jpg",
      "/images/products/box-glass-master-8.jpg",
    ],
    features: [
      { ar: "جودة ماستر عالية", en: "High master quality" },
      { ar: "تصاميم ماركات نظارات أصلية", en: "Original eyewear brand designs" },
      { ar: "حماية مثالية للنظارات", en: "Perfect glasses protection" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 35,
    tags: ["box", "glasses", "master", "eyewear"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p027",
    slug: "original-master-box",
    name: { ar: "بوكس ماستر أصلي", en: "Original Master Box" },
    description: {
      ar: "علبة ماستر بتصاميم أصلية من كبرى الماركات العالمية، مناسبة لجميع أنواع المنتجات الفاخرة.",
      en: "Master box with original designs from top global brands, suitable for all types of luxury products.",
    },
    shortDescription: {
      ar: "تصميم أصلي · ماركات عالمية",
      en: "Original design · Global brands",
    },
    price: 9.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-original-master-1.jpg",
      "/images/products/box-original-master-2.jpg",
      "/images/products/box-original-master-3.jpg",
      "/images/products/box-original-master-4.jpg",
      "/images/products/box-original-master-5.jpg",
      "/images/products/box-original-master-6.jpg",
      "/images/products/box-original-master-7.jpg",
      "/images/products/box-original-master-8.jpg",
    ],
    features: [
      { ar: "تصاميم أصلية لماركات عالمية", en: "Original global brand designs" },
      { ar: "جودة ماستر ممتازة", en: "Excellent master quality" },
      { ar: "مناسب لجميع المنتجات الفاخرة", en: "Suitable for all luxury products" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 45,
    tags: ["box", "original", "master", "brand"],
    createdAt: "2026-04-26T00:00:00Z",
  },
  {
    id: "p028",
    slug: "pen-box-master",
    name: { ar: "بوكس أقلام ماستر", en: "Pen Box Master" },
    description: {
      ar: "علبة أقلام بجودة ماستر، تصميم فاخر لحفظ وتقديم الأقلام الراقية. مثالية كهدية لكبار الشخصيات.",
      en: "Master quality pen box with luxury design for storing and presenting premium pens. Perfect as a gift for VIPs.",
    },
    shortDescription: {
      ar: "جودة ماستر · مثالية للهدايا",
      en: "Master quality · Perfect for gifts",
    },
    price: 8.0,
    currency: "OMR",
    category: "boxes",
    images: [
      "/images/products/box-pen-master-1.jpg",
      "/images/products/box-pen-master-2.jpg",
    ],
    features: [
      { ar: "جودة ماستر عالية", en: "High master quality" },
      { ar: "تصميم فاخر لحفظ الأقلام", en: "Luxury design for pen storage" },
      { ar: "هدية مثالية لكبار الشخصيات", en: "Perfect gift for VIPs" },
    ],
    reviews: [],
    rating: 0,
    reviewCount: 0,
    inStock: true,
    stockCount: 25,
    tags: ["box", "pen", "master", "gift"],
    createdAt: "2026-04-26T00:00:00Z",
  },
{
    id: "p029",
    slug: "watch-breitling-gents",
    name: { ar: "ساعة بريتلينغ رجالي", en: "Breitling Gents Watch" },
    description: {
      ar: "ساعة بريتلينغ الرجالية بتصميم رياضي فاخر، مصنوعة بدقة عالية من مواد متميزة. تجمع بين الأناقة والمتانة لتلائم كل المناسبات.",
      en: "Breitling gents watch with a premium sporty design, crafted with high precision from superior materials. A blend of elegance and durability for every occasion.",
    },
    shortDescription: {
      ar: "تصميم رياضي فاخر · دقة عالية",
      en: "Premium sporty design · High precision",
    },
    price: 40.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-breitling-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "breitling", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p030",
    slug: "watch-cartier-gents",
    name: { ar: "ساعة كارتير رجالي", en: "Cartier Gents Watch" },
    description: {
      ar: "ساعة كارتير الرجالية رمز الفخامة والأناقة الفرنسية. مصنوعة من أجود المواد بتصميم كلاسيكي راقٍ يناسب كل المناسبات.",
      en: "Cartier gents watch, a symbol of French luxury and elegance. Crafted from the finest materials with a refined classic design for all occasions.",
    },
    shortDescription: {
      ar: "فخامة فرنسية · تصميم كلاسيكي راقٍ",
      en: "French luxury · Refined classic design",
    },
    price: 42.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-cartier-gents-1.jpg",
      "/images/products/watch-cartier-gents-2.jpg",
      "/images/products/watch-cartier-gents-3.jpg",
      "/images/products/watch-cartier-gents-4.jpg",
      "/images/products/watch-cartier-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "cartier", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p031",
    slug: "watch-casio-gents",
    name: { ar: "ساعة كاسيو رجالي", en: "Casio Gents Watch" },
    description: {
      ar: "ساعة كاسيو الرجالية المتعددة الوظائف، دقيقة ومتينة ومصممة للاستخدام اليومي. تتميز بمقاومة الماء وعمر بطارية طويل.",
      en: "Multi-function Casio gents watch, accurate, durable, designed for everyday use. Features water resistance and long battery life.",
    },
    shortDescription: {
      ar: "متعددة الوظائف · مقاومة للماء",
      en: "Multi-function · Water resistant",
    },
    price: 18.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-casio-gents-1.jpg",
      "/images/products/watch-casio-gents-2.jpg",
      "/images/products/watch-casio-gents-3.jpg",
      "/images/products/watch-casio-gents-4.jpg",
      "/images/products/watch-casio-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "casio", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p032",
    slug: "watch-curren-gents",
    name: { ar: "ساعة كارن رجالي", en: "Curren Gents Watch" },
    description: {
      ar: "ساعة كارن الرجالية بتصميم عصري أنيق، تجمع الدقة والجمال في قطعة واحدة متكاملة مناسبة للعمل والترفيه.",
      en: "Curren gents watch with a modern elegant design, combining precision and beauty in one complete piece suitable for work and leisure.",
    },
    shortDescription: {
      ar: "تصميم عصري · أنيق ومتعدد الاستخدام",
      en: "Modern design · Elegant and versatile",
    },
    price: 20.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-curren-gents-1.jpg",
      "/images/products/watch-curren-gents-2.jpg",
      "/images/products/watch-curren-gents-3.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "curren", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p033",
    slug: "watch-d1-milano-gents",
    name: { ar: "ساعة دي ون ميلانو رجالي", en: "D1 Milano Gents Watch" },
    description: {
      ar: "ساعة دي ون ميلانو الإيطالية بتصميم ميلاني فاخر، تعبر عن الأناقة الأوروبية بأسلوب عصري جذاب.",
      en: "D1 Milano Italian watch with a luxurious Milanese design, expressing European elegance in a modern attractive style.",
    },
    shortDescription: {
      ar: "تصميم إيطالي · أناقة أوروبية",
      en: "Italian design · European elegance",
    },
    price: 28.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-d1-milano-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "d1 milano", "gents", "ساعة", "رجالي", "italian"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p034",
    slug: "watch-fitron-gents",
    name: { ar: "ساعة فيترون رجالي", en: "Fitron Gents Watch" },
    description: {
      ar: "ساعة فيترون الرجالية بتصميم راقٍ وجودة عالية، مثالية للرجل المعاصر الذي يقدر الأناقة والدقة.",
      en: "Fitron gents watch with a refined design and high quality, ideal for the contemporary man who values elegance and precision.",
    },
    shortDescription: {
      ar: "جودة عالية · للرجل المعاصر",
      en: "High quality · For the contemporary man",
    },
    price: 22.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-fitron-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "fitron", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p035",
    slug: "watch-hublot-gents",
    name: { ar: "ساعة هوبلو رجالي", en: "Hublot Gents Watch" },
    description: {
      ar: "ساعة هوبلو الرجالية السويسرية، تجسيد للفخامة والابتكار. تصميع جريء بمواد عصرية تجعلها قطعة استثنائية.",
      en: "Swiss Hublot gents watch, embodiment of luxury and innovation. A bold design with modern materials makes it an exceptional piece.",
    },
    shortDescription: {
      ar: "سويسرية فاخرة · تصميم جريء",
      en: "Swiss luxury · Bold design",
    },
    price: 45.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-hublot-gents-1.jpg",
      "/images/products/watch-hublot-gents-2.jpg",
      "/images/products/watch-hublot-gents-3.jpg",
      "/images/products/watch-hublot-gents-4.jpg",
      "/images/products/watch-hublot-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "hublot", "gents", "ساعة", "رجالي", "swiss"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p036",
    slug: "watch-jackman-gents",
    name: { ar: "ساعة جاكمان رجالي", en: "Jackman Gents Watch" },
    description: {
      ar: "ساعة جاكمان الرجالية بتصميم أنيق ومريح، تناسب الاستخدام اليومي وتضيف لمسة من الأناقة لمظهرك.",
      en: "Jackman gents watch with an elegant and comfortable design, suitable for daily use and adding a touch of style to your look.",
    },
    shortDescription: {
      ar: "أنيق ومريح · للاستخدام اليومي",
      en: "Elegant and comfortable · Daily use",
    },
    price: 20.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-jackman-gents-1.jpg",
      "/images/products/watch-jackman-gents-2.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "jackman", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p037",
    slug: "watch-monaco-gents",
    name: { ar: "ساعة موناكو رجالي", en: "Monaco Gents Watch" },
    description: {
      ar: "ساعة موناكو الرجالية بتصميم مستوحى من عالم سباقات الفورمولا 1، فريدة بشكلها المربع الأيقوني.",
      en: "Monaco gents watch inspired by the world of Formula 1 racing, unique with its iconic square shape.",
    },
    shortDescription: {
      ar: "تصميم مربع أيقوني · روح السباق",
      en: "Iconic square design · Racing spirit",
    },
    price: 30.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-monaco-gents-1.jpg",
      "/images/products/watch-monaco-gents-2.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "monaco", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p038",
    slug: "watch-montblanc-gents",
    name: { ar: "ساعة مونت بلانك رجالي", en: "Mont Blanc Gents Watch" },
    description: {
      ar: "ساعة مونت بلانك الرجالية، مزيج مثالي بين التراث الألماني والحرفية الراقية. رفاهية يستحقها الرجل الناجح.",
      en: "Mont Blanc gents watch, a perfect blend of German heritage and refined craftsmanship. A luxury the successful man deserves.",
    },
    shortDescription: {
      ar: "تراث ألماني · حرفية راقية",
      en: "German heritage · Refined craftsmanship",
    },
    price: 38.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-montblanc-gents-1.jpg",
      "/images/products/watch-montblanc-gents-2.jpg",
      "/images/products/watch-montblanc-gents-3.jpg",
      "/images/products/watch-montblanc-gents-4.jpg",
      "/images/products/watch-montblanc-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "montblanc", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p039",
    slug: "watch-omega-gents",
    name: { ar: "ساعة أوميجا رجالي", en: "Omega Gents Watch" },
    description: {
      ar: "ساعة أوميجا الرجالية، الشريك الرسمي لمهمات الفضاء وعالم الغوص. دقة سويسرية لا مثيل لها مع تصميم خالد.",
      en: "Omega gents watch, official partner of space missions and diving world. Unmatched Swiss precision with a timeless design.",
    },
    shortDescription: {
      ar: "دقة سويسرية · تصميم خالد",
      en: "Swiss precision · Timeless design",
    },
    price: 42.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-omega-gents-1.jpg",
      "/images/products/watch-omega-gents-2.jpg",
      "/images/products/watch-omega-gents-3.jpg",
      "/images/products/watch-omega-gents-4.jpg",
      "/images/products/watch-omega-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "omega", "gents", "ساعة", "رجالي", "swiss"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p040",
    slug: "watch-patek-philippe-gents",
    name: { ar: "ساعة باتك فيليب رجالي", en: "Patek Philippe Gents Watch" },
    description: {
      ar: "ساعة باتك فيليب، قمة الصناعة الساعاتية السويسرية. إرث قرون من الدقة والجمال في قطعة واحدة لا تُقدر بثمن.",
      en: "Patek Philippe, the pinnacle of Swiss watchmaking. Centuries of precision and beauty in one priceless piece.",
    },
    shortDescription: {
      ar: "قمة الصناعة السويسرية · إرث أجيال",
      en: "Swiss watchmaking pinnacle · Generational heritage",
    },
    price: 48.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-patek-philippe-gents-1.jpg",
      "/images/products/watch-patek-philippe-gents-2.jpg",
      "/images/products/watch-patek-philippe-gents-3.jpg",
      "/images/products/watch-patek-philippe-gents-4.jpg",
      "/images/products/watch-patek-philippe-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "patek philippe", "gents", "ساعة", "رجالي", "luxury"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p041",
    slug: "watch-rado-gents",
    name: { ar: "ساعة رادو رجالي", en: "Rado Gents Watch" },
    description: {
      ar: "ساعة رادو الرجالية بمواد عصرية مقاومة للخدش، تصميم نظيف عصري يعكس الأناقة الهادئة.",
      en: "Rado gents watch with modern scratch-resistant materials, a clean modern design reflecting quiet elegance.",
    },
    shortDescription: {
      ar: "مقاومة للخدش · تصميم نظيف عصري",
      en: "Scratch-resistant · Clean modern design",
    },
    price: 30.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-rado-gents-1.jpg",
      "/images/products/watch-rado-gents-2.jpg",
      "/images/products/watch-rado-gents-3.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "rado", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p042",
    slug: "watch-rolex-gents",
    name: { ar: "ساعة رولكس رجالي", en: "Rolex Gents Watch" },
    description: {
      ar: "ساعة رولكس الرجالية، الرمز الأبدي للنجاح والفخامة. صنعت لمن يسعى للأفضل في كل شيء.",
      en: "Rolex gents watch, the eternal symbol of success and luxury. Made for those who strive for the best in everything.",
    },
    shortDescription: {
      ar: "رمز النجاح · فخامة أبدية",
      en: "Symbol of success · Eternal luxury",
    },
    price: 48.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-rolex-gents-1.jpg",
      "/images/products/watch-rolex-gents-2.jpg",
      "/images/products/watch-rolex-gents-3.jpg",
      "/images/products/watch-rolex-gents-4.jpg",
      "/images/products/watch-rolex-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "rolex", "gents", "ساعة", "رجالي", "luxury"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p043",
    slug: "watch-tissot-gents",
    name: { ar: "ساعة تيسوت رجالي", en: "Tissot Gents Watch" },
    description: {
      ar: "ساعة تيسوت السويسرية الرجالية، تقدم جودة سويسرية حقيقية بسعر مناسب. خيار مثالي للرجل الذي يقدر الدقة.",
      en: "Swiss Tissot gents watch, offering genuine Swiss quality at an accessible price. The ideal choice for the man who values precision.",
    },
    shortDescription: {
      ar: "جودة سويسرية · بسعر مناسب",
      en: "Swiss quality · Accessible price",
    },
    price: 25.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-tissot-gents-1.jpg",
      "/images/products/watch-tissot-gents-2.jpg",
      "/images/products/watch-tissot-gents-3.jpg",
      "/images/products/watch-tissot-gents-4.jpg",
      "/images/products/watch-tissot-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "tissot", "gents", "ساعة", "رجالي", "swiss"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p044",
    slug: "watch-viguer-gents",
    name: { ar: "ساعة ڤيجور رجالي", en: "Viguer Gents Watch" },
    description: {
      ar: "ساعة ڤيجور الرجالية بتصميم إسباني متميز، تجمع الحداثة والأناقة في قطعة مميزة لرجل له ذوق رفيع.",
      en: "Viguer gents watch with a distinctive Spanish design, combining modernity and elegance in a unique piece for the man with refined taste.",
    },
    shortDescription: {
      ar: "تصميم إسباني · حداثة وأناقة",
      en: "Spanish design · Modernity and elegance",
    },
    price: 22.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-viguer-gents-1.jpg",
      "/images/products/watch-viguer-gents-2.jpg",
      "/images/products/watch-viguer-gents-3.jpg",
      "/images/products/watch-viguer-gents-4.jpg",
      "/images/products/watch-viguer-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "viguer", "gents", "ساعة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p045",
    slug: "watch-couple",
    name: { ar: "ساعة جنسين زوجية", en: "Couple Watch Set" },
    description: {
      ar: "طقم ساعات زوجية أنيق، هدية مثالية للأزواج. تصميم متناسق يجمع بين الأناقة الرجالية والنسائية في مجموعة واحدة.",
      en: "An elegant couple watch set, the perfect gift for couples. A harmonious design that combines masculine and feminine elegance in one set.",
    },
    shortDescription: {
      ar: "طقم زوجي · هدية مثالية للأزواج",
      en: "Couple set · Perfect gift for couples",
    },
    price: 35.0,
    currency: "OMR",
    category: "watches",
    images: [
      "/images/products/watch-couple-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "حركة دقيقة عالية الجودة", en: "High-quality precision movement" },
        { ar: "زجاج مقاوم للخدش", en: "Scratch-resistant glass" },
        { ar: "مقاومة للماء", en: "Water resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "ساعة رجالية", en: "Gents Watch" } },
        { label: { ar: "العملة", en: "Currency" }, value: { ar: "ريال عُماني", en: "OMR" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["watch", "couple", "ساعة", "زوجية", "هدية"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p046",
    slug: "pen-armani",
    name: { ar: "قلم أرماني فاخر", en: "Armani Luxury Pen" },
    description: {
      ar: "قلم أرماني الفاخر يجسد الأناقة الإيطالية الراقية. مثالي كهدية أو للاستخدام اليومي في المكتب والمناسبات.",
      en: "Armani luxury pen embodies refined Italian elegance. Perfect as a gift or for daily office and occasion use.",
    },
    shortDescription: {
      ar: "أناقة إيطالية · مثالي كهدية",
      en: "Italian elegance · Perfect gift",
    },
    price: 10.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/placeholder.svg"
    ],
    variants: [],
    features: [
      { ar: "حبر سلس لا ينقطع", en: "Smooth uninterrupted ink flow" },
        { ar: "مواد متميزة عالية الجودة", en: "Premium high-quality materials" },
        { ar: "مثالي كهدية فاخرة", en: "Perfect as a luxury gift" },
        { ar: "تغليف هدية مجاني", en: "Free gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "قلم فاخر", en: "Luxury Pen" } },
        { label: { ar: "الكمية", en: "Quantity" }, value: { ar: "١ قلم", en: "1 pen" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["pen", "armani", "قلم", "هدية", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p047",
    slug: "pen-cartier",
    name: { ar: "قلم كارتير فاخر", en: "Cartier Luxury Pen" },
    description: {
      ar: "قلم كارتير الفاخر، قطعة فنية تجمع الأناقة الفرنسية بالحرفية العالية. هدية استثنائية لمن يستحق الأفضل.",
      en: "Cartier luxury pen, an artistic piece combining French elegance with high craftsmanship. An exceptional gift for those who deserve the best.",
    },
    shortDescription: {
      ar: "فرنسي فاخر · قطعة فنية",
      en: "French luxury · Artistic piece",
    },
    price: 15.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/pen-cartier-1.jpg",
      "/images/products/pen-cartier-2.jpg",
      "/images/products/pen-cartier-3.jpg",
      "/images/products/pen-cartier-4.jpg",
      "/images/products/pen-cartier-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حبر سلس لا ينقطع", en: "Smooth uninterrupted ink flow" },
        { ar: "مواد متميزة عالية الجودة", en: "Premium high-quality materials" },
        { ar: "مثالي كهدية فاخرة", en: "Perfect as a luxury gift" },
        { ar: "تغليف هدية مجاني", en: "Free gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "قلم فاخر", en: "Luxury Pen" } },
        { label: { ar: "الكمية", en: "Quantity" }, value: { ar: "١ قلم", en: "1 pen" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["pen", "cartier", "قلم", "هدية", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p048",
    slug: "pen-gucci",
    name: { ar: "قلم غوتشي فاخر", en: "Gucci Luxury Pen" },
    description: {
      ar: "قلم غوتشي الفاخر بشعار الدار المميز، تصميم إيطالي راقٍ يضيف لمسة من الفخامة لمكتبك.",
      en: "Gucci luxury pen with the house's distinctive logo, a refined Italian design that adds a touch of luxury to your desk.",
    },
    shortDescription: {
      ar: "شعار غوتشي المميز · تصميم إيطالي",
      en: "Gucci distinctive logo · Italian design",
    },
    price: 10.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/pen-gucci-1.jpg",
      "/images/products/pen-gucci-2.jpg"
    ],
    variants: [],
    features: [
      { ar: "حبر سلس لا ينقطع", en: "Smooth uninterrupted ink flow" },
        { ar: "مواد متميزة عالية الجودة", en: "Premium high-quality materials" },
        { ar: "مثالي كهدية فاخرة", en: "Perfect as a luxury gift" },
        { ar: "تغليف هدية مجاني", en: "Free gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "قلم فاخر", en: "Luxury Pen" } },
        { label: { ar: "الكمية", en: "Quantity" }, value: { ar: "١ قلم", en: "1 pen" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["pen", "gucci", "قلم", "هدية", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p049",
    slug: "pen-montblanc",
    name: { ar: "قلم مونت بلانك فاخر", en: "Mont Blanc Luxury Pen" },
    description: {
      ar: "قلم مونت بلانك الأسطوري، رمز الكتابة الراقية منذ قرن من الزمان. تحفة هندسية تجعل كل كلمة أثراً.",
      en: "The legendary Mont Blanc pen, symbol of fine writing for over a century. An engineering masterpiece that makes every word an impression.",
    },
    shortDescription: {
      ar: "رمز الكتابة الراقية · تحفة هندسية",
      en: "Symbol of fine writing · Engineering masterpiece",
    },
    price: 18.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/pen-montblanc-1.jpg",
      "/images/products/pen-montblanc-2.jpg",
      "/images/products/pen-montblanc-3.jpg",
      "/images/products/pen-montblanc-4.jpg",
      "/images/products/pen-montblanc-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حبر سلس لا ينقطع", en: "Smooth uninterrupted ink flow" },
        { ar: "مواد متميزة عالية الجودة", en: "Premium high-quality materials" },
        { ar: "مثالي كهدية فاخرة", en: "Perfect as a luxury gift" },
        { ar: "تغليف هدية مجاني", en: "Free gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "قلم فاخر", en: "Luxury Pen" } },
        { label: { ar: "الكمية", en: "Quantity" }, value: { ar: "١ قلم", en: "1 pen" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["pen", "montblanc", "قلم", "هدية", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p050",
    slug: "pen-rolex",
    name: { ar: "قلم رولكس فاخر", en: "Rolex Luxury Pen" },
    description: {
      ar: "قلم رولكس الفاخر، يحمل نفس رمز الجودة والفخامة الذي اشتهرت به ساعاتها. هدية مثالية ولا مثيل لها.",
      en: "Rolex luxury pen, carrying the same symbol of quality and prestige as its watches. A perfect and unparalleled gift.",
    },
    shortDescription: {
      ar: "رمز رولكس المميز · هدية لا مثيل لها",
      en: "Rolex iconic symbol · Unparalleled gift",
    },
    price: 12.0,
    currency: "OMR",
    category: "pens",
    images: [
      "/images/products/pen-rolex-1.jpg",
      "/images/products/pen-rolex-2.jpg",
      "/images/products/pen-rolex-3.jpg",
      "/images/products/pen-rolex-4.jpg",
      "/images/products/pen-rolex-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "حبر سلس لا ينقطع", en: "Smooth uninterrupted ink flow" },
        { ar: "مواد متميزة عالية الجودة", en: "Premium high-quality materials" },
        { ar: "مثالي كهدية فاخرة", en: "Perfect as a luxury gift" },
        { ar: "تغليف هدية مجاني", en: "Free gift packaging" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "قلم فاخر", en: "Luxury Pen" } },
        { label: { ar: "الكمية", en: "Quantity" }, value: { ar: "١ قلم", en: "1 pen" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["pen", "rolex", "قلم", "هدية", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p051",
    slug: "perfume-brand-copy",
    name: { ar: "عطور براند كوبي", en: "Brand Copy Perfumes" },
    description: {
      ar: "تشكيلة عطور براند كوبي الفاخرة، تجمع أشهر العطور العالمية بجودة مميزة. رائحة تدوم طويلاً بسعر مناسب.",
      en: "A luxury brand copy perfume collection, featuring the world's most famous fragrances with distinct quality. Long-lasting scent at an accessible price.",
    },
    shortDescription: {
      ar: "رائحة تدوم · بسعر مناسب",
      en: "Long-lasting scent · Accessible price",
    },
    price: 12.0,
    currency: "OMR",
    category: "perfumes",
    images: [
      "/images/products/perfume-brand-copy-1.jpg",
      "/images/products/perfume-brand-copy-2.jpg",
      "/images/products/perfume-brand-copy-3.jpg",
      "/images/products/perfume-brand-copy-4.jpg",
      "/images/products/perfume-brand-copy-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "عطر طويل الأمد يدوم لساعات", en: "Long-lasting fragrance for hours" },
        { ar: "تركيزة عالية من الزيوت العطرية", en: "High concentration of aromatic oils" },
        { ar: "تغليف أنيق مثالي كهدية", en: "Elegant packaging perfect as a gift" },
        { ar: "يناسب الاستخدام اليومي والمناسبات", en: "Suitable for daily use and occasions" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "عطر", en: "Perfume" } },
        { label: { ar: "الحجم", en: "Size" }, value: { ar: "١٠٠ مل", en: "100 ml" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["perfume", "عطر", "brand copy", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p052",
    slug: "perfume-amouage",
    name: { ar: "عطر أموّاج ماستر كوبي", en: "Amouage Master Copy Perfume" },
    description: {
      ar: "عطر أموّاج الفاخر ماستر كوبي، مستوحى من الروائح العُمانية الأصيلة. بخاخة طويلة الأمد بعبق مميز لا يُنسى.",
      en: "Amouage luxury master copy perfume, inspired by authentic Omani fragrances. Long-lasting spray with a distinctive unforgettable scent.",
    },
    shortDescription: {
      ar: "روائح عُمانية أصيلة · عبق لا يُنسى",
      en: "Authentic Omani fragrances · Unforgettable scent",
    },
    price: 22.0,
    currency: "OMR",
    category: "perfumes",
    images: [
      "/images/products/perfume-amouage-1.png",
      "/images/products/perfume-amouage-2.jpg",
      "/images/products/perfume-amouage-3.webp",
      "/images/products/perfume-amouage-4.webp",
      "/images/products/perfume-amouage-5.webp"
    ],
    variants: [],
    features: [
      { ar: "عطر طويل الأمد يدوم لساعات", en: "Long-lasting fragrance for hours" },
        { ar: "تركيزة عالية من الزيوت العطرية", en: "High concentration of aromatic oils" },
        { ar: "تغليف أنيق مثالي كهدية", en: "Elegant packaging perfect as a gift" },
        { ar: "يناسب الاستخدام اليومي والمناسبات", en: "Suitable for daily use and occasions" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "عطر", en: "Perfume" } },
        { label: { ar: "الحجم", en: "Size" }, value: { ar: "١٠٠ مل", en: "100 ml" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["perfume", "amouage", "عطر", "عُماني", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p053",
    slug: "perfume-dior",
    name: { ar: "عطر ديور ماستر كوبي", en: "Dior Master Copy Perfume" },
    description: {
      ar: "عطر ديور ماستر كوبي الفرنسي الفاخر، يجسد روح الموضة الباريسية بعبق أنيق يناسب كل المناسبات.",
      en: "Dior French master copy luxury perfume, embodying the spirit of Parisian fashion with an elegant scent for all occasions.",
    },
    shortDescription: {
      ar: "روح باريس الفاخرة · عبق أنيق",
      en: "Paris luxury spirit · Elegant scent",
    },
    price: 20.0,
    currency: "OMR",
    category: "perfumes",
    images: [
      "/images/products/perfume-dior-1.jpg",
      "/images/products/perfume-dior-2.webp",
      "/images/products/perfume-dior-3.jpg",
      "/images/products/perfume-dior-4.jpg"
    ],
    variants: [],
    features: [
      { ar: "عطر طويل الأمد يدوم لساعات", en: "Long-lasting fragrance for hours" },
        { ar: "تركيزة عالية من الزيوت العطرية", en: "High concentration of aromatic oils" },
        { ar: "تغليف أنيق مثالي كهدية", en: "Elegant packaging perfect as a gift" },
        { ar: "يناسب الاستخدام اليومي والمناسبات", en: "Suitable for daily use and occasions" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "عطر", en: "Perfume" } },
        { label: { ar: "الحجم", en: "Size" }, value: { ar: "١٠٠ مل", en: "100 ml" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["perfume", "dior", "عطر", "فرنسي", "فاخر"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p054",
    slug: "perfume-omanluxury",
    name: { ar: "عطر عُمان لاكشري", en: "Oman Luxury Perfume" },
    description: {
      ar: "عطر عُمان لاكشري، مستوحى من طبيعة عُمان الخلابة وتراثها العريق. عبق شرقي دافئ يصحبك طوال اليوم.",
      en: "Oman Luxury perfume, inspired by Oman's stunning nature and rich heritage. A warm oriental scent that accompanies you all day.",
    },
    shortDescription: {
      ar: "مستوحى من التراث العُماني · عبق شرقي",
      en: "Inspired by Omani heritage · Oriental scent",
    },
    price: 18.0,
    currency: "OMR",
    category: "perfumes",
    images: [
      "/images/products/perfume-omanluxury-1.webp",
      "/images/products/perfume-omanluxury-2.webp",
      "/images/products/perfume-omanluxury-3.webp"
    ],
    variants: [],
    features: [
      { ar: "عطر طويل الأمد يدوم لساعات", en: "Long-lasting fragrance for hours" },
        { ar: "تركيزة عالية من الزيوت العطرية", en: "High concentration of aromatic oils" },
        { ar: "تغليف أنيق مثالي كهدية", en: "Elegant packaging perfect as a gift" },
        { ar: "يناسب الاستخدام اليومي والمناسبات", en: "Suitable for daily use and occasions" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "عطر", en: "Perfume" } },
        { label: { ar: "الحجم", en: "Size" }, value: { ar: "١٠٠ مل", en: "100 ml" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["perfume", "oman", "عطر", "عُماني", "شرقي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p055",
    slug: "slipper-hermis-gents",
    name: { ar: "نعل هيرمس رجالي", en: "Hermès Gents Slipper" },
    description: {
      ar: "نعل هيرمس الرجالي الفاخر بجلد عالي الجودة وتصميم راقٍ. مريح للارتداء اليومي ومثالي لكل المناسبات.",
      en: "Hermès gents luxury slipper with high-quality leather and a refined design. Comfortable for daily wear and perfect for all occasions.",
    },
    shortDescription: {
      ar: "جلد فاخر · مريح للاستخدام اليومي",
      en: "Luxury leather · Comfortable daily wear",
    },
    price: 12.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-hermis-gents-1.jpg",
      "/images/products/slipper-hermis-gents-2.jpeg",
      "/images/products/slipper-hermis-gents-3.jpg",
      "/images/products/slipper-hermis-gents-4.jpg",
      "/images/products/slipper-hermis-gents-5.jpeg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "hermis", "gents", "نعل", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p056",
    slug: "slipper-dior-gents",
    name: { ar: "نعل ديور رجالي", en: "Dior Gents Slipper" },
    description: {
      ar: "نعل ديور الرجالي بتصميم فرنسي أيقوني، يجمع الراحة والأناقة في قطعة واحدة لافتة للنظر.",
      en: "Dior gents slipper with an iconic French design, combining comfort and elegance in one eye-catching piece.",
    },
    shortDescription: {
      ar: "تصميم فرنسي أيقوني · راحة وأناقة",
      en: "Iconic French design · Comfort and elegance",
    },
    price: 12.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-dior-gents-1.jpg",
      "/images/products/slipper-dior-gents-2.jpeg",
      "/images/products/slipper-dior-gents-3.jpg",
      "/images/products/slipper-dior-gents-4.jpeg",
      "/images/products/slipper-dior-gents-5.jpeg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "dior", "gents", "نعل", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p057",
    slug: "slipper-lv-gents",
    name: { ar: "نعل لويس فيتون رجالي", en: "Louis Vuitton Gents Slipper" },
    description: {
      ar: "نعل لويس فيتون الرجالي بنقشة المونوغرام الشهيرة، رمز الفخامة الفرنسية في كل خطوة.",
      en: "Louis Vuitton gents slipper with the famous monogram pattern, a symbol of French luxury with every step.",
    },
    shortDescription: {
      ar: "نقشة المونوغرام · فخامة فرنسية",
      en: "Monogram pattern · French luxury",
    },
    price: 14.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-lv-gents-1.jpeg",
      "/images/products/slipper-lv-gents-2.jpg",
      "/images/products/slipper-lv-gents-3.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "lv", "gents", "نعل", "رجالي", "louis vuitton"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p058",
    slug: "slipper-hermis-ladies",
    name: { ar: "نعل هيرمس نسائي", en: "Hermès Ladies Slipper" },
    description: {
      ar: "نعل هيرمس النسائي الفاخر بألوان متعددة وتصميمات رقيقة تناسب المرأة العصرية الأنيقة.",
      en: "Hermès ladies luxury slipper in multiple colors and delicate designs for the modern elegant woman.",
    },
    shortDescription: {
      ar: "ألوان متعددة · للمرأة العصرية",
      en: "Multiple colors · For the modern woman",
    },
    price: 12.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-hermis-ladies-1.jpg",
      "/images/products/slipper-hermis-ladies-2.jpeg",
      "/images/products/slipper-hermis-ladies-3.jpeg",
      "/images/products/slipper-hermis-ladies-4.jpeg",
      "/images/products/slipper-hermis-ladies-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "hermis", "ladies", "نعل", "نسائي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p059",
    slug: "slipper-dior-ladies",
    name: { ar: "نعل ديور نسائي", en: "Dior Ladies Slipper" },
    description: {
      ar: "نعل ديور النسائي بتصميمات راقية متعددة تشمل الكعب العالي والمسطح، فخامة فرنسية في كل خطوة.",
      en: "Dior ladies slipper in multiple refined designs including heels and flats, French luxury with every step.",
    },
    shortDescription: {
      ar: "تصميمات متعددة · فخامة فرنسية",
      en: "Multiple designs · French luxury",
    },
    price: 13.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-dior-ladies-1.jpeg",
      "/images/products/slipper-dior-ladies-2.jpg",
      "/images/products/slipper-dior-ladies-3.jpg",
      "/images/products/slipper-dior-ladies-4.jpeg",
      "/images/products/slipper-dior-ladies-5.jpeg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "dior", "ladies", "نعل", "نسائي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p060",
    slug: "slipper-ysl-ladies",
    name: { ar: "نعل إيف سان لوران نسائي", en: "YSL Ladies Slipper" },
    description: {
      ar: "نعل إيف سان لوران النسائي بجاذبية باريسية لا تُقاوم، تصميم جريء وأنيق لامرأة واثقة من نفسها.",
      en: "YSL ladies slipper with irresistible Parisian appeal, a bold and elegant design for the confident woman.",
    },
    shortDescription: {
      ar: "جاذبية باريسية · لامرأة واثقة",
      en: "Parisian appeal · For the confident woman",
    },
    price: 13.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-ysl-ladies-1.jpg",
      "/images/products/slipper-ysl-ladies-2.jpg",
      "/images/products/slipper-ysl-ladies-3.jpg",
      "/images/products/slipper-ysl-ladies-4.jpg",
      "/images/products/slipper-ysl-ladies-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "ysl", "ladies", "نعل", "نسائي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p061",
    slug: "slipper-gucci-ladies",
    name: { ar: "نعل غوتشي نسائي", en: "Gucci Ladies Slipper" },
    description: {
      ar: "نعل غوتشي النسائي بالشعار الإيطالي المميز وألوان راقية، أناقة لا تُضاهى لكل موسم.",
      en: "Gucci ladies slipper with the distinctive Italian logo and refined colors, unmatched elegance for every season.",
    },
    shortDescription: {
      ar: "شعار غوتشي المميز · أناقة لا تُضاهى",
      en: "Gucci distinctive logo · Unmatched elegance",
    },
    price: 13.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-gucci-ladies-1.jpeg",
      "/images/products/slipper-gucci-ladies-2.jpeg",
      "/images/products/slipper-gucci-ladies-3.jpeg",
      "/images/products/slipper-gucci-ladies-4.jpeg",
      "/images/products/slipper-gucci-ladies-5.jpeg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "gucci", "ladies", "نعل", "نسائي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p062",
    slug: "slipper-fendi-ladies",
    name: { ar: "نعل فندي نسائي", en: "Fendi Ladies Slipper" },
    description: {
      ar: "نعل فندي النسائي بتصميم روماني فاخر، يمزج الجرأة والأنوثة في قطعة إيطالية استثنائية.",
      en: "Fendi ladies slipper with a luxurious Roman design, blending boldness and femininity in an exceptional Italian piece.",
    },
    shortDescription: {
      ar: "تصميم روماني فاخر · جرأة وأنوثة",
      en: "Luxurious Roman design · Boldness and femininity",
    },
    price: 13.0,
    currency: "OMR",
    category: "slippers",
    images: [
      "/images/products/slipper-fendi-ladies-1.jpg",
      "/images/products/slipper-fendi-ladies-2.jpg",
      "/images/products/slipper-fendi-ladies-3.jpg",
      "/images/products/slipper-fendi-ladies-4.jpg",
      "/images/products/slipper-fendi-ladies-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد عالي الجودة مريح للقدم", en: "High-quality leather comfortable for the foot" },
        { ar: "نعل مطاطي مانع للانزلاق", en: "Anti-slip rubber sole" },
        { ar: "تصميم فاخر يناسب كل المناسبات", en: "Luxury design for all occasions" },
        { ar: "متوفر بمقاسات متعددة", en: "Available in multiple sizes" }
    ],
    specs: [
      { label: { ar: "النوع", en: "Type" }, value: { ar: "نعل جلدي", en: "Leather Slipper" } },
        { label: { ar: "المقاسات", en: "Sizes" }, value: { ar: "متعددة", en: "Multiple" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["slipper", "fendi", "ladies", "نعل", "نسائي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p063",
    slug: "wallet-card-holder",
    name: { ar: "حامل بطاقات فاخر", en: "Luxury Card Holder" },
    description: {
      ar: "حامل بطاقات فاخر من جلد عالي الجودة، يتسع للبطاقات والنقود بتصميم نحيل أنيق يناسب الجيب.",
      en: "Luxury card holder in high-quality leather, accommodates cards and cash with a slim elegant design that fits any pocket.",
    },
    shortDescription: {
      ar: "جلد فاخر · تصميم نحيل أنيق",
      en: "Luxury leather · Slim elegant design",
    },
    price: 8.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-card-holder-1.jpg",
      "/images/products/wallet-card-holder-2.jpg",
      "/images/products/wallet-card-holder-3.jpg",
      "/images/products/wallet-card-holder-4.jpg",
      "/images/products/wallet-card-holder-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "card holder", "محفظة", "حامل بطاقات"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p064",
    slug: "wallet-horse",
    name: { ar: "محفظة هورس الجلدية", en: "Horse Leather Wallet" },
    description: {
      ar: "محفظة هورس الجلدية بطابع فريد وتصميم مميز يعكس شخصيتك القوية. مساحة وفيرة للبطاقات والنقود.",
      en: "Horse leather wallet with a unique character and a distinctive design that reflects your strong personality. Ample space for cards and cash.",
    },
    shortDescription: {
      ar: "طابع فريد · مساحة وفيرة",
      en: "Unique character · Ample space",
    },
    price: 12.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-horse-1.jpg",
      "/images/products/wallet-horse-2.jpg",
      "/images/products/wallet-horse-3.jpg",
      "/images/products/wallet-horse-4.jpg",
      "/images/products/wallet-horse-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "horse", "محفظة", "جلد"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p065",
    slug: "wallet-leather",
    name: { ar: "محفظة جلد طبيعي", en: "Natural Leather Wallet" },
    description: {
      ar: "محفظة من الجلد الطبيعي عالي الجودة، تدوم طويلاً وتصبح أجمل مع مرور الوقت. رفيقك اليومي الموثوق.",
      en: "Natural high-quality leather wallet, long-lasting and grows more beautiful with time. Your reliable daily companion.",
    },
    shortDescription: {
      ar: "جلد طبيعي · يدوم طويلاً",
      en: "Natural leather · Long-lasting",
    },
    price: 10.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-leather-1.jpg",
      "/images/products/wallet-leather-2.jpg",
      "/images/products/wallet-leather-3.jpg",
      "/images/products/wallet-leather-4.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "leather", "محفظة", "جلد طبيعي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p066",
    slug: "wallet-armani-gents",
    name: { ar: "محفظة أرماني رجالي ماستر", en: "Armani Gents Master Wallet" },
    description: {
      ar: "محفظة أرماني الرجالية ماستر، تصميم إيطالي أنيق من جلد ممتاز. اختيار راقٍ للرجل صاحب الذوق الرفيع.",
      en: "Armani gents master wallet, elegant Italian design in premium leather. A refined choice for the man of discerning taste.",
    },
    shortDescription: {
      ar: "تصميم إيطالي · جلد ممتاز",
      en: "Italian design · Premium leather",
    },
    price: 15.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-armani-gents-1.jpg",
      "/images/products/wallet-armani-gents-2.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "armani", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p067",
    slug: "wallet-cartier-gents",
    name: { ar: "محفظة كارتير رجالي ماستر", en: "Cartier Gents Master Wallet" },
    description: {
      ar: "محفظة كارتير الرجالية ماستر بشعار الدار الفرنسية المميز، جودة استثنائية وتصميم فاخر لا يُنسى.",
      en: "Cartier gents master wallet with the distinctive French house logo, exceptional quality and an unforgettable luxury design.",
    },
    shortDescription: {
      ar: "شعار كارتير المميز · جودة استثنائية",
      en: "Cartier distinctive logo · Exceptional quality",
    },
    price: 18.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-cartier-gents-1.jpg",
      "/images/products/wallet-cartier-gents-2.jpg",
      "/images/products/wallet-cartier-gents-3.jpg",
      "/images/products/wallet-cartier-gents-4.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "cartier", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p068",
    slug: "wallet-montblanc-gents",
    name: { ar: "محفظة مونت بلانك رجالي ماستر", en: "Mont Blanc Gents Master Wallet" },
    description: {
      ar: "محفظة مونت بلانك الرجالية ماستر، صنع ألماني راقٍ بجلد ممتاز. رمز المكانة والنجاح في جيبك.",
      en: "Mont Blanc gents master wallet, refined German craftsmanship in premium leather. A symbol of status and success in your pocket.",
    },
    shortDescription: {
      ar: "صنع ألماني راقٍ · رمز المكانة",
      en: "Refined German craft · Symbol of status",
    },
    price: 18.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-montblanc-gents-1.jpg",
      "/images/products/wallet-montblanc-gents-2.jpg",
      "/images/products/wallet-montblanc-gents-3.jpg",
      "/images/products/wallet-montblanc-gents-4.jpg",
      "/images/products/wallet-montblanc-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "montblanc", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p069",
    slug: "wallet-rolex-gents",
    name: { ar: "محفظة رولكس رجالي ماستر", en: "Rolex Gents Master Wallet" },
    description: {
      ar: "محفظة رولكس الرجالية ماستر بشعار التاج الشهير، نفس الفخامة التي تميز ساعاتها في كل قطعة تحملها.",
      en: "Rolex gents master wallet with the famous crown logo, the same luxury that distinguishes its watches in every piece you carry.",
    },
    shortDescription: {
      ar: "شعار التاج الشهير · فخامة رولكس",
      en: "Famous crown logo · Rolex luxury",
    },
    price: 20.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-rolex-gents-1.jpg",
      "/images/products/wallet-rolex-gents-2.jpg",
      "/images/products/wallet-rolex-gents-3.jpg",
      "/images/products/wallet-rolex-gents-4.jpg",
      "/images/products/wallet-rolex-gents-5.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "rolex", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p070",
    slug: "wallet-hermis-gents",
    name: { ar: "محفظة هيرمس رجالي ماستر", en: "Hermès Gents Master Wallet" },
    description: {
      ar: "محفظة هيرمس الرجالية ماستر، فخامة فرنسية حقيقية بجلد عالي الجودة وتصميم كلاسيكي خالد.",
      en: "Hermès gents master wallet, genuine French luxury in high-quality leather with a timeless classic design.",
    },
    shortDescription: {
      ar: "فخامة فرنسية · تصميم كلاسيكي خالد",
      en: "French luxury · Timeless classic design",
    },
    price: 18.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-hermis-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "hermis", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p071",
    slug: "wallet-gucci-gents",
    name: { ar: "محفظة غوتشي رجالي ماستر", en: "Gucci Gents Master Wallet" },
    description: {
      ar: "محفظة غوتشي الرجالية ماستر بنقشة المونوغرام الأيقونية، تعبير جريء عن الأناقة الإيطالية.",
      en: "Gucci gents master wallet with the iconic monogram pattern, a bold expression of Italian elegance.",
    },
    shortDescription: {
      ar: "نقشة المونوغرام · الأناقة الإيطالية",
      en: "Monogram pattern · Italian elegance",
    },
    price: 16.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-gucci-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "gucci", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  },
  {
    id: "p072",
    slug: "wallet-dior-gents",
    name: { ar: "محفظة ديور رجالي ماستر", en: "Dior Gents Master Wallet" },
    description: {
      ar: "محفظة ديور الرجالية ماستر بتصميم عصري أنيق يجمع الرقي الفرنسي بالجودة العالية.",
      en: "Dior gents master wallet with a modern elegant design combining French refinement with high quality.",
    },
    shortDescription: {
      ar: "رقي فرنسي · جودة عالية",
      en: "French refinement · High quality",
    },
    price: 16.0,
    currency: "OMR",
    category: "wallets",
    images: [
      "/images/products/wallet-dior-gents-1.jpg"
    ],
    variants: [],
    features: [
      { ar: "جلد طبيعي عالي الجودة", en: "High-quality genuine leather" },
        { ar: "جيوب متعددة للبطاقات والنقود", en: "Multiple pockets for cards and cash" },
        { ar: "مقاوم للخدش والاهتراء", en: "Scratch and wear resistant" },
        { ar: "تغليف هدية فاخر", en: "Luxury gift packaging" }
    ],
    specs: [
      { label: { ar: "المادة", en: "Material" }, value: { ar: "جلد طبيعي", en: "Genuine leather" } },
        { label: { ar: "الأبعاد", en: "Dimensions" }, value: { ar: "قياسية", en: "Standard" } }
    ],
    reviews: [],
    rating: 4.8,
    reviewCount: 0,
    inStock: true,
    stockCount: 20,
    isNewArrival: true,
    tags: ["wallet", "dior", "gents", "محفظة", "رجالي"],
    createdAt: "2026-05-01T00:00:00Z",
  }

];

// ============== Helper functions ==============
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
  return products.filter((p) => p.isBestseller || p.isNewArrival).slice(0, limit);
}