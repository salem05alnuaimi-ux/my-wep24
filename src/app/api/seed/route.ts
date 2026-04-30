import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";
import { products } from "@/data/products";

export async function POST() {
  try {
    await connectDB();

    let inserted = 0;
    let skipped = 0;

    for (const product of products) {
      const { id, reviews, ...data } = product as any;
      const exists = await Product.findOne({ slug: data.slug });
      if (!exists) {
        await Product.create(data);
        inserted++;
      } else {
        skipped++;
      }
    }

    return NextResponse.json({ ok: true, inserted, skipped });
  } catch (err) {
    console.error("[POST /api/seed]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
