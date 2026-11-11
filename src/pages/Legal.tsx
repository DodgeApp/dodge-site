import { useNavigate } from "react-router-dom";
import ContentPageShell from "@/components/ContentPageShell";
import HomeLinkCard from "@/components/HomeLinkCard";

export default function Legal() {
  const navigate = useNavigate();

  return (
    <ContentPageShell title="Legal" subtitle="Policies and agreements for Dodge">
      <div className="settings-card overflow-hidden">
        <HomeLinkCard
          icon="description"
          title="Terms of Service"
          subtitle="Usage rules & responsibilities"
          onClick={() => navigate("/terms")}
        />
        <HomeLinkCard
          icon="shield"
          title="Privacy Policy"
          subtitle="How we handle your data"
          onClick={() => navigate("/privacy")}
        />
        <HomeLinkCard
          icon="credit_card"
          title="Payment Terms"
          subtitle="Subscriptions & contributions"
          onClick={() => navigate("/payment-terms")}
        />
        <HomeLinkCard
          icon="smartphone"
          title="End User Licence Agreement"
          subtitle="iPhone licence (Apple App Store)"
          onClick={() => navigate("/eula")}
        />
      </div>
    </ContentPageShell>
  );
}
