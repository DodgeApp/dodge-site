import {
  BadgeDollarSign,
  FileText,
  HeartHandshake,
  Receipt,
  RefreshCw,
  Scale,
  ShieldCheck,
  Store,
  Wallet,
} from "lucide-react";
import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList, Clause } from "@/components/LegalCard";
import {
  LegalContactCard,
  PolicyLink,
  RelatedLegalCard,
} from "@/components/LegalBits";
import { COMPANY_NAME, LEGAL_LAST_UPDATED } from "@/lib/legal";

export default function PaymentTerms() {
  return (
    <LegalPageShell title="Payment Terms" lastUpdated={LEGAL_LAST_UPDATED}>
      <LegalCard icon={FileText} title="About these Payment Terms">
        <p>
          The Payment Terms of {COMPANY_NAME} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;,
          &quot;Dodge Labs&quot;) govern payments made through the Dodge mobile application
          (&quot;Dodge&quot;, &quot;App&quot;) and form part of the Dodge{" "}
          <PolicyLink to="/terms">Terms of Service</PolicyLink>.
        </p>
      </LegalCard>

      <LegalCard icon={Store} title="Payments through Apple">
        <p>
          All subscriptions, voluntary contributions and other paid features or services offered through
          Dodge are purchased exclusively through the Apple App Store and its In-App Purchase system.
        </p>
        <p>
          We do not collect or process subscriptions or other In-App payments directly. Payments are
          processed by Apple in accordance with Apple&apos;s applicable terms and conditions.
        </p>
        <p>
          By making a purchase through Dodge, you acknowledge that Apple may be responsible for processing
          the payment, charging your selected payment method, issuing receipts and where applicable
          processing refunds.
        </p>
        <p>
          Your use of Dodge remains subject to these Payment Terms, the Dodge{" "}
          <PolicyLink to="/terms">Terms of Service</PolicyLink> and{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink>, as well as the applicable Apple Terms.
        </p>
      </LegalCard>

      <LegalCard icon={RefreshCw} title="Subscriptions">
        <p>
          Dodge may offer paid subscriptions on a recurring basis, as indicated in the App at the time of
          purchase.
        </p>
        <p>
          Before completing a subscription purchase, the applicable subscription price, duration, renewal
          terms and any applicable trial or introductory offer will be displayed through Apple&apos;s
          In-App Purchase interface.
        </p>
        <p>
          Unless otherwise stated, an auto-renewable subscription will automatically renew at the end of
          each subscription period, unless cancelled in accordance with Apple&apos;s subscription
          management procedures.
        </p>
        <p>
          You are responsible for managing and cancelling your subscription through your Apple account.
          Deleting Dodge does not necessarily cancel an active subscription.
        </p>
        <p>
          Cancellation of a subscription generally prevents future renewal but does not necessarily entitle
          you to a refund for the current subscription period, subject to Apple&apos;s refund policies and
          applicable law. Apple confirms that a cancelled subscription ordinarily remains active until the
          end of the paid period.
        </p>
      </LegalCard>

      <LegalCard icon={HeartHandshake} title={`Voluntary contributions to ${COMPANY_NAME}`}>
        <p>
          Dodge may provide you with an optional facility to make a voluntary financial contribution to
          Dodge Labs to support the continued development, maintenance, improvement and operation of Dodge
          and its services (&quot;Voluntary Contribution&quot;).
        </p>
        <p>
          A Voluntary Contribution is entirely optional. It is not required to create or maintain an
          account, use Dodge or access any feature or service available through Dodge.
        </p>
        <p>
          A Voluntary Contribution is not a purchase of goods, services, digital content or additional
          functionality. No additional feature, benefit, status, entitlement or service will be provided in
          exchange for a Voluntary Contribution.
        </p>
        <p>
          Voluntary Contributions made through the iOS version of Dodge will be processed exclusively
          through Apple&apos;s App Store and applicable In-App Purchase system. Apple will process the
          applicable payment in accordance with its terms and policies.
        </p>
        <p>
          Voluntary Contributions will be offered as once-off contributions and may be made at such amounts
          as are displayed in the App at the time of purchase. The available amounts may vary from time to
          time and by country or region.
        </p>
        <p>A Voluntary Contribution is made directly for the benefit of Dodge Labs and is not represented as:</p>
        <BulletList
          items={[
            "a charitable donation;",
            "a donation to a nonprofit or charitable organisation;",
            "a contribution to a fundraising campaign; or",
            "a tax-deductible donation,",
          ]}
        />
        <p>unless expressly stated otherwise and lawfully authorised.</p>
        <p>
          Dodge will not represent or imply that a Voluntary Contribution will be transferred to, or used
          for the benefit of any particular person, charity, nonprofit organisation or third party, unless
          this is expressly disclosed to you before the transaction is completed.
        </p>
        <p>
          A Voluntary Contribution does not confer ownership, membership, shares, equity, voting rights,
          profit participation or any other proprietary interest in Dodge Labs or Dodge.
        </p>
        <p>
          A Voluntary Contribution does not create a partnership, joint venture, agency, employment,
          fiduciary or other legal relationship between you and Dodge Labs.
        </p>
        <p>
          Because Voluntary Contributions are processed through Apple&apos;s In-App Purchase system, the
          purchase, payment processing and applicable refund procedures are subject to Apple&apos;s
          applicable terms, policies and procedures, together with any mandatory rights available to you
          under applicable law.
        </p>
        <p>
          Dodge does not directly receive or process your payment details in connection with a Voluntary
          Contribution made through Apple&apos;s In-App Purchase system. Apple processes the transaction
          and may provide Dodge with transaction information necessary to verify and administer the
          purchase.
        </p>
        <p>
          To the extent permitted by applicable law, making a Voluntary Contribution does not create any
          obligation on Dodge Labs to continue operating Dodge, provide any particular service, develop any
          particular feature or maintain any particular functionality.
        </p>
        <p>
          Dodge may change, suspend or discontinue the Voluntary Contribution facility at any time, subject
          to applicable law and Apple&apos;s applicable requirements.
        </p>
        <p>
          Dodge may use Voluntary Contributions for any lawful business purpose associated with Dodge Labs,
          including the development, maintenance, hosting, security, administration, marketing, improvement
          and operation of Dodge and its services.
        </p>
        <p>
          Nothing in this section limits any rights or remedies that you may have under applicable consumer
          protection, payment, refund or other mandatory laws.
        </p>
      </LegalCard>

      <LegalCard icon={BadgeDollarSign} title="Prices and taxes">
        <p>
          Prices for subscriptions and other paid services will be displayed in Dodge or through
          Apple&apos;s purchase interface.
        </p>
        <p>
          Apple may determine the currency, applicable taxes and final amount charged based on your Apple
          account, country or region and applicable law.
        </p>
        <p>
          Prices may change from time to time. Where Apple requires advance notice or your consent to a
          price change, the applicable Apple procedures will apply.
        </p>
      </LegalCard>

      <LegalCard icon={Wallet} title="Refunds">
        <p>
          Because payments are processed through Apple, refund requests must generally be submitted to
          Apple through the App Store or Apple&apos;s applicable refund process.
        </p>
        <p>
          Dodge does not directly process refunds for purchases made through Apple&apos;s In-App Purchase
          system.
        </p>
        <p>
          Apple determines whether a refund will be granted, subject to Apple&apos;s policies and
          applicable law. Apple may issue full or partial refunds and may cancel or otherwise adjust the
          relevant subscription or purchase following a refund.
        </p>
        <p>
          If Apple notifies us that a purchase or subscription has been refunded, Dodge may revoke or
          disable the corresponding paid access or benefits.
        </p>
      </LegalCard>

      <LegalCard icon={Receipt} title="Purchase records">
        <p>Apple may provide you with a purchase receipt or other confirmation of payment.</p>
        <p>
          Dodge may receive and process transaction information necessary to verify subscriptions,
          renewals, cancellations and refunds and to provide the relevant services to you.
        </p>
      </LegalCard>

      <LegalCard icon={ShieldCheck} title="7. No direct payments">
        <Clause n="7.1">
          Dodge does not accept payment for subscriptions or other digital services through bank transfers,
          credit cards, debit cards, cryptocurrency, PayPal or other external payment methods within the
          iOS App, unless expressly permitted by Apple and applicable law.
        </Clause>
        <Clause n="7.2">
          You must not attempt to circumvent Apple&apos;s system or obtain paid Dodge features or services
          without completing the applicable purchase through an authorised payment mechanism.
        </Clause>
      </LegalCard>

      <LegalCard icon={Store} title="8. Apple's role">
        <Clause n="8.1">
          Apple is responsible for operating the Apple Store and processing In-App Purchases made through
          its platform.
        </Clause>
        <Clause n="8.2">
          Apple is not responsible for providing our services, content, or support, except to the extent
          expressly required under applicable law or Apple&apos;s applicable terms.
        </Clause>
        <Clause n="8.3">
          Apple is a third-party beneficiary of the applicable{" "}
          <PolicyLink to="/eula">end-user licence terms</PolicyLink> for Dodge and may enforce those terms,
          where permitted by Apple&apos;s applicable requirements.
        </Clause>
      </LegalCard>

      <LegalCard icon={Scale} title="9. Consumer rights">
        <Clause n="9.1">
          Nothing in these payment terms excludes, restricts or limits any rights or remedies that cannot
          lawfully be excluded or limited under the laws applicable to you.
        </Clause>
        <Clause n="9.2">
          Where applicable law provides you with a statutory right to cancel, withdraw from, obtain a
          refund for, or otherwise challenge a transaction, that right remains unaffected.
        </Clause>
      </LegalCard>

      <LegalCard icon={RefreshCw} title="10. Changes to Payment Terms">
        <Clause n="10.1">
          We may amend these Payment Terms from time to time to reflect changes to Dodge, Apple
          requirements, payment arrangements or applicable law.
        </Clause>
        <Clause n="10.2">
          The version of these Payment Terms applicable at the time of your purchase will generally govern
          that purchase, subject to any mandatory requirements of applicable law.
        </Clause>
      </LegalCard>

      <LegalCard icon={FileText} title="11. Electronic acceptance of terms">
        <p>By selecting &quot;Accept,&quot; &quot;Agree,&quot; after reviewing these terms, you acknowledge that:</p>
        <Clause n="11.1">You have read and understood these Payment Terms.</Clause>
        <Clause n="11.2">You agree to be legally bound by them.</Clause>
        <Clause n="11.3">
          You consent to the use of electronic records and communications in connection with Dodge, to the
          extent permitted by law.
        </Clause>
        <Clause n="11.4">
          You agree to comply with all applicable laws and regulations when using Dodge.
        </Clause>
        <p className="font-medium text-foreground">
          If you do not agree to these Payment Terms, you must refrain from creating an account or using
          Dodge.
        </p>
      </LegalCard>

      <RelatedLegalCard current="payment" />
      <LegalContactCard intro="For questions concerning Dodge subscriptions, voluntary contributions, purchases or payment-related issues, we would like to hear from you." />
    </LegalPageShell>
  );
}
