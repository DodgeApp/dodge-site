import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContentPageShell from "@/components/ContentPageShell";

interface LegalPageShellProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({ title, lastUpdated, children }: LegalPageShellProps) {
  const { hash } = useLocation();

  // The page renders after the browser's own load-time hash scroll, so deep links
  // such as /privacy#delete-account need scrolling once the section exists, and again
  // once web fonts finish loading and shift the layout.
  useEffect(() => {
    if (!hash) return;
    const scroll = () =>
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
    scroll();
    document.fonts?.ready.then(scroll);
  }, [hash]);

  return (
    <ContentPageShell title={title} subtitle={`Last updated ${lastUpdated}`}>
      {children}
    </ContentPageShell>
  );
}
