import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background/95 backdrop-blur">
      <div className="max-w-lg mx-auto px-4 py-5 text-center space-y-2">
        <div className="flex items-center justify-center gap-4 text-xs">
          <Link to="/support" className="text-muted-foreground hover:text-foreground transition-colors">
            Support
          </Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </Link>
        </div>

        <p className="text-[11px] text-muted-foreground">© 2026 Dodge Labs (Pty) Ltd · All rights reserved</p>
      </div>
    </footer>
  );
}
