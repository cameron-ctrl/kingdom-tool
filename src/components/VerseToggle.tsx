"use client";
import { useState } from "react";

export default function VerseToggle({ refText, verse }: { refText: string; verse: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-3">
      <button
        className="flex items-center gap-2 font-b text-ink underline-offset-4 hover:underline"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>📖 {refText}</span>
        <span className="text-xl leading-none">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="mt-2 rounded-md bg-[#EAF2FA] p-3">
          <p className="font-s italic text-[12pt] leading-relaxed">“{verse}”</p>
          <div className="mx-auto mt-3 h-[2px] w-full max-w-[calc(var(--bar-w))] rounded bg-gold" />
        </div>
      )}
    </div>
  );
}
