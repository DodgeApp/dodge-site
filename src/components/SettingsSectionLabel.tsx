import { type LucideIcon } from "lucide-react";

interface SettingsSectionLabelProps {
  icon: LucideIcon;
  children: string;
}

export default function SettingsSectionLabel({ icon: Icon, children }: SettingsSectionLabelProps) {
  return (
    <div className="app-section-label flex items-center gap-[5px] px-1 pl-1">
      <Icon size={10} strokeWidth={3} className="shrink-0" aria-hidden />
      <h2 className="uppercase tracking-[0.06em]">{children}</h2>
    </div>
  );
}
