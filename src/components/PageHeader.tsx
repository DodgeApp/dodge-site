interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 pb-1 text-center">
      <div>
        <h1 className="app-page-heading">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm font-medium text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
