import { NextResponse } from "next/server";
import { sendOrderConfirmation, sendAdminOrderNotification } from "@/lib/email";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, reason: "email not configured" });
  }

  try {
    const { order } = await req.json();

    const { id, shipping, items, subtotal, shippingCost, total } = order ?? {};
    if (!id || !shipping?.email || !items?.length) {
      return NextResponse.json({ ok: false, reason: "invalid payload" }, { status: 400 });
    }

    const emailData = {
      orderId: id,
      customerName: shipping.fullName,
      customerEmail: shipping.email,
      items: items.map((item: { name: { ar: string; en: string } | string; quantity: number; price: number }) => ({
        name: typeof item.name === "object" ? (item.name.ar ?? item.name.en) : item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      subtotal,
      shippingCost,
      total,
      shipping,
    };

    await Promise.allSettled([
      sendOrderConfirmation(shipping.email, emailData),
      sendAdminOrderNotification(emailData),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[POST /api/notify/order]", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
