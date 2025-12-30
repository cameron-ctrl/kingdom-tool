"use client";

import { useState } from "react";

type Props = {
  className?: string;
  label?: string;
};

export default function ShareButton({
  className = "",
  label = "Share",
}: Props) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = "https://thekingdomstory.app";
    const title = "The Story of Jesus and His Kingdom";

    // Try native share sheet first (iOS + supported browsers)
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // User cancelled or share failed — fall through
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Last resort fallback
      window.prompt("Copy this link:", url);
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`rounded-md border border-ink/20 px-3 py-2 text-[11pt] font-b text-ink hover:bg-ink/5 ${className}`}
      aria-label="Share this app"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}