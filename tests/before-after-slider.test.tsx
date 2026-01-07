import { render, screen, fireEvent } from "@testing-library/react";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const setRect = (element: HTMLElement) => {
  Object.defineProperty(element, "getBoundingClientRect", {
    value: () => ({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
      right: 200,
      bottom: 100,
    }),
  });
};

describe("BeforeAfterSlider", () => {
  it("responds to keyboard controls", () => {
    render(<BeforeAfterSlider beforeSrc="/before.png" afterSrc="/after.png" />);
    const slider = screen.getByRole("slider", { name: "Compare before and after" });
    const startValue = Number(slider.getAttribute("aria-valuenow"));

    fireEvent.keyDown(slider, { key: "ArrowRight" });

    const endValue = Number(slider.getAttribute("aria-valuenow"));
    expect(endValue).toBeGreaterThan(startValue);
  });

  it("responds to pointer drag", () => {
    render(<BeforeAfterSlider beforeSrc="/before.png" afterSrc="/after.png" />);
    const slider = screen.getByRole("slider", { name: "Compare before and after" });
    const container = slider.parentElement as HTMLElement;
    setRect(container);

    fireEvent.pointerDown(slider, { clientX: 160, pointerId: 1 });
    fireEvent.pointerMove(slider, { clientX: 160, pointerId: 1 });
    fireEvent.pointerUp(slider, { clientX: 160, pointerId: 1 });

    const value = Number(slider.getAttribute("aria-valuenow"));
    expect(value).toBeGreaterThan(50);
  });
});
