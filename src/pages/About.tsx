import { Building2, Compass, Shield, Mail, Instagram } from "lucide-react";
import ContentPageShell from "@/components/ContentPageShell";
import LegalCard from "@/components/LegalCard";

const INSTAGRAM_URL = "https://www.instagram.com/dodge.app";

export default function About() {
  return (
    <ContentPageShell
      title="About Dodge Labs"
      subtitle="The team behind the Dodge safety app"
    >
      <LegalCard icon={Building2} title="Who we are">
        <p>
          Dodge Labs (Pty) Ltd is an independent software company focused on personal safety tools for
          everyday life. We build technology that helps people stay connected to the small groups they
          trust—not the entire internet.
        </p>
        <p>
          This website is our home on the web for the Dodge app: product information, legal policies,
          and support. We are a small, product-led team working to make safety coordination simpler and
          more human.
        </p>
      </LegalCard>

      <LegalCard icon={Compass} title="What we do">
        <p>
          We design and operate <span className="font-semibold text-foreground">Dodge</span>, a mobile
          app for iOS that combines private circles, live location sharing, and safety alerts.
        </p>
        <p>Our work centres on problems like:</p>
        <ul className="mt-2 space-y-2 text-[15px] leading-relaxed">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80" />
            <span>Letting friends and family see that you are safe—or quickly signal when you are not</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80" />
            <span>Sharing live location only with people you explicitly choose</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-80" />
            <span>Surfacing community and personal safety context on a map, without replacing emergency services</span>
          </li>
        </ul>
      </LegalCard>

      <LegalCard icon={Shield} title="How we think about privacy">
        <p>
          Dodge is built around consent and small groups. Location and alerts are shared within circles
          you control, not broadcast publicly. We use industry-standard infrastructure (including Google
          Firebase) and explain our practices clearly in our Privacy Policy.
        </p>
        <p>
          We do not sell your personal information. Safety technology only works when people trust it—we
          take that responsibility seriously as we grow the product.
        </p>
      </LegalCard>

      <LegalCard icon={Mail} title="Get in touch">
        <p>
          Whether you have a support question, partnership idea, or press enquiry, we would like to hear
          from you.
        </p>
        <p>
          <span className="text-muted-foreground">Email: </span>
          <a
            href="mailto:support@dodgeapp.com"
            className="font-semibold text-primary transition-opacity hover:opacity-80"
          >
            support@dodgeapp.com
          </a>
        </p>
        <p>
          <span className="text-muted-foreground">Follow Dodge: </span>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-primary transition-opacity hover:opacity-80"
          >
            <Instagram size={14} strokeWidth={2.25} aria-hidden />
            @dodge.app
          </a>
        </p>
        <p className="text-sm text-muted-foreground">
          Dodge Labs (Pty) Ltd · dodgeapp.com
        </p>
      </LegalCard>
    </ContentPageShell>
  );
}
