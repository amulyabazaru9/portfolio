"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-zinc-950/60 px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition outline-none focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-400/20";

/**
 * Opens the visitor's email client with the message pre-filled.
 * To receive messages without that step, swap this for a form
 * service (e.g. Formspree) or a Next.js Route Handler.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Project enquiry: ${service} — ${name}`;
    const body = `${message}\n\n—\nName: ${name}\nEmail: ${email}\nService: ${service}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-400">Name</span>
          <input name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-zinc-400">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm text-zinc-400">What do you need?</span>
        <select name="service" className={inputClass} defaultValue="Web Development">
          <option>Web Development</option>
          <option>Data Analytics</option>
          <option>Automation</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-sm text-zinc-400">Project details</span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Tell me about your project, goals, and timeline."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 sm:w-auto"
      >
        Send message
      </button>
      <p className="text-sm text-zinc-500" aria-live="polite">
        {sent
          ? "Your email app should now be open with the message ready to send."
          : "This opens your email app with the message pre-filled."}
      </p>
    </form>
  );
}
