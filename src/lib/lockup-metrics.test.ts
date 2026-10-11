import { describe, expect, it } from "vitest";
import { solveLockup, type LineInk, type LockupRole } from "./lockup-metrics";

/** Linear stand-in for a font: every outline scales with size. */
function linearMeasure(text: string, size: number, role: LockupRole): LineInk {
  const advance = role === "title" ? 0.66 : 0.5;
  return {
    left: size * 0.06,
    right: size * advance * text.length,
    cap: size * 0.7,
    descent: size * 0.21,
  };
}

describe("solveLockup", () => {
  it("spans both lines across the text column and matches the logo to the stack", () => {
    const column = 512;
    const fit = solveLockup(column, linearMeasure);
    const dodge = linearMeasure("Dodge", fit.titleSize, "title");
    const safety = linearMeasure("Community Safety", fit.subtitleSize, "subtitle");
    const textX = fit.logo + fit.gap;

    expect(textX - fit.titleLeft + dodge.left).toBeCloseTo(textX, 5);
    expect(textX - fit.titleLeft + dodge.right).toBeCloseTo(column, 3);
    expect(textX - fit.subtitleLeft + safety.right).toBeCloseTo(column, 3);
    expect(fit.titleBaseline - dodge.cap).toBeCloseTo(0, 5);
    expect(fit.subtitleBaseline + safety.descent).toBeCloseTo(fit.logo, 5);
    expect(fit.subtitleBaseline - safety.cap - (fit.titleBaseline + dodge.descent)).toBeCloseTo(column * 0.0115, 5);
  });
});
