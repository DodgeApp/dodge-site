import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dodgeLogo from "@/assets/dodge-logo.png";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Status bar spacer (iOS safe area) */}
      <div className="h-12" />

      {/* Top Navigation — back button only */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-gold transition-opacity active:opacity-60 hover:opacity-80"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </nav>

      {/* Scrollable Content */}
      <main className="max-w-lg mx-auto px-4 pb-16 pt-6 space-y-4 animate-fade-in">

        {/* Page title hero */}
        <div className="flex items-center gap-4 pb-2">
          <img
            src={dodgeLogo}
            alt="Dodge"
            className="w-12 h-12 rounded-[14px] shadow-gold-glow flex-shrink-0"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight leading-tight">{title}</h1>
            <p className="text-xs text-muted-foreground mt-0.5">Last updated {lastUpdated}</p>
          </div>
        </div>

        {/* Visual preview notice */}
        <div className="rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 flex items-start gap-3">
          <span className="text-gold text-base leading-none mt-0.5">⚠</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-gold font-semibold">Design preview only.</span>{" "}
            This is an early visual mockup for internal review purposes. The content shown is
            placeholder text and does not constitute a legally binding document. Final copy will be
            reviewed and approved before release.
          </p>
        </div>

        {children}

        {/* Footer */}
        <div className="pt-4 pb-2 text-center">
          <p className="text-xs text-muted-foreground">© 2025 Dodge Labs (Pty) Ltd. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
