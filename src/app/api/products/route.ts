// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";
import { products as staticProducts } from "@/data/products";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const category = url.searchParams.get("category");

  try {
    await connectDB();
    const filter = category ? { category } : {};
    const docs = await Product.find(filter).sort({ createdAt: -1 });
    if (docs.length > 0) {
      const products = docs.map((doc) => {
        const obj = doc.toObject({ virtuals: true });
        obj.id = obj.slug;
        obj.reviews = obj.reviews ?? [];
        return obj;
      });
      return NextResponse.json({ products });
    }
  } catch {
    // fall through to static data
  }

  // Fallback: serve from static data file
  const list = category
    ? staticProducts.filter((p) => p.category === category)
    : staticProducts;
  const products = list
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map((p) => ({ ...p }));
  return NextResponse.json({ products });
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const product = await Product.create(data);
    return NextResponse.json({ product });
  } catch (err) {
    console.error("[POST /api/products]", err);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}