import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MaterialSymbol from "./MaterialSymbol";
import { MATERIAL_SYMBOLS } from "./material-symbols";

describe("MaterialSymbol", () => {
  it("has path data for every bundled symbol", () => {
    for (const [name, d] of Object.entries(MATERIAL_SYMBOLS)) {
      expect(d, name).toMatch(/^[Mm][\d\s.,a-zA-Z-]+$/);
    }
  });

  it("renders a decorative glyph at the requested size in currentColor", () => {
    const { container } = render(<MaterialSymbol name="mail" size={18} />);
    const svg = container.querySelector("svg")!;
    expect(svg.getAttribute("width")).toBe("18");
    expect(svg.getAttribute("height")).toBe("18");
    expect(svg.getAttribute("fill")).toBe("currentColor");
    expect(svg.getAttribute("aria-hidden")).toBe("true");
    expect(svg.querySelector("path")!.getAttribute("d")).toBe(MATERIAL_SYMBOLS.mail);
  });

  it("is exposed as an image when labelled", () => {
    const { getByRole } = render(<MaterialSymbol name="search" aria-label="Search" />);
    expect(getByRole("img", { name: "Search" })).toBeTruthy();
  });

  it("mirrors the back chevron for forward disclosure", () => {
    const { container } = render(<MaterialSymbol name="arrow_back_ios_new" mirrored className="h-4" />);
    expect(container.querySelector("svg")!.getAttribute("class")).toBe("-scale-x-100 h-4");
  });
});
