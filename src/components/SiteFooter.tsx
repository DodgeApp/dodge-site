import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-app bg-card pb-[env(safe-area-inset-bottom,0px)]">
      <div className="mx-auto max-w-lg space-y-2 px-5 pb-5 pt-5 text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium">
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="/support" className="text-muted-foreground transition-colors hover:text-foreground">
            Support
          </Link>
          <Link to="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-muted-foreground transition-colors hover:text-foreground">
            Terms of Service
          </Link>
        </div>
        <p className="text-[11px] text-muted-foreground">© 2026 Dodge Labs (Pty) Ltd · All rights reserved</p>
      </div>
    </footer>
  );
}
