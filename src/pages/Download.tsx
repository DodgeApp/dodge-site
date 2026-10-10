import { useLayoutEffect } from "react";
import Index from "./Index";
import { storeUrlForUserAgent } from "@/lib/store-redirect";

/**
 * Circle invites share this path. Phones are redirected at the edge; this
 * page repeats that for local dev and sends every other browser to the homepage,
 * which links back here.
 */
export default function Download() {
  const storeUrl = storeUrlForUserAgent(
    typeof navigator === "undefined" ? null : navigator.userAgent,
  );

  useLayoutEffect(() => {
    if (storeUrl) window.location.replace(storeUrl);
  }, [storeUrl]);

  if (storeUrl) return null;
  return <Index />;
}
