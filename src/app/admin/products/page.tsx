"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { products as initialProducts } from "@/data/products";
import { Product } from "@/types";
import { useToast } from "@/components/ui/Toast";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const { show } = useToast();

  const handleDelete = (id: string) => {
    if (!confirm("Delete this product?")) return;
    setProducts(products.filter((p) => p.id !== id));
    show("Product deleted", "info");
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl font-bold">Products</h1>
        <button className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
            <tr>
              <th className="text-start p-4">Product</th>
              <th className="text-start p-4">Category</th>
              <th className="text-start p-4">Price</th>
              <th className="text-start p-4">Stock</th>
              <th className="text-start p-4">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-gray-100">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-50">
                      <Image src={p.images[0]} alt={p.name.en} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{p.name.en}</p>
                      <p className="text-xs text-gray-500">{p.name.ar}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-sm capitalize">{p.category}</td>
                <td className="p-4 text-sm font-medium">{p.price.toFixed(3)}</td>
                <td className="p-4 text-sm">{p.stockCount}</td>
                <td className="p-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {p.inStock ? "Active" : "Out"}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 justify-end">
                    <button className="p-2 hover:bg-gray-100 rounded-lg"><Edit2 size={14} /></button>
                    <button onClick={() => handleDelete(p.id)} className="p-2 hover:bg-red-50 hover:text-red-600 rounded-lg"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}