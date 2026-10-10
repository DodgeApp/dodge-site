import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { APP_STORE_URL, PLAY_STORE_URL } from "./links";
import { storeUrlForUserAgent } from "./store-redirect";

const IPHONE_SAFARI =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Mobile/15E148 Safari/604.1";
const IPHONE_CHROME =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/131.0.6778.73 Mobile/15E148 Safari/604.1";
const IPHONE_WHATSAPP =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 WhatsApp/2.24.1";
const IPAD =
  "Mozilla/5.0 (iPad; CPU OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
const IPOD =
  "Mozilla/5.0 (iPod touch; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1";
const ANDROID_CHROME =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.39 Mobile Safari/537.36";
const ANDROID_WHATSAPP =
  "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/131.0.6778.39 Mobile Safari/537.36 WhatsApp/2.24.1";
const DESKTOP_CHROME =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
const DESKTOP_SAFARI =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Safari/605.1.15";
const WHATSAPP_CRAWLER = "WhatsApp/2.24.1.0";

type Redirect = {
  source: string;
  destination: string;
  permanent?: boolean;
  has?: { type: string; key?: string; value?: string }[];
};

const vercel = JSON.parse(
  readFileSync(path.resolve(process.cwd(), "vercel.json"), "utf8"),
) as { redirects: Redirect[] };

/** Vercel anchors `has` header values: `new RegExp('^' + value + '$')`. */
function headerMatches(pattern: string, header: string): boolean {
  return new RegExp(`^${pattern}$`).test(header);
}

function edgeDestination(userAgent: string | null): string | null {
  for (const redirect of vercel.redirects) {
    if (redirect.source !== "/download") continue;
    const rule = redirect.has?.find((item) => item.type === "header" && item.key === "user-agent");
    if (!rule?.value || userAgent == null) continue;
    if (headerMatches(rule.value, userAgent)) return redirect.destination;
  }
  return null;
}

function inlineScriptDestination(pathname: string, userAgent: string): string | null {
  const html = readFileSync(path.resolve(process.cwd(), "index.html"), "utf8");
  const match = html.match(
    /<!-- circle-invite-download:[\s\S]*?<script>([\s\S]*?)<\/script>/,
  );
  if (!match) throw new Error("Missing circle-invite download script in index.html");
  let replaced: string | null = null;
  const location = {
    pathname,
    replace(url: string) {
      replaced = url;
    },
  };
  const navigator = { userAgent };
  new Function("location", "navigator", match[1])(location, navigator);
  return replaced;
}

describe("storeUrlForUserAgent", () => {
  it.each([
    ["iPhone Safari", IPHONE_SAFARI],
    ["iPhone Chrome", IPHONE_CHROME],
    ["iPhone WhatsApp", IPHONE_WHATSAPP],
    ["iPad", IPAD],
    ["iPod", IPOD],
  ])("sends %s to the App Store", (_label, ua) => {
    expect(storeUrlForUserAgent(ua)).toBe(APP_STORE_URL);
  });

  it.each([
    ["Android Chrome", ANDROID_CHROME],
    ["Android WhatsApp", ANDROID_WHATSAPP],
  ])("sends %s to Google Play", (_label, ua) => {
    expect(storeUrlForUserAgent(ua)).toBe(PLAY_STORE_URL);
  });

  it.each([
    ["desktop Chrome", DESKTOP_CHROME],
    ["desktop Safari", DESKTOP_SAFARI],
    ["WhatsApp crawler", WHATSAPP_CRAWLER],
    ["empty", ""],
  ])("leaves %s on the homepage", (_label, ua) => {
    expect(storeUrlForUserAgent(ua)).toBeNull();
  });

  it("prefers the App Store when a user agent names both platforms", () => {
    expect(storeUrlForUserAgent("iPhone Android")).toBe(APP_STORE_URL);
  });
});

describe("/download edge redirect", () => {
  it("matches the client choice for each visitor", () => {
    const visitors = [
      IPHONE_SAFARI,
      IPHONE_CHROME,
      IPHONE_WHATSAPP,
      IPAD,
      IPOD,
      ANDROID_CHROME,
      ANDROID_WHATSAPP,
      DESKTOP_CHROME,
      DESKTOP_SAFARI,
      WHATSAPP_CRAWLER,
      "",
      "iPhone Android",
    ];
    for (const ua of visitors) {
      expect(edgeDestination(ua)).toBe(storeUrlForUserAgent(ua));
    }
    expect(edgeDestination(null)).toBeNull();
  });

  it("uses temporary redirects and does not catch other paths", () => {
    expect(vercel.redirects.every((redirect) => redirect.source === "/download")).toBe(true);
    expect(vercel.redirects.every((redirect) => redirect.permanent === false)).toBe(true);
    expect(vercel.redirects.every((redirect) => redirect.has?.length)).toBe(true);
  });
});

describe("download page script", () => {
  it("follows the same choice before the app bundle loads", () => {
    const visitors = [
      IPHONE_SAFARI,
      IPHONE_CHROME,
      IPAD,
      ANDROID_CHROME,
      ANDROID_WHATSAPP,
      DESKTOP_CHROME,
      DESKTOP_SAFARI,
      WHATSAPP_CRAWLER,
    ];
    for (const ua of visitors) {
      expect(inlineScriptDestination("/download", ua)).toBe(storeUrlForUserAgent(ua));
      expect(inlineScriptDestination("/download/", ua)).toBe(storeUrlForUserAgent(ua));
      expect(inlineScriptDestination("/", ua)).toBeNull();
    }
  });
});
