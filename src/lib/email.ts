import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "YEZHABK <onboarding@resend.dev>";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "salem05alnuaimi@gmail.com";
const STORE_URL = process.env.NEXTAUTH_URL ?? "https://yezhabk.om";

// ─── Shared helpers ──────────────────────────────────────────────────────────

function base(content: string) {
  return `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#F5EFE7;font-family:Arial,Helvetica,sans-serif;direction:rtl;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F5EFE7;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(44,24,16,.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2C1810 0%,#4A2818 100%);padding:32px 40px;text-align:center;">
            <p style="margin:0;color:#C9996B;font-size:11px;letter-spacing:4px;text-transform:uppercase;font-weight:600;margin-bottom:8px;">LUXURY STORE</p>
            <h1 style="margin:0;color:#FFFFFF;font-size:32px;letter-spacing:6px;font-weight:300;">YEZHABK</h1>
            <p style="margin:8px 0 0;color:#C9996B;font-size:12px;">يزهابك</p>
          </td>
        </tr>

        <!-- Body -->
        <tr><td style="padding:40px;">
          ${content}
        </td></tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F8F5F0;padding:24px 40px;text-align:center;border-top:1px solid #EAE0D5;">
            <p style="margin:0 0 8px;color:#2C1810;font-size:13px;font-weight:600;">ثقة تُبنى... وتميّز يُحترم</p>
            <p style="margin:0;color:#8A7A6A;font-size:11px;">
              <a href="https://wa.me/96894924300" style="color:#C9996B;text-decoration:none;">واتساب: +968 9492 4300</a>
              &nbsp;•&nbsp;
              <a href="mailto:hello@yezhabk.om" style="color:#C9996B;text-decoration:none;">hello@yezhabk.om</a>
            </p>
            <p style="margin:12px 0 0;color:#B0A090;font-size:10px;">© 2026 YEZHABK. جميع الحقوق محفوظة</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function itemsTable(items: Array<{ name: string; quantity: number; price: number }>) {
  const rows = items
    .map(
      (item) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #F0E8E0;color:#2C1810;font-size:14px;">${item.name}</td>
      <td style="padding:12px 0;border-bottom:1px solid #F0E8E0;color:#8A7A6A;font-size:14px;text-align:center;">${item.quantity}</td>
      <td style="padding:12px 0;border-bottom:1px solid #F0E8E0;color:#C9996B;font-size:14px;font-weight:600;text-align:left;">${(item.price * item.quantity).toFixed(3)} ر.ع</td>
    </tr>`
    )
    .join("");

  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
    <tr>
      <th style="padding:8px 0;color:#8A7A6A;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #EAE0D5;text-align:right;">المنتج</th>
      <th style="padding:8px 0;color:#8A7A6A;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #EAE0D5;text-align:center;">الكمية</th>
      <th style="padding:8px 0;color:#8A7A6A;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;border-bottom:2px solid #EAE0D5;text-align:left;">السعر</th>
    </tr>
    ${rows}
  </table>`;
}

// ─── Order Confirmation (to customer) ────────────────────────────────────────

interface OrderEmailData {
  orderId: string;
  customerName: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  subtotal: number;
  shippingCost: number;
  total: number;
  shipping: {
    fullName: string;
    phone: string;
    country: string;
    city: string;
    address: string;
  };
}

export async function sendOrderConfirmation(to: string, data: OrderEmailData) {
  const html = base(`
    <div style="text-align:center;margin-bottom:32px;">
      <div style="width:64px;height:64px;background:#E8F5E9;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;">
        <span style="font-size:28px;">✅</span>
      </div>
      <h2 style="margin:0 0 8px;color:#2C1810;font-size:22px;font-weight:700;">تم استلام طلبك!</h2>
      <p style="margin:0;color:#8A7A6A;font-size:14px;">سنتواصل معك قريباً لتأكيد الطلب وترتيب الشحن</p>
    </div>

    <div style="background:#F8F5F0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0;color:#8A7A6A;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">رقم الطلب</p>
      <p style="margin:4px 0 0;color:#C9996B;font-size:20px;font-weight:700;letter-spacing:2px;">${data.orderId}</p>
    </div>

    ${itemsTable(data.items)}

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td style="padding:6px 0;color:#8A7A6A;font-size:13px;">المجموع الفرعي</td>
        <td style="padding:6px 0;color:#2C1810;font-size:13px;text-align:left;">${data.subtotal.toFixed(3)} ر.ع</td>
      </tr>
      <tr>
        <td style="padding:6px 0;color:#8A7A6A;font-size:13px;">الشحن</td>
        <td style="padding:6px 0;color:#2C1810;font-size:13px;text-align:left;">${data.shippingCost === 0 ? "مجاني" : `${data.shippingCost.toFixed(3)} ر.ع`}</td>
      </tr>
      <tr style="border-top:2px solid #EAE0D5;">
        <td style="padding:12px 0 0;color:#2C1810;font-size:15px;font-weight:700;">الإجمالي</td>
        <td style="padding:12px 0 0;color:#C9996B;font-size:18px;font-weight:700;text-align:left;">${data.total.toFixed(3)} ر.ع</td>
      </tr>
    </table>

    <div style="background:#F8F5F0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 8px;color:#2C1810;font-size:13px;font-weight:700;">عنوان التوصيل</p>
      <p style="margin:0;color:#8A7A6A;font-size:13px;line-height:1.6;">
        ${data.shipping.fullName}<br/>
        ${data.shipping.city}، ${data.shipping.country}<br/>
        ${data.shipping.address}<br/>
        📞 ${data.shipping.phone}
      </p>
    </div>

    <div style="text-align:center;margin-top:8px;">
      <a href="https://wa.me/96894924300" style="display:inline-block;background:#25D366;color:#FFFFFF;text-decoration:none;padding:12px 28px;border-radius:24px;font-size:14px;font-weight:600;">تتبع طلبك عبر واتساب</a>
    </div>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: `تم استلام طلبك ${data.orderId} — YEZHABK`,
    html,
  });
}

// ─── Admin New Order Notification ────────────────────────────────────────────

export async function sendAdminOrderNotification(data: OrderEmailData & { customerEmail: string }) {
  const html = base(`
    <h2 style="margin:0 0 4px;color:#2C1810;font-size:20px;font-weight:700;">🛍️ طلب جديد</h2>
    <p style="margin:0 0 24px;color:#8A7A6A;font-size:13px;">رقم الطلب: <strong style="color:#C9996B;">${data.orderId}</strong></p>

    <div style="background:#F8F5F0;border-radius:12px;padding:16px 20px;margin-bottom:24px;">
      <p style="margin:0 0 4px;color:#2C1810;font-size:13px;font-weight:700;">العميل</p>
      <p style="margin:0;color:#8A7A6A;font-size:13px;">${data.customerName} — <a href="mailto:${data.customerEmail}" style="color:#C9996B;">${data.customerEmail}</a></p>
    </div>

    ${itemsTable(data.items)}

    <p style="margin:0 0 24px;color:#2C1810;font-size:16px;font-weight:700;">الإجمالي: <span style="color:#C9996B;">${data.total.toFixed(3)} ر.ع</span></p>

    <div style="background:#F8F5F0;border-radius:12px;padding:16px 20px;">
      <p style="margin:0 0 8px;color:#2C1810;font-size:13px;font-weight:700;">عنوان الشحن</p>
      <p style="margin:0;color:#8A7A6A;font-size:13px;line-height:1.6;">
        ${data.shipping.fullName} — 📞 ${data.shipping.phone}<br/>
        ${data.shipping.city}، ${data.shipping.country}<br/>
        ${data.shipping.address}
      </p>
    </div>

    <div style="text-align:center;margin-top:24px;">
      <a href="${STORE_URL}/admin/orders" style="display:inline-block;background:#2C1810;color:#FFFFFF;text-decoration:none;padding:12px 28px;border-radius:24px;font-size:14px;font-weight:600;">عرض لوحة الإدارة</a>
    </div>
  `);

  return resend.emails.send({
    from: FROM,
    to: ADMIN_EMAIL,
    subject: `🛍️ طلب جديد ${data.orderId} — ${data.total.toFixed(3)} ر.ع`,
    html,
  });
}

// ─── Welcome Email (new registration) ────────────────────────────────────────

export async function sendWelcomeEmail(to: string, name: string) {
  const html = base(`
    <div style="text-align:center;margin-bottom:32px;">
      <h2 style="margin:0 0 8px;color:#2C1810;font-size:24px;font-weight:700;">أهلاً ${name} 👋</h2>
      <p style="margin:0;color:#8A7A6A;font-size:15px;line-height:1.6;">
        يسعدنا انضمامك لعائلة يزهابك<br/>
        متجرك للمنتجات الراقية المختارة بعناية
      </p>
    </div>

    <div style="display:grid;gap:12px;margin-bottom:32px;">
      ${[
        ["🚀", "توصيل سريع", "خلال ٢–٤ أيام عمل لعُمان والإمارات"],
        ["✅", "منتجات أصيلة", "كل منتج مضمون الجودة والأصالة"],
        ["💬", "خدمة شخصية", "تواصل معنا مباشرة عبر واتساب"],
      ]
        .map(
          ([icon, title, desc]) => `
        <div style="background:#F8F5F0;border-radius:12px;padding:16px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:22px;">${icon}</span>
          <div>
            <p style="margin:0 0 2px;color:#2C1810;font-size:13px;font-weight:700;">${title}</p>
            <p style="margin:0;color:#8A7A6A;font-size:12px;">${desc}</p>
          </div>
        </div>`
        )
        .join("")}
    </div>

    <div style="text-align:center;">
      <a href="${STORE_URL}/products" style="display:inline-block;background:#C9996B;color:#FFFFFF;text-decoration:none;padding:14px 36px;border-radius:24px;font-size:15px;font-weight:600;">تصفح المنتجات</a>
    </div>
  `);

  return resend.emails.send({
    from: FROM,
    to,
    subject: `أهلاً ${name}! مرحباً بك في YEZHABK يزهابك`,
    html,
  });
}
