import { FormEvent, useState } from "react";
import { HelpCircle, Mail } from "lucide-react";
import PageBackNav, { PAGE_CONTENT_PAD_TOP } from "@/components/PageBackNav";
import PageHeader from "@/components/PageHeader";
import PreviewNotice from "@/components/PreviewNotice";
import LegalCard from "@/components/LegalCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const trap = new FormData(form).get("company");

    if (trap) {
      return;
    }

    setSending(true);
    setStatus(null);

    fetch("/api/support", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        company: typeof trap === "string" ? trap : "",
      }),
    })
      .then(async (response) => {
        const isJson = response.headers.get("content-type")?.includes("application/json");
        const data = isJson ? await response.json().catch(() => ({})) : {};

        if (!isJson) {
          throw new Error(
            "Support API is not reachable. For local testing, run npm run dev:vercel instead of npm run dev.",
          );
        }

        if (!response.ok) {
          throw new Error(data?.error || "Unable to send support request.");
        }
        setStatus({ type: "success", text: "Message sent. Our support team will contact you soon." });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error: Error) => {
        setStatus({ type: "error", text: error.message || "Something went wrong. Please try again." });
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="relative min-h-screen bg-surface font-sans">
      <PageBackNav />

      <main
        className="mx-auto max-w-lg animate-fade-in space-y-6 px-5 pb-16"
        style={{ paddingTop: PAGE_CONTENT_PAD_TOP }}
      >
        <PageHeader title="Support" subtitle="We are here to help" />
        <PreviewNotice />

        <LegalCard icon={Mail} title="Contact Support">
          <p>
            For help with your account, app issues, or feedback, please contact the Dodge support team.
          </p>
          <a
            href="mailto:support@dodgeapp.com"
            className="mt-1 inline-block font-semibold text-primary transition-opacity hover:opacity-80"
          >
            support@dodgeapp.com
          </a>
        </LegalCard>

        <LegalCard icon={Mail} title="Contact Form">
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="company"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />
            <Input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              autoComplete="email"
              required
            />
            <Textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="How can we help?"
              className="min-h-[110px]"
              required
            />
            <Button type="submit" size="lg" className="w-full" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>
            {status && (
              <p className={status.type === "success" ? "text-xs text-primary" : "text-xs text-destructive"}>
                {status.text}
              </p>
            )}
          </form>
        </LegalCard>

        <LegalCard icon={HelpCircle} title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="response-time" className="border-white/10">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                How quickly will I get a response?
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] leading-relaxed text-foreground">
                We aim to respond as soon as possible, typically within 1 to 2 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="help-scope" className="border-white/10">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                What can support help with?
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] leading-relaxed text-foreground">
                Support can assist with account access, technical issues, and general app questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feedback" className="border-b-0">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                Can I send product feedback?
              </AccordionTrigger>
              <AccordionContent className="text-[13.5px] leading-relaxed text-foreground">
                Yes. Feature requests and product feedback are always welcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </LegalCard>
      </main>
    </div>
  );
}
