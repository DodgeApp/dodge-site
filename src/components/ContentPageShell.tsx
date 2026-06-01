import PageBackNav, { PAGE_CONTENT_PAD_TOP } from "@/components/PageBackNav";
import PageHeader from "@/components/PageHeader";
import PreviewNotice from "@/components/PreviewNotice";

interface ContentPageShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPageShell({ title, subtitle, children }: ContentPageShellProps) {
  return (
    <div className="relative min-h-screen bg-surface font-sans">
      <PageBackNav />

      <main
        className="mx-auto max-w-lg animate-fade-in space-y-6 px-5 pb-16"
        style={{ paddingTop: PAGE_CONTENT_PAD_TOP }}
      >
        <PageHeader title={title} subtitle={subtitle} />
        <PreviewNotice />
        {children}
      </main>
    </div>
  );
}
