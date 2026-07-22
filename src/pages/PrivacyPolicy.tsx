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
  Users,
  Bell,
  Server,
  MapPinned,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList } from "@/components/LegalCard";

export default function PrivacyPolicy() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated="22 July 2026">

      <LegalCard icon={Shield} title="Introduction">
        <p>
          Dodge Labs (Pty) Ltd (&quot;Dodge&quot;, &quot;we&quot;, &quot;us&quot;) operates the Dodge mobile
          application and related services at dodgeapp.com. This Privacy Policy describes how we collect,
          use, store, and share personal information when you use Dodge.
        </p>
        <p>
          By creating an account or using Dodge, you agree to this Privacy Policy. If you do not agree,
          please do not use the app.
        </p>
      </LegalCard>

      <LegalCard icon={Database} title="Information We Collect">
        <p>Depending on how you use Dodge, we may collect:</p>
        <BulletList
          items={[
            "Account and profile information: username, first and last name, email address, phone number, and profile photo",
            "Authentication data: one-time verification codes and related logs used to sign in, verify your email, reset your password, or change your contact details",
            "Location data: precise GPS coordinates, including in the background when you grant permission, used for live map features and safety alerts",
            "Movement and presence data: inferred activity (for example walking, running, driving, or stationary) and online/presence status shared with your circles",
            "Circle and social safety data: circle memberships, shared live locations, invite codes, saved places, presence pings, and unsafe status alerts you send or receive",
            "Community safety reports: locations and optional descriptions you submit when reporting that you feel unsafe, plus aggregated unsafe-report pins shown on the map",
            "Safety zone / pass-through contribution data: if enabled, a once-per-day signal that you passed through a geographic area (area key, approximate coordinates, optional street name, and date)—not a continuous route history",
            "Aggregated community risk zone data: area-level pass-through and report counts, risk scores, tiers, and map geometry computed by our servers from community activity (not tied to your identity on the map)",
            "Notifications data: device push tokens (APNs/FCM), notification preferences, and delivery-related metadata",
            "Support and feedback: messages you send through the in-app support form or feedback flows, plus basic device and app version information",
            "Optional donation information: if you donate in the app, payment references processed by our payment provider (we do not store full card details on our servers)",
            "Technical data: app interactions, timestamps, and information needed to operate, secure, and debug the service",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Settings2} title="How We Use Your Information">
        <p>We use personal information to:</p>
        <BulletList
          items={[
            "Create and manage your account",
            "Authenticate you via phone or email verification",
            "Provide circle-based live location sharing and presence features",
            "Show your movement status and online status to circle members when enabled",
            "Send safety-related notifications (for example proximity alerts, place arrivals or departures, circle unsafe alerts, and report reminders)",
            "Display community unsafe-report pins and aggregated risk zones on the map",
            "Compute and update community risk zones from aggregated pass-through and report activity",
            "Send alerts when you or circle members enter published community risk zones (if enabled)",
            "Process optional donations",
            "Respond to support requests and feedback",
            "Maintain security, prevent abuse, enforce our terms, and comply with law",
            "Improve reliability and performance of the app",
          ]}
        />
      </LegalCard>

      <LegalCard icon={MapPin} title="Location Data">
        <p>
          Dodge is built around location. With your permission, we collect location in the foreground and
          background (including when the app is not open) so we can share your position with circles you
          join, detect proximity to reported danger areas, evaluate entry into community risk zones,
          support place-based alerts, and refresh your presence status.
        </p>
        <p>
          You can limit location access in your device settings. Some features will not work without
          location permission. Within the app, you can also control whether your location is shared with a
          specific circle.
        </p>
        <p className="font-medium text-foreground">
          Your live location is shared only with members of circles you belong to, subject to your
          in-app sharing settings—not with the public internet at large.
        </p>
      </LegalCard>

      <LegalCard icon={Users} title="Circles, Alerts & Community Reports">
        <p>
          Dodge lets you create or join private circles (limited groups of trusted contacts). Members of a
          circle may see information you share with that circle, such as your profile details, live
          location, movement or presence status, and safety alerts you trigger.
        </p>
        <p>
          If you report feeling unsafe, we store the report location and related details. You may be
          prompted to add a short reason later. Unsafe reports from users may be visible to other
          signed-in Dodge users on the map as pins in aggregated form.
        </p>
        <p>
          Only add people to circles with their knowledge and consent. You are responsible for how you use
          sharing features.
        </p>
      </LegalCard>

      <LegalCard icon={MapPinned} title="Safety Zones & Community Risk Areas">
        <p>
          Dodge can show <span className="font-semibold text-foreground">community risk zones</span> on the
          map—highlighted areas derived from aggregated community activity, not from a single
          person&apos;s data. These zones are built from:
        </p>
        <BulletList
          items={[
            "Unsafe reports submitted by Dodge users (each report also counts as presence in that area)",
            "Optional pass-through contributions: if enabled in Settings → Safety map data, Dodge records at most once per day per area that you passed through, to help measure how many people travel there",
          ]}
        />
        <p>
          Pass-through contribution is <span className="font-semibold text-foreground">on by default</span>{" "}
          but can be turned off at any time. When enabled, we store a pass event linked to your account
          (user ID, area key, date, approximate coordinates, and optional street name). We do{" "}
          <span className="font-semibold text-foreground">not</span> store your full route or continuous
          location history for this feature.
        </p>
        <p>
          Our servers aggregate pass-through and report counts over a rolling window (currently about 60
          days), apply recency weighting (so more recent activity counts for more), and compute area risk
          scores and tiers (for example elevated, high, and very high). Zones are surfaced by unsafe
          reports: an area must accumulate enough reports to earn a risk tier before it is published.
          Pass-through counts do not create zones&mdash;they act as a denominator that lowers an
          area&apos;s risk level, so busy places with few reports read as safer. You may optionally enable
          a developer/testing view to see unpublished zones that are still forming.
        </p>
        <p>
          Other signed-in users see published zones and summary statistics (such as pass-through and
          report totals), not which individuals contributed. Risk zone map overlays, detail views, and
          related alerts are separate from individual unsafe-report pins and from circle-only live
          location sharing.
        </p>
      </LegalCard>

      <LegalCard icon={Bell} title="Push Notifications">
        <p>
          If you enable notifications, we use your device push token to send alerts you have opted into,
          such as circle unsafe alerts, proximity warnings, shared-place events, follow-ups related to
          safety reports, and—if enabled—alerts when you or a circle member enter a published community
          risk zone. You can manage notification categories in the app and disable notifications in your
          device settings.
        </p>
      </LegalCard>

      <LegalCard icon={Share2} title="How We Share Information">
        <p>We do not sell your personal information. We may share information:</p>
        <BulletList
          items={[
            "With other Dodge users in your circles, as described above and according to your settings",
            "With service providers that help us run Dodge (listed below), under contractual obligations to protect your data",
            "When required by law, regulation, legal process, or to protect rights, safety, and security",
            "In connection with a merger, acquisition, or sale of assets, with notice where required by law",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Server} title="Service Providers">
        <p>We use trusted third parties to operate Dodge, including:</p>
        <BulletList
          items={[
            "Google Firebase (authentication, cloud database, file storage, cloud functions, and push messaging infrastructure)",
            "Twilio (phone number verification and one-time codes)",
            "Email delivery providers used by our backend to send verification and account emails",
            "Paystack (optional in-app donations)",
            "Apple (maps via Apple MapKit, push notification delivery on iOS, and App Store distribution)",
            "Resend (processing messages sent through the dodgeapp.com support contact form)",
          ]}
        />
        <p>
          These providers process data on our behalf to deliver the service. Their own privacy policies
          also apply to how they handle information.
        </p>
      </LegalCard>

      <LegalCard icon={Lock} title="Data Security & Retention">
        <p>
          We use technical and organisational measures designed to protect your information, including
          access controls on our database and encrypted transport (HTTPS/TLS). No method of transmission
          or storage is completely secure.
        </p>
        <p>
          We retain personal information for as long as your account is active and as needed to provide
          the service, resolve disputes, enforce our agreements, and meet legal obligations. When you
          delete your account, we delete or anonymise associated data in line with our deletion process,
          except where we must keep limited records for legal, security, or backup purposes.
        </p>
      </LegalCard>

      <LegalCard icon={UserCog} title="Your Choices & Rights">
        <p>You can:</p>
        <BulletList
          items={[
            "Update your profile, phone number, or email in the app (verification may be required)",
            "Control per-circle location sharing and notification preferences (including community risk zone alerts)",
            "Turn pass-through contribution on or off under Settings → Safety map data",
            "Toggle risk zone map overlays and optional unpublished/testing zones in the app",
            "Disable location, motion, camera, photo, or notification permissions in device settings",
            "Delete your account from the app, which triggers removal of your profile and associated data from our systems",
            "Contact us to ask questions or request access, correction, or deletion where applicable law provides those rights",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Clock} title="Children">
        <p>
          Dodge is not intended for children under 13, and we do not knowingly collect personal
          information from children under 13. If you believe a child has provided us information, contact
          us and we will take appropriate steps to delete it.
        </p>
      </LegalCard>

      <LegalCard icon={Shield} title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. We will post the updated version on this
          page and change the &quot;Last updated&quot; date. Continued use of Dodge after changes take
          effect means you accept the updated policy.
        </p>
      </LegalCard>

      <LegalCard icon={Mail} title="Contact Us">
        <p>For privacy questions or requests, contact:</p>
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
