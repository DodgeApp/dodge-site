import { type LucideIcon } from "lucide-react";

interface LegalCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function LegalCard({ icon: Icon, title, children }: LegalCardProps) {
  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2 px-1 pb-0.5 text-muted-foreground">
        <Icon size={14} strokeWidth={2.5} className="shrink-0" />
        <h2 className="text-[13px] font-semibold">{title}</h2>
      </div>
      <div className="settings-card p-5">
        <div className="space-y-2.5 text-[15px] leading-relaxed text-foreground">{children}</div>
      </div>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
