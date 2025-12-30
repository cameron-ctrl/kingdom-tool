// src/app/point/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sections } from "../../../content/tool";
import SectionHeader from "../../../components/SectionHeader";
import VerseToggle from "../../../components/VerseToggle";
import ShareButton from "../../../components/ShareButton";
import { logEvent } from "../../../lib/logEvent";

type ParamsValue = { id: string };

export default function Point({
  params,
}: {
  params: ParamsValue | Promise<ParamsValue>;
}) {
  const [resolvedParams, setResolvedParams] = useState<ParamsValue | null>(null);

  // Resolve params whether it's a Promise or a plain object
  useEffect(() => {
    let isMounted = true;

    const maybePromise = params as ParamsValue | Promise<ParamsValue>;

    if (typeof (maybePromise as any)?.then === "function") {
      (maybePromise as Promise<ParamsValue>).then((p) => {
        if (isMounted) setResolvedParams(p);
      });
    } else {
      if (isMounted) setResolvedParams(maybePromise as ParamsValue);
    }

    return () => {
      isMounted = false;
    };
  }, [params]);

  // Fire page view once when params are resolved (so we know the route)
  useEffect(() => {
    if (resolvedParams && typeof window !== "undefined") {
      logEvent({
        eventType: "page_view",
        page: window.location.pathname,
        label: "page_view",
      });
    }
  }, [resolvedParams]);

  // While params are resolving, render nothing (very quick)
  if (!resolvedParams) {
    return null;
  }

  const num = Number(resolvedParams.id);
  const section = Number.isInteger(num) ? sections[num - 1] : undefined;

  if (!section) {
    return (
      <article className="mt-10 text-center">
        <p className="mb-6 font-b text-ink">That section doesn’t exist.</p>
        <Link
          className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white"
          href="/point/1"
        >
          Go to Point 1
        </Link>
      </article>
    );
  }

  const isLastPoint = num === sections.length;

  return (
    <article className="mt-4">
      {/* Header + Share button in the same row (fixes awkward spacing) */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <SectionHeader icon={section.icon}>
            {section.id}. {section.title}
          </SectionHeader>
        </div>

        {/* Share button (always shares home URL) */}
        <div className="mt-2 shrink-0">
          <ShareButton label="Share App" />
        </div>
      </div>

      {/* Intro big idea text */}
      {section.bigIdea && (
        <p className="mb-4 font-b text-[12pt] leading-[1.65] text-ink">
          {section.bigIdea}
        </p>
      )}

      {/* Bullets */}
      <ul className="ml-5 list-disc space-y-3 font-b text-[12pt] leading-[1.65] text-ink">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Tagline BEFORE Bible passages */}
      {section.tagline && (
        <p className="mt-6 mb-5 italic text-ink">{section.tagline}</p>
      )}

      {/* Bible passages (verse toggles) */}
      {section.verses && section.verses.length > 0 && (
        <div className="mt-3 border-t border-ink/10 pt-3">
          {section.verses.map((v, i) => (
            <VerseToggle key={i} refText={v.ref} verse={v.text} />
          ))}
        </div>
      )}

      {/* Nav */}
      <div className="mt-6 flex items-center justify-between">
        <Link
          className="underline underline-offset-4"
          href={num === 1 ? "/" : `/point/${num - 1}`}
        >
          ← Back
        </Link>

        {isLastPoint ? (
          <Link
            className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white"
            href="/invitation"
          >
            Next →
          </Link>
        ) : (
          <Link
            className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white"
            href={`/point/${num + 1}`}
          >
            Next →
          </Link>
        )}
      </div>
    </article>
  );
}