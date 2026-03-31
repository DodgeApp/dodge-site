# Dodge Website

Legal and support pages for Dodge.

## Support Form Email Delivery (Vercel)

The support form posts to `/api/support` and sends mail through Resend.

Set these environment variables in Vercel:

- `RESEND_API_KEY` (required)
- `SUPPORT_TO_EMAIL` (optional, defaults to `support@dodgeapp.com`)
- `SUPPORT_FROM_EMAIL` (optional, defaults to `Dodge Support <no-reply@dodgeapp.com>`)
