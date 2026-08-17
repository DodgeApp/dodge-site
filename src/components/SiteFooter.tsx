import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/payment-terms", label: "Payment Terms" },
  { to: "/eula", label: "EULA" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-app bg-surface pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-lg space-y-2 px-5 pb-5 pt-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">© 2026 Dodge Labs (Pty) Ltd · All rights reserved</p>
      </div>
    </footer>
  );
}
