// src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";

export async function GET(req: Request) {
  await connectDB();
  const url = new URL(req.url);
  const category = url.searchParams.get("category");
  const filter = category ? { category } : {};
  const products = await Product.find(filter).sort({ createdAt: -1 });
  return NextResponse.json({ products });
}

export async function POST(req: Request) {
  // Admin only — middleware in real app
  await connectDB();
  const data = await req.json();
  const product = await Product.create(data);
  return NextResponse.json({ product });
}