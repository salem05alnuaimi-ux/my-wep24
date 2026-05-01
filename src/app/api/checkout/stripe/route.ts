import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

interface LineItem {
  name: { ar: string; en: string };
  price: number;
  image: string;
  quantity: number;
}

export async function POST(req: Request) {
  const { items, orderId, email } = await req.json();
  const baseUrl = process.env.NEXTAUTH_URL!;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: LineItem) => ({
        price_data: {
          currency: "omr",
          product_data: {
            name: item.name.ar || item.name.en,
            images: item.image.startsWith("http")
              ? [item.image]
              : [`${baseUrl}${item.image}`],
          },
          // OMR smallest unit is baisa (1 OMR = 1000 baisa)
          unit_amount: Math.round(item.price * 1000),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      customer_email: email,
      success_url: `${baseUrl}/checkout/success?order=${orderId}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/checkout`,
      metadata: { orderId },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
