import { POST } from "@/app/api/contact/route";

const basePayload = {
  name: "Jordan Smith",
  email: "jordan@example.com",
  company: "Example Co",
  budget: "10k-20k",
  message: "We need a premium redesign.",
  website: "",
};

describe("POST /api/contact", () => {
  const originalResendKey = process.env.RESEND_API_KEY;
  const originalPostmarkToken = process.env.POSTMARK_API_TOKEN;
  const originalContactFrom = process.env.CONTACT_FROM;

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.POSTMARK_API_TOKEN;
    delete process.env.CONTACT_FROM;
  });

  afterEach(() => {
    if (originalResendKey) {
      process.env.RESEND_API_KEY = originalResendKey;
    } else {
      delete process.env.RESEND_API_KEY;
    }
    if (originalPostmarkToken) {
      process.env.POSTMARK_API_TOKEN = originalPostmarkToken;
    } else {
      delete process.env.POSTMARK_API_TOKEN;
    }
    if (originalContactFrom) {
      process.env.CONTACT_FROM = originalContactFrom;
    } else {
      delete process.env.CONTACT_FROM;
    }
  });

  it("blocks honeypot submissions on the server", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...basePayload, website: "spam" }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.ok).toBe(false);
  });

  it("returns demo mode when no provider is configured in non-production", async () => {
    const request = new Request("http://localhost/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(basePayload),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.demoMode).toBe(true);
  });
});
