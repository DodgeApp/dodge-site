const RESEND_API_URL = "https://api.resend.com/emails";

function json(res, status, body) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(body));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Method not allowed." });
  }

  const { name = "", email = "", message = "" } = req.body || {};
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedEmail || !trimmedMessage) {
    return json(res, 400, { error: "Email and message are required." });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const supportInbox = process.env.SUPPORT_TO_EMAIL || "support@dodgeapp.com";
  const fromAddress = process.env.SUPPORT_FROM_EMAIL || "Dodge Support <no-reply@dodgeapp.com>";

  if (!resendApiKey) {
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
        reply_to: trimmedEmail,
        subject: `Dodge support request${trimmedName ? ` from ${trimmedName}` : ""}`,
        text: plainText,
      }),
    });

    if (!response.ok) {
      const apiError = await response.text();
      return json(res, 502, {
        error: "Unable to send message right now.",
        details: apiError,
      });
    }

    return json(res, 200, { ok: true });
  } catch {
    return json(res, 500, { error: "Unexpected server error while sending message." });
  }
}
