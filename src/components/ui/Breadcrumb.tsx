"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/store/languageStore";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const { locale } = useLanguage();
  const Chevron = locale === "ar" ? ChevronLeft : ChevronRight;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-text-primary font-medium">{item.label}</span>
          )}
          {i < items.length - 1 && (
            <Chevron size={14} className="text-gray-400" />
          )}
        </div>
      ))}
    </nav>
  );
}