import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Order } from "@/lib/models/Order";
import { getTokenFromHeader, verifyToken } from "@/lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const token = getTokenFromHeader(req);
  const decoded = token ? verifyToken(token) : null;
  const data = await req.json();
  const order = await Order.create({ ...data, userId: decoded?.id });
  return NextResponse.json({ order });
}

export async function GET(req: Request) {
  await connectDB();
  const token = getTokenFromHeader(req);
  const decoded = token ? verifyToken(token) : null;
  if (!decoded) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const filter = decoded.role === "admin" ? {} : { userId: decoded.id };
  const orders = await Order.find(filter).sort({ createdAt: -1 });
  return NextResponse.json({ orders });
}