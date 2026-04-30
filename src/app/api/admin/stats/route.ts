import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Product } from "@/lib/models/Product";
import { Order } from "@/lib/models/Order";
import { getTokenFromHeader, verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
  const token = getTokenFromHeader(req);
  const decoded = token ? verifyToken(token) : null;
  if (!decoded || decoded.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    await connectDB();

    const [orders, productCount] = await Promise.all([
      Order.find({}, { total: 1, status: 1, createdAt: 1, shippingAddress: 1 })
        .sort({ createdAt: -1 })
        .lean(),
      Product.countDocuments(),
    ]);

    const totalRevenue = orders.reduce((sum, o) => sum + (o.total ?? 0), 0);
    const pendingOrders = orders.filter((o) => o.status === "pending").length;

    return NextResponse.json({
      totalRevenue,
      totalOrders: orders.length,
      productCount,
      pendingOrders,
      recentOrders: orders.slice(0, 5),
    });
  } catch (err) {
    console.error("[GET /api/admin/stats]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
