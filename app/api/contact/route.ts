import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

export const runtime = "nodejs";

const limits = {
  name: 100,
  email: 254,
  subject: 160,
  message: 5_000,
  honeypot: 200,
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function jsonResponse(body: Record<string, unknown>, status: number) {
  return Response.json(body, { status });
}

function textValue(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const valueWithoutControls = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  const valueWithNormalisedWhitespace = valueWithoutControls.replace(/\r\n?/g, "\n").trim();
  return valueWithNormalisedWhitespace.length <= maxLength ? valueWithNormalisedWhitespace : null;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character] ?? character);
}

function getClientAddress(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")
    || "unknown";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return jsonResponse({ ok: false, code: "invalid_json", error: "Please submit a valid form." }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse({ ok: false, code: "invalid_input", error: "Please submit a valid form." }, 400);
  }

  const name = textValue(payload.name, limits.name);
  const email = textValue(payload.email, limits.email)?.toLowerCase();
  const rawSubject = payload.subject === undefined ? "" : textValue(payload.subject, limits.subject);
  const message = textValue(payload.message, limits.message);
  const honeypot = textValue(payload.website, limits.honeypot);

  if (honeypot) {
    return jsonResponse({ ok: false, code: "invalid_input", error: "Please provide a valid form submission." }, 400);
  }

  if (!name || !email || !message || rawSubject === null || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return jsonResponse({ ok: false, code: "invalid_input", error: "Please provide a name, valid email address, and message." }, 400);
  }

  const subject = rawSubject || "Portfolio enquiry";

  const missingEmailConfiguration = [
    !process.env.RESEND_API_KEY && "RESEND_API_KEY",
    !process.env.CONTACT_EMAIL && "CONTACT_EMAIL",
    !process.env.CONTACT_FROM_EMAIL && "CONTACT_FROM_EMAIL",
  ].filter((variable): variable is string => Boolean(variable));

  if (missingEmailConfiguration.length > 0) {
    console.error("[contact] Missing email configuration", { variables: missingEmailConfiguration });
    return jsonResponse({ ok: false, code: "not_configured", error: "Enquiry submission is temporarily unavailable." }, 503);
  }

  const missingRateLimitConfiguration = [
    !process.env.UPSTASH_REDIS_REST_URL && "UPSTASH_REDIS_REST_URL",
    !process.env.UPSTASH_REDIS_REST_TOKEN && "UPSTASH_REDIS_REST_TOKEN",
  ].filter((variable): variable is string => Boolean(variable));

  if (missingRateLimitConfiguration.length > 0) {
    console.error("[contact] Missing rate-limit configuration", { variables: missingRateLimitConfiguration });
    return jsonResponse({ ok: false, code: "not_configured", error: "Enquiry submission is temporarily unavailable." }, 503);
  }

  try {
    const ratelimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: true,
      prefix: "tobitoa:contact",
    });
    const rateLimitResult = await ratelimit.limit(getClientAddress(request));

    if (!rateLimitResult.success) {
      return jsonResponse({ ok: false, code: "rate_limited", error: "Too many enquiries. Please try again later." }, 429);
    }

    const submittedAt = new Date().toISOString();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");
    const escapedTextMessage = message;
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        `Submitted: ${submittedAt}`,
        "",
        escapedTextMessage,
      ].join("\n"),
      html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}<br /><strong>Email:</strong> ${escapeHtml(email)}<br /><strong>Subject:</strong> ${escapeHtml(subject)}<br /><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p><p>${escapedMessage}</p>`,
    });

    if (result.error) {
      console.error("[contact] Resend rejected enquiry", { error: JSON.stringify(result.error) });
      return jsonResponse({ ok: false, code: "provider_error", error: "Your message could not be submitted. Please try again or contact me directly by email." }, 502);
    }

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    console.error("[contact] Enquiry submission failed", { error: error instanceof Error ? error.message : String(error) });
    return jsonResponse({ ok: false, code: "server_error", error: "Your message could not be submitted. Please try again or contact me directly by email." }, 500);
  }
}

export async function GET() {
  return jsonResponse({ ok: false, error: "Method not allowed." }, 405);
}
