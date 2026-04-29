"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingShapes from "@/components/effects/FloatingShapes";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import VariantSelector from "@/components/product/VariantSelector";
import ProductReviews from "@/components/product/ProductReviews";
import Rating from "@/components/ui/Rating";
import ProductCard from "@/components/product/ProductCard";
import { getProductById, getRelatedProducts } from "@/data/products";
import { useLanguage } from "@/store/languageStore";
import { useCart } from "@/store/cartStore";
import { useWishlist } from "@/store/wishlistStore";
import { useToast } from "@/components/ui/Toast";
import { Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const { locale, t } = useLanguage();
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const { show } = useToast();

  const product = getProductById(params.id as string);

  const [selectedVariantId, setSelectedVariantId] = useState(
    product?.variants?.[0]?.id
  );
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <>
        <FloatingShapes />
        <Navbar />
        <main className="pt-24 pb-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold mb-4">
              {locale === "ar" ? "المنتج غير موجود" : "Product not found"}
            </h1>
            <Link href="/products" className="text-primary hover:underline">
              {locale === "ar" ? "العودة للمنتجات" : "Back to Products"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const selectedVariant = product.variants?.find(
    (v) => v.id === selectedVariantId
  );
  const finalPrice = product.price + (selectedVariant?.priceModifier ?? 0);
  const inStock = selectedVariant ? selectedVariant.stock > 0 : product.inStock;
  const maxQty = selectedVariant?.stock ?? product.stockCount;
  const isWishlisted = has(product.id);
  const related = getRelatedProducts(product.id, 4);

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty);
    show(
      locale === "ar" ? `تمت الإضافة إلى السلة 🛍️` : `Added to cart 🛍️`,
      "success"
    );
  };

  const handleWishlist = () => {
    toggle(product.id);
    show(
      isWishlisted
        ? locale === "ar"
          ? "أزيل من المفضلة"
          : "Removed from wishlist"
        : locale === "ar"
        ? "أضيف للمفضلة ❤️"
        : "Added to wishlist ❤️",
      "success"
    );
  };

  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container-apple">
          <Breadcrumb
            items={[
              { label: t.nav.home, href: "/" },
              { label: t.nav.products, href: "/products" },
              { label: product.name[locale] },
            ]}
          />

          <div className="mt-8 grid lg:grid-cols-2 gap-12">
            {/* Gallery */}
            <ProductGallery
              images={product.images}
              alt={product.name[locale]}
            />

            {/* Details */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                {product.isNewArrival && (
                  <span className="bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {locale === "ar" ? "جديد" : "New"}
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                    {locale === "ar" ? "الأكثر مبيعاً" : "Bestseller"}
                  </span>
                )}
              </div>

              {/* Category + Name */}
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wide mb-1 capitalize">
                  {product.category}
                </p>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                  {product.name[locale]}
                </h1>
              </div>

              {/* Rating */}
              {product.reviewCount > 0 && (
                <Rating
                  value={product.rating}
                  showNumber
                  reviewCount={product.reviewCount}
                  size={16}
                />
              )}

              {/* Price */}
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-3xl font-bold text-text-primary">
                  {finalPrice.toFixed(3)} {t.product.currency}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">
                      {product.originalPrice.toFixed(3)} {t.product.currency}
                    </span>
                    <span className="text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                      {Math.round(
                        ((product.originalPrice - finalPrice) /
                          product.originalPrice) *
                          100
                      )}
                      % {locale === "ar" ? "خصم" : "off"}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {product.description[locale]}
              </p>

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <VariantSelector
                  variants={product.variants}
                  selectedId={selectedVariantId}
                  onSelect={setSelectedVariantId}
                />
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-sm font-medium">
                  {locale === "ar" ? "الكمية" : "Qty"}
                </span>
                <div className="flex items-center border border-gray-200 rounded-full">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-s-full text-lg"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 font-medium min-w-[2.5rem] text-center">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(maxQty, q + 1))}
                    disabled={qty >= maxQty}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 rounded-e-full text-lg disabled:opacity-30"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-gray-500">
                  {inStock
                    ? `${maxQty} ${locale === "ar" ? "في المخزون" : "in stock"}`
                    : t.product.out_of_stock}
                </span>
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!inStock}
                  className="flex-1 bg-primary text-white py-4 rounded-full font-medium hover:bg-link transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  <ShoppingBag size={18} />
                  {t.product.add_to_cart}
                </button>
                <button
                  onClick={handleWishlist}
                  className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                    isWishlisted
                      ? "bg-red-500 border-red-500 text-white"
                      : "border-gray-200 hover:border-red-300 hover:text-red-500"
                  }`}
                  aria-label={
                    isWishlisted ? "Remove from wishlist" : "Add to wishlist"
                  }
                >
                  <Heart
                    size={20}
                    fill={isWishlisted ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
                {[
                  {
                    icon: Truck,
                    label:
                      locale === "ar" ? "شحن سريع" : "Fast shipping",
                  },
                  {
                    icon: ShieldCheck,
                    label: locale === "ar" ? "دفع آمن" : "Secure payment",
                  },
                  {
                    icon: RotateCcw,
                    label:
                      locale === "ar" ? "إرجاع ٧ أيام" : "7-day returns",
                  },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center gap-1.5 p-3 bg-gray-50 rounded-xl"
                  >
                    <Icon size={18} className="text-primary" />
                    <span className="text-xs text-gray-600">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features & Specs */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">
                {locale === "ar" ? "المميزات" : "Features"}
              </h2>
              <ul className="space-y-2">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary mt-1 text-sm">✓</span>
                    <span>{f[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {product.specs && product.specs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  {locale === "ar" ? "المواصفات" : "Specifications"}
                </h2>
                <dl>
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="flex justify-between py-3 border-b border-gray-100"
                    >
                      <dt className="text-gray-500 text-sm">
                        {spec.label[locale]}
                      </dt>
                      <dd className="font-medium text-sm">
                        {spec.value[locale]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              {locale === "ar" ? "تقييمات العملاء" : "Customer Reviews"}
              {product.reviewCount > 0 && (
                <span className="ms-2 text-lg font-normal text-gray-500">
                  ({product.reviewCount})
                </span>
              )}
            </h2>
            <ProductReviews
              reviews={product.reviews}
              averageRating={product.rating}
            />
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold mb-6">
                {locale === "ar" ? "منتجات مشابهة" : "You May Also Like"}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={{
                      id: p.id,
                      name: p.name,
                      price: p.price,
                      originalPrice: p.originalPrice,
                      image: p.images[0],
                      category: p.category,
                      isNewArrival: p.isNewArrival,
                      inStock: p.inStock,
                    }}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
