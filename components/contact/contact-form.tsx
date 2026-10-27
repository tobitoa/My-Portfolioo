"use client";

import { FormEvent, useRef, useState } from "react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("Your message could not be submitted. Please try again or contact me directly by email.");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("Your message could not be submitted. Please try again or contact me directly by email.");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
      });
      const result = await response.json() as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        if (result.error) setErrorMessage(result.error);
        setStatus("error");
        return;
      }

      formRef.current?.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-[rgb(var(--faint-foreground))]">Name <span className="text-[rgb(var(--primary))]">*</span></span>
          <input required maxLength={100} name="name" className="form-control mt-2" placeholder="Your name" />
        </label>
        <label className="block">
          <span className="font-mono text-[9px] uppercase tracking-[.16em] text-[rgb(var(--faint-foreground))]">Email <span className="text-[rgb(var(--primary))]">*</span></span>
          <input required maxLength={254} type="email" name="email" className="form-control mt-2" placeholder="you@example.com" />
        </label>
      </div>
      <label className="block">
        <span className="font-mono text-[9px] uppercase tracking-[.16em] text-[rgb(var(--faint-foreground))]">Message <span className="text-[rgb(var(--primary))]">*</span></span>
        <textarea required maxLength={5000} name="message" rows={5} className="form-control textarea mt-2 leading-6" placeholder="Tell me a little about what you are working on..." />
      </label>
      <div className="flex flex-col justify-between gap-4 pt-2 sm:flex-row sm:items-center">
        <div className="max-w-xs text-[11px] leading-5 text-[rgb(var(--faint-foreground))]" role="status" aria-live="polite">
          {status === "loading" && "Sending your enquiry..."}
          {status === "success" && <span className="text-[rgb(var(--primary-hover))]">Thanks for reaching out! Your enquiry has been submitted successfully.</span>}
          {status === "error" && <span className="text-[rgb(var(--primary-hover))]">{errorMessage}</span>}
          {status === "idle" && "Required fields are marked with an asterisk."}
        </div>
        <button type="submit" disabled={status === "loading"} className="button-primary shrink-0">{status === "loading" ? "Sending..." : "Submit inquiry"}</button>
      </div>
    </form>
  );
}
