"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2, X, Loader2, Package, ImageOff, Search } from "lucide-react";
import { Product, ProductCategory } from "@/types";
import { useToast } from "@/components/ui/Toast";

const CATEGORIES: ProductCategory[] = [
  "shemagh", "iqal", "watches", "pens", "misbaha",
  "caps", "bracelet", "ring", "makeup", "bags", "boxes",
];

const emptyForm = {
  slug: "",
  nameEn: "",
  nameAr: "",
  descEn: "",
  descAr: "",
  shortDescEn: "",
  shortDescAr: "",
  price: "",
  originalPrice: "",
  category: "shemagh" as ProductCategory,
  images: "",
  inStock: true,
  stockCount: "",
  isNewArrival: false,
  isBestseller: false,
  tags: "",
};

type FormState = typeof emptyForm;

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ProductModal({
  product,
  onClose,
  onSaved,
}: {
  product: Product | null;
  onClose: () => void;
  onSaved: (p: Product) => void;
}) {
  const { show } = useToast();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(() => {
    if (!product) return emptyForm;
    return {
      slug: product.slug,
      nameEn: product.name.en,
      nameAr: product.name.ar,
      descEn: product.description.en,
      descAr: product.description.ar,
      shortDescEn: product.shortDescription.en,
      shortDescAr: product.shortDescription.ar,
      price: String(product.price),
      originalPrice: product.originalPrice ? String(product.originalPrice) : "",
      category: product.category,
      images: product.images.join(", "),
      inStock: product.inStock,
      stockCount: String(product.stockCount),
      isNewArrival: !!product.isNewArrival,
      isBestseller: !!product.isBestseller,
      tags: product.tags?.join(", ") ?? "",
    };
  });

  const isEdit = !!product;

  const set = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => {
      const next = { ...prev, [key]: value };
      // auto-generate slug from English name when creating
      if (key === "nameEn" && !isEdit) {
        next.slug = slugify(value as string);
      }
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.slug || !form.nameEn || !form.price || !form.category) {
      show("Please fill in required fields", "error");
      return;
    }

    setSaving(true);
    const payload = {
      slug: form.slug,
      name: { en: form.nameEn, ar: form.nameAr },
      description: { en: form.descEn, ar: form.descAr },
      shortDescription: { en: form.shortDescEn, ar: form.shortDescAr },
      price: parseFloat(form.price),
      originalPrice: form.originalPrice ? parseFloat(form.originalPrice) : undefined,
      category: form.category,
      images: form.images.split(",").map((s) => s.trim()).filter(Boolean),
      inStock: form.inStock,
      stockCount: parseInt(form.stockCount || "0"),
      isNewArrival: form.isNewArrival,
      isBestseller: form.isBestseller,
      tags: form.tags.split(",").map((s) => s.trim()).filter(Boolean),
      currency: "OMR",
    };

    try {
      const url = isEdit ? `/api/products/${product.slug}` : "/api/products";
      const method = isEdit ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      const saved = data.product ?? data;
      saved.id = saved.slug;
      saved.reviews = saved.reviews ?? [];
      onSaved(saved as Product);
      show(isEdit ? "Product updated!" : "Product created!", "success");
      onClose();
    } catch {
      show("Failed to save product", "error");
    } finally {
      setSaving(false);
    }
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const Field = ({
    label,
    required,
    children,
  }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }) => (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const inputCls =
    "w-full text-sm px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors";

  const firstImage = form.images.split(",")[0]?.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-lg text-gray-900">
            {isEdit ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 px-6 py-5 space-y-5">
          {/* Image Preview + URL */}
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-xl border border-gray-200 bg-gray-50 shrink-0 overflow-hidden flex items-center justify-center">
              {firstImage ? (
                <Image
                  src={firstImage}
                  alt="preview"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              ) : (
                <ImageOff size={24} className="text-gray-300" />
              )}
            </div>
            <Field label="Image URLs (comma-separated)">
              <textarea
                value={form.images}
                onChange={(e) => set("images", e.target.value)}
                placeholder="https://..., https://..."
                rows={3}
                className={inputCls}
              />
            </Field>
          </div>

          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name (English)" required>
              <input
                value={form.nameEn}
                onChange={(e) => set("nameEn", e.target.value)}
                placeholder="Product name"
                required
                className={inputCls}
              />
            </Field>
            <Field label="Name (Arabic)">
              <input
                value={form.nameAr}
                onChange={(e) => set("nameAr", e.target.value)}
                placeholder="اسم المنتج"
                dir="rtl"
                className={inputCls}
              />
            </Field>
          </div>

          {/* Slug */}
          <Field label="Slug (URL-friendly ID)" required>
            <input
              value={form.slug}
              onChange={(e) => set("slug", e.target.value)}
              placeholder="my-product-name"
              required
              className={inputCls}
            />
          </Field>

          {/* Short Description */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Short Description (EN)">
              <textarea
                value={form.shortDescEn}
                onChange={(e) => set("shortDescEn", e.target.value)}
                rows={2}
                className={inputCls}
              />
            </Field>
            <Field label="Short Description (AR)">
              <textarea
                value={form.shortDescAr}
                onChange={(e) => set("shortDescAr", e.target.value)}
                dir="rtl"
                rows={2}
                className={inputCls}
              />
            </Field>
          </div>

          {/* Description */}
          <div className="grid grid-cols-2 gap-4">
            <Field label="Description (EN)">
              <textarea
                value={form.descEn}
                onChange={(e) => set("descEn", e.target.value)}
                rows={3}
                className={inputCls}
              />
            </Field>
            <Field label="Description (AR)">
              <textarea
                value={form.descAr}
                onChange={(e) => set("descAr", e.target.value)}
                dir="rtl"
                rows={3}
                className={inputCls}
              />
            </Field>
          </div>

          {/* Price + Category */}
          <div className="grid grid-cols-3 gap-4">
            <Field label="Price (OMR)" required>
              <input
                type="number"
                step="0.001"
                min="0"
                value={form.price}
                onChange={(e) => set("price", e.target.value)}
                placeholder="0.000"
                required
                className={inputCls}
              />
            </Field>
            <Field label="Original Price (OMR)">
              <input
                type="number"
                step="0.001"
                min="0"
                value={form.originalPrice}
                onChange={(e) => set("originalPrice", e.target.value)}
                placeholder="0.000"
                className={inputCls}
              />
            </Field>
            <Field label="Stock Count">
              <input
                type="number"
                min="0"
                value={form.stockCount}
                onChange={(e) => set("stockCount", e.target.value)}
                placeholder="0"
                className={inputCls}
              />
            </Field>
          </div>

          {/* Category */}
          <Field label="Category" required>
            <select
              value={form.category}
              onChange={(e) => set("category", e.target.value as ProductCategory)}
              className={inputCls}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c} className="capitalize">
                  {c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </select>
          </Field>

          {/* Tags */}
          <Field label="Tags (comma-separated)">
            <input
              value={form.tags}
              onChange={(e) => set("tags", e.target.value)}
              placeholder="luxury, handmade, gift"
              className={inputCls}
            />
          </Field>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6">
            {(
              [
                { key: "inStock", label: "In Stock" },
                { key: "isNewArrival", label: "New Arrival" },
                { key: "isBestseller", label: "Bestseller" },
              ] as { key: keyof FormState; label: string }[]
            ).map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer group">
                <div
                  onClick={() => set(key, !form[key])}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    form[key]
                      ? "bg-primary border-primary"
                      : "border-gray-300 group-hover:border-primary/50"
                  }`}
                >
                  {form[key] && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </form>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2 bg-primary text-white text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {saving && <Loader2 size={14} className="animate-spin" />}
            {isEdit ? "Save Changes" : "Create Product"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<{ open: boolean; product: Product | null }>({
    open: false,
    product: null,
  });
  const [deleting, setDeleting] = useState<string | null>(null);
  const { show } = useToast();

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setProducts(data.products ?? []))
      .finally(() => setLoading(false));
  }, []);

  const filtered = products.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.name.en.toLowerCase().includes(q) ||
      p.name.ar.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q)
    );
  });

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this product? This cannot be undone.")) return;
    setDeleting(slug);
    const res = await fetch(`/api/products/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setProducts((prev) => prev.filter((p) => p.slug !== slug));
      show("Product deleted", "info");
    } else {
      show("Failed to delete product", "error");
    }
    setDeleting(null);
  };

  const handleSaved = (saved: Product) => {
    setProducts((prev) => {
      const idx = prev.findIndex((p) => p.slug === saved.slug);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = saved;
        return next;
      }
      return [saved, ...prev];
    });
  };

  return (
    <>
      {modal.open && (
        <ProductModal
          product={modal.product}
          onClose={() => setModal({ open: false, product: null })}
          onSaved={handleSaved}
        />
      )}

      <div className="max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Products</h1>
            <p className="text-sm text-gray-400 mt-0.5">{products.length} total products</p>
          </div>
          <button
            onClick={() => setModal({ open: true, product: null })}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white transition-colors"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          {loading ? (
            <div className="divide-y divide-gray-50">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 animate-pulse">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-100 rounded w-1/3" />
                    <div className="h-3 bg-gray-100 rounded w-1/4" />
                  </div>
                  <div className="h-4 bg-gray-100 rounded w-16" />
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Package size={40} className="text-gray-200 mb-3" />
              <p className="text-sm font-medium text-gray-400">
                {search ? "No products match your search" : "No products yet"}
              </p>
              {!search && (
                <button
                  onClick={() => setModal({ open: true, product: null })}
                  className="mt-3 text-sm text-primary hover:underline"
                >
                  Add your first product
                </button>
              )}
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left border-b border-gray-100">
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide p-4">Product</th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide p-4">Category</th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide p-4">Price</th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide p-4">Stock</th>
                  <th className="text-xs font-semibold text-gray-500 uppercase tracking-wide p-4">Status</th>
                  <th className="p-4" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                          {p.images?.[0] ? (
                            <Image
                              src={p.images[0]}
                              alt={p.name.en}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <Package size={18} className="text-gray-300" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{p.name.en}</p>
                          <p className="text-xs text-gray-400 truncate">{p.name.ar}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full capitalize font-medium">
                        {p.category}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-semibold text-gray-800">{p.price.toFixed(3)}</p>
                      {p.originalPrice && (
                        <p className="text-xs text-gray-400 line-through">{p.originalPrice.toFixed(3)}</p>
                      )}
                    </td>
                    <td className="p-4 text-sm text-gray-600">{p.stockCount}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex text-xs font-medium px-2.5 py-1 rounded-full ${
                          p.inStock
                            ? "bg-green-50 text-green-700"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {p.inStock ? "In Stock" : "Out"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1 justify-end">
                        <button
                          onClick={() => setModal({ open: true, product: p })}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
                          title="Edit"
                        >
                          <Edit2 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(p.slug)}
                          disabled={deleting === p.slug}
                          className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors disabled:opacity-40"
                          title="Delete"
                        >
                          {deleting === p.slug ? (
                            <Loader2 size={14} className="animate-spin" />
                          ) : (
                            <Trash2 size={14} />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
