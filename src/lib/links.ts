export const APP_STORE_ID = "6762295432";
/** No country segment, so Apple redirects each visitor to their own regional store. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/** Play listing for `com.dodgeapp.app`. No `hl` param, so Play uses the visitor’s language. */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.dodgeapp.app";

/** Smart route: iPhone → App Store, Android → Google Play. */
export const DOWNLOAD_URL = "https://www.dodgeapp.com/download";

export const PAYSTACK_PAGE_SLUG: string = "dodgelabs";
export const PAYSTACK_URL: string = PAYSTACK_PAGE_SLUG
  ? `https://paystack.com/pay/${PAYSTACK_PAGE_SLUG}`
  : "";

/** Set to your PayPal.me handle to show the contribute card; it stays hidden while blank. */
export const PAYPAL_ME_HANDLE: string = "dodgelabs";
export const PAYPAL_URL: string = PAYPAL_ME_HANDLE
  ? `https://www.paypal.com/paypalme/${PAYPAL_ME_HANDLE}`
  : "";
