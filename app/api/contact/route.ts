import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ServerClient } from "postmark";
import { contactSchema } from "@/lib/contact-schema";

const CONTACT_TO = "os.devsource@gmail.com";
const DEFAULT_FROM = "Showcase Contact <onboarding@resend.dev>";
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;

const rateLimits = new Map<string, { count: number; resetAt: number }>();

const getClientIp = (request: Request) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
};

const checkRateLimit = (ip: string) => {
  const now = Date.now();
  if (rateLimits.size > 500) {
    for (const [key, entry] of rateLimits.entries()) {
      if (entry.resetAt <= now) {
        rateLimits.delete(key);
      }
    }
  }

  const entry = rateLimits.get(ip);
  if (!entry || entry.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimits.set(ip, { count: 1, resetAt });
    return { allowed: true, resetAt };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, resetAt: entry.resetAt };
  }

  entry.count += 1;
  rateLimits.set(ip, entry);
  return { allowed: true, resetAt: entry.resetAt };
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ ok: false, message: "Invalid payload" }, { status: 400 });
  }

  if (result.data.website) {
    return NextResponse.json({ ok: false, message: "Spam detected" }, { status: 400 });
  }

  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.allowed) {
    const retryAfterSeconds = Math.ceil((rateLimit.resetAt - Date.now()) / 1000);
    return NextResponse.json(
      { ok: false, message: "Too many requests. Try again soon." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.max(retryAfterSeconds, 1)) },
      },
    );
  }

  const { website: _website, ...payload } = result.data;
  void _website;

  const resendKey = process.env.RESEND_API_KEY;
  const postmarkToken = process.env.POSTMARK_API_TOKEN;
  const contactFrom = process.env.CONTACT_FROM;
  const resendFrom = contactFrom || DEFAULT_FROM;

  if (!resendKey && !postmarkToken) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { ok: false, message: "Email service not configured" },
        { status: 500 },
      );
    }
    console.info("Contact form demo mode: email send skipped.");
    return NextResponse.json(
      { ok: true, demoMode: true, message: "Email service not configured" },
      { status: 200 },
    );
  }

  const subject = `New contact request from ${payload.name}`;
  const text = [
    "New contact form submission",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company}`,
    `Budget: ${payload.budget}`,
    "Message:",
    payload.message,
  ].join("\n");

  try {
    if (resendKey) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from: resendFrom,
        to: CONTACT_TO,
        subject,
        text,
        replyTo: payload.email,
      });

      if (error) {
        return NextResponse.json({ ok: false, message: "Email send failed" }, { status: 502 });
      }

      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!contactFrom) {
      return NextResponse.json(
        { ok: false, message: "Email sender not configured" },
        { status: 500 },
      );
    }

    const postmark = new ServerClient(postmarkToken as string);
    await postmark.sendEmail({
      From: contactFrom,
      To: CONTACT_TO,
      Subject: subject,
      TextBody: text,
      ReplyTo: payload.email,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Email send failed" }, { status: 502 });
  }
}
