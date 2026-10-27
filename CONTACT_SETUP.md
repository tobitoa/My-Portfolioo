# Contact Form Setup

The contact form submits to `POST /api/contact`. The route validates the request, applies an Upstash Redis sliding-window limit, and sends accepted enquiries through Resend.

Configure these variables locally in `.env.local` and in the Vercel project settings:

- `RESEND_API_KEY`: a server-side Resend API key. Never expose it as `NEXT_PUBLIC_*`.
- `CONTACT_EMAIL`: the recipient inbox. The default is `pkb27720@gmail.com`.
- `CONTACT_FROM_EMAIL`: a sender address on a domain verified in Resend.
- `UPSTASH_REDIS_REST_URL`: the REST URL for the Upstash Redis database used for rate limiting.
- `UPSTASH_REDIS_REST_TOKEN`: the matching Upstash REST token.

Resend must have the sender domain verified before production delivery can be accepted. The visitor email is used only as `replyTo`; visitors cannot choose the recipient or sender. The route allows five submissions per IP address per ten minutes.

After adding or changing variables in Vercel, redeploy the project for the new values to be available to the serverless route. Until all five variables are configured, the form reports that submission is temporarily unavailable and never claims success.
