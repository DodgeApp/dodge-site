import {
  AlertTriangle,
  Brain,
  FileText,
  Gavel,
  HeartHandshake,
  Lock,
  MapPin,
  MapPinned,
  RefreshCw,
  Scale,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList, Clause } from "@/components/LegalCard";
import {
  LegalContactCard,
  PolicyLink,
  RelatedLegalCard,
  SupportEmail,
} from "@/components/LegalBits";
import { COMPANY_NAME, LEGAL_LAST_UPDATED } from "@/lib/legal";

export default function TermsOfService() {
  return (
    <LegalPageShell title="Terms of Service" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalCard icon={FileText} title="1. Introduction">
        <p>
          {COMPANY_NAME} (&quot;Dodge&quot;, &quot;we&quot;, &quot;us&quot; or &quot;our&quot;) provides the
          following services through the Dodge mobile application (&quot;Dodge&quot; or the
          &quot;App&quot;). Dodge is a personal safety and coordination tool designed to help users
          communicate their location, coordinate with trusted contacts, and access community-based safety
          information. Depending on the features available and the permissions you grant, Dodge may
          provide:
        </p>
        <BulletList
          items={[
            "Private circles that allow you to share your live location with people you trust;",
            "Presence and movement status that may be visible to members of your circles, subject to your settings;",
            "Personal and community unsafe-report pins displayed on a map;",
            "Aggregated community risk zones (safety zones) generated from aggregated unsafe reports and pass-through activity;",
            "Optional pass-through contributions to assist in assessing and calibrating community risk zones;",
            "Risk-zone alerts when you or a member of your circle enters a published community risk zone, where this feature is enabled;",
            "Unsafe alerts sent to members of your circles;",
            "Shared places, including optional arrival and departure notifications;",
            "Push notifications relating to safety, location, and circle activity; and",
            "Voluntary Contributions to support the development and operation of Dodge.",
          ]}
        />
        <p>
          Dodge is not an emergency service and does not provide emergency response services. Dodge is not
          a substitute for contacting local emergency responders, including the police, ambulance, fire
          services, or other appropriate emergency services. You should contact the relevant emergency
          service directly whenever you require immediate assistance.
        </p>
      </LegalCard>

      <LegalCard icon={FileText} title="Agreement">
        <p>
          These Terms of Service (&quot;Terms&quot;) are a binding agreement between you and {COMPANY_NAME}{" "}
          (hereinafter called &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) governing your use of the
          Dodge mobile application (hereinafter called &quot;Dodge&quot;), and website (including
          dodgeapp.com).
        </p>
      </LegalCard>

      <LegalCard icon={FileText} title="Acronyms">
        <BulletList
          items={[
            "“CPA” means “Consumer Protection Act, 6 of 2008”",
            "“Dodge” means the Dodge mobile application",
            "“Dodge Labs” means “Dodge Labs (Pty) Ltd”",
            "“EU” means “European Union”",
            "“ECTA” means “Electronic Communications and Transactions Act, 25 of 2002”",
            "“GDPR” means “General Data Protection Regulation”",
            "“POPIA” means “Protection of Personal Information Act, 2013”",
            "“GPS” means “Global Positioning System”",
          ]}
        />
      </LegalCard>

      <LegalCard icon={UserCheck} title="2. Acceptance of Terms">
        <p>
          We have prepared these Terms of Service (&quot;Terms&quot;) to explain the rules governing your
          use of Dodge and the relationship between you and Dodge.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and Dodge. Please read them
          carefully before using the App or any of our services.
        </p>
        <Clause n="2.3">
          By creating an account, accessing, or using Dodge, you confirm that you have read, understood,
          and agree to be bound by these Terms, together with our{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink> and any other terms, notices, or consents
          presented to you in connection with specific features or services.
        </Clause>
      </LegalCard>

      <LegalCard icon={UserCheck} title="3. Eligibility & age requirements">
        <p>
          Dodge is not intended for persons under the age of 13, or any higher minimum age required under
          the laws applicable in your jurisdiction.
        </p>
        <p>
          If you are under 18, you must have parental or guardian consent to use Dodge. By providing
          consent, parents or guardians agree to:
        </p>
        <BulletList
          items={[
            "Supervise the child’s use of Dodge and ensure compliance with this Agreement, referenced documents, and applicable laws.",
            "Accept full responsibility and liability for the child’s compliance and use of the Services.",
            "Accept all disclaimers, waivers, and limitations of liability on both their own behalf and the child’s behalf.",
          ]}
        />
        <p>
          For users located in the EU, if you are under 16 years old, parental or guardian consent must be
          verifiable in accordance with GDPR requirements, before you may use Dodge.
        </p>
        <p>
          If we become aware that a person below the applicable minimum age has created or is using a Dodge
          account, we will suspend or terminate the account and take reasonable steps to delete the
          associated personal information in accordance with our{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink> and applicable law.
        </p>
        <p>We may request that you provide information or take reasonable steps to verify your age, where necessary.</p>
        <p>
          By using Dodge, you confirm that you are responsible for providing accurate information. You are
          solely responsible for any content, information, reports, or other material that you create,
          upload, submit, transmit, or store through Dodge.
        </p>
      </LegalCard>

      <LegalCard icon={Lock} title="4. User accounts">
        <p>Certain Dodge features require you to create an account.</p>
        <p>Accounts are verified using your phone number and/or email.</p>
        <Clause n="4.3">
          You may need to complete a profile (including a username and name) before joining circles or
          using certain features.
        </Clause>
        <Clause n="4.4">
          When creating and maintaining your account, you agree to provide information that is accurate,
          complete, and current and to update that information when necessary.
        </Clause>
        <Clause n="4.5">
          You must not create or use an account for another person without appropriate authorisation,
          impersonate another person, or create another account to circumvent a restriction, suspension, or
          ban imposed by Dodge.
        </Clause>
        <Clause n="4.6">
          If we have previously suspended or terminated your account for violating these Terms or our
          policies, you may not create another account or use Dodge again without our prior consent.
        </Clause>
        <p>You are responsible for maintaining the confidentiality of your login credentials.</p>
        <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
      </LegalCard>

      <LegalCard icon={FileText} title="5.1 Electronic communications and transactions">
        <Clause n="5.1.1">
          Dodge operates through electronic communications and transactions. By creating an account,
          accessing, or using Dodge, you consent to transact with us electronically. Communications,
          notices, consents, acknowledgements, records, agreements, and other information provided
          electronically satisfy any legal requirement for written communication, to the extent permitted
          by law.
        </Clause>
        <Clause n="5.1.2">
          Your electronic acceptance of these Terms, any additional terms, consents, notices, or agreements
          presented through Dodge constitutes acceptance and may serve as an electronic signature or record
          recognised by law.
        </Clause>
        <Clause n="5.1.3">
          You are responsible for keeping your account contact information (email, phone number, device
          details) accurate and accessible.
        </Clause>
        <Clause n="5.1.4">
          We may communicate with you electronically, including via Dodge, email, SMS, push notifications,
          or other means, regarding your account, security, safety features, transactions, service changes,
          and related matters.
        </Clause>
        <Clause n="5.1.5">
          You may be required to acknowledge or accept certain notices, permissions, consents, or
          additional terms before accessing specific features of Dodge.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="5.2 Electronic records">
        <Clause n="5.2.1">
          We may create and maintain electronic records relating to your account, use of Dodge,
          transactions, communications, consents, reports, security events, and other activities within the
          Services.
        </Clause>
        <Clause n="5.2.2">
          Where required by law, we will take reasonable steps to ensure that relevant electronic records
          remain accessible and reproducible for future reference.
        </Clause>
        <Clause n="5.2.3">
          You are encouraged to keep copies of important communications, confirmations, receipts, or other
          records for your own purposes.
        </Clause>
      </LegalCard>

      <LegalCard icon={HeartHandshake} title="5.3 Electronic transactions and payments">
        <Clause n="5.3.1">
          When Dodge offers paid features, voluntary contributions, subscriptions, purchases, or other
          electronic transactions, the applicable price, taxes, charges, payment method, and material terms
          will be clearly disclosed before you complete the transaction, as required by law. You agree to
          provide accurate and up-to-date billing information.
        </Clause>
        <Clause n="5.3.2">
          By submitting a payment instruction, you authorise the relevant payment provider to process the
          transaction in line with the information you provide. Payments are processed securely via trusted
          third-party providers, e.g. Apple App Store.
        </Clause>
        <Clause n="5.3.3">
          Payment processing may be handled by third-party providers. Their terms and privacy policies will
          govern how they handle your information. Refunds are subject to applicable consumer protection
          laws. See also our <PolicyLink to="/payment-terms">Payment Terms</PolicyLink>.
        </Clause>
        <Clause n="5.3.4">
          If you purchase a subscription through the Apple App Store, it will automatically renew unless
          cancelled at least 24 hours before the end of the current billing cycle. You can manage or cancel
          your subscription at any time through your iOS device settings. Refunds for App Store purchases
          are handled directly by Apple under their policies.
        </Clause>
        <Clause n="5.3.5">
          Where applicable, details concerning refunds, cancellations, recurring charges, minimum contract
          periods, or other consumer rights will be presented during the transaction flow or in
          supplementary terms.
        </Clause>
        <Clause n="5.3.6">
          Nothing in these Terms excludes or limits any mandatory consumer protection rights that cannot
          lawfully be excluded or limited.
        </Clause>
      </LegalCard>

      <LegalCard icon={Lock} title="5.4 Security of electronic communications">
        <Clause n="5.4.1">
          We implement reasonable technical and organisational safeguards to protect Dodge and the
          information processed through our Services. However, no electronic communication, system, or
          method of transmission or storage can be guaranteed fully secure.
        </Clause>
        <Clause n="5.4.2">
          You acknowledge that communications transmitted over mobile networks, or other electronic
          systems may carry risks beyond our control.
        </Clause>
        <Clause n="5.4.3">
          You are responsible for maintaining the security of your device, account credentials,
          authentication information, passwords, access codes, and other mechanisms used to access Dodge.
        </Clause>
        <Clause n="5.4.4">
          You must promptly notify us if you become aware of unauthorised access to your account, loss or
          compromise of authentication information, or any other security incident involving your Dodge
          account.
        </Clause>
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="5.5 Prohibited cyber activities">
        <p>You must not, directly or indirectly, use Dodge or any related system to:</p>
        <BulletList
          items={[
            "Gain or attempt unauthorised access to Dodge, its servers, databases, systems, networks, accounts, or infrastructure.",
            "Access, use, disclose, copy, modify, delete, damage, or interfere with data belonging to Dodge or another user without lawful authority.",
            "Intercept, monitor, redirect, or otherwise obtain non-public communications or data without lawful authority.",
            "Disrupt, impair, overload, disable, or compromise the availability, confidentiality, integrity, or functionality of Dodge or connected systems.",
            "Introduce or transmit malware, viruses, ransomware, spyware, worms, malicious code, or other harmful software.",
            "Use bots, crawlers, scrapers, automated scripts, exploits, or penetration-testing tools unless expressly authorised in writing.",
            "Circumvent, disable, bypass, or attempt to defeat authentication, security controls, access restrictions, rate limits, or encryption.",
            "Acquire, share, sell, transfer, or use another person’s password, access code, authentication token, or other credentials without lawful authority.",
            "Impersonate another person, create a false identity, or misrepresent authority to act on behalf of another person or entity.",
            "Use Dodge to commit, facilitate, or conceal fraud, forgery, extortion, theft, identity theft, or any other unlawful activity.",
            "Interfere with another user’s account, device, location information, communications, private circle, or other information without authorisation.",
            "Attempt to discover, test, exploit, or disclose vulnerabilities in Dodge or its systems without prior written authorisation.",
            "Assist, encourage, or enable another person to engage in any prohibited activity described in these Terms.",
          ]}
        />
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="5.6 Malicious and harmful communications">
        <Clause n="5.6.1">
          We may remove, restrict, preserve, or disclose communications or content where we reasonably
          believe that doing so is necessary to protect users, investigate suspected unlawful activity,
          comply with a legal obligation or lawful request, or protect our rights, systems, or services.
        </Clause>
        <p>You must not use:</p>
        <Clause n="5.6.2.1">
          Dodge to transmit, publish, send, upload, distribute, or make available any communication or
          content that is unlawful, threatening, abusive, harassing, defamatory, fraudulent, malicious, or
          intended to cause unlawful harm.
        </Clause>
        <Clause n="5.6.2.2">
          Dodge to threaten another person with violence or damage to property or to transmit
          communications that are unlawful under applicable cybercrime, communications, criminal, or other
          legislation.
        </Clause>
        <Clause n="5.6.2.3">
          Dodge to distribute intimate images or other highly sensitive material concerning another person
          without that person&apos;s lawful consent.
        </Clause>
        <Clause n="5.6.2.4">
          Dodge to incite, encourage, instruct, assist, or facilitate violence, criminal conduct, unlawful
          damage to property, or other unlawful activity.
        </Clause>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="5.7 Safety features and reporting">
        <p>
          Because Dodge provides personal safety and communication-risk features, you must use all safety
          and reporting tools honestly and responsibly. You must not:
        </p>
        <BulletList
          items={[
            "Submit false, fraudulent, misleading, or fabricated unsafe reports.",
            "Submit repeated or coordinated reports to manipulate community risk information.",
            "Falsely claim that you or another person is in danger.",
            "Manipulate location, movement, pass-through, or other information to distort community risk zones or safety data.",
            "Use safety alerts to harass, intimidate, stalk, threaten, locate, or monitor another person without lawful authority or consent.",
            "Misuse any safety-related functionality for purposes unrelated to genuine safety concerns.",
            "Interfere with the accuracy, availability, or integrity of Dodge’s safety information.",
          ]}
        />
        <p>
          We may investigate suspected misuse and take appropriate action, including removing reports,
          restricting functionality, suspending accounts, or other measures where we reasonably believe
          safety features have been abused.
        </p>
      </LegalCard>

      <LegalCard icon={MapPin} title="5.8 Location-based features and privacy">
        <Clause n="5.8.1">
          Certain Dodge features rely on location information. Your use of these features depends on the
          permissions you grant through your device and the settings available within Dodge.
        </Clause>
        <Clause n="5.8.2">
          You must not use another person’s location, live movement, or other personal information obtained
          through Dodge for any unlawful or unauthorised purpose.
        </Clause>
        <Clause n="5.8.3">
          You must not attempt to bypass another user’s privacy settings or access location information not
          made available to you through Dodge.
        </Clause>
        <Clause n="5.8.4">
          The collection, use, storage, disclosure, retention, and transfer of personal information through
          Dodge are governed by our <PolicyLink to="/privacy">Privacy Policy</PolicyLink> and applicable
          data-protection laws.
        </Clause>
      </LegalCard>

      <LegalCard icon={Gavel} title="5.9 Jurisdiction and applicable laws">
        <Clause n="5.9.1">
          Dodge may be accessed from different countries and jurisdictions. Laws governing electronic
          communications, consumer protection, privacy, cybersecurity, location information, online safety,
          electronic contracting, payments, and content may vary.
        </Clause>
        <Clause n="5.9.2">
          By using Dodge, you agree to comply with all laws and regulations applicable to you and your use
          of the Services, including those of the country where you access Dodge.
        </Clause>
        <Clause n="5.9.3">
          Nothing in these Terms requires you to waive any mandatory rights or protections available under
          the laws of your jurisdiction.
        </Clause>
        <Clause n="5.9.4">
          Where South African law applies, Dodge will comply with relevant legislation, including the
          Electronic Communications and Transactions Act 25 of 2002, the Cybercrimes Act 19 of 2020, the
          Protection of Personal Information Act 4 of 2013, and other applicable laws.
        </Clause>
        <Clause n="5.9.5">
          Where mandatory provisions of another jurisdiction’s laws apply to your use of Dodge, those
          provisions will apply to the extent required by law.
        </Clause>
      </LegalCard>

      <LegalCard icon={Lock} title="5.10–5.15 Security, restrictions and disclaimers">
        <Clause n="5.10.1">
          If you become aware of a suspected vulnerability, unauthorised access, account compromise,
          malicious activity, or other cyber incident involving Dodge, you must promptly notify us through
          the security or support contact details provided in Dodge or on our website.
        </Clause>
        <Clause n="5.10.2">
          You must not exploit a security vulnerability for personal gain, to access another person’s
          information, to disrupt Dodge, or for any unlawful purpose.
        </Clause>
        <Clause n="5.10.3">
          Where permitted or required by law, we may preserve records, communications, technical data, or
          other evidence relating to suspected unlawful activity or security incidents.
        </Clause>
        <Clause n="5.10.4">
          We may cooperate with law-enforcement authorities, regulators, courts, and other competent bodies
          where required or permitted by law.
        </Clause>
        <p>
          We may immediately restrict, suspend, or terminate your access to Dodge if we reasonably believe
          your account or conduct:
        </p>
        <BulletList
          items={[
            "Creates a security or cybersecurity risk.",
            "Involves unauthorised or attempted unauthorised access.",
            "Threatens another user’s safety, privacy, security, or rights.",
            "Involves fraud, malicious communications, unlawful activity, or misuse of safety features.",
            "Compromises Dodge’s operation, integrity, confidentiality, or availability.",
            "Exposes Dodge or its users to legal, regulatory, financial, or reputational risk.",
          ]}
        />
        <p>
          Where permitted by law, we may also preserve relevant information and take steps to prevent
          further unauthorised access or misuse.
        </p>
        <Clause n="5.12.1">
          You must not attempt to bypass any technical, administrative, contractual, or other restriction
          on your access to Dodge.
        </Clause>
        <Clause n="5.12.2">
          This includes using another person’s account, creating replacement accounts after suspension or
          termination, manipulating device or account identifiers, bypassing geographic or feature
          restrictions, or using technical means to evade security controls.
        </Clause>
        <Clause n="5.13.1">
          You must have the necessary rights, authority, permissions, or consent before uploading, sharing,
          transmitting, or processing another person’s personal information, images, location data, contact
          details, or other protected information through Dodge.
        </Clause>
        <Clause n="5.13.2">
          You remain responsible for ensuring that your use of another person’s information complies with
          applicable privacy, data-protection, intellectual property, confidentiality, and other laws.
        </Clause>
        <Clause n="5.14.1">
          While we take reasonable measures to protect Dodge, we do not guarantee that the Services will
          always be secure, uninterrupted, error-free, or free from vulnerabilities, malicious code,
          cyberattacks, or other threats.
        </Clause>
        <Clause n="5.14.2">
          Safety reports, community risk zones, location information, alerts, user-generated content, and
          other information displayed through Dodge may at times be incomplete, inaccurate, delayed,
          unavailable, or incorrectly reported.
        </Clause>
        <Clause n="5.14.3">
          Dodge is a safety and coordination tool and must not be relied upon as the sole means of
          protecting yourself or others from danger.
        </Clause>
        <Clause n="5.15.1">
          Nothing in these Terms excludes, restricts, or limits any right, remedy, obligation, or liability
          that cannot lawfully be excluded, restricted, or limited under applicable law.
        </Clause>
        <Clause n="5.15.2">
          If any provision of these Terms conflicts with a mandatory provision of applicable legislation,
          the mandatory provision will prevail to the extent of the inconsistency, and the remainder of
          these Terms will continue to apply.
        </Clause>
      </LegalCard>

      <LegalCard icon={Smartphone} title="6. Mobile software">
        <Clause n="6.1">
          We provide software and applications for mobile devices (&quot;Mobile Software&quot;). You must
          use a compatible device, and we do not warrant compatibility.
        </Clause>
        <Clause n="6.2">
          Dodge Labs grants you a non-exclusive, non-transferable, revocable license to use one compiled
          copy of the Mobile Software for your personal account. You may not:
        </Clause>
        <BulletList
          items={[
            "Modify, disassemble, decompile, or reverse engineer the Mobile Software (except where legally permitted).",
            "Rent, lease, loan, resell, sublicense, distribute, or transfer the Mobile Software, or use it for time sharing.",
            "Copy the Mobile Software.",
            "Remove, disable, or interfere with security features or usage restrictions.",
            "Delete copyright or proprietary notices.",
          ]}
        />
        <Clause n="6.8">
          We may release upgrades, and you consent to automatic updates. Third party or open-source code is
          governed by its own license terms. This license does not transfer ownership; Dodge Labs and its
          partners retain all rights. Any unauthorized transfer of rights or obligations is void.
        </Clause>
        <Clause n="6.9">
          The Mobile Software may be subject to U.S. and international export laws. You agree to comply
          with all applicable import/export regulations.
        </Clause>
      </LegalCard>

      <LegalCard icon={Smartphone} title="7. Mobile software from the Apple App Store">
        <p>For Mobile Software obtained via the Apple App Store (&quot;Apple-Sourced Software&quot;):</p>
        <p>These Terms are between you and Dodge Labs, not Apple.</p>
        <p>
          Your use must comply with the App Store Terms of Service. See also our{" "}
          <PolicyLink to="/eula">End User Licence Agreement</PolicyLink>.
        </p>
        <Clause n="7.4">
          Apple has no obligation to provide support. If the software fails to meet warranty, Apple may
          refund the purchase price; all other obligations rest with Dodge Labs.
        </Clause>
        <Clause n="7.5">
          Apple is not responsible for product liability, regulatory compliance, or consumer protection
          claims.
        </Clause>
        <Clause n="7.6">
          Dodge Labs is solely responsible for handling intellectual property claims.
        </Clause>
        <p>
          Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them
          against you.
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="8. Lawful and responsible use">
        <Clause n="8.1">You agree to use Dodge only for lawful purposes and in accordance with these Terms.</Clause>
        <Clause n="8.2">
          By using Dodge, you agree to comply with these Terms, our{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, and any other policies or rules provided
          in connection with the Services.
        </Clause>
        <Clause n="8.3">
          You must use Dodge responsibly and not misuse any safety, location, communication, reporting, or
          sharing feature.
        </Clause>
        <Clause n="8.4">
          You must not use Dodge in any way that could place yourself or others at risk, interfere with the
          App’s operation, compromise another person’s privacy or security, or violate applicable law.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="9. Service-related communication and mobile charges">
        <Clause n="9.1">
          We may send you service-related communications, including account verification messages, security
          notifications, safety alerts, administrative notices, and other communications necessary to
          provide or support Dodge.
        </Clause>
        <Clause n="9.2">
          Depending on your device, network, or mobile service provider, standard messaging, data, or other
          mobile charges may apply when you use Dodge or receive communications from us.
        </Clause>
        <Clause n="9.3">
          You are responsible for any charges imposed by your mobile network or service provider.
        </Clause>
      </LegalCard>

      <LegalCard icon={Users} title="10. User content and ownership">
        <p>You retain ownership of the content you share within Dodge.</p>
        <p>
          By posting, you grant us a non-exclusive, worldwide license to use, store, and display that
          content for the purpose of operating Dodge.
        </p>
        <p>
          We do not claim ownership of your communications within trusted groups. You retain ownership of
          the content you share within Dodge.
        </p>
        <p>We want you to be in control of your information, so we provide you with a range of tools, including:</p>
        <Clause n="10.4.1">
          Access and update your information. You can access and edit most of your basic information,
          including account details (information about you, like your name, username, email address,
          birthday and phone number), right in our Services. Just navigate to your settings and you will
          see the options available to you.
        </Clause>
        <Clause n="10.4.2">
          Control who can see your content. We have built a number of tools that let you choose who you
          share your content with.
        </Clause>
        <Clause n="10.4.3">Change your permissions. In most cases, you can change your permissions at any time.</Clause>
        <Clause n="10.4.4">Download your data. You can make a request to download your data.</Clause>
        <Clause n="10.4.5">
          Object to processing. Depending on where you live and the particular data we are processing, you
          may have the right to object to our processing of that information.
        </Clause>
      </LegalCard>

      <LegalCard icon={Lock} title="11. Privacy and data protection">
        <Clause n="11.1">
          Your use of Dodge is subject to our <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, which
          explains how we collect, use, and protect your personal information in compliance with POPIA,
          GDPR, and other global laws.
        </Clause>
        <Clause n="11.2">
          You have the right to access, correct, update, and delete your personal information. EU residents
          also have rights to data portability and to object to certain processing under GDPR. South
          African users retain equivalent rights under POPIA. Requests can be made through in-App settings
          or by contacting us directly.
        </Clause>
        <Clause n="11.3">
          Where personal data is transferred outside South Africa or the EU, we implement safeguards such
          as Standard Contractual Clauses or equivalent legal mechanisms to ensure protection in line with
          POPIA, GDPR, other applicable laws, and Apple App Store guidelines.
        </Clause>
      </LegalCard>

      <LegalCard icon={Lock} title="12. Account responsibilities and termination">
        <Clause n="12.1">
          You are responsible for all activity on your account and must promptly notify us if you suspect
          unauthorised access.
        </Clause>
        <Clause n="12.2">You may terminate your use of Dodge at any time by deleting your account.</Clause>
        <Clause n="12.3">If you do not agree to an amendment to these Terms, you may stop using Dodge.</Clause>
        <Clause n="12.4">We may restrict, suspend, or terminate your access to Dodge if:</Clause>
        <BulletList
          items={[
            "You breach these Terms, our Privacy Policy, or any additional terms.",
            "Your use violates applicable law.",
            "We reasonably believe your use presents a safety, security, fraud, or other material risk.",
            "We are required to do so by law or a competent authority.",
            "Circumstances beyond our control prevent us from providing the Services.",
            "We discontinue or materially change the Service.",
          ]}
        />
        <Clause n="12.5">
          Accounts inactive for an extended period may be suspended or terminated, subject to applicable
          law and notice requirements.
        </Clause>
        <Clause n="12.6">
          Where practicable, we will provide notice before suspension or termination, but immediate action
          may be taken to protect users, maintain security, comply with legal obligations, or prevent
          misuse.
        </Clause>
        <Clause n="12.7">
          Termination or suspension does not affect rights or obligations intended to continue after
          termination.
        </Clause>
        <Clause n="12.8">You may also request deletion of your data by contacting us after deleting Dodge.</Clause>
        <Clause n="12.9">
          Provisions that survive termination (including disclaimers and liability limits) will continue to
          apply.
        </Clause>
      </LegalCard>

      <LegalCard icon={Users} title="13. Circles & consent">
        <p>You control which circles you join or create.</p>
        <p>Only invite people who have agreed to share their location and safety information with you.</p>
        <p>Do not use Dodge to track, monitor, or harass anyone without their knowledge and consent.</p>
        <p>
          You can leave a circle or stop sharing your location with a circle using in-app controls. Circle
          creators and members must respect each other&apos;s privacy and local laws.
        </p>
      </LegalCard>

      <LegalCard icon={MapPin} title="14. Location & safety disclaimer">
        <Clause n="14.1">Dodge relies on device GPS, network conditions, and third-party map data.</Clause>
        <Clause n="14.2">Location information may be delayed, inaccurate, or unavailable.</Clause>
        <Clause n="14.3">
          Alerts, unsafe reports, and community risk zones are based on user submissions, aggregated
          activity, and automated systems. Dodge does not guarantee their accuracy, completeness, or
          timeliness.
        </Clause>
        <Clause n="14.4">
          Community risk zones reflect aggregated patterns over time. They are informational only, may
          change as new data arrives, and may not reflect current conditions.
        </Clause>
        <Clause n="14.5">
          You use Dodge at your own risk. Always exercise judgment and contact emergency services if you
          are in immediate danger.
        </Clause>
      </LegalCard>

      <LegalCard icon={MapPinned} title="15. Community risk zones">
        <Clause n="15.1">
          Dodge may display community risk zones (also shown as safety zones) on the map.
        </Clause>
        <Clause n="15.2">
          Zones are calculated from aggregated unsafe reports and, where users opt in, pass-through signals
          (at most once per user per area per day—not stored routes).
        </Clause>
        <Clause n="15.3">
          Risk tiers and map shapes are assigned using rolling counts, recency weighting, and automated
          scoring.
        </Clause>
        <Clause n="15.4">
          Areas must accumulate enough unsafe reports to be published as zones. Pass-through signals reduce
          risk scores but do not create zones. Test zones may be visible if you enable that option.
        </Clause>
        <Clause n="15.5">
          Risk zones are shown to signed-in users as community information. They do not identify
          individuals. You can disable your own pass-through contribution in Settings → Safety map data
          without affecting other features, though you will no longer contribute to zone calculations.
        </Clause>
        <Clause n="15.6">
          Risk zone alerts (for you or circle members) are optional and separate from unsafe-pin proximity
          alerts. Enabling them does not mean an area is objectively dangerous—use your own judgment.
        </Clause>
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="16. Community reports & user content">
        <Clause n="16.1">
          Unsafe reports and alerts you submit may be stored and shown to other users (for example circle
          members or signed-in users viewing map pins).
        </Clause>
        <Clause n="16.2">Reports may also feed into aggregated community risk zones.</Clause>
        <Clause n="16.3">Do not submit false, misleading, or malicious reports.</Clause>
        <Clause n="16.4">
          Dodge may remove content or suspend accounts that violate these Terms or harm other users or the
          service.
        </Clause>
      </LegalCard>

      <LegalCard icon={HeartHandshake} title="17. Support Dodge Labs">
        <Clause n="17.1">
          If you find Dodge useful, you may make a once-off voluntary contribution to {COMPANY_NAME} to
          support the ongoing development, maintenance and operation of Dodge. This contribution is
          optional and does not provide access to additional features or services. Voluntary contributions
          are also governed by our <PolicyLink to="/payment-terms">Payment Terms</PolicyLink>.
        </Clause>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="18. Prohibited conduct">
        <p>You agree not to:</p>
        <BulletList
          items={[
            "Use Dodge for unlawful, harmful, or fraudulent purposes.",
            "Harass, threaten, stalk, or enable abuse through location sharing.",
            "Impersonate another person or misrepresent your identity.",
            "Attempt to access another user’s account or our systems without authorisation.",
            "Interfere with or disrupt Dodge, its servers, or networks.",
            "Scrape, reverse engineer, or misuse the service, except as permitted by law.",
            "Submit false or malicious unsafe reports or pass-through data intended to manipulate community risk zones.",
          ]}
        />
      </LegalCard>

      <LegalCard icon={AlertTriangle} title="19. Disclaimer of warranties">
        <Clause n="19.1">
          Dodge is provided &quot;as is&quot; and &quot;as available&quot;, without any warranties of any
          kind.
        </Clause>
        <Clause n="19.2">
          To the fullest extent permitted by law, we disclaim all warranties, express or implied, including
          fitness for a particular purpose and non-infringement.
        </Clause>
      </LegalCard>

      <LegalCard icon={XCircle} title="20. Limitation of liability">
        <p>
          To the fullest extent permitted by law, we are not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of profits, data, goodwill, or personal injury
          arising from your use of Dodge.
        </p>
        <p>Our maximum liability is limited to the amount you paid for Dodge services (if any):</p>
        <Clause n="20.3">
          If you have been a user for less than 12 months, the total amount paid OR US$100, whichever is
          the lowest.
        </Clause>
        <p>
          If you have been a user for more than 12 months, the amount paid in the 12 months before the
          claim.
        </p>
      </LegalCard>

      <LegalCard icon={FileText} title="21. Additional terms">
        <Clause n="21.1">
          Certain features or services may be subject to additional terms, conditions, notices, or
          policies. These form part of these Terms and apply to your use of the relevant feature or
          service.
        </Clause>
        <Clause n="21.2">
          For example, <PolicyLink to="/payment-terms">Payment Terms</PolicyLink>,{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, and the{" "}
          <PolicyLink to="/eula">End User Licence Agreement</PolicyLink> or other payment-related
          functionality may carry additional terms.
        </Clause>
        <Clause n="21.3">
          If an additional term conflicts with these Terms for a specific feature or service, the
          additional term will prevail to the extent of the conflict.
        </Clause>
        <Clause n="21.4">
          Our <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, which explains how we collect, use,
          disclose, retain, and protect personal information, forms part of the terms governing your use of
          Dodge.
        </Clause>
      </LegalCard>

      <LegalCard icon={Brain} title="22. AI features">
        <p>
          Where Dodge offers AI features, any inputs you provide and outputs generated may be processed in
          line with these Terms, our <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, and any
          additional terms for the feature.
        </p>
        <p>
          AI-generated information may be incomplete, inaccurate, outdated, or unsuitable for your
          circumstances. It should not be treated as definitive, professional advice, or a substitute for
          your own judgment.
        </p>
        <Clause n="22.3">
          You remain responsible for how you use, rely on, or act upon information generated through
          AI-features. AI outputs should not be treated as a definitive source of truth, professional
          advice, or a substitute for your own judgment or appropriate professional assistance.
        </Clause>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="23. Safety and responsible use">
        <Clause n="23.1">
          We work to provide a safe and reliable environment, but Dodge cannot guarantee safety, accuracy,
          availability, or freedom from harmful activity.
        </Clause>
        <Clause n="23.2">
          We take threats to user safety seriously, especially those involving violence, serious harm, or
          unlawful conduct.
        </Clause>
        <Clause n="23.3">
          If you encounter harmful, threatening, abusive, or unlawful content or behaviour, report it
          through Dodge’s reporting tools.
        </Clause>
        <Clause n="23.4">
          Dodge supports personal safety and coordination, but you remain responsible for your own
          decisions. Never place yourself or others in danger to use or respond to Dodge information.
        </Clause>
        <Clause n="23.5">
          Information displayed in Dodge, including unsafe reports, risk zones, alerts, location data, and
          user-generated content, may be incomplete, inaccurate, outdated, or unreliable. Exercise caution
          and independent judgment.
        </Clause>
      </LegalCard>

      <LegalCard icon={Scale} title="24. Governing law">
        <p>
          The laws of South Africa govern these Terms and any claims and disputes (whether contract, tort
          or otherwise) arising out of or relating to these Terms or their subject matter. The courts in
          some countries may not apply the laws of South Africa to some disputes related to these Terms. If
          you reside in one of those countries, the laws of your home country may apply to those disputes.
        </p>
      </LegalCard>

      <LegalCard icon={Smartphone} title="25. Third-party services">
        <p>
          Dodge integrates with third-party services (including cloud hosting, maps, messaging, and
          payments) for example the Apple App Store. Your use of those services may be subject to their own
          terms. We are not responsible for third-party services outside our reasonable control.
        </p>
      </LegalCard>

      <LegalCard icon={RefreshCw} title="26. Changes to Dodge and these Terms">
        <Clause n="26.1">
          Dodge is continuously evolving. We may modify, improve, add, remove, or discontinue features or
          services from time to time.
        </Clause>
        <Clause n="26.2">
          We may also update these Terms to reflect changes to Dodge, the way we provide our services,
          applicable legal or regulatory requirements, or for legitimate security or operational reasons.
        </Clause>
        <Clause n="26.3">
          Where changes are material, we will provide reasonable advance notice where required or
          reasonably practicable. However, we may make changes without advance notice where this is
          necessary to comply with a legal requirement, address an urgent security or safety issue, or
          introduce or modify a feature or service.
        </Clause>
        <Clause n="26.4">
          The updated Terms will be made available through Dodge or our website and will indicate the
          relevant &quot;Last Updated&quot; date. Material changes may also be communicated in Dodge where
          appropriate. Continued use after changes means you accept the updated Terms.
        </Clause>
        <Clause n="26.5">
          Where permitted by applicable law, your continued use of Dodge after the updated Terms become
          effective will constitute your acceptance of the revised Terms.
        </Clause>
      </LegalCard>

      <LegalCard icon={Gavel} title="27. Severability">
        <p>
          If any provision of these Terms is found unenforceable, then that provision will be removed from
          these Terms and not affect the validity and enforceability of any remaining provisions.
        </p>
      </LegalCard>

      <LegalCard icon={FileText} title="28. General terms">
        <Clause n="28.1">
          These Terms form the entire agreement between you and Dodge and do not create rights for third
          parties.
        </Clause>
        <Clause n="28.2">Failure to enforce any provision is not a waiver of our rights.</Clause>
        <Clause n="28.3">
          We may transfer our rights or provide the Services through another entity, PROVIDED it upholds
          these Terms.
        </Clause>
        <Clause n="28.4">
          You may not transfer your rights or obligations under these Terms without our consent.
        </Clause>
        <Clause n="28.5">All rights not expressly granted to you are reserved.</Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="29. Electronic acceptance of terms">
        <p>
          By selecting &quot;Accept,&quot; &quot;Agree,&quot; creating an account, accessing, or continuing
          to use Dodge after reviewing these Terms, you acknowledge that:
        </p>
        <Clause n="29.1">You have read and understood these Terms.</Clause>
        <Clause n="29.2">You agree to be legally bound by them.</Clause>
        <Clause n="29.3">
          You consent to the use of electronic records and communications in connection with Dodge, to the
          extent permitted by law.
        </Clause>
        <Clause n="29.4">
          You agree to comply with all applicable laws and regulations when using Dodge.
        </Clause>
        <p className="font-medium text-foreground">
          If you do not agree to these terms, you must refrain from creating an account or using Dodge.
        </p>
      </LegalCard>

      <RelatedLegalCard current="terms" />
      <LegalContactCard
        intro={
          <>
            Dodge welcomes comments, questions, concerns or suggestions. Contact us at <SupportEmail />.
          </>
        }
      />
    </LegalPageShell>
  );
}
