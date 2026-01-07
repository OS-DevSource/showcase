import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ThemeToggle } from "@/components/theme-toggle";

vi.mock("next-themes", () => {
  return {
    useTheme: () => ({
      theme: undefined,
      setTheme: vi.fn(),
    }),
  };
});

describe("ThemeToggle initial render", () => {
  it("defaults to Auto when theme is undefined", () => {
    render(<ThemeToggle />);

    const autoButton = screen.getByRole("radio", { name: "Auto", hidden: true });
    const darkButton = screen.getByRole("radio", { name: "Dark", hidden: true });

    expect(autoButton).toHaveAttribute("aria-checked", "true");
    expect(darkButton).toHaveAttribute("aria-checked", "false");
  });
});
