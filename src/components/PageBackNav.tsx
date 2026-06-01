import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/** Floating back control (46pt circle, elevated surface) — left side, chevron back. */
const CONTROL_SIZE_PX = 46;
/** Gap below the safe area before the back control. */
const CONTROL_TOP_GAP_PX = 12;

export default function PageBackNav() {
  const navigate = useNavigate();

  const handleBack = () => {
    const historyIndex = (window.history.state as { idx?: number } | null)?.idx;
    if (historyIndex != null && historyIndex > 0) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Back"
      className="fixed z-50 flex items-center justify-center rounded-full border border-white/10 bg-card text-foreground shadow-card transition-opacity active:opacity-70 hover:opacity-90"
      style={{
        top: `calc(env(safe-area-inset-top, 0px) + ${CONTROL_TOP_GAP_PX}px)`,
        left: "max(1.25rem, env(safe-area-inset-left, 0px))",
        width: CONTROL_SIZE_PX,
        height: CONTROL_SIZE_PX,
      }}
    >
      <ChevronLeft size={20} strokeWidth={2.75} aria-hidden />
    </button>
  );
}

/** Top spacing so content clears the floating back control (not used on home). */
export const PAGE_CONTENT_PAD_TOP = `calc(env(safe-area-inset-top, 0px) + ${CONTROL_TOP_GAP_PX}px + ${CONTROL_SIZE_PX}px + 1.25rem)`;
