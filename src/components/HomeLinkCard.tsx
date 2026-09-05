import { type LucideIcon, ArrowUpRight, ChevronRight } from "lucide-react";

interface HomeLinkCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick?: () => void;
  /** When set, renders an external link that opens in a new tab. */
  href?: string;
}

export default function HomeLinkCard({ icon: Icon, title, subtitle, onClick, href }: HomeLinkCardProps) {
  const content = (
    <span className="settings-row">
      <span className="settings-row-icon">
        <Icon size={18} strokeWidth={2.5} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="settings-row-title block">{title}</span>
        <span className="settings-row-subtitle block">{subtitle}</span>
      </span>
      {href ? (
        <ArrowUpRight size={14} strokeWidth={2.5} className="shrink-0 text-foreground" />
      ) : (
        <ChevronRight size={12} strokeWidth={2.5} className="shrink-0 text-foreground" />
      )}
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className="block w-full"
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className="w-full">
      {content}
    </button>
  );
}
