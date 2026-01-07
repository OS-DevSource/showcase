import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json({ ok: false, message: "Invalid payload" }, { status: 400 });
  }

  if (result.data.website) {
    return NextResponse.json({ ok: false, message: "Spam detected" }, { status: 400 });
  }

  const { website: _website, ...payload } = result.data;
  void _website;
  const endpoint = process.env.CONTACT_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json({ ok: true, demoMode: true }, { status: 200 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, message: "Forwarding failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, message: "Forwarding failed" }, { status: 502 });
  }
}
