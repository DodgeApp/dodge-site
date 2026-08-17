export const LEGAL_LAST_UPDATED = "17 August 2026";
export const SUPPORT_EMAIL = "support@dodgeapp.com";
export const BUSINESS_ADDRESS = "40 Bell Road, Kenilworth, Cape Town";
export const COMPANY_NAME = "Dodge Labs (Pty) Ltd";

export const LEGAL_DOCS = [
  { id: "terms", path: "/terms", title: "Terms of Service" },
  { id: "privacy", path: "/privacy", title: "Privacy Policy" },
  { id: "payment", path: "/payment-terms", title: "Payment Terms" },
  { id: "eula", path: "/eula", title: "End User Licence Agreement" },
] as const;

export type LegalDocId = (typeof LEGAL_DOCS)[number]["id"];
