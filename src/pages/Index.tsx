import { useNavigate } from "react-router-dom";
import { Building2, CreditCard, Download, Heart, Info, LifeBuoy, Scale, Wallet } from "lucide-react";
import dodgeLogo from "@/assets/dodge-logo.png";
import HomeLinkCard from "@/components/HomeLinkCard";
import SettingsSectionLabel from "@/components/SettingsSectionLabel";
import { Button } from "@/components/ui/button";
import { trackLinkClick } from "@/lib/analytics";
import { DOWNLOAD_URL, PAYPAL_URL, PAYSTACK_URL } from "@/lib/links";

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center px-5 py-12 sm:py-16">
      <div className="w-full max-w-lg animate-fade-in space-y-8">
        <div className="w-full [container-type:inline-size]">
          <div className="flex items-center gap-[4cqw]">
            <img
              src={dodgeLogo}
              alt=""
              className="h-[31.5cqw] w-[31.5cqw] shrink-0 rounded-[22%] shadow-card"
            />
            <div className="flex min-w-0 flex-col items-start text-left">
              <h1 className="whitespace-nowrap text-[21.7cqw] font-extrabold leading-none tracking-tight text-foreground">
                Dodge
              </h1>
              <p className="mt-[1.15cqw] whitespace-nowrap text-[7.94cqw] font-medium leading-none text-muted-foreground">
                Community Safety
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <Button
            asChild
            variant="dodge"
            className="h-[56px] w-full shadow-glow transition-shadow hover:shadow-glow-strong"
          >
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLinkClick("download")}
            >
              <Download strokeWidth={2.75} aria-hidden />
              Download
            </a>
          </Button>
          <p className="text-center text-xs font-medium text-muted-foreground">
            Free on iOS and Android
          </p>
        </div>

        {(PAYSTACK_URL || PAYPAL_URL) && (
          <section className="space-y-2.5">
            <SettingsSectionLabel icon={Heart}>Support Dodge</SettingsSectionLabel>
            <div className="settings-card overflow-hidden">
              {PAYSTACK_URL && (
                <HomeLinkCard
                  icon={CreditCard}
                  title="Contribute via Paystack"
                  subtitle="Cards and EFT in South Africa"
                  href={PAYSTACK_URL}
                  onClick={() => trackLinkClick("paystack")}
                />
              )}
              {PAYPAL_URL && (
                <HomeLinkCard
                  icon={Wallet}
                  title="Contribute via PayPal"
                  subtitle="Help keep Dodge running"
                  href={PAYPAL_URL}
                  onClick={() => trackLinkClick("paypal")}
                />
              )}
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
