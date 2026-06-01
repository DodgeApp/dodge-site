import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/** Fixed back bar — stays at viewport top while page content scrolls beneath. */
export default function PageBackNav() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Deep links from the iOS app (e.g. /privacy, /terms) have no prior history.
    const historyIndex = (window.history.state as { idx?: number } | null)?.idx;
    if (historyIndex != null && historyIndex > 0) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-app bg-card/95 backdrop-blur-xl pt-[env(safe-area-inset-top,0px)]">
      <div className="mx-auto flex max-w-lg items-center px-5 py-3">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-1.5 text-primary transition-opacity active:opacity-60 hover:opacity-80"
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
          <span className="text-sm font-medium">Back</span>
        </button>
      </div>
    </header>
  );
}

/** Main content offset: safe area + fixed nav row + spacing below nav. */
export const PAGE_CONTENT_PAD_TOP =
  "calc(env(safe-area-inset-top, 0px) + 3rem + 1.5rem)";
