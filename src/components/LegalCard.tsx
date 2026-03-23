import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LegalCardProps {
  icon: LucideIcon;
  title: string;
  highlight?: boolean;
  children: React.ReactNode;
}

export default function LegalCard({ icon: Icon, title, highlight = false, children }: LegalCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-5 transition-all",
        highlight ? "card-dodge-gold" : "card-dodge"
      )}
    >
      <div className="flex items-start gap-2.5 mb-3">
        <Icon
          size={15}
          strokeWidth={2.2}
          className={cn(
            "mt-0.5 flex-shrink-0",
            highlight ? "text-gold" : "text-foreground"
          )}
        />
        <h2
          className={cn(
            "text-sm font-semibold leading-tight",
            highlight ? "text-gold" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </div>
      <div className="text-[13.5px] leading-relaxed text-muted-foreground space-y-2.5 pl-0">
        {children}
      </div>
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5 mt-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold/60 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
