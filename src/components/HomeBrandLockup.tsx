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

  return (text: string, size: number, role: LockupRole): GlyphInk => {
    const weight = role === "title" ? 800 : 500;
    const tracking = role === "title" ? TITLE_TRACKING : 0;
    context.font = `${weight} ${size}px ${family}`;
    const metrics = context.measureText(text);
    return {
      width: metrics.width + Math.max(text.length - 1, 0) * tracking * size,
      ascent: metrics.actualBoundingBoxAscent || 0,
      descent: metrics.actualBoundingBoxDescent || 0,
    };
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
          Math.abs(prev.dodgeAscent - solved.dodgeAscent) < 0.05
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
    // The probe sits on the baseline. Ink starts `ascent` above that, so the
    // line box's top is not the alignment edge.
    const titleOffset = fit.dodgeAscent - titleProbe.offsetTop;
    const subtitleOffset = fit.dodgeInkHeight + fit.lineGap - (subtitleProbe.offsetTop - fit.subtitleAscent);
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
