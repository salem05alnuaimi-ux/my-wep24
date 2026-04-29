"use client";

import { Check } from "lucide-react";
import { ProductVariant } from "@/types";
import { useLanguage } from "@/store/languageStore";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedId?: string;
  onSelect: (variantId: string) => void;
}

export default function VariantSelector({
  variants,
  selectedId,
  onSelect,
}: VariantSelectorProps) {
  const { locale } = useLanguage();

  // Group variants by type
  const grouped = variants.reduce<Record<string, ProductVariant[]>>(
    (acc, v) => {
      acc[v.type] = acc[v.type] || [];
      acc[v.type].push(v);
      return acc;
    },
    {}
  );

  const typeLabel = (type: string) => {
    if (locale === "ar") {
      return type === "color" ? "اللون" : type === "size" ? "المقاس" : "النوع";
    }
    return type === "color" ? "Color" : type === "size" ? "Size" : "Style";
  };

  return (
    <div className="space-y-5">
      {Object.entries(grouped).map(([type, items]) => (
        <div key={type}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-text-primary">
              {typeLabel(type)}
            </span>
            <span className="text-sm text-gray-500">
              {items.find((v) => v.id === selectedId)?.name[locale]}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {items.map((variant) => {
              const isSelected = variant.id === selectedId;
              const isOut = variant.stock === 0;

              if (type === "color") {
                return (
                  <button
                    key={variant.id}
                    onClick={() => !isOut && onSelect(variant.id)}
                    disabled={isOut}
                    className={`relative w-11 h-11 rounded-full transition-all ${
                      isSelected
                        ? "ring-2 ring-primary ring-offset-2"
                        : "ring-1 ring-gray-200 hover:ring-gray-400"
                    } ${isOut ? "opacity-40 cursor-not-allowed" : ""}`}
                    style={{ backgroundColor: variant.value }}
                    aria-label={variant.name[locale]}
                  >
                    {isSelected && (
                      <Check
                        size={16}
                        className="absolute inset-0 m-auto text-white drop-shadow"
                      />
                    )}
                  </button>
                );
              }

              return (
                <button
                  key={variant.id}
                  onClick={() => !isOut && onSelect(variant.id)}
                  disabled={isOut}
                  className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 hover:border-gray-400"
                  } ${isOut ? "opacity-40 cursor-not-allowed line-through" : ""}`}
                >
                  {variant.name[locale]}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}