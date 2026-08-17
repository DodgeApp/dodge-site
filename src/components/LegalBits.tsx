import { FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import LegalCard, { BulletList } from "@/components/LegalCard";
import {
  BUSINESS_ADDRESS,
  COMPANY_NAME,
  LEGAL_DOCS,
  SUPPORT_EMAIL,
  type LegalDocId,
} from "@/lib/legal";

export function PolicyLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="font-semibold text-primary transition-opacity hover:opacity-80">
      {children}
    </Link>
  );
}

export function SupportEmail() {
  return (
    <a
      href={`mailto:${SUPPORT_EMAIL}`}
      className="font-semibold text-primary transition-opacity hover:opacity-80"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}

export function RelatedLegalCard({ current }: { current: LegalDocId }) {
  return (
    <LegalCard icon={FileText} title="Related documents">
      <p>These documents together govern your use of Dodge:</p>
      <BulletList
        items={LEGAL_DOCS.filter((doc) => doc.id !== current).map((doc) => (
          <PolicyLink to={doc.path}>{doc.title}</PolicyLink>
        ))}
      />
    </LegalCard>
  );
}

export function LegalContactCard({
  intro,
  showInformationOfficer = false,
}: {
  intro: React.ReactNode;
  showInformationOfficer?: boolean;
}) {
  return (
    <LegalCard icon={Mail} title="Get in touch">
      <p>{intro}</p>
      {showInformationOfficer && (
        <p>
          <span className="text-muted-foreground">Information Officer: </span>
          <span className="font-semibold text-foreground">{COMPANY_NAME}</span>
        </p>
      )}
      <p>
        <span className="text-muted-foreground">Email: </span>
        <SupportEmail />
      </p>
      <p className="text-sm text-muted-foreground">
        {COMPANY_NAME} · {BUSINESS_ADDRESS}
      </p>
    </LegalCard>
  );
}
