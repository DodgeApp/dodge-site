type VercelAnalytics = (
  command: "event",
  payload: { name: string; data?: Record<string, string> },
) => void;

declare global {
  interface Window {
    va?: VercelAnalytics;
  }
}

/** No-ops in local dev and until Web Analytics is enabled on the Vercel project. */
export function trackLinkClick(link: string) {
  window.va?.("event", { name: "link_click", data: { link } });
}
