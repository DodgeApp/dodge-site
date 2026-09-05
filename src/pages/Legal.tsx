import { useNavigate } from "react-router-dom";
import { CreditCard, FileText, Shield, Smartphone } from "lucide-react";
import ContentPageShell from "@/components/ContentPageShell";
import HomeLinkCard from "@/components/HomeLinkCard";

export default function Legal() {
  const navigate = useNavigate();

  return (
    <ContentPageShell title="Legal" subtitle="Policies and agreements for Dodge">
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
        <HomeLinkCard
          icon={CreditCard}
          title="Payment Terms"
          subtitle="Subscriptions & contributions"
          onClick={() => navigate("/payment-terms")}
        />
        <HomeLinkCard
          icon={Smartphone}
          title="End User Licence Agreement"
          subtitle="Apple App Store licence"
          onClick={() => navigate("/eula")}
        />
      </div>
    </ContentPageShell>
  );
}
