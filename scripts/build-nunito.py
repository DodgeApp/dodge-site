"""Build public/fonts/nunito-latin-wght.woff2 from the upstream Nunito variable font.

The Android app draws Nunito at these points on the wght axis so it matches the
iOS rounded system font. The axis is remapped (avar) so the plain CSS weights on
the left render those instances, and font-weight needs no per-element override:

    CSS 400 -> 455   500 -> 625   600 -> 690   700 -> 770   800 -> 885   900 -> 975

Then it is subset to Google Fonts' "latin" range (keep UNICODES in sync with
unicode-range in src/index.css) and saved as woff2.

    pip install fonttools brotli
    python3 scripts/build-nunito.py
"""

import io
import urllib.request
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont

SOURCE = (
    "https://raw.githubusercontent.com/google/fonts/"
    "5bb28733cec313b63fbd415b574b5ae35c8aa8b8/ofl/nunito/Nunito%5Bwght%5D.ttf"
)
OUT = Path(__file__).resolve().parent.parent / "public" / "fonts" / "nunito-latin-wght.woff2"

WEIGHT_MAP = [
    (200, 200),
    (400, 455),
    (500, 625),
    (600, 690),
    (700, 770),
    (800, 885),
    (900, 975),
    (1000, 1000),
]

UNICODES = (
    "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,"
    "U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,"
    "U+FEFF,U+FFFD"
)


def interp(points, x):
    for (x0, y0), (x1, y1) in zip(points, points[1:]):
        if x0 <= x <= x1:
            return y0 if x1 == x0 else y0 + (y1 - y0) * (x - x0) / (x1 - x0)
    raise ValueError(x)


def remap_weight_axis(font):
    axis = next(a for a in font["fvar"].axes if a.axisTag == "wght")
    lo, hi = axis.minValue, axis.maxValue
    assert axis.defaultValue == lo, "normalisation below assumes default == min"
    normal = lambda w: (w - lo) / (hi - lo)
    user = lambda n: lo + n * (hi - lo)

    original = sorted(font["avar"].segments["wght"].items())
    css_to_nunito = WEIGHT_MAP
    nunito_to_css = [(b, a) for a, b in WEIGHT_MAP]

    # Every corner of the composed curve: the weight map's and the old avar's.
    stops = {normal(css) for css, _ in css_to_nunito}
    stops |= {normal(interp(nunito_to_css, user(n))) for n, _ in original if n >= 0}
    segments = {-1.0: -1.0}
    for n in sorted(stops):
        segments[n] = interp(original, normal(interp(css_to_nunito, user(n))))
    font["avar"].segments["wght"] = segments


def main():
    with urllib.request.urlopen(SOURCE) as response:
        font = TTFont(io.BytesIO(response.read()), recalcTimestamp=False)

    remap_weight_axis(font)

    options = subset.Options()
    options.flavor = "woff2"
    # Without gasp/prep, FreeType (Chrome on Linux and Android) rounds advances
    # differently, so the text stops matching upstream Nunito at the same weight.
    options.hinting = True
    options.name_IDs = [0, 1, 2, 3, 4, 5, 6, 13, 14]
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=subset.parse_unicodes(UNICODES))
    subsetter.subset(font)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    subset.save_font(font, str(OUT), options)
    print(f"{OUT} {OUT.stat().st_size} bytes")


if __name__ == "__main__":
    main()
