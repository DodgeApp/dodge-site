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
  Users,
  Heart,
  Phone,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList } from "@/components/LegalCard";

export default function TermsOfService() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated="1 June 2026">

      <LegalCard icon={FileText} title="Agreement">
        <p>
          These Terms of Service (&quot;Terms&quot;) are a binding agreement between you and Dodge Labs
          (Pty) Ltd (&quot;Dodge&quot;, &quot;we&quot;, &quot;us&quot;) governing your use of the Dodge
          mobile application and website (including dodgeapp.com).
        </p>
        <p>By accessing or using Dodge, you agree to these Terms and our Privacy Policy. If you do not agree, do not use Dodge.</p>
      </LegalCard>

      <LegalCard icon={UserCheck} title="Eligibility & Account">
        <p>
          You must be at least 13 years old and able to form a binding contract to use Dodge. You are
          responsible for providing accurate information and keeping your login credentials secure.
        </p>
        <p>
          Accounts are verified using your phone number and/or email. You may need to complete a profile
          (including a username and name) before joining circles or using certain features.
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="What Dodge Provides">
        <p>Dodge is a personal safety and coordination tool that may include:</p>
        <BulletList
          items={[
            "Private circles for sharing live location with people you trust",
            "Presence and movement status visible to circle members",
            "Personal and community safety reporting on a map",
            "Emergency-style alerts to members of your circles",
            "Shared places with optional arrival and departure notifications",
            "Push notifications related to safety and circle activity",
            "Optional voluntary donations to support development",
          ]}
        />
        <p>
          Dodge does not provide emergency services and is not a substitute for calling local emergency
          responders (such as police, ambulance, or fire services).
        </p>
      </LegalCard>

      <LegalCard icon={Users} title="Circles & Consent">
        <p>
          You control which circles you join or create. Only invite people who have agreed to share
          location and safety information with you. Do not use Dodge to track, monitor, or harass anyone
          without their knowledge and consent.
        </p>
        <p>
          You can leave a circle or stop sharing your location with a circle using in-app controls. Circle
          creators and members must respect each other&apos;s privacy and local laws.
        </p>
      </LegalCard>

      <LegalCard icon={MapPin} title="Location & Safety Disclaimer">
        <p>
          Dodge relies on device GPS, network conditions, and third-party map data. Location information
          may be delayed, inaccurate, or unavailable. Alerts and reports are based on user submissions and
          automated systems—we do not guarantee their accuracy, completeness, or timeliness.
        </p>
        <p className="font-medium text-foreground">
          You use Dodge at your own risk. Always use your own judgment and contact emergency services
          when you are in immediate danger.
        </p>
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="Community Reports & User Content">
        <p>
          Safety reports and alerts you submit may be stored and shown to other users (for example circle
          members or signed-in users viewing map reports). Do not submit false, misleading, or malicious
          reports.
        </p>
        <p>
          We may remove content or suspend accounts that violate these Terms or harm other users or the
          service.
        </p>
      </LegalCard>

      <LegalCard icon={Heart} title="Donations">
        <p>
          Optional donations are processed by third-party payment providers. Donations are voluntary and
          non-refundable except where required by applicable law or the payment provider&apos;s policies.
          Donations do not purchase safety guarantees or priority support.
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="Acceptable Use">
        <p>You agree not to:</p>
        <BulletList
          items={[
            "Use Dodge for unlawful, harmful, or fraudulent purposes",
            "Harass, threaten, or stalk others, or enable abuse through location sharing",
            "Impersonate another person or misrepresent your identity",
            "Attempt to access another user&apos;s account or our systems without authorisation",
            "Interfere with or disrupt the app, servers, or networks",
            "Scrape, reverse engineer, or misuse the service except as allowed by law",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Lock} title="Account Security & Termination">
        <p>
          You are responsible for activity on your account. Notify us promptly if you suspect unauthorised
          access.
        </p>
        <p>
          You may delete your account in the app. We may suspend or terminate access if you breach these
          Terms, create risk for others, or where required by law. Provisions that should survive
          termination (including disclaimers and liability limits) will continue to apply.
        </p>
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="Disclaimer of Warranties">
        <p>
          Dodge is provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest
          extent permitted by law, we disclaim all warranties, express or implied, including fitness for
          a particular purpose and non-infringement.
        </p>
      </LegalCard>

      <LegalCard icon={XCircle} title="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Dodge Labs (Pty) Ltd and its officers, employees, and
          suppliers will not be liable for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits, data, goodwill, or personal injury, arising from your use of
          Dodge.
        </p>
        <p>
          Our total liability for any claim relating to Dodge will not exceed the greater of (a) the
          amount you paid us in the twelve months before the claim, or (b) one hundred US dollars (USD
          100), except where law does not allow such a limitation.
        </p>
      </LegalCard>

      <LegalCard icon={Phone} title="Third-Party Services">
        <p>
          Dodge integrates with third-party services (including cloud hosting, maps, messaging, and
          payments). Your use of those services may be subject to their own terms. We are not responsible
          for third-party services outside our reasonable control.
        </p>
      </LegalCard>

      <LegalCard icon={RefreshCw} title="Changes to These Terms">
        <p>
          We may update these Terms from time to time. We will post the updated version on this page and
          update the &quot;Last updated&quot; date. Material changes may also be communicated in the app
          where appropriate. Continued use after changes means you accept the updated Terms.
        </p>
      </LegalCard>

      <LegalCard icon={Mail} title="Contact">
        <p>For questions about these Terms, contact:</p>
        <a
          href="mailto:support@dodgeapp.com"
          className="mt-1 inline-block font-semibold text-primary transition-opacity hover:opacity-80"
        >
          support@dodgeapp.com
        </a>
        <p className="mt-2 text-sm text-muted-foreground">
          Dodge Labs (Pty) Ltd
        </p>
      </LegalCard>

    </LegalPageShell>
  );
}
