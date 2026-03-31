import { useNavigate } from "react-router-dom";
import { FileText, Shield, LifeBuoy, ChevronRight } from "lucide-react";
import dodgeLogo from "@/assets/dodge-logo.png";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-8 animate-fade-in">

        {/* App Identity */}
        <div className="flex flex-col items-center gap-4">
          <img
            src={dodgeLogo}
            alt="Dodge"
            className="w-20 h-20 rounded-[22px] shadow-gold-glow"
          />
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Dodge</h1>
        </div>

        {/* Legal Links */}
        <div className="space-y-3">
          <p className="text-xs text-muted-foreground text-center uppercase tracking-widest font-medium mb-4">
            Legal
          </p>

          <button
            onClick={() => navigate("/terms")}
            className="w-full card-dodge flex items-center gap-4 p-4 text-left transition-all active:scale-[0.98] hover:border-gold/30"
          >
            <FileText size={16} strokeWidth={2} className="text-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">Terms of Service</p>
              <p className="text-xs text-muted-foreground mt-0.5">Usage rules & responsibilities</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
          </button>

          <button
            onClick={() => navigate("/privacy")}
            className="w-full card-dodge flex items-center gap-4 p-4 text-left transition-all active:scale-[0.98] hover:border-gold/30"
          >
            <Shield size={16} strokeWidth={2} className="text-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">Privacy Policy</p>
              <p className="text-xs text-muted-foreground mt-0.5">How we handle your data</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
          </button>

          <button
            onClick={() => navigate("/support")}
            className="w-full card-dodge flex items-center gap-4 p-4 text-left transition-all active:scale-[0.98] hover:border-gold/30"
          >
            <LifeBuoy size={16} strokeWidth={2} className="text-foreground flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground">Support</p>
              <p className="text-xs text-muted-foreground mt-0.5">Help, issues, and feedback</p>
            </div>
            <ChevronRight size={16} className="text-muted-foreground flex-shrink-0" />
          </button>
        </div>

        {/* Preview notice */}
        <div className="rounded-xl border border-gold/30 bg-gold/5 px-4 py-3 flex items-start gap-3">
          <span className="text-gold text-base leading-none mt-0.5">⚠</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-gold font-semibold">Design preview only.</span>{" "}
            These pages are visual mockups for internal review. Content is not final or legally binding.
          </p>
        </div>

      </div>
    </div>
  );
}
