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

  it("returns demo mode when no endpoint is configured", async () => {
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
