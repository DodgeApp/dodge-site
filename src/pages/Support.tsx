import { FormEvent, useState } from "react";
import { ArrowLeft, HelpCircle, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dodgeLogo from "@/assets/dodge-logo.png";
import LegalCard from "@/components/LegalCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Support() {
  const navigate = useNavigate();
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
      }),
    })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
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
    <div className="min-h-screen bg-background font-sans">
      <div className="h-12" />

      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center px-4 py-3 max-w-lg mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1.5 text-gold transition-opacity active:opacity-60 hover:opacity-80"
          >
            <ArrowLeft size={20} strokeWidth={2.5} />
            <span className="text-sm font-medium">Back</span>
          </button>
        </div>
      </nav>

      <main className="max-w-lg mx-auto px-4 pb-16 pt-6 space-y-4 animate-fade-in">
        <div className="flex items-center gap-4 pb-2">
          <img
            src={dodgeLogo}
            alt="Dodge"
            className="w-12 h-12 rounded-[14px] shadow-gold-glow flex-shrink-0"
          />
          <div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight leading-tight">Support</h1>
            <p className="text-xs text-muted-foreground mt-0.5">We are here to help</p>
          </div>
        </div>

        <LegalCard icon={Mail} title="Contact Support" highlight>
          <p>
            For help with your account, app issues, or feedback, please contact the Dodge support team.
          </p>
          <a
            href="mailto:support@dodgeapp.com"
            className="inline-block mt-1 text-gold font-medium hover:opacity-80 transition-opacity"
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
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </Button>
            {status && (
              <p className={status.type === "success" ? "text-xs text-gold" : "text-xs text-destructive"}>
                {status.text}
              </p>
            )}
          </form>
        </LegalCard>

        <LegalCard icon={HelpCircle} title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="response-time" className="border-border/60">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                How quickly will I get a response?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[13.5px] leading-relaxed">
                We aim to respond as soon as possible, typically within 1 to 2 business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="help-scope" className="border-border/60">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                What can support help with?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[13.5px] leading-relaxed">
                Support can assist with account access, technical issues, and general app questions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feedback" className="border-b-0">
              <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline">
                Can I send product feedback?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[13.5px] leading-relaxed">
                Yes. Feature requests and product feedback are always welcome.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </LegalCard>
      </main>
    </div>
  );
}
