import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/contact-form";

describe("ContactForm", () => {
  it("validates required fields", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
    expect(await screen.findByText("Enter a valid email")).toBeInTheDocument();
  });

  it("blocks honeypot submissions on the client", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText("Name"), "Jordan Smith");
    await user.type(screen.getByLabelText("Email"), "jordan@example.com");
    await user.type(screen.getByLabelText("Company"), "Example Co");
    await user.selectOptions(screen.getByLabelText("Budget range"), "10k-20k");
    await user.type(screen.getByLabelText("Project goals"), "We need a premium redesign.");

    const honeypot = document.querySelector("input[name='website']") as HTMLInputElement;
    fireEvent.change(honeypot, { target: { value: "spam" } });

    await user.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("Spam detected")).toBeInTheDocument();
  });
});
