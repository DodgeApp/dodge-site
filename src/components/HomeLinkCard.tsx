import MaterialSymbol, { type MaterialSymbolName } from "@/components/icons/MaterialSymbol";

interface HomeLinkCardProps {
  icon: MaterialSymbolName;
  title: string;
  subtitle: string;
  onClick?: () => void;
  /** When set, renders an external link that opens in a new tab. */
  href?: string;
}

export default function HomeLinkCard({ icon, title, subtitle, onClick, href }: HomeLinkCardProps) {
  const content = (
    <span className="settings-row">
      <span className="settings-row-icon">
        <MaterialSymbol name={icon} size={18} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="settings-row-title block">{title}</span>
        <span className="settings-row-subtitle block">{subtitle}</span>
      </span>
      {href ? (
        <MaterialSymbol name="arrow_outward" size={14} className="shrink-0 text-foreground" />
      ) : (
        <MaterialSymbol name="arrow_back_ios_new" mirrored size={12} className="shrink-0 text-foreground" />
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
