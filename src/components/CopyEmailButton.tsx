"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function CopyEmailButton({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-white/30 hover:bg-white/5 ${className}`}
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      <span aria-live="polite">{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}
