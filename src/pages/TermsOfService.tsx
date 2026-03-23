import {
  FileText,
  UserCheck,
  ShieldCheck,
  Lock,
  MapPin,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Mail,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList } from "@/components/LegalCard";

export default function TermsOfService() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated="23 March 2026">

      <LegalCard icon={FileText} title="Introduction">
        <p>
          Welcome to Dodge. Dodge is a personal safety application that allows users to share their
          location with trusted contacts and signal when they feel unsafe.
        </p>
        <p>By using Dodge, you agree to these Terms of Service.</p>
      </LegalCard>

      <LegalCard icon={UserCheck} title="User Responsibilities">
        <p>
          You agree to use Dodge responsibly and only for its intended purpose as a personal safety tool.
        </p>
        <p>
          You are responsible for maintaining the confidentiality of your account and ensuring your
          information is accurate.
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="Acceptable Use">
        <p>You agree not to misuse the app. This includes:</p>
        <BulletList
          items={[
            "Providing false information",
            "Using the app to harm, harass, or track others without consent",
            "Attempting to interfere with the app's functionality",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Lock} title="Account & Security">
        <p>
          You are responsible for maintaining the security of your account.
        </p>
        <p>
          Dodge is not liable for any loss or damage resulting from unauthorized access due to your
          failure to safeguard your credentials.
        </p>
      </LegalCard>

      <LegalCard icon={MapPin} title="Location Sharing Disclaimer">
        <p>
          Dodge uses real-time location data to function. While we aim to provide accurate and reliable
          information, location data may not always be precise or up-to-date.
        </p>
        <p>
          Dodge should not be relied on as a sole safety measure.
        </p>
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="Limitation of Liability">
        <p>
          Dodge is provided "as is" without warranties of any kind.
        </p>
        <p>
          We are not responsible for any damages, injuries, or losses resulting from the use or
          inability to use the app.
        </p>
      </LegalCard>

      <LegalCard icon={XCircle} title="Termination">
        <p>
          We reserve the right to suspend or terminate your access to Dodge if you violate these terms
          or misuse the platform.
        </p>
      </LegalCard>

      <LegalCard icon={RefreshCw} title="Changes to Terms">
        <p>
          We may update these Terms from time to time.
        </p>
        <p>
          Continued use of Dodge after changes indicates your acceptance of the updated Terms.
        </p>
      </LegalCard>

      <LegalCard icon={Mail} title="Contact Information">
        <p>For any questions regarding these Terms, please contact us at:</p>
        <a
          href="mailto:support@dodgeapp.com"
          className="inline-block mt-1 text-gold font-medium hover:opacity-80 transition-opacity"
        >
          support@dodgeapp.com
        </a>
      </LegalCard>

    </LegalPageShell>
  );
}
