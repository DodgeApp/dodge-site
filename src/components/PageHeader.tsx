import dodgeLogo from "@/assets/dodge-logo.png";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export default function PageHeader({ title, subtitle, showLogo = false }: PageHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 pb-1 text-center">
      {showLogo && (
        <img
          src={dodgeLogo}
          alt="Dodge"
          className="h-16 w-16 rounded-[18px] shadow-card"
        />
      )}
      <div>
        <h1 className="app-page-heading">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm font-medium text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
