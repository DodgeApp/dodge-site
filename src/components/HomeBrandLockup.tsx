import { useLayoutEffect, useRef, useState } from "react";
import dodgeLogo from "@/assets/dodge-logo.png";
import {
  LOCKUP_SUBTITLE,
  LOCKUP_TITLE,
  solveLockup,
  type LineInk,
  type LockupFit,
  type LockupRole,
  type MeasureLine,
} from "@/lib/lockup-metrics";

const TITLE_TRACKING = -0.025;
const WEIGHT: Record<LockupRole, number> = { title: 800, subtitle: 500 };

type PlacedLockup = LockupFit & { column: number };

/** Where the browser put each line's baseline inside its own box, for the sizes in `fit`. */
type Baselines = { titleSize: number; subtitleSize: number; title: number; subtitle: number };

/**
 * Glyph outlines from canvas `measureText`, in the face the page uses. CSS
 * letter-spacing follows every character, so it moves the last glyph's ink
 * right by (n - 1) steps and leaves the first glyph where it is.
 */
function lineMeasurer(family: string) {
  const context = document.createElement("canvas").getContext("2d");
  if (!context) return null;
  const font = (role: LockupRole, size: number) => `${WEIGHT[role]} ${size}px ${family}`;

  const measure: MeasureLine = (text, size, role): LineInk => {
    context.font = font(role, size);
    const line = context.measureText(text);
    const tracking = role === "title" ? TITLE_TRACKING * size : 0;
    return {
      left: -line.actualBoundingBoxLeft,
      right: line.actualBoundingBoxRight + Math.max(text.length - 1, 0) * tracking,
      cap: context.measureText("H").actualBoundingBoxAscent,
      descent: Math.max(line.actualBoundingBoxDescent, 0),
    };
  };

  return measure;
}

/**
 * Homepage lockup, same as the app welcome screen: the logo, then "Dodge" over
 * "Community Safety". The row is the full column (the Download button's width),
 * both lines end on its right edge, and the logo runs from the top of the D to
 * the bottom of "Community Safety".
 */
export default function HomeBrandLockup() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [fit, setFit] = useState<PlacedLockup | null>(null);
  const [baselines, setBaselines] = useState<Baselines | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const solve = () => {
      const column = root.clientWidth;
      if (column < 2) return;
      const measure = lineMeasurer(getComputedStyle(root).fontFamily);
      if (!measure) return;
      const solved = solveLockup(column, measure);
      setFit((prev) => {
        if (
          prev &&
          Math.abs(prev.column - column) < 0.5 &&
          Math.abs(prev.titleSize - solved.titleSize) < 0.01 &&
          Math.abs(prev.subtitleSize - solved.subtitleSize) < 0.01
        ) {
          return prev;
        }
        return { ...solved, column };
      });
    };

    solve();
    const fonts = document.fonts;
    const onFonts = () => solve();
    void fonts?.ready?.then(onFonts);
    fonts?.addEventListener?.("loadingdone", onFonts);
    let observer: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => solve());
      observer.observe(root);
    }
    return () => {
      fonts?.removeEventListener?.("loadingdone", onFonts);
      observer?.disconnect();
    };
  }, []);

  // Read from a zero-size probe on each baseline: the browser rounds the font's
  // ascent and descent when it builds the line box, so this is not derivable
  // from the metrics alone.
  useLayoutEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    if (!fit || !title || !subtitle) return;
    const baselineIn = (line: HTMLElement) => {
      const probe = line.lastElementChild as HTMLElement;
      return probe.getBoundingClientRect().top - line.getBoundingClientRect().top;
    };
    const next = {
      titleSize: fit.titleSize,
      subtitleSize: fit.subtitleSize,
      title: baselineIn(title),
      subtitle: baselineIn(subtitle),
    };
    setBaselines((prev) =>
      prev &&
      prev.titleSize === next.titleSize &&
      prev.subtitleSize === next.subtitleSize &&
      Math.abs(prev.title - next.title) < 0.01 &&
      Math.abs(prev.subtitle - next.subtitle) < 0.01
        ? prev
        : next,
    );
  }, [fit]);

  const placed = fit && baselines?.titleSize === fit.titleSize && baselines.subtitleSize === fit.subtitleSize;
  const textX = fit ? fit.logo + fit.gap : 0;

  return (
    <div
      ref={rootRef}
      className="relative w-full"
      style={{ height: fit?.logo ?? "31.5cqw", visibility: placed ? undefined : "hidden" }}
    >
      <img
        src={dodgeLogo}
        alt=""
        className="absolute left-0 top-0 rounded-[22%] shadow-glow"
        style={fit ? { width: fit.logo, height: fit.logo } : { width: "31.5cqw", height: "31.5cqw" }}
      />
      <h1
        ref={titleRef}
        className="absolute m-0 whitespace-nowrap font-extrabold leading-none text-foreground"
        style={{
          left: fit ? textX - fit.titleLeft : 0,
          top: fit && baselines ? fit.titleBaseline - baselines.title : 0,
          fontSize: fit?.titleSize,
          fontWeight: WEIGHT.title,
          letterSpacing: `${TITLE_TRACKING}em`,
        }}
      >
        {LOCKUP_TITLE}
        <span aria-hidden="true" className="inline-block h-0 w-0 align-baseline" />
      </h1>
      <p
        ref={subtitleRef}
        className="absolute m-0 whitespace-nowrap font-medium leading-none text-muted-foreground"
        style={{
          left: fit ? textX - fit.subtitleLeft : 0,
          top: fit && baselines ? fit.subtitleBaseline - baselines.subtitle : 0,
          fontSize: fit?.subtitleSize,
          fontWeight: WEIGHT.subtitle,
        }}
      >
        {LOCKUP_SUBTITLE}
        <span aria-hidden="true" className="inline-block h-0 w-0 align-baseline" />
      </p>
    </div>
  );
}
