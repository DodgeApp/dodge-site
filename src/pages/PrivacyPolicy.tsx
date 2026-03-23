import {
  Shield,
  Database,
  Settings2,
  MapPin,
  Share2,
  Lock,
  UserCog,
  Clock,
  Mail,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList } from "@/components/LegalCard";

export default function PrivacyPolicy() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="23 March 2026">

      <LegalCard icon={Shield} title="Introduction">
        <p>
          Your privacy is important to us. This Privacy Policy explains how Dodge collects, uses, and
          protects your information.
        </p>
      </LegalCard>

      <LegalCard icon={Database} title="Information We Collect">
        <p>We may collect:</p>
        <BulletList
          items={[
            "Account information (name, email, phone number)",
            "Location data (real-time and background location)",
            "Device and usage information",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Settings2} title="How We Use Your Information">
        <p>We use your data to:</p>
        <BulletList
          items={[
            "Provide core app functionality",
            "Enable location sharing with your chosen circles",
            "Improve app performance and user experience",
          ]}
        />
      </LegalCard>

      {/* Highlighted card */}
      <LegalCard icon={MapPin} title="Location Data Usage" highlight>
        <p>
          Dodge collects and processes location data to enable safety features such as live location
          sharing and unsafe status alerts.
        </p>
        <p className="font-medium text-foreground/80">
          Location data is only shared with users you explicitly choose.
        </p>
      </LegalCard>

      <LegalCard icon={Share2} title="Data Sharing">
        <p>We do not sell your personal data. Your information is only shared:</p>
        <BulletList
          items={[
            "With users in your selected circles",
            "When required by law",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Lock} title="Data Security">
        <p>
          We implement reasonable safeguards to protect your data.
        </p>
        <p>
          However, no system is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalCard>

      <LegalCard icon={UserCog} title="User Control">
        <p>You can:</p>
        <BulletList
          items={[
            "Manage who sees your location",
            "Update or delete your account information",
            "Disable location services through your device settings",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Clock} title="Data Retention">
        <p>
          We retain your data only as long as necessary to provide our services or comply with legal
          obligations.
        </p>
      </LegalCard>

      <LegalCard icon={Mail} title="Contact Information">
        <p>If you have questions about this Privacy Policy, contact:</p>
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
