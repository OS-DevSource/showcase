import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Basic smoke test to ensure key sections render.
describe("Home page", () => {
  it("renders major sections", () => {
    render(<Home />);
    expect(screen.getByText("Obsidian Studio")).toBeInTheDocument();
    expect(screen.getByText("Proof of polish, not promises")).toBeInTheDocument();
    expect(screen.getByText("Designed to feel tailored in any industry")).toBeInTheDocument();
    expect(screen.getByText("A clear process built for momentum")).toBeInTheDocument();
    expect(screen.getByText("What a redesign includes")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "FAQ" })).toBeInTheDocument();
    expect(screen.getByText("Ready for a premium redesign?")).toBeInTheDocument();
  });
});
