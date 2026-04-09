"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { sections } from "../../../content/tool";
import SectionHeader from "../../../components/SectionHeader";
import VerseToggle from "../../../components/VerseToggle";
import ShareQRButton from "../../../components/ShareQRButton";
import { logEvent } from "../../../lib/logEvent";

type ParamsValue = { id: string };

export default function Point({
  params,
}: {
  params: ParamsValue | Promise<ParamsValue>;
}) {
  const [resolvedParams, setResolvedParams] = useState<ParamsValue | null>(null);

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

  useEffect(() => {
    if (resolvedParams && typeof window !== "undefined") {
      logEvent({
        eventType: "page_view",
        page: window.location.pathname,
        label: "page_view",
      });
    }
  }, [resolvedParams]);

  if (!resolvedParams) return null;

  const num = Number(resolvedParams.id);
  const section = Number.isInteger(num) ? sections[num - 1] : undefined;

  if (!section) {
    return (
      <article className="mt-10 text-center">
        <p className="mb-6 font-b text-ink">That section doesn’t exist.</p>
        <Link
          className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white active:scale-[0.98] transition-all"
          href="/point/1"
        >
          Go to Point 1
        </Link>
      </article>
    );
  }

  const isLastPoint = num === sections.length;

  return (
    <article className="mt-6 space-y-6">

      <SectionHeader icon={section.icon}>
          {`${section.id}. ${section.title}`}
      </SectionHeader>

      {/* Big Idea */}
      {section.bigIdea && (
        <p className="text-[13pt] leading-[1.6] font-b text-ink">
          {section.bigIdea}
        </p>
      )}

      {/* Bullets */}
      <ul className="ml-5 list-disc space-y-4 text-[11.5pt] leading-[1.6] font-b text-ink">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Tagline */}
      {section.tagline && (
        <p className="mt-6 italic text-[11.5pt] text-ink/80">
          {section.tagline}
        </p>
      )}

      {/* Verses */}
      {section.verses && section.verses.length > 0 && (
        <div className="mt-6 border-t border-ink/10 pt-4 space-y-2">
          {section.verses.map((v, i) => (
            <VerseToggle key={i} refText={v.ref} verse={v.text} />
          ))}
        </div>
      )}

      {/* Bottom actions */}
      <div className="mt-8">
        <div className="flex items-center justify-between">

          <Link
            className="underline underline-offset-4"
            href={num === 1 ? "/" : `/point/${num - 1}`}
          >
            ← Back
          </Link>

          {isLastPoint ? (
            <Link
              className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white active:scale-[0.98] transition-all"
              href="/invitation"
            >
              Next →
            </Link>
          ) : (
            <Link
              className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white active:scale-[0.98] transition-all"
              href={`/point/${num + 1}`}
            >
              Continue →
            </Link>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <ShareQRButton label="Share App" />
        </div>
      </div>
    </article>
  );
}