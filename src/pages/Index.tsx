import { useNavigate } from "react-router-dom";
import { FileText, Shield, LifeBuoy, Building2 } from "lucide-react";
import dodgeLogo from "@/assets/dodge-logo.png";
import HomeLinkCard from "@/components/HomeLinkCard";
import PreviewNotice from "@/components/PreviewNotice";
import SettingsSectionLabel from "@/components/SettingsSectionLabel";

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

        <PreviewNotice />

        <section className="space-y-2.5">
          <SettingsSectionLabel icon={FileText}>Legal</SettingsSectionLabel>
          <div className="settings-card overflow-hidden">
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

        <section className="space-y-2.5">
          <SettingsSectionLabel icon={Building2}>Company</SettingsSectionLabel>
          <div className="settings-card overflow-hidden">
            <HomeLinkCard
              icon={LifeBuoy}
              title="Support"
              subtitle="Help, issues, and feedback"
              onClick={() => navigate("/support")}
            />
            <HomeLinkCard
              icon={Building2}
              title="About Dodge Labs (Pty) Ltd"
              subtitle="Who we are and what we build"
              onClick={() => navigate("/about")}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
