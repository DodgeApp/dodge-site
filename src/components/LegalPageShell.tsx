import PageBackNav, { PAGE_CONTENT_PAD_TOP } from "@/components/PageBackNav";
import PageHeader from "@/components/PageHeader";
import PreviewNotice from "@/components/PreviewNotice";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <PageBackNav />

      <main
        className="mx-auto max-w-lg animate-fade-in space-y-6 px-5 pb-16"
        style={{ paddingTop: PAGE_CONTENT_PAD_TOP }}
      >
        <PageHeader title={title} subtitle={`Last updated ${lastUpdated}`} />
        <PreviewNotice />
        {children}
      </main>
    </div>
  );
}
