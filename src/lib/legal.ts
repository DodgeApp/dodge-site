export const LEGAL_LAST_UPDATED = "26 September 2026";
export const PRIVACY_LAST_UPDATED = "19 November 2026";
export const TERMS_LAST_UPDATED = "19 November 2026";
export const GUIDELINES_LAST_UPDATED = "19 November 2026";
export const SUPPORT_EMAIL = "support@dodgeapp.com";
export const BUSINESS_ADDRESS = "40 Bell Road, Kenilworth, Cape Town";
export const COMPANY_NAME = "Dodge Labs (Pty) Ltd";

export const FORUM_DATA_ATTRIBUTION =
  "© OpenStreetMap contributors, Overture Maps Foundation; Google Open Buildings and Esri, CC BY 4.0";

export const LEGAL_DOCS = [
  { id: "terms", path: "/terms", title: "Terms of Service" },
  { id: "privacy", path: "/privacy", title: "Privacy Policy" },
  { id: "guidelines", path: "/community-guidelines", title: "Community Guidelines" },
  { id: "payment", path: "/payment-terms", title: "Payment Terms" },
  { id: "eula", path: "/eula", title: "End User Licence Agreement" },
] as const;

export type LegalDocId = (typeof LEGAL_DOCS)[number]["id"];
