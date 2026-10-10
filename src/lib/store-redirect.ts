import { APP_STORE_URL, PLAY_STORE_URL } from "./links";

const IOS_UA = /iPhone|iPad|iPod/i;
const ANDROID_UA = /Android/i;

/**
 * Store for this visitor, or null when `/download` should show the homepage.
 * iPhone, iPad, and iPod go to the App Store. Android goes to Google Play.
 * `vercel.json` applies the same choice before this page loads.
 */
export function storeUrlForUserAgent(userAgent: string | null | undefined): string | null {
  const ua = userAgent ?? "";
  if (IOS_UA.test(ua)) return APP_STORE_URL;
  if (ANDROID_UA.test(ua)) return PLAY_STORE_URL;
  return null;
}
