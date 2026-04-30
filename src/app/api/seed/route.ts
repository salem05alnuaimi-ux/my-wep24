import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";
import { User } from "@/lib/models/User";
import { hashPassword } from "@/lib/auth";
import { products } from "@/data/products";

export async function POST() {
  try {
    await connectDB();

    // Seed admin user
    const adminEmail = "admin@yezhabk.om";
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashed = await hashPassword("admin123");
      await User.create({
        name: "Salem Admin",
        email: adminEmail,
        password: hashed,
        role: "admin",
      });
    }

    // Seed products
    let inserted = 0;
    let skipped = 0;

    for (const product of products) {
      const { id, reviews, ...data } = product as any;
      const cleanData = JSON.parse(JSON.stringify(data));
      const exists = await Product.findOne({ slug: cleanData.slug });
      if (!exists) {
        await Product.create(cleanData);
        inserted++;
      } else {
        skipped++;
      }
    }

    return NextResponse.json({
      ok: true,
      admin: existingAdmin ? "already exists" : "created",
      inserted,
      skipped,
    });
  } catch (err) {
    console.error("[POST /api/seed]", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
