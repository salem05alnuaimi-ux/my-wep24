import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  const { slug } = await params;
  const product = await Product.findOne({ slug });
  if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ product });
}

export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  const { slug } = await params;
  const data = await req.json();
  const product = await Product.findOneAndUpdate({ slug }, data, { new: true });
  return NextResponse.json({ product });
}

export async function DELETE(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  await connectDB();
  const { slug } = await params;
  await Product.findOneAndDelete({ slug });
  return NextResponse.json({ ok: true });
}
