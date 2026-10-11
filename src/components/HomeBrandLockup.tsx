import { useLayoutEffect, useRef, useState } from "react";
import dodgeLogo from "@/assets/dodge-logo.png";
import { solveLockup, type GlyphInk, type LockupFit, type LockupRole } from "@/lib/lockup-metrics";

const TITLE = "Dodge";
const SUBTITLE = "Community Safety";
const TITLE_TRACKING = -0.025;

type PlacedLockup = LockupFit & {
  column: number;
  titleOffset: number;
  subtitleOffset: number;
  aligned: boolean;
};

function measureGlyphs(family: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return null;
  const cache = new Map<string, GlyphInk>();

  return (text: string, size: number, role: LockupRole): GlyphInk => {
    const weight = role === "title" ? 800 : 500;
    const tracking = role === "title" ? TITLE_TRACKING : 0;
    const dpr = window.devicePixelRatio || 1;
    const key = `${text}|${size}|${weight}|${dpr}`;
    const cached = cache.get(key);
    if (cached) return cached;

    context.font = `${weight} ${size}px ${family}`;
    const metrics = context.measureText(text);
    const metricAscent = metrics.actualBoundingBoxAscent || 0;
    const metricDescent = metrics.actualBoundingBoxDescent || 0;
    const width = metrics.width + Math.max(text.length - 1, 0) * tracking * size;
    // Width is read for every size guess. The painted pixels are read only
    // when the logo is matched to the ink, so those guesses stay on the advance.
    let painted: { ascent: number; descent: number; shift: number } | undefined;
    const resolve = () => (painted ??= paintedVertical(family, text, size, weight, metricAscent, metricDescent));
    const ink: GlyphInk = {
      width,
      get ascent() {
        return resolve().ascent;
      },
      get descent() {
        return resolve().descent;
      },
      get shift() {
        return resolve().shift;
      },
    };
    cache.set(key, ink);
    return ink;
  };
}

/**
 * Device pixels of a hinted draw, compared with the font bounding box.
 * The canvas is scaled by the device pixel ratio and the type is set in CSS
 * pixels; sizing the font in device pixels instead does not match the screen.
 * The baseline sits on a whole CSS pixel, which is where the line box lands
 * when its top is the font box. `shift` is how far the painted top sits above
 * that box. A pixel counts once it is at least half covered.
 */
function paintedVertical(
  family: string,
  text: string,
  size: number,
  weight: number,
  metricAscent: number,
  metricDescent: number,
): { ascent: number; descent: number; shift: number } {
  const fallback = { ascent: metricAscent, descent: metricDescent, shift: 0 };
  if (metricAscent <= 0) return fallback;
  const dpr = window.devicePixelRatio || 1;
  const canvas = document.createElement("canvas");
  const baseline = Math.round(size * 1.2);
  const pad = Math.ceil(size);
  const cssWidth = Math.ceil(size * text.length) + pad;
  const cssHeight = Math.ceil(size * 3);
  canvas.width = Math.max(1, Math.ceil(cssWidth * dpr));
  canvas.height = Math.max(1, Math.ceil(cssHeight * dpr));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return fallback;
  ctx.scale(dpr, dpr);
  ctx.font = `${weight} ${size}px ${family}`;
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#000";
  ctx.fillText(text, pad / 2, baseline);
  const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let top = -1;
  let bottom = -1;
  for (let y = 0; y < height; y += 1) {
    const row = y * width * 4;
    let covered = false;
    for (let x = 0; x < width; x += 1) {
      if (data[row + x * 4 + 3] >= 128) {
        covered = true;
        break;
      }
    }
    if (covered) {
      if (top < 0) top = y;
      bottom = y;
    }
  }
  if (top < 0 || bottom < 0) return fallback;
  const overhangPx = baseline * dpr - metricAscent * dpr - top;
  const belowPx = bottom + 1 - (baseline * dpr + metricDescent * dpr);
  return {
    ascent: metricAscent + overhangPx / dpr,
    descent: metricDescent + belowPx / dpr,
    shift: overhangPx / dpr,
  };
}

/**
 * Homepage welcome lockup. The artwork is the app logo, and the type is
 * placed like the iOS welcome screen: the top of "Dodge" meets the top of
 * the logo, and the two lines plus the gap between them are as tall as it.
 */
export default function HomeBrandLockup() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleProbeRef = useRef<HTMLSpanElement>(null);
  const subtitleProbeRef = useRef<HTMLSpanElement>(null);
  const [fit, setFit] = useState<PlacedLockup | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const solve = () => {
      const column = root.clientWidth;
      if (column < 2) return;
      const family = getComputedStyle(root).fontFamily;
      const measure = measureGlyphs(family);
      if (!measure) return;
      const sample = measure(TITLE, 100, "title");
      if (sample.width <= 0 || sample.ascent <= 0) return;
      const solved = solveLockup(column, measure);
      setFit((prev) => {
        if (
          prev &&
          Math.abs(prev.column - column) < 0.5 &&
          Math.abs(prev.titleSize - solved.titleSize) < 0.05 &&
          Math.abs(prev.logo - solved.logo) < 0.05 &&
          Math.abs(prev.dodgeAscent - solved.dodgeAscent) < 0.05 &&
          Math.abs(prev.dodgeShift - solved.dodgeShift) < 0.01
        ) {
          return prev;
        }
        return {
          ...solved,
          column,
          titleOffset: 0,
          subtitleOffset: 0,
          aligned: false,
        };
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

  useLayoutEffect(() => {
    if (!fit || fit.aligned) return;
    const titleProbe = titleProbeRef.current;
    const subtitleProbe = subtitleProbeRef.current;
    if (!titleProbe || !subtitleProbe) return;
    // The probe sits on the baseline. Place the font bounding box, not the
    // painted pixel: the painted top is `shift` above that box, and a
    // translate moves the drawn line down onto the icon.
    const dodgeBox = fit.dodgeAscent - fit.dodgeShift;
    const subtitleBox = fit.subtitleAscent - fit.subtitleShift;
    const titleOffset = dodgeBox - titleProbe.offsetTop;
    const subtitleOffset = fit.dodgeInkHeight + fit.lineGap - (subtitleProbe.offsetTop - subtitleBox);
    setFit((current) => {
      if (!current || current.aligned) return current;
      return { ...current, titleOffset, subtitleOffset, aligned: true };
    });
  }, [fit]);

  const logo = fit?.logo;
  const textLeft = fit ? fit.logo + fit.gap : undefined;

  return (
    <div ref={rootRef} className="relative w-full" style={logo ? { height: logo } : { height: "31.5cqw" }}>
      <img
        src={dodgeLogo}
        alt=""
        className="absolute left-0 top-0 rounded-[22%] shadow-card"
        style={logo ? { width: logo, height: logo } : { width: "31.5cqw", height: "31.5cqw" }}
      />
      <h1
        className="absolute m-0 whitespace-nowrap font-extrabold leading-none text-foreground"
        style={{
          left: textLeft ?? "35.5cqw",
          top: fit?.titleOffset ?? 0,
          transform: fit?.aligned ? `translateY(${fit.dodgeShift}px)` : undefined,
          fontSize: fit?.titleSize ?? "21.7cqw",
          fontWeight: 800,
          letterSpacing: fit ? fit.titleSize * TITLE_TRACKING : "-0.025em",
        }}
      >
        {TITLE}
        <span ref={titleProbeRef} aria-hidden="true" className="inline-block h-0 w-0 align-baseline" />
      </h1>
      <p
        className="absolute m-0 whitespace-nowrap font-medium leading-none text-muted-foreground"
        style={{
          left: textLeft ?? "35.5cqw",
          top: fit?.subtitleOffset ?? "23cqw",
          transform: fit?.aligned ? `translateY(${fit.subtitleShift}px)` : undefined,
          fontSize: fit?.subtitleSize ?? "7.94cqw",
          fontWeight: 500,
        }}
      >
        {SUBTITLE}
        <span ref={subtitleProbeRef} aria-hidden="true" className="inline-block h-0 w-0 align-baseline" />
      </p>
    </div>
  );
}
