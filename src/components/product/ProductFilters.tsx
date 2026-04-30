"use client";

import { useLanguage } from "@/store/languageStore";
import { ProductCategory, SortOption } from "@/types";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface FiltersProps {
  selectedCategory?: ProductCategory;
  onCategoryChange: (cat?: ProductCategory) => void;
  sort: SortOption;
  onSortChange: (s: SortOption) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  sort,
  onSortChange,
  priceRange,
  onPriceChange,
}: FiltersProps) {
  const { locale, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories: { value: ProductCategory; label: string }[] = [
    { value: "shemagh", label: t.categories.shemagh },
    { value: "iqal", label: t.categories.iqal },
    { value: "watches", label: t.categories.watches },
    { value: "pens", label: t.categories.pens },
    { value: "misbaha", label: t.categories.misbaha },
    { value: "caps", label: t.categories.caps },
    { value: "bracelet", label: t.categories.bracelet },
    { value: "ring", label: t.categories.ring },
    { value: "makeup", label: t.categories.makeup },
    { value: "bags", label: t.categories.bags },
    { value: "boxes", label: t.categories.boxes },
  ];

  const sortOptions: { value: SortOption; label: string }[] = [
    {
      value: "newest",
      label: locale === "ar" ? "الأحدث" : "Newest",
    },
    {
      value: "bestseller",
      label: locale === "ar" ? "الأكثر مبيعاً" : "Bestsellers",
    },
    {
      value: "price-asc",
      label: locale === "ar" ? "السعر: من الأقل" : "Price: Low to High",
    },
    {
      value: "price-desc",
      label: locale === "ar" ? "السعر: من الأعلى" : "Price: High to Low",
    },
    {
      value: "rating",
      label: locale === "ar" ? "الأعلى تقييماً" : "Top Rated",
    },
  ];

  const FiltersBody = (
    <div className="space-y-8">
      {/* Sort */}
      <div>
        <h4 className="font-semibold mb-3">
          {locale === "ar" ? "الترتيب" : "Sort by"}
        </h4>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-semibold mb-3">
          {locale === "ar" ? "الأقسام" : "Categories"}
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange(undefined)}
            className={`w-full text-start px-3 py-2 rounded-lg text-sm transition-colors ${
              !selectedCategory
                ? "bg-primary text-white"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {locale === "ar" ? "الكل" : "All"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`w-full text-start px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === cat.value
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-semibold mb-3">
          {locale === "ar" ? "السعر" : "Price"}
        </h4>
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              onPriceChange([Number(e.target.value), priceRange[1]])
            }
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            placeholder={locale === "ar" ? "من" : "Min"}
          />
          <span className="text-gray-400">—</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceChange([priceRange[0], Number(e.target.value)])
            }
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
            placeholder={locale === "ar" ? "إلى" : "Max"}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">{FiltersBody}</aside>

      {/* Mobile button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl mb-4"
      >
        <Filter size={16} />
        <span className="text-sm font-medium">
          {locale === "ar" ? "تصفية" : "Filters"}
        </span>
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute end-0 top-0 bottom-0 w-80 max-w-[85%] bg-white p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">
                {locale === "ar" ? "تصفية" : "Filters"}
              </h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>
            {FiltersBody}
          </div>
        </div>
      )}
    </>
  );
}