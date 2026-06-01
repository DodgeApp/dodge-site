import { useNavigate } from "react-router-dom";
import { FileText, Shield, LifeBuoy } from "lucide-react";
import dodgeLogo from "@/assets/dodge-logo.png";
import HomeLinkCard from "@/components/HomeLinkCard";
import PreviewNotice from "@/components/PreviewNotice";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-5 py-12 sm:py-16">
      <div className="w-full max-w-lg animate-fade-in space-y-8">
        <div className="flex flex-col items-center gap-4">
          <img
            src={dodgeLogo}
            alt="Dodge"
            className="h-20 w-20 rounded-[22px] shadow-card"
          />
          <h1 className="app-page-heading">Dodge</h1>
          <p className="max-w-xs text-center text-sm font-medium text-muted-foreground">
            Safety circles, live location, and alerts — built for the people you trust.
          </p>
        </div>

        <section className="space-y-3">
          <p className="app-section-label px-1">Legal</p>
          <div className="space-y-3">
            <HomeLinkCard
              icon={FileText}
              title="Terms of Service"
              subtitle="Usage rules & responsibilities"
              onClick={() => navigate("/terms")}
            />
            <HomeLinkCard
              icon={Shield}
              title="Privacy Policy"
              subtitle="How we handle your data"
              onClick={() => navigate("/privacy")}
            />
          </div>
        </section>

        <section className="space-y-3">
          <p className="app-section-label px-1">Support</p>
          <HomeLinkCard
            icon={LifeBuoy}
            title="Support"
            subtitle="Help, issues, and feedback"
            onClick={() => navigate("/support")}
          />
        </section>

        <PreviewNotice />
      </div>
    </div>
  );
}
