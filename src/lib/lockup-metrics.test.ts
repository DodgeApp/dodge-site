import { describe, expect, it } from "vitest";
import { solveLockup, type GlyphInk, type LockupRole } from "./lockup-metrics";

/** Linear stand-in for a rounded face: width and ink both scale with size. */
function linearMeasure(text: string, size: number, role: LockupRole): GlyphInk {
  const tracking = role === "title" ? -0.025 : 0;
  const advance = role === "title" ? 0.68 : 0.5;
  const width = size * advance * text.length + Math.max(text.length - 1, 0) * tracking * size;
  return {
    width,
    ascent: size * (role === "title" ? 0.75 : 0.72),
    descent: size * (role === "title" ? 0.22 : 0.2),
    shift: 0,
  };
}

describe("solveLockup", () => {
  it("matches both line widths to the text column and the ink stack to the logo", () => {
    const column = 512;
    const fit = solveLockup(column, linearMeasure);
    const dodge = linearMeasure("Dodge", fit.titleSize, "title");
    const safety = linearMeasure("Community Safety", fit.subtitleSize, "subtitle");

    expect(fit.logo + fit.gap + fit.textWidth).toBeCloseTo(column, 5);
    expect(dodge.width).toBeCloseTo(fit.textWidth, 2);
    expect(safety.width).toBeCloseTo(fit.textWidth, 2);
    expect(dodge.ascent + dodge.descent + fit.lineGap + safety.ascent + safety.descent).toBeCloseTo(fit.logo, 2);
    expect(fit.dodgeInkHeight).toBeCloseTo(dodge.ascent + dodge.descent, 5);
    expect(fit.subtitleInkHeight).toBeCloseTo(safety.ascent + safety.descent, 5);
  });
});
