import {
  BadgeInfo,
  FileText,
  Gavel,
  HeartHandshake,
  Scale,
  ShieldCheck,
  Smartphone,
  Store,
  Wrench,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList, Clause } from "@/components/LegalCard";
import {
  LegalContactCard,
  PolicyLink,
  RelatedLegalCard,
  SupportEmail,
} from "@/components/LegalBits";
import { BUSINESS_ADDRESS, COMPANY_NAME, LEGAL_LAST_UPDATED } from "@/lib/legal";

export default function EndUserLicence() {
  return (
    <LegalPageShell title="End User Licence Agreement" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalCard icon={Store} title="1. Apple App Store and licence">
        <Clause n="1.1">
          This End User Licence Agreement (&quot;EULA&quot;) is an agreement between you and {COMPANY_NAME}{" "}
          (&quot;we&quot;, &quot;us&quot;, &quot;our&quot; or &quot;Dodge Labs&quot;) and not between you and
          Apple Inc. (&quot;Apple&quot;). Dodge Labs, and not Apple, is solely responsible for the Dodge
          mobile application (&quot;Dodge&quot; or the &quot;App&quot;), its content, functionality,
          maintenance, support and services, except to the extent expressly required by applicable law.
        </Clause>
        <Clause n="1.2">
          Dodge is made available to you through Apple&apos;s App Store. The App is licensed, not sold, to
          you.
        </Clause>
        <Clause n="1.3">
          Subject to your compliance with this EULA, the Dodge{" "}
          <PolicyLink to="/terms">Terms of Service</PolicyLink> and applicable law, Dodge grants you a
          limited, non-exclusive, non-transferable and revocable licence to install and use Dodge on
          Apple-branded devices that you own or control, subject to the applicable Apple usage rules.
        </Clause>
        <Clause n="1.4">
          You may not rent, lease, lend, sell, redistribute, sublicense or otherwise transfer Dodge, except
          as expressly permitted by applicable law or Apple&apos;s applicable usage rules.
        </Clause>
        <Clause n="1.5">
          You may not copy, modify, adapt, reverse engineer, decompile, disassemble, attempt to derive the
          source code of, or create derivative works from Dodge, except to the extent that such restriction
          is prohibited by applicable law or permitted under the licence applicable to any open-source
          component incorporated into Dodge.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="2. Apple terms and conditions">
        <Clause n="2.1">
          Your use of Dodge is also subject to Apple&apos;s applicable terms and conditions, including the
          Apple Media Services Terms and Conditions and applicable App Store usage rules.
        </Clause>
        <Clause n="2.2">
          Nothing in this EULA is intended to modify, restrict or override any applicable Apple terms or
          usage rules.
        </Clause>
        <Clause n="2.3">
          Where there is a conflict between this EULA and a mandatory provision of Apple&apos;s applicable
          terms governing the App Store, the applicable Apple provision will prevail to the extent of that
          conflict.
        </Clause>
      </LegalCard>

      <LegalCard icon={Wrench} title="3. Maintenance and support">
        <Clause n="3.1">
          Dodge Labs is solely responsible for providing maintenance and support for the App, including
          addressing reasonable technical support requests, subject to applicable law and the limitations
          contained in the Dodge <PolicyLink to="/terms">Terms of Service</PolicyLink>.
        </Clause>
        <Clause n="3.2">
          You acknowledge that Apple has no obligation to provide maintenance or support services for Dodge.
        </Clause>
        <Clause n="3.3">Support enquiries concerning Dodge should be directed to:</Clause>
        <p>
          {COMPANY_NAME}
          <br />
          Email: <SupportEmail />
          <br />
          Address: {BUSINESS_ADDRESS}
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="4. Warranties">
        <Clause n="4.1">
          Dodge Labs is responsible for any warranties relating to the App that cannot lawfully be excluded
          or limited.
        </Clause>
        <Clause n="4.2">
          To the maximum extent permitted by applicable law, Dodge Labs does not warrant that Dodge will
          always be available, uninterrupted, secure, error-free or free from defects.
        </Clause>
        <Clause n="4.3">
          If Dodge Labs fails to conform to an applicable warranty and you notify Apple, Apple may refund
          the purchase price of the App to you in accordance with Apple&apos;s applicable terms. To the
          maximum extent permitted by law, Apple will have no further warranty obligation in respect of
          Dodge.
        </Clause>
        <Clause n="4.4">
          Nothing in this EULA excludes or limits any consumer rights, warranties or remedies that cannot
          lawfully be excluded or limited.
        </Clause>
      </LegalCard>

      <LegalCard icon={Scale} title="5. Responsibility for the App and claims">
        <Clause n="5.1">
          Dodge Labs, and not Apple, is responsible for addressing claims made by you or any third party
          relating to Dodge, including claims concerning:
        </Clause>
        <BulletList
          items={[
            "the App or its functionality;",
            "product liability;",
            "the App's failure to comply with applicable legal or regulatory requirements;",
            "consumer protection;",
            "privacy and data protection;",
            "the collection, use or sharing of location information; and",
            "any other claim arising from your use or possession of Dodge.",
          ]}
        />
        <Clause n="5.2">
          Nothing in this EULA limits Dodge&apos;s liability beyond the extent permitted by applicable law.
        </Clause>
      </LegalCard>

      <LegalCard icon={Gavel} title="6. Intellectual property claims">
        <Clause n="6.1">
          If a third party alleges that Dodge or your possession or use of Dodge infringes that third
          party&apos;s intellectual property rights, Dodge, and not Apple, will be responsible, to the
          extent required by applicable law, for investigating, defending, settling and resolving the claim.
        </Clause>
      </LegalCard>

      <LegalCard icon={BadgeInfo} title="7. Legal compliance">
        <Clause n="7.1">You represent and warrant that:</Clause>
        <BulletList
          items={[
            "you are not located in a country or region subject to a United States Government embargo or designated by the United States Government as a terrorist-supporting country; and",
            "you are not listed on any United States Government list of prohibited or restricted parties.",
          ]}
        />
        <Clause n="7.2">
          You must use Dodge in compliance with all laws applicable to you and your use of the App.
        </Clause>
      </LegalCard>

      <LegalCard icon={Smartphone} title="8. Third-party services">
        <Clause n="8.1">
          Dodge Labs may enable access to third-party services, websites, platforms, communication
          services, mapping services, location services or other external services.
        </Clause>
        <Clause n="8.2">
          Your use of such services may be subject to the relevant third party&apos;s terms and conditions
          and privacy policies.
        </Clause>
        <Clause n="8.3">
          You are responsible for complying with applicable third-party terms when using Dodge, including
          any terms applicable to your mobile network, internet service, mapping, communication or other
          services.
        </Clause>
      </LegalCard>

      <LegalCard icon={Store} title="9. Apple as third-party beneficiary">
        <Clause n="9.1">
          You and Dodge Labs acknowledge and agree that Apple and Apple&apos;s subsidiaries are
          third-party beneficiaries of this EULA.
        </Clause>
        <Clause n="9.2">
          Upon your acceptance of this EULA, Apple will have the right, and will be deemed to have accepted
          the right, to enforce this EULA against you as a third-party beneficiary.
        </Clause>
      </LegalCard>

      <LegalCard icon={HeartHandshake} title="10. Payments and in-app purchases">
        <Clause n="10.1">
          Any subscriptions or other purchases made through the iOS version of Dodge are processed through
          Apple&apos;s App Store and applicable In-App Purchase system, subject to Apple&apos;s applicable
          terms.
        </Clause>
        <Clause n="10.2">Dodge Labs does not directly process such payments through the iOS App.</Clause>
        <Clause n="10.3">
          Subscription management, cancellation and refund procedures are subject to Apple&apos;s
          applicable processes, without limiting any rights you may have under applicable law.
        </Clause>
        <Clause n="10.4">
          The Dodge <PolicyLink to="/payment-terms">Payment Terms</PolicyLink> form part of the
          contractual framework governing paid features and services made available through Dodge.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="11. Relationship with Dodge Terms of Service">
        <Clause n="11.1">This EULA governs your licence to use Dodge on Apple devices.</Clause>
        <Clause n="11.2">
          Your use of Dodge is also governed by the Dodge <PolicyLink to="/terms">Terms of Service</PolicyLink>{" "}
          and Dodge <PolicyLink to="/privacy">Privacy Policy</PolicyLink>.
        </Clause>
        <Clause n="11.3">
          If there is a conflict between this EULA and the Dodge Terms of Service concerning the scope of
          the licence granted to you, this EULA will apply to that issue. The Dodge Terms of Service will
          otherwise continue to govern your use of Dodge and the services provided through the App.
        </Clause>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="12. Termination">
        <Clause n="12.1">This EULA remains effective until terminated by you or Dodge Labs.</Clause>
        <Clause n="12.2">
          Your licence may terminate automatically if you materially breach this EULA or any applicable
          Apple usage rule.
        </Clause>
        <Clause n="12.3">
          Upon termination, you must cease using Dodge and delete it from your Apple devices.
        </Clause>
        <Clause n="12.4">
          Termination does not affect rights or obligations that accrued before termination or provisions
          which by their nature are intended to survive termination.
        </Clause>
      </LegalCard>

      <LegalCard icon={Store} title="13. Apple disclaimer">
        <Clause n="13.1">
          Apple has no obligation to furnish maintenance or support services for Dodge.
        </Clause>
        <Clause n="13.2">
          Apple is not responsible for any claims relating to Dodge, including claims relating to product
          liability, regulatory compliance, consumer protection, privacy, intellectual property or the
          provision of Dodge&apos;s services.
        </Clause>
        <Clause n="13.3">
          Apple is not responsible for the content, functionality or operation of Dodge.
        </Clause>
      </LegalCard>

      <LegalCard icon={BadgeInfo} title="14. Developer information">
        <Clause n="14.1">The developer and provider of Dodge is:</Clause>
        <p>
          {COMPANY_NAME}
          <br />
          Email: <SupportEmail />
          <br />
          Registered address: {BUSINESS_ADDRESS}
        </p>
        <Clause n="14.2">
          All questions, complaints, notices and claims concerning Dodge should be directed to Dodge Labs
          using the contact details above.
        </Clause>
      </LegalCard>

      <LegalCard icon={Gavel} title="15. Applicable law">
        <Clause n="15.1">
          Nothing in this EULA excludes or limits any mandatory rights or protections available to you
          under the laws applicable to you.
        </Clause>
        <Clause n="15.2">
          Subject to any mandatory consumer protection or other applicable legal requirements, the
          governing law and dispute-resolution provisions applicable to your use of Dodge are set out in
          the Dodge <PolicyLink to="/terms">Terms of Service</PolicyLink>.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="16. Electronic acceptance">
        <p>
          By selecting &quot;Accept,&quot; &quot;Agree,&quot; creating an account, accessing, or continuing
          to use Dodge after reviewing the terms of this End User Licence Agreement, you acknowledge that:
        </p>
        <Clause n="16.1">You have read and understood the terms of the End User Licence Agreement.</Clause>
        <Clause n="16.2">You agree to be legally bound by them.</Clause>
        <Clause n="16.3">
          You agree to comply with all applicable laws and regulations when using Dodge.
        </Clause>
        <p className="font-medium text-foreground">
          If you do not agree to the terms of this End User Licence Agreement, you must refrain from
          signing the Agreement or using Dodge.
        </p>
      </LegalCard>

      <RelatedLegalCard current="eula" />
      <LegalContactCard intro={<>Dodge welcomes comments, questions, concerns or suggestions. Contact us at <SupportEmail />.</>} />
    </LegalPageShell>
  );
}
