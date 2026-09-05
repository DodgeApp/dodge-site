import { useNavigate } from "react-router-dom";
import { Building2, Download, Heart, Info, LifeBuoy, Scale } from "lucide-react";
import dodgeLogo from "@/assets/dodge-logo.png";
import HomeLinkCard from "@/components/HomeLinkCard";
import SettingsSectionLabel from "@/components/SettingsSectionLabel";
import { Button } from "@/components/ui/button";
import { trackLinkClick } from "@/lib/analytics";
import { APP_STORE_URL, MINIMUM_IOS_VERSION, PAYPAL_URL } from "@/lib/links";

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
          <div className="flex flex-col items-center">
            <h1 className="app-page-heading">Dodge</h1>
            <p className="mt-1 max-w-xs text-center text-sm font-medium text-muted-foreground">
              Stay aware, stay connected, stay safe.
            </p>
          </div>
        </div>

        <div className="space-y-2.5">
          <Button
            asChild
            variant="dodge"
            className="h-[68px] w-full shadow-glow transition-shadow hover:shadow-glow-strong"
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLinkClick("app_store")}
            >
              <Download strokeWidth={2.75} aria-hidden />
              Download on the App Store
            </a>
          </Button>
          <p className="text-center text-xs font-medium text-muted-foreground">
            Free on iPhone · Requires iOS {MINIMUM_IOS_VERSION} or later
          </p>
        </div>

        {PAYPAL_URL && (
          <section className="space-y-2.5">
            <SettingsSectionLabel icon={Heart}>Support Dodge</SettingsSectionLabel>
            <div className="settings-card overflow-hidden">
              <HomeLinkCard
                icon={Heart}
                title="Contribute via PayPal"
                subtitle="Help keep Dodge running"
                href={PAYPAL_URL}
                onClick={() => trackLinkClick("paypal")}
              />
            </div>
          </section>
        )}

        <section className="space-y-2.5">
          <SettingsSectionLabel icon={Info}>More</SettingsSectionLabel>
          <div className="settings-card overflow-hidden">
            <HomeLinkCard
              icon={Building2}
              title="About Dodge Labs (Pty) Ltd"
              subtitle="Who we are and what we build"
              onClick={() => {
                trackLinkClick("about");
                navigate("/about");
              }}
            />
            <HomeLinkCard
              icon={Scale}
              title="Legal & policies"
              subtitle="Terms, privacy, payments, and licence"
              onClick={() => {
                trackLinkClick("legal");
                navigate("/legal");
              }}
            />
            <HomeLinkCard
              icon={LifeBuoy}
              title="Support"
              subtitle="Help, issues, and feedback"
              onClick={() => {
                trackLinkClick("support");
                navigate("/support");
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
