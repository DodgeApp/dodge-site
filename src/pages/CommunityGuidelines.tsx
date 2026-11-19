import LegalPageShell from "@/components/LegalPageShell";
import LegalCard, { BulletList, Clause } from "@/components/LegalCard";
import {
  LegalContactCard,
  PolicyLink,
  RelatedLegalCard,
  SupportEmail,
} from "@/components/LegalBits";
import { FORUM_DATA_ATTRIBUTION, GUIDELINES_LAST_UPDATED } from "@/lib/legal";

const externalLinkClass = "font-semibold text-primary transition-opacity hover:opacity-80";

export default function CommunityGuidelines() {
  return (
    <LegalPageShell title="Community Guidelines" lastUpdated={GUIDELINES_LAST_UPDATED}>
      <LegalCard icon="group" title="1. About Community Forums">
        <p>
          Community Forums let people share safety warnings, general posts and questions about a suburb or
          a city, and comment on them. Forums keep areas safer when everyone posts with care.
        </p>
        <p>
          These guidelines apply to everything you post, comment, react to or report in Community Forums.
          They form part of our <PolicyLink to="/terms">Terms of Service</PolicyLink>. Our{" "}
          <PolicyLink to="/privacy">Privacy Policy</PolicyLink> explains what we store about forum activity
          and for how long.
        </p>
        <p>
          You accept these guidelines in the app before you first post or comment. Posts and comments show
          your username and profile photo, and can be read by any signed-in Dodge user, including people
          who browse a forum from elsewhere. There is no anonymous posting.
        </p>
        <p className="font-medium text-foreground">
          Community Forums are not an emergency service. If you are in danger, call your local emergency
          services first.
        </p>
      </LegalCard>

      <LegalCard icon="verified_user" title="2. The short version">
        <p>When you accept the guidelines in the app, you agree to these five rules:</p>
        <BulletList
          items={[
            "Be a good neighbour. No threats, harassment or hate.",
            "Describe what happened, not who someone looks like.",
            "Don't share people's addresses, phone numbers or plates.",
            "No vigilante calls. In danger, call emergency services first.",
            "No ads or spam.",
          ]}
        />
        <p>The rest of this page explains what these mean in practice.</p>
      </LegalCard>

      <LegalCard icon="check" title="3. What's welcome">
        <BulletList
          items={[
            "Describing a crime, incident or suspicious activity: where and when it happened, what was taken and how.",
            "Describing people and vehicles involved in an incident by what you saw: clothing, build, behaviour, direction of travel, and a vehicle's make and colour.",
            "Quoting the words or threats used during an incident, to warn others.",
            "Urging caution, sharing safety tips, and asking for or offering help.",
            "Strong feelings about crime in general, as long as you don't target an identifiable person.",
            "Naming businesses, roads or public places where something happened.",
          ]}
        />
      </LegalCard>

      <LegalCard icon="cancel" id="not-allowed" title="4. What's not allowed">
        <p>
          We have zero tolerance for objectionable content and abusive users. Do not post, comment or share:
        </p>
        <BulletList
          items={[
            "Threats of violence or harm against anyone.",
            "Calls for vigilante action, mob justice or revenge.",
            "Personal information about private individuals, such as home addresses, phone numbers or ID numbers, or anything that links a number plate or photo to a named person as an accusation.",
            "Hate, or profiling by race, ethnicity, nationality or religion. Treating a group as suspects, or calling someone suspicious because of who they are rather than what they did, is not allowed.",
            "Harassment or bullying of anyone.",
            "Sexual content of any kind. Anything sexual involving a minor is removed, the account is banned, and we may report it to the authorities.",
            "Encouragement of or instructions for self-harm.",
            "Advertising, promotion, scams or spam, including repeated posts and floods of links, capitals or repeated characters.",
            "Content that is unlawful, or that you know to be false or misleading.",
            "Posts in the Safety warning category that are not about safety.",
            "Impersonating another person, or using another person's account.",
          ]}
        />
      </LegalCard>

      <LegalCard icon="warning" id="safety-warnings" title="5. Safety warnings">
        <Clause n="5.1">
          Safety warnings are for crime, danger, suspicious activity or a hazard to people nearby. To post
          one, Community Forums must have found you in that city, using your location, within the last 30
          days. Anyone who can post may add General posts and Questions to any suburb or city forum.
        </Clause>
        <Clause n="5.2">
          You can choose to attach a location to a safety warning. Dodge shows it only to within about 170
          metres. Don&apos;t attach it if you&apos;re at home. If you also file an unsafe report from the
          same screen, that report uses your exact location, as usual.
        </Clause>
        <Clause n="5.3">
          A safety warning shows as active for 7 days. It stays in the forum after that until it is deleted
          or removed.
        </Clause>
        <Clause n="5.4">
          A post in the Safety warning category that has no safety content may be moved to General. If it
          happens again within 30 days, the post is rejected and you receive a strike.
        </Clause>
        <Clause n="5.5">
          A Dodge moderator may label a safety warning &quot;Unverified&quot;. The label is removed when
          established neighbours mark &quot;Seen too&quot;.
        </Clause>
      </LegalCard>

      <LegalCard icon="how_to_reg" title="6. Who can post">
        <Clause n="6.1">
          Anyone signed in to Dodge can read forums, react, report and block. To post or comment, your
          account must have a verified phone number. You can add one in the app.
        </Clause>
        <Clause n="6.2">
          Daily limits apply to posts, comments and reports. New accounts have lower limits for their first
          7 days and cannot post links during that time.
        </Clause>
      </LegalCard>

      <LegalCard icon="shield" id="moderation" title="7. How moderation works">
        <Clause n="7.1">
          Every post and comment is checked automatically before anyone else sees it. Automated tools from
          OpenAI and Google (Gemini) check the text against these guidelines. Depending on the result, a post
          or comment may be published, published collapsed behind a tap (&quot;Hidden pending
          review&quot;), held for review, or rejected.
        </Clause>
        <Clause n="7.2">
          The Dodge team reviews items that are escalated, reported or automatically hidden. Content that
          suggests a credible threat to someone&apos;s life, a risk to a child, or that the author may harm
          themselves is hidden at once and sent to a person.
        </Clause>
        <Clause n="7.3">
          Reports are weighed. Reports from very new accounts, restricted accounts, or people who have
          blocked or been blocked by the author count for little or nothing, and we look for groups of
          people reporting together to silence someone.
        </Clause>
        <Clause n="7.4">
          Reports alone never hide a safety warning. Only the automated check at the time of posting, or a
          Dodge moderator, can hide one, except where the content suggests a credible threat to a person or
          a risk to a child.
        </Clause>
        <Clause n="7.5">
          If one of your posts or comments is hidden or removed, you can still see it in the app, labelled
          &quot;Under review&quot; or &quot;Removed&quot;.
        </Clause>
      </LegalCard>

      <LegalCard icon="gavel" id="strikes" title="8. Strikes and enforcement">
        <Clause n="8.1">
          You may receive a strike when the automated check rejects something you post for a serious
          reason, when it confidently hides a post or comment that is not a safety warning, or when a Dodge
          moderator removes your content with a strike. A strike stays active for 90 days.
        </Clause>
        <p>Active strikes have these consequences:</p>
        <BulletList
          items={[
            "1 strike: a warning in the app.",
            "2 strikes: you cannot post or comment for 24 hours.",
            "3 strikes: you cannot post or comment for 7 days.",
            "4 or more strikes: a forum ban. You can still read, but you cannot post, comment or react.",
          ]}
        />
        <Clause n="8.2">
          A single severe violation, such as a credible threat against a person outside a safety warning, or
          sexual content involving a minor, leads to an immediate forum ban.
        </Clause>
        <Clause n="8.3">
          If three of your posts or comments are rejected within 24 hours, you cannot post or comment for
          the next 24 hours.
        </Clause>
        <Clause n="8.4">
          A Dodge moderator can also remove content, pause your posting for 24 hours or 7 days, ban you
          from forums, or disable your Dodge account entirely.
        </Clause>
        <Clause n="8.5">
          Strikes and bans follow the person, not just the account. We keep a coded record of strikes,
          linked to your phone number and email address, for 12 months after your most recent strike. If
          you delete your account and sign up again with the same phone number or email address, your
          active strikes and any ban carry over. See our{" "}
          <PolicyLink to="/privacy#community-forums">Privacy Policy</PolicyLink>.
        </Clause>
        <Clause n="8.6">
          If you think we got a decision wrong, email <SupportEmail /> and a person will look at it.
        </Clause>
      </LegalCard>

      <LegalCard icon="info" title="9. Reporting and blocking">
        <Clause n="9.1">
          Report a post, a comment or a person from the ••• menu or their name. Choose a reason: spam,
          harassment or bullying, threats or violence, hate, sexual content, personal information, false or
          misleading, or other. You can report each item once. The person you report is not told who
          reported them.
        </Clause>
        <Clause n="9.2">
          Block someone and you won&apos;t see their posts or comments, they can&apos;t comment on your
          posts, react to them or reply to your comments, and neither of you is sent notifications about
          the other. Blocking takes effect immediately. You can unblock people under Settings → Community →
          Blocked users.
        </Clause>
        <Clause n="9.3">
          We review reports of objectionable content within 24 hours, and remove content and users that
          break these guidelines.
        </Clause>
      </LegalCard>

      <LegalCard icon="favorite" title="10. If you or someone else is in danger">
        <Clause n="10.1">
          In an emergency, call your local emergency services before you post. Never put yourself or
          others at risk to take a photo, follow someone or confront anyone.
        </Clause>
        <Clause n="10.2">
          If you are thinking about harming yourself, you&apos;re not alone. In South Africa, SADAG is free
          and available 24 hours a day on{" "}
          <a href="tel:0800567567" className={externalLinkClass}>
            0800 567 567
          </a>
          .
        </Clause>
      </LegalCard>

      <LegalCard icon="map" id="data-sources" title="11. Map data and attribution">
        <p>
          Forum areas, suburb and city names, and place search use boundary and building data from{" "}
          <a href="https://overturemaps.org" className={externalLinkClass}>
            Overture Maps
          </a>
          , built from OpenStreetMap and other open sources.
        </p>
        <p className="font-medium text-foreground">{FORUM_DATA_ATTRIBUTION}.</p>
        <p>
          OpenStreetMap and Overture data are available under the{" "}
          <a href="https://opendatacommons.org/licenses/odbl/" className={externalLinkClass}>
            Open Database License (ODbL)
          </a>
          . Google Open Buildings and Esri building footprints are available under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" className={externalLinkClass}>
            CC BY 4.0
          </a>
          . On request to <SupportEmail />, we will provide the forum boundary database we derived from
          this data, or the method we used to make it, under the ODbL.
        </p>
      </LegalCard>

      <LegalCard icon="sync" title="12. Changes to these guidelines">
        <p>
          We may update these guidelines as Community Forums change. If a change is significant, the app
          may ask you to accept the updated guidelines before you post again.
        </p>
      </LegalCard>

      <RelatedLegalCard current="guidelines" />
      <LegalContactCard intro="Questions about these guidelines, or a moderation decision? Get in touch." />
    </LegalPageShell>
  );
}
