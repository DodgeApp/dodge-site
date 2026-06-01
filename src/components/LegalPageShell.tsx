import ContentPageShell from "@/components/ContentPageShell";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  return (
    <ContentPageShell title={title} subtitle={`Last updated ${lastUpdated}`}>
      {children}
    </ContentPageShell>
  );
}
