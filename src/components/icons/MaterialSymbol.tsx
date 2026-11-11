import type { SVGProps } from "react";
import { cn } from "@/lib/utils";
import { MATERIAL_SYMBOLS, MATERIAL_SYMBOL_VIEWBOX, type MaterialSymbolName } from "./material-symbols";

export type { MaterialSymbolName };

interface MaterialSymbolProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: MaterialSymbolName;
  size?: number | string;
  /** Flip horizontally, as the apps do to turn arrow_back_ios_new into the forward chevron. */
  mirrored?: boolean;
}

/** Inline Material Symbols Rounded glyph, filled, coloured with currentColor. Decorative unless labelled. */
export default function MaterialSymbol({ name, size = 24, mirrored, className, ...props }: MaterialSymbolProps) {
  const labelled = props["aria-label"] != null || props["aria-labelledby"] != null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={MATERIAL_SYMBOL_VIEWBOX}
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden={labelled ? undefined : true}
      role={labelled ? "img" : undefined}
      focusable="false"
      className={cn(mirrored && "-scale-x-100", className)}
      {...props}
    >
      <path d={MATERIAL_SYMBOLS[name]} />
    </svg>
  );
}
