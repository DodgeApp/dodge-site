import {
  Bell,
  Clock,
  Database,
  FileText,
  Lock,
  MapPin,
  MapPinned,
  Route,
  Scale,
  Server,
  Settings2,
  Share2,
  Shield,
  UserCog,
  Users,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList, Clause } from "@/components/LegalCard";
import {
  LegalContactCard,
  PolicyLink,
  RelatedLegalCard,
} from "@/components/LegalBits";
import { COMPANY_NAME, LEGAL_LAST_UPDATED } from "@/lib/legal";

export default function PrivacyPolicy() {
  return (
    <LegalPageShell title="Privacy Policy" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalCard icon={Shield} title="1. Introduction">
        <p>
          {COMPANY_NAME} (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) operates the Dodge mobile
          application (hereinafter called &quot;Dodge&quot;) and related services at dodgeapp.com, and is
          committed to protecting your privacy. This Privacy Policy explains how we collect, use, store,
          disclose and safeguard your information when you use Dodge.
        </p>
        <p>
          We comply with the Protection of Personal Information Act, 4 of 2013 (POPIA) of South Africa, the
          General Data Protection Regulation (GDPR) of the European Union, the Apple App Store compliance
          guidelines and other applicable global privacy laws.
        </p>
        <p>
          By creating an account or using Dodge, you agree to this Privacy Policy. If you do not agree,
          please do not use Dodge.
        </p>
        <p>We have appointed an Information Officer as required in terms of POPIA.</p>
      </LegalCard>

      <LegalCard icon={Database} title="2. Information we collect">
        <p>Depending on how you use Dodge, we may collect:</p>
        <BulletList
          items={[
            "Personal Information: Full Name, email address, phone number, profile details, including a profile photo.",
            "Usage Data: App activity, device type, operating system, IP Address.",
            "Communications: Messages shared within trusted groups.",
            "Authentication data: one-time verification codes and related logs used to sign in, verify your email, reset your password, or change your contact details.",
            "Location data: precise GPS coordinates, including in the background when you grant permission, used for live map features, safety alerts, and, if enabled, trip history.",
            "Movement and presence data: inferred activity (for example walking, running, driving, or stationary) and online/presence status shared with your circles.",
            "Trip history data: if enabled, completed journey summaries including start and end times, start and end coordinates, a simplified route, distance, inferred transport mode, and short place labels (for example a street name). High-frequency GPS samples used to detect trips remain on your device and are not uploaded.",
            "Circle and social safety data: circle memberships, shared live locations, invite codes, saved places, presence pings, and unsafe status alerts you send or receive.",
            "Community safety reports: locations and optional descriptions you submit when reporting that you feel unsafe, plus aggregated unsafe-report pins shown on the map.",
            "Safety zone / pass-through contribution data: if enabled, a once-per-day signal that you passed through a geographic area (area key, approximate coordinates, optional street name, and date)—not a continuous route history.",
            "Aggregated community risk zone data: area-level pass-through and report counts, risk scores, tiers, and map geometry computed by our servers from community activity (not tied to your identity on the map).",
            "Notifications data: device push tokens (APNs/FCM), notification preferences, and delivery-related metadata.",
            "Support and feedback: messages you send through the in-app support form or feedback flows, plus basic device and app version information.",
            "Voluntary Contributions: if you request voluntary contributions for the benefit of Dodge Labs in the App, payment references are processed by our payment provider, the Apple App Store. We do not store full card details on our servers.",
            "Payment information: If you purchase a subscription through the Apple App Store, your subscription will automatically renew unless cancelled at least 24 hours before the end of the current billing cycle. You can manage or cancel your subscription at any time through your iOS device settings. Refunds for App Store purchases are handled directly by Apple in accordance with their policies.",
            "Technical data: app interactions, timestamps, and information needed to operate, secure, and debug the service.",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Settings2} title="3. How we use your information">
        <p>We process your information to:</p>
        <BulletList
          items={[
            "Provide and improve App functionality.",
            "Enable secure communication within trusted groups.",
            "Comply with legal obligations.",
            "Send updates, notifications, or support messages (with consent).",
            "Prevent fraud, abuse, or unauthorised access.",
            "Create and manage your account.",
            "Authenticate you/your details via phone or email verification.",
            "Provide circle-based live location sharing and presence features.",
            "Detect completed journeys and show trip history to you, and, if you enable sharing, to circle members who can see your location.",
            "Show your movement status and online status to circle members when enabled.",
            "Send safety-related notifications (for example proximity alerts, place arrivals or departures, circle unsafe alerts, and report reminders).",
            "Display community unsafe-report pins and aggregated risk zones on the map.",
            "Compute and update community risk zones from aggregated pass-through and report activity.",
            "Send alerts when you or circle members enter published community risk zones (if enabled).",
            "Process voluntary contributions (if applicable) and process payments (if applicable).",
            "Respond to support requests and feedback.",
            "Maintain security, prevent abuse, enforce our terms, and comply with law.",
            "Improve reliability and performance of Dodge.",
          ]}
        />
      </LegalCard>

      <LegalCard icon={Scale} title="4. Legal basis for processing">
        <p>We process personal data under the following legal bases:</p>
        <Clause n="4.1">Consent (GDPR Art. 6(1)(a)): For optional features and marketing.</Clause>
        <Clause n="4.2">Contractual necessity (GDPR Art. 6(1)(b)): To provide App services.</Clause>
        <Clause n="4.3">Legal Obligation (GDPR Art. 6(1)(c)): To comply with laws.</Clause>
        <Clause n="4.4">Legitimate Interests (GDPR Art. 6(1)(f)): To improve and secure Dodge.</Clause>
      </LegalCard>

      <LegalCard icon={Share2} title="5. Data sharing and transfers">
        <Clause n="5.1">We do not sell your personal information/data.</Clause>
        <Clause n="5.2">
          Data may be shared with trusted service providers (hosting, analytics, payment processors).
        </Clause>
        <Clause n="5.3">
          Where personal data is transferred outside South Africa or the EU, we rely on appropriate
          safeguards such as adequacy decisions, Standard Contractual Clauses, or binding corporate rules
          to ensure your information remains protected in line with POPIA and the GDPR.
        </Clause>
      </LegalCard>

      <LegalCard icon={UserCog} title="6. Your rights">
        <Clause n="6.1">Depending on your jurisdiction, you may have rights to:</Clause>
        <BulletList
          items={[
            "Access your data",
            "Correct inaccurate data",
            "Request deletion (“right to be forgotten”)",
            "Restrict or object to processing",
            "Data portability",
            "Withdraw consent at any time",
          ]}
        />
        <Clause n="6.2">
          Users located in the EU retain all rights under the GDPR regardless of the governing law of these
          Terms. This includes the right to lodge a complaint with a supervisory authority in their country
          of residence.
        </Clause>
        <Clause n="6.3">
          In addition to GDPR and POPIA, users outside South Africa and the EU may also have rights under
          their local consumer protection or privacy laws. We will respect applicable rights where required
          by law.
        </Clause>
      </LegalCard>

      <LegalCard icon={Clock} title="7. Children's data">
        <Clause n="7.1">
          Dodge is not directed to children under 13 (or under 16 in the EU). We do not knowingly collect
          data from minors without parental or guardian consent.
        </Clause>
        <Clause n="7.2">
          For users located in the EU, if you are under 16 years old, we require verifiable parental or
          guardian consent before collecting or processing your personal information.
        </Clause>
        <Clause n="7.3">
          Verification may include confirmation through email, phone, or other appropriate methods.
        </Clause>
      </LegalCard>

      <LegalCard icon={MapPin} title="8. Location data">
        <Clause n="8.1">
          Dodge is built around location-based functionality. With your permission, we collect your
          location both in the foreground and in the background, including when the Dodge app is not open.
          This enables us to share your location with circles you have joined, detect when you are near
          reported danger areas, determine whether you enter designated community risk zones, provide
          location-based alerts, update your presence status, and, if trip history is enabled, detect
          completed journeys.
        </Clause>
        <Clause n="8.2">
          You may restrict or disable location access through your device settings. Please note that
          certain Dodge features may not function properly without location permission. Within Dodge, you
          can also manage and control whether your location is shared with members of a particular circle.
        </Clause>
        <Clause n="8.3">
          Your live location is shared only with members of the circles you have joined, in accordance with
          your in-app location-sharing settings. Your live location is not made available to the public or
          shared with the public internet at large.
        </Clause>
      </LegalCard>

      <LegalCard icon={Route} title="Trip history">
        <p>
          When trip history is enabled, Dodge automatically detects completed journeys on your primary
          signed-in device and builds a personal trip summary. Trip history is a record of past journeys.
          It is not live tracking and is separate from circle live-location sharing.
        </p>
        <p>
          High-frequency location samples used to detect trips remain on your device for a short period
          (currently about 3 days) and are not uploaded. Completed trip summaries may include start and
          end times, start and end coordinates, a simplified route, distance, inferred transport mode, and
          short place labels. Those summaries are stored on your device and synced to our servers so you
          can see them on your other devices. We generally keep completed trip summaries for about 3 days.
        </p>
        <p>
          To generate place labels and align routes to roads, Dodge may send relevant coordinates to Apple
          location and mapping services on your device. Map preview images for trip cards are generated on
          your device and are not uploaded.
        </p>
        <p>
          You and, if sharing is enabled, members of circles with whom you share your location may view
          trips from the last 3 days. You can turn trip history off, or stop sharing trips with circles,
          under Settings → Safety Map Data. Turning trip history off stops recording and deletes saved
          trips. Turning sharing off removes trips from other members&apos; view while keeping your local
          history.
        </p>
      </LegalCard>

      <LegalCard icon={Users} title="9. Circles, alerts & community reports">
        <Clause n="9.1">
          Dodge allows you to create or join private circles consisting of trusted contacts. Members of a
          circle may have access to information that you choose to share with that circle, including your
          profile information, live location, movement or presence status, safety alerts that you
          initiate, and, where trip sharing is enabled, your recent trip history.
        </Clause>
        <Clause n="9.2">
          If you report that you feel unsafe, Dodge may collect and retain the location of the report and
          other information relating to the report. You may subsequently be prompted to provide a brief
          reason or additional details. Safety reports submitted by users may be displayed on the Dodge map
          to other signed-in Dodge users as aggregated pins. Such reports are not intended to identify the
          individual who submitted the report.
        </Clause>
        <Clause n="9.3">
          You should only add individuals to a private circle where they are aware of and have consented to
          being included. You are responsible for using Dodge&apos;s circle and sharing features
          appropriately and for ensuring that your use of these features respects the privacy and
          preferences of other users.
        </Clause>
      </LegalCard>

      <LegalCard icon={MapPinned} title="10. Safety zones and community risk areas">
        <Clause n="10.1">
          Dodge may display community risk zones on the map. These are highlighted areas generated from
          aggregated community activity and are not based on the information or activity of any single
          individual. Community risk zones are generated using:
        </Clause>
        <BulletList
          items={[
            "Unsafe reports submitted by Dodge users. Each unsafe report also contributes to the measure of activity or presence within the relevant area; and",
            "Optional pass-through contributions, which allow Dodge to measure the volume of people travelling through an area. If this feature is enabled under Settings → Safety Map Data, Dodge records no more than one pass-through event per day for each area you pass through.",
          ]}
        />
        <Clause n="10.2">
          Pass-through contribution is enabled by default, but you may disable it at any time through your
          settings. When enabled, a pass-through event may be associated with your account and may include
          your user ID, the relevant area key, the date of the event, approximate coordinates, and, where
          available, the relevant street name. Dodge does not use this feature to store your complete route
          or maintain a continuous history of your movements.
        </Clause>
        <Clause n="10.3">
          Our servers aggregate pass-through and unsafe-report data over a rolling period, currently
          approximately 60 days. We apply recency weighting so that more recent activity has a greater
          influence on the calculation and use the aggregated information to calculate area risk scores and
          corresponding risk tiers, such as Elevated, High, and Very High.
        </Clause>
        <Clause n="10.4">
          We combine community reports and travel activity to show general safety patterns. These maps are
          for information only and should not replace your own judgment.
        </Clause>
        <Clause n="10.5">
          A community risk zone is created and published only when an area has accumulated a sufficient
          number of unsafe reports to meet the applicable threshold for a risk tier. Pass-through activity
          does not, by itself, create a community risk zone. Instead, pass-through activity provides
          context regarding the volume of people travelling through an area and is used as a denominator in
          the risk calculation. Consequently, an area with substantial pass-through activity but relatively
          few unsafe reports may have a lower assessed risk level.
        </Clause>
        <Clause n="10.6">
          Where available, you may optionally enable a developer or testing view to see unpublished zones
          that are still being formed and have not yet met the threshold for publication.
        </Clause>
        <Clause n="10.7">
          Other signed-in Dodge users may see published community risk zones and aggregated summary
          information, such as pass-through and unsafe-report totals. They will not be able to identify
          which individuals contributed to those totals.
        </Clause>
        <Clause n="10.8">
          Community risk-zone map overlays, detailed zone information, and related alerts are separate from
          individual unsafe-report pins and from live location sharing. Your live location is shared only
          with members of the relevant private circles, subject to your in-app sharing settings.
        </Clause>
        <Clause n="10.9">
          Community risk zones and alerts are generated through aggregated reports and pass-through
          contributions. These are informational only and do not involve automated decision-making that
          produces legal or similarly significant effects on individual users.
        </Clause>
      </LegalCard>

      <LegalCard icon={Bell} title="11. Push notifications">
        <Clause n="11.1">
          If you enable push notifications, we use your device&apos;s push notification token to deliver
          alerts and notifications that you have opted to receive. These may include circle safety alerts,
          proximity warnings, shared-place events, follow-up notifications relating to safety reports, and,
          where enabled, notifications when you or a member of one of your circles enters a published
          community risk zone.
        </Clause>
        <Clause n="11.2">
          You can manage notification categories and preferences within Dodge and may disable notifications
          through your device settings.
        </Clause>
      </LegalCard>

      <LegalCard icon={Share2} title="12. How we share information">
        <p>We may share information:</p>
        <Clause n="12.1">
          With other Dodge users in your private circles, in accordance with the features described in this
          Privacy Policy and your in-app sharing settings;
        </Clause>
        <Clause n="12.2">
          With service providers that assist us in operating and delivering Dodge, subject to contractual
          or other appropriate obligations relating to the protection and processing of your information;
        </Clause>
        <Clause n="12.3">
          Where disclosure is required or permitted by applicable law, regulation, legal process, or where
          reasonably necessary to protect our rights, the rights of our users, or the safety and security
          of Dodge and its users; and
        </Clause>
        <Clause n="12.4">
          In connection with a merger, acquisition, restructuring, financing, or sale of all or part of our
          business or assets, subject to providing notice where required by applicable law.
        </Clause>
      </LegalCard>

      <LegalCard icon={Server} title="13. Service providers">
        <p>We use trusted third-party service providers to operate and support Dodge, including:</p>
        <BulletList
          items={[
            "Google Firebase – authentication, cloud database, file storage, cloud functions, and push notification infrastructure;",
            "Twilio – telephone number verification and delivery of one-time verification codes;",
            "Email delivery providers – used by our backend to send verification, account, and service-related emails;",
            "Apple – maps through Apple MapKit (including reverse geocoding and road-routing used for trip history), push-notification delivery on iOS, and App Store distribution; and",
            "Resend – processing and delivery of messages submitted through the Dodge support contact form on dodgeapp.com.",
          ]}
        />
        <p>
          These service providers process information on our behalf to provide, maintain, and support
          Dodge. Their respective privacy policies may also apply to their processing of your information.
        </p>
      </LegalCard>

      <LegalCard icon={Lock} title="14. Data security and retention">
        <Clause n="14.1">
          We retain personal information only for as long as reasonably necessary to fulfil the purposes
          described in this Privacy Policy, provide and maintain Dodge, or comply with applicable legal
          obligations. Subject to applicable law, you may request deletion of your personal information at
          any time.
        </Clause>
        <Clause n="14.2">
          We implement reasonable technical and organisational measures designed to protect your information
          against unauthorised access, loss, misuse, alteration, or disclosure. These measures include
          access controls and encrypted transmission using HTTPS/TLS. However, no method of transmitting or
          storing information is completely secure, and we cannot guarantee absolute security.
        </Clause>
        <Clause n="14.3">
          We generally retain personal information for as long as your account remains active and for as
          long as reasonably necessary to provide the service, resolve disputes, enforce our agreements,
          maintain security, and comply with legal and regulatory obligations.
        </Clause>
        <Clause n="14.4">
          If you delete your account, we will delete or anonymise associated personal information in
          accordance with our account-deletion procedures, except where we are required or permitted by law
          to retain limited information for legal, regulatory, security, fraud-prevention,
          dispute-resolution, or backup purposes.
        </Clause>
        <Clause n="14.5">
          Completed trip summaries are generally retained for about 3 days on your device and on our
          servers, then deleted automatically. Circle members who can see your location may view the same
          3-day window when sharing is enabled. High-frequency trip-detection samples remain on your device
          for a short period (currently about 3 days) and are not uploaded. If you turn trip history off,
          or delete your account, we delete associated trip data in accordance with our deletion
          procedures.
        </Clause>
      </LegalCard>

      <LegalCard icon={UserCog} title="15. Your choices and rights">
        <p>Subject to applicable law, you may:</p>
        <Clause n="15.1">
          Update your profile, telephone number, or email address within the Dodge app, although
          verification may be required;
        </Clause>
        <Clause n="15.2">
          Control per-circle location-sharing and notification preferences for individual circles,
          including preferences relating to community risk-zone alerts;
        </Clause>
        <Clause n="15.3">
          Enable or disable your contribution of pass-through data under Settings → Safety Map Data;
        </Clause>
        <Clause n="15.3A">
          Enable or disable trip history, and separately enable or disable sharing of trip history with
          circle members, under Settings → Safety Map Data;
        </Clause>
        <Clause n="15.4">
          Enable or disable community risk-zone map overlays and, where available, optional unpublished or
          testing zones within the app;
        </Clause>
        <Clause n="15.5">
          Enable, restrict, or disable location, motion, camera, photo, and notification permissions
          through your device settings;
        </Clause>
        <Clause n="15.6">
          Delete your Dodge account through the app, which will initiate the removal or anonymisation of
          your profile and associated information in accordance with our deletion procedures; and
        </Clause>
        <Clause n="15.7">
          Contact us with questions or requests relating to your personal information, including requests
          for access, correction, deletion, or other rights available to you under applicable law.
        </Clause>
      </LegalCard>

      <LegalCard icon={Clock} title="16. Child data handling provisions">
        <Clause n="16.1">
          Dodge is not intended for use by children under the age of 13, and we do not knowingly collect or
          process personal information relating to children under 13.
        </Clause>
        <Clause n="16.2">
          If you are under 18, you must have parental or guardian consent to use Dodge. By providing
          consent, parents or guardians agree to:
        </Clause>
        <BulletList
          items={[
            "Supervise the child’s use of Dodge and ensure compliance with this Agreement, referenced documents, and applicable laws.",
            "Accept full responsibility and liability for the child’s compliance and use of the Services.",
            "Accept all disclaimers, waivers, and limitations of liability on both their own behalf and the child’s behalf.",
          ]}
        />
        <Clause n="16.3">
          For users located in the EU, if you are under 16 years old, parental or guardian consent must be
          verifiable in accordance with GDPR requirements, before you may use Dodge.
        </Clause>
        <Clause n="16.4">
          If you believe that a child under the age of 13 has provided us with personal information, please
          contact us promptly. We will investigate the matter and, where required by applicable law, take
          appropriate steps to delete the information.
        </Clause>
      </LegalCard>

      <LegalCard icon={Lock} title="17. Security">
        <p>
          We implement reasonable technical and organisational safeguards designed to protect personal
          information, including encryption, secure infrastructure, access controls, and other appropriate
          security measures. Despite these safeguards, no electronic transmission or storage system can be
          guaranteed to be completely secure.
        </p>
      </LegalCard>

      <LegalCard icon={Shield} title="18. Data breach notification">
        <Clause n="18.1">
          If we become aware of a personal-information security breach that is required to be notified
          under applicable law, we will take appropriate steps to assess, contain, investigate, and
          remediate the breach and will notify affected users, regulators, or other relevant parties within
          the timeframes and in the manner required by applicable law.
        </Clause>
        <Clause n="18.2">
          Where applicable, this may include the notification requirements under the GDPR and the
          Protection of Personal Information Act, 2013 (POPIA). We will not state a fixed notification
          period unless that period is applicable to the particular breach and required by the relevant
          law.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="19. Changes to this Privacy Policy">
        <Clause n="19.1">
          We may update this Privacy Policy from time to time to reflect changes to Dodge, our processing
          activities, legal requirements, or other operational requirements. We will post the updated
          version in the Dodge app and/or on our website and will update the &quot;Last updated&quot; date
          accordingly.
        </Clause>
        <Clause n="19.2">
          Where required by applicable law, we will provide additional notice of material changes. Your
          continued use of Dodge after an updated Privacy Policy becomes effective will be subject to the
          updated policy.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="20. Electronic acceptance of terms">
        <p>
          By selecting &quot;Accept,&quot; &quot;Agree,&quot; after reviewing the Privacy Policy, you
          acknowledge that:
        </p>
        <Clause n="20.1">You have read and understood the Privacy Policy.</Clause>
        <Clause n="20.2">You agree to be legally bound by the Privacy Policy.</Clause>
        <Clause n="20.3">
          You consent to the use of electronic records and communications in connection with Dodge, to the
          extent permitted by law.
        </Clause>
        <Clause n="20.4">
          You agree to comply with all applicable laws and regulations when using Dodge.
        </Clause>
        <p className="font-medium text-foreground">
          If you do not agree with the contents of this Privacy Policy, you must refrain from creating an
          account or using Dodge.
        </p>
      </LegalCard>

      <RelatedLegalCard current="privacy" />
      <LegalContactCard
        showInformationOfficer
        intro="For privacy questions or requests, we would like to hear from you."
      />
    </LegalPageShell>
  );
}
