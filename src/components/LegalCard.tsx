import { type LucideIcon } from "lucide-react";
import SettingsSectionLabel from "@/components/SettingsSectionLabel";

interface LegalCardProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

export default function LegalCard({ icon: Icon, title, children }: LegalCardProps) {
  return (
    <section className="space-y-2.5">
      <SettingsSectionLabel icon={Icon}>{title}</SettingsSectionLabel>
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
