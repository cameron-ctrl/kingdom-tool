// src/components/VerseToggle.tsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function VerseToggle({ refText, verse }: { refText: string; verse: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState("0px");

  useEffect(() => {
    if (!ref.current) return;
    setMaxH(open ? `${ref.current.scrollHeight}px` : "0px");
  }, [open, verse]);

  return (
    <div className="my-3">
      <button className="flex items-center gap-2 underline-offset-4 hover:underline" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>📖 {refText}</span>
        <span className="text-xl leading-none">{open ? "−" : "+"}</span>
      </button>

      <div ref={ref} style={{ maxHeight: maxH, transition: "max-height .25s ease, opacity .25s ease" }} className={`overflow-hidden ${open ? "opacity-100" : "opacity-0"}`}>
        <div className="mt-2 rounded-md bg-[#EAF2FA] p-3">
          <p className="italic text-[15px] leading-relaxed sm:text-[16px]">“{verse}”</p>
          <div className="mx-auto mt-3 h-[2px] w-[var(--bar-w)] rounded bg-gold" />
        </div>
      </div>
    </div>
  );
}
