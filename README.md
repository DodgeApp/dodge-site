# Dodge Website

Legal and support pages for Dodge.

## Support contact form

The form on `/support` posts to `/api/support`, which sends email via [Resend](https://resend.com).

### 1. Resend setup

1. Create a free account at [resend.com](https://resend.com).
2. Add and verify your domain **`dodgeapp.com`** (DNS records in Resend dashboard).
3. Create an API key under **API Keys**.

Until the domain is verified, you can test with Resend’s sandbox sender:

`Dodge Support <onboarding@resend.dev>`

(Sandbox mail can only be sent to the email address on your Resend account.)

### 2. Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | Resend API key (`re_…`) |
| `SUPPORT_TO_EMAIL` | No | Inbox for submissions (default: `support@dodgeapp.com`) |
| `SUPPORT_FROM_EMAIL` | No | Sender shown in inbox (default: `Dodge Support <no-reply@dodgeapp.com>`) |

**Production (Vercel)**

1. Open [vercel.com](https://vercel.com) → your **dodge-site** project.
2. **Settings → Environment Variables**
3. Add the variables above for **Production** (and **Preview** if you want previews to work).
4. Redeploy (or push to `main`).

**Local testing**

```bash
cp .env.example .env.local
# Edit .env.local with your RESEND_API_KEY and sender addresses

npm run dev:vercel
```

Use **`npm run dev:vercel`**, not `npm run dev`. Plain Vite does not run `/api` routes; `vercel dev` runs the site and the support API together.

### 3. Verify it works

1. Open `/support`, fill in the form, submit.
2. Check `SUPPORT_TO_EMAIL` (or `support@dodgeapp.com`).
3. Reply in your mail client — **Reply-To** is set to the user’s email.

If you see *“Support service is not configured yet”*, `RESEND_API_KEY` is missing on that environment.

If Resend rejects the send, confirm **`dodgeapp.com`** is verified and `SUPPORT_FROM_EMAIL` uses that domain.

## Development

```bash
npm install
npm run dev          # UI only (contact form API will not work)
npm run dev:vercel   # UI + /api/support (recommended)
npm run build
```
