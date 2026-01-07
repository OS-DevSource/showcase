import { render, screen } from "@testing-library/react";
import { ProofSection } from "@/components/proof-section";

describe("ProofSection", () => {
  it("keeps the slider container non-sticky and non-fixed", () => {
    render(<ProofSection />);

    const sliderHandle = screen.getByRole("slider", { name: /compare before and after/i });
    const container = sliderHandle.parentElement;

    expect(container).toBeTruthy();
    expect(container?.className).not.toMatch(/\bsticky\b/i);
    expect(container?.className).not.toMatch(/\bfixed\b/i);
  });
});
