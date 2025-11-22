// src/app/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { meta } from "../content/tool";
import { logEvent } from "../lib/logEvent";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEvent({
        eventType: "page_view",
        page: window.location.pathname,
        label: "page_view",
      });
    }
  }, []);

  return (
    <div className="min-h-[70vh] px-5 pt-10 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-h font-semibold text-[28pt] leading-[1.15] text-kingdomBlue">
          {meta.title}
        </h1>
        <p className="mt-2 text-[14pt] leading-snug text-ink/85">
          {meta.subtitle}
        </p>
        <div className="mx-auto mt-3 h-[2px] w-[calc(var(--bar-w))] max-w-full bg-gold" />
        <Link
          href="/point/1"
          className="mt-6 inline-block rounded-lg bg-kingdomBlue px-6 py-3 font-b text-white hover:bg-ink"
        >
          Start →
        </Link>
      </div>
    </div>
  );
}