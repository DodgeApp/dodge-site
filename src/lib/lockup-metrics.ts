/**
 * Same solve as the iOS welcome lockup (`LockupMetrics` in AuthFlowView) and
 * Android `BrandLockup`. Every line is measured from the font, never from
 * drawn pixels: its top is the cap height, its bottom is the lowest glyph
 * outline, and its left and right edges are the glyph outlines. Both lines
 * span the text column beside the logo, and the logo is as tall as the two
 * lines plus the gap between them.
 */

export const LOCKUP_GAP_FRACTION = 0.04;
export const LOCKUP_LINE_GAP_FRACTION = 0.0115;
export const LOCKUP_TITLE = "Dodge";
export const LOCKUP_SUBTITLE = "Community Safety";

const REFERENCE_SIZE = 100;
const SOLVE_PASSES = 3;

/** One line's outline relative to its origin on the baseline. */
export type LineInk = {
  /** Left edge of the ink, from the line origin. */
  left: number;
  /** Right edge of the ink, from the line origin. */
  right: number;
  /** Cap height above the baseline. */
  cap: number;
  /** Lowest outline below the baseline. */
  descent: number;
};

export type LockupRole = "title" | "subtitle";

export type MeasureLine = (text: string, size: number, role: LockupRole) => LineInk;

/** Sizes and positions inside the row, measured from its top-left. */
export type LockupFit = {
  logo: number;
  gap: number;
  titleSize: number;
  subtitleSize: number;
  titleLeft: number;
  subtitleLeft: number;
  titleBaseline: number;
  subtitleBaseline: number;
};

const inkWidth = (ink: LineInk) => ink.right - ink.left;
const inkHeight = (ink: LineInk) => ink.cap + ink.descent;

/**
 * Width and height of a line both scale with its size, so for a logo of side
 * L the text column is T = W - gap - L and the stack is T·k + lineGap, with
 * k = height/width of "Dodge" plus that of "Community Safety". Setting the
 * stack equal to L gives L = ((W - gap)·k + lineGap) / (1 + k). A few passes
 * re-measure at the solved sizes in case the font is not exactly linear.
 */
export function solveLockup(columnWidth: number, measure: MeasureLine): LockupFit {
  const column = Math.max(columnWidth, 1);
  const gap = column * LOCKUP_GAP_FRACTION;
  const lineGap = column * LOCKUP_LINE_GAP_FRACTION;
  let titleSize = REFERENCE_SIZE;
  let subtitleSize = REFERENCE_SIZE;

  for (let pass = 0; pass < SOLVE_PASSES; pass += 1) {
    const dodge = measure(LOCKUP_TITLE, titleSize, "title");
    const safety = measure(LOCKUP_SUBTITLE, subtitleSize, "subtitle");
    const k = inkHeight(dodge) / inkWidth(dodge) + inkHeight(safety) / inkWidth(safety);
    const logo = ((column - gap) * k + lineGap) / (1 + k);
    const text = column - gap - logo;
    titleSize *= text / inkWidth(dodge);
    subtitleSize *= text / inkWidth(safety);
  }

  const dodge = measure(LOCKUP_TITLE, titleSize, "title");
  const safety = measure(LOCKUP_SUBTITLE, subtitleSize, "subtitle");
  const titleBaseline = dodge.cap;
  const subtitleBaseline = inkHeight(dodge) + lineGap + safety.cap;
  return {
    logo: subtitleBaseline + safety.descent,
    gap,
    titleSize,
    subtitleSize,
    titleLeft: dodge.left,
    subtitleLeft: safety.left,
    titleBaseline,
    subtitleBaseline,
  };
}
