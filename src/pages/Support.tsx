import { ArrowLeft, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dodgeLogo from "@/assets/dodge-logo.png";
import LegalCard, { BulletList } from "@/components/LegalCard";

export default function Support() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="h-12" />

      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-gold transition-opacity active:opacity-60 hover:opacity-80"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-4 pb-16 pt-6 space-y-4 animate-fade-in">
        <div className="flex items-center gap-4 pb-2">
          <img
            src={dodgeLogo}
            alt="Dodge"
            className="w-12 h-12 rounded-[14px] shadow-gold-glow flex-shrink-0"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight leading-tight">Support</h1>
            <p className="text-xs text-muted-foreground mt-0.5">We are here to help</p>
          </div>
        </div>

        <LegalCard icon={Mail} title="Contact Support" highlight>
          <p>
            For help with your account, app issues, or feedback, please contact the Dodge support team.
          </p>
          <a
            href="mailto:support@dodgeapp.com"
            className="inline-block mt-1 text-gold font-medium hover:opacity-80 transition-opacity"
          >
            support@dodgeapp.com
          </a>
        </LegalCard>

        <LegalCard icon={HelpCircle} title="FAQ">
          <BulletList
            items={[
              "How quickly will I get a response? We aim to reply as soon as possible.",
              "What can support help with? Account access, technical issues, and general questions.",
              "Can I send product feedback? Yes, we welcome feature requests and feedback.",
            ]}
          />
        </LegalCard>

        <LegalCard icon={MessageCircle} title="Need More Help?">
          <p>
            Include relevant details in your email, such as your device type and a short description of
            the issue, so we can assist you faster.
          </p>
        </LegalCard>
      </main>
    </div>
  );
}
