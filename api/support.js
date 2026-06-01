const RESEND_API_URL = "https://api.resend.com/emails";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

function json(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(body));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed." });
  }

  const { name = "", email = "", message = "" } = parseBody(req);
  const trimmedName = String(name).trim().slice(0, MAX_NAME_LENGTH);
  const trimmedEmail = String(email).trim().slice(0, MAX_EMAIL_LENGTH);
  const trimmedMessage = String(message).trim().slice(0, MAX_MESSAGE_LENGTH);

  if (!trimmedEmail || !trimmedMessage) {
    return json(res, 400, { error: "Email and message are required." });
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return json(res, 400, { error: "Please enter a valid email address." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const supportInbox = process.env.SUPPORT_TO_EMAIL || "support@dodgeapp.com";
  const fromAddress = process.env.SUPPORT_FROM_EMAIL || "Dodge Support <on-reply@dodgeapp.com>";

  if (!resendApiKey) {
    console.error("support: RESEND_API_KEY is not set");
    return json(res, 500, { error: "Support service is not configured yet." });
  }

  const plainText = [
    "New support form submission",
    "",
    `Name: ${trimmedName || "Not provided"}`,
    `Email: ${trimmedEmail}`,
    "",
    "Message:",
    trimmedMessage,
  ].join("\n");

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [supportInbox],
        reply_to: [trimmedEmail],
        subject: `Dodge support request${trimmedName ? ` from ${trimmedName}` : ""}`,
        text: plainText,
      }),
    });

    if (!response.ok) {
      const apiError = await response.text();
      console.error("support: Resend error", response.status, apiError);
      return json(res, 502, {
        error: "Unable to send message right now. Please try again or email support@dodgeapp.com.",
      });
    }

    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("support: unexpected error", error);
    return json(res, 500, { error: "Unexpected server error while sending message." });
  }
}
