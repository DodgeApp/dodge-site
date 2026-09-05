export const APP_STORE_ID = "6762295432";
/** No country segment, so Apple redirects each visitor to their own regional store. */
export const APP_STORE_URL = `https://apps.apple.com/app/id${APP_STORE_ID}`;
export const MINIMUM_IOS_VERSION = "18.4";

/** Set to your PayPal.me handle to show the contribute card; it stays hidden while blank. */
export const PAYPAL_ME_HANDLE: string = "dodgelabs";
export const PAYPAL_URL: string = PAYPAL_ME_HANDLE
  ? `https://www.paypal.com/paypalme/${PAYPAL_ME_HANDLE}`
  : "";
