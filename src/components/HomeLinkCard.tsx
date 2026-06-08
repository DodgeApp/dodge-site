import { type LucideIcon, ChevronRight } from "lucide-react";

interface HomeLinkCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function HomeLinkCard({ icon: Icon, title, subtitle, onClick }: HomeLinkCardProps) {
  return (
    <button type="button" onClick={onClick} className="w-full">
      <span className="settings-row">
        <span className="settings-row-icon">
          <Icon size={18} strokeWidth={2.5} />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="settings-row-title block">{title}</span>
          <span className="settings-row-subtitle block">{subtitle}</span>
        </span>
        <ChevronRight size={12} strokeWidth={2.5} className="shrink-0 text-foreground" />
      </span>
    </button>
  );
}
