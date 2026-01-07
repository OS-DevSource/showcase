import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProviders } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { vi } from "vitest";

const createMatchMedia = (matches: boolean) => (query: string) => {
  return {
    matches: query.includes("dark") ? matches : !matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  } as MediaQueryList;
};

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = "";
  });

  it("persists the selected theme", async () => {
    const user = userEvent.setup();
    render(
      <ThemeProviders>
        <ThemeToggle />
      </ThemeProviders>
    );

    const darkButton = await screen.findByRole("radio", { name: "Dark" });
    await user.click(darkButton);

    await waitFor(() => {
      expect(localStorage.getItem("showcase-theme")).toBe("dark");
    });
  });

  it("follows system theme when set to auto", async () => {
    window.matchMedia = vi.fn().mockImplementation(createMatchMedia(true));
    const user = userEvent.setup();

    render(
      <ThemeProviders>
        <ThemeToggle />
      </ThemeProviders>
    );

    const autoButton = await screen.findByRole("radio", { name: "Auto" });
    await user.click(autoButton);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });
  });
});
