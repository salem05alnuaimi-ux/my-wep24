import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/lib/models/User";
import { hashPassword, signToken } from "@/lib/auth";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, password, phone } = await req.json();

    const exists = await User.findOne({ email: email.toLowerCase() });
    if (exists) {
      return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }

    const hashed = await hashPassword(password);
    const user = await User.create({ name, email, password: hashed, phone });

    const token = signToken({ id: user._id.toString(), role: user.role });

    // Fire-and-forget welcome email
    if (process.env.RESEND_API_KEY) {
      sendWelcomeEmail(user.email, user.name).catch((e) => console.error("[Welcome Email]", e));
    }

    return NextResponse.json({
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        phone: user.phone ?? null,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error("[POST /api/auth/register]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
