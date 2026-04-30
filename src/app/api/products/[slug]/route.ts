import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";
import { getProductBySlug, getProductById } from "@/data/products";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  try {
    await connectDB();
    const doc = await Product.findOne({ slug });
    if (doc) {
      const product = doc.toObject({ virtuals: true });
      product.id = product.slug;
      product.reviews = product.reviews ?? [];
      return NextResponse.json({ product });
    }
  } catch {
    // fall through to static data
  }

  // Fallback: static data (slug may actually be the product id in some cases)
  const product = getProductBySlug(slug) ?? getProductById(slug);
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ product });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await connectDB();
    const { slug } = await params;
    const data = await req.json();
    const product = await Product.findOneAndUpdate({ slug }, data, { new: true });
    return NextResponse.json({ product });
  } catch (err) {
    console.error("[PATCH /api/products/slug]", err);
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    await connectDB();
    const { slug } = await params;
    await Product.findOneAndDelete({ slug });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[DELETE /api/products/slug]", err);
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 });
  }
}
