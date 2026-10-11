/**
 * Same search as the iOS welcome lockup (`LockupMetrics` in AuthFlowView).
 * The logo and both font sizes move together: each line is as wide as the
 * text column beside the logo, and the ink of the two lines plus the gap
 * between them matches the logo. Callers place each line on its font
 * bounding box, then move the drawn line by `shift` so the painted top
 * meets the logo. Changing the line's position to chase that pixel hints
 * the glyphs again and skips the edge.
 */

export const LOCKUP_GAP_FRACTION = 0.04;
export const LOCKUP_LINE_GAP_FRACTION = 0.0115;

export type GlyphInk = {
  width: number;
  /** Distance from the baseline up to the top painted pixel. */
  ascent: number;
  /** Distance from the baseline down to the bottom painted pixel. */
  descent: number;
  /**
   * How far the painted top sits above the font bounding box, in the same
   * units as `ascent`. Positive moves the already drawn line down onto the icon.
   */
  shift: number;
};

export type LockupRole = "title" | "subtitle";

export type LockupFit = {
  logo: number;
  gap: number;
  lineGap: number;
  textWidth: number;
  titleSize: number;
  subtitleSize: number;
  dodgeAscent: number;
  dodgeInkHeight: number;
  dodgeShift: number;
  subtitleAscent: number;
  subtitleInkHeight: number;
  subtitleShift: number;
};

export type MeasureGlyph = (text: string, size: number, role: LockupRole) => GlyphInk;

export function solveLockup(columnWidth: number, measure: MeasureGlyph): LockupFit {
  const column = Math.max(columnWidth, 1);
  const gap = column * LOCKUP_GAP_FRACTION;
  const lineGap = column * LOCKUP_LINE_GAP_FRACTION;

  let low = column * 0.12;
  let high = column * 0.62;
  let logo = column * 0.29;
  let title = column * 0.22;
  let subtitle = column * 0.08;
  let textWidth = Math.max(column - logo - gap, 1);

  for (let pass = 0; pass < 24; pass += 1) {
    logo = (low + high) / 2;
    textWidth = Math.max(column - logo - gap, 1);
    title = sizeMatching(measure, "Dodge", "title", textWidth);
    subtitle = sizeMatching(measure, "Community Safety", "subtitle", textWidth);
    const visual = inkHeight(measure, "Dodge", title, "title") + lineGap + inkHeight(measure, "Community Safety", subtitle, "subtitle");
    if (visual > logo) low = logo;
    else high = logo;
  }

  const dodge = measure("Dodge", title, "title");
  const safety = measure("Community Safety", subtitle, "subtitle");
  return {
    logo,
    gap,
    lineGap,
    textWidth,
    titleSize: title,
    subtitleSize: subtitle,
    dodgeAscent: dodge.ascent,
    dodgeInkHeight: dodge.ascent + dodge.descent,
    dodgeShift: dodge.shift,
    subtitleAscent: safety.ascent,
    subtitleInkHeight: safety.ascent + safety.descent,
    subtitleShift: safety.shift,
  };
}

function sizeMatching(measure: MeasureGlyph, text: string, role: LockupRole, target: number): number {
  let low = 1;
  let high = Math.max(target, 2);
  for (let pass = 0; pass < 28; pass += 1) {
    const mid = (low + high) / 2;
    const width = measure(text, mid, role).width;
    if (width < target) low = mid;
    else high = mid;
  }
  return (low + high) / 2;
}

function inkHeight(measure: MeasureGlyph, text: string, size: number, role: LockupRole): number {
  const glyph = measure(text, size, role);
  return glyph.ascent + glyph.descent;
}
