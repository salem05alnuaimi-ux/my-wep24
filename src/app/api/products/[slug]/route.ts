// src/app/api/products/[slug]/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const product = await Product.findOne({ slug: params.slug });
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ product });
}

export async function PATCH(req: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  const data = await req.json();
  const product = await Product.findOneAndUpdate({ slug: params.slug }, data, { new: true });
  return NextResponse.json({ product });
}

export async function DELETE(_: Request, { params }: { params: { slug: string } }) {
  await connectDB();
  await Product.findOneAndDelete({ slug: params.slug });
  return NextResponse.json({ ok: true });
}