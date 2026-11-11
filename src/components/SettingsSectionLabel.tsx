import MaterialSymbol, { type MaterialSymbolName } from "@/components/icons/MaterialSymbol";

interface SettingsSectionLabelProps {
  icon: MaterialSymbolName;
  children: string;
}

export default function SettingsSectionLabel({ icon, children }: SettingsSectionLabelProps) {
  return (
    <div className="app-section-label flex items-center gap-[5px] px-1 pl-1">
      <MaterialSymbol name={icon} size={10} className="shrink-0" />
      <h2 className="uppercase tracking-[0.06em]">{children}</h2>
    </div>
  );
}
