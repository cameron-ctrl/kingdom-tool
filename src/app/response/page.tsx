// src/app/response/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import VerseToggle from "../../components/VerseToggle";
import { logEvent } from "../../lib/logEvent";

export default function ResponsePage() {
  // Log page view once when the page loads
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
    <article className="mx-auto mt-8 max-w-3xl space-y-8 font-b text-[12pt] leading-[1.65] text-ink">
      <div className="text-center">
        <h1 className="font-h text-2xl text-kingdomBlue">
          Yield to King Jesus
        </h1>
        <div className="mx-auto mt-3 h-[2px] w-[calc(var(--bar-w))] bg-gold" />
      </div>

      {/* Text above the prayer */}
      <p>Does this prayer express the desire of your heart?</p>

      {/* Prayer box */}
      <div className="rounded-md bg-[#EAF2FA] p-4">
        <p>
          Father, thank You for making a way for me to live and participate in your kingdom. King Jesus, I surrender to Your loving reign. Teach me to walk in Your
          ways. I put my trust in Your victory over sin, death, and darkness.
          Thank You for forgiving my sins. Holy Spirit, fill me, change me, and
          empower me. Use my life to bring Your renewal until You make all
          things new. Amen.
        </p>
      </div>

      {/* Text below the prayer */}
      <p>If so, you're ready to talk to Him — pray this prayer out loud.</p>

      {/* 🔧 Gray divider: just make it explicitly full width inside the article */}
      <div className="mt-6 w-full border-t border-ink/10"></div>

      {/* Feedback intro line */}
      <p className="mt-6 text-ink">
        Everyone’s story is different — which of these fits yours today?
      </p>

      {/* Feedback response options */}
      <div className="mt-2 space-y-3">
        <button
          type="button"
          className="w-full rounded-md border border-kingdomBlue px-4 py-3 text-[11pt] leading-snug font-b text-ink hover:bg-kingdomBlue hover:text-white transition-colors"
          onClick={() =>
            logEvent({
              eventType: "response_choice",
              page: "/response",
              label: "response_button",
              value: "first_time_decision",
            })
          }
        >
          I surrendered to Jesus as my King for the first time.
        </button>

        <button
          type="button"
          className="w-full rounded-md border border-gold px-4 py-3 text-[11pt] leading-snug font-b text-ink hover:bg-gold hover:text-ink transition-colors"
          onClick={() =>
            logEvent({
              eventType: "response_choice",
              page: "/response",
              label: "response_button",
              value: "renewed_commitment",
            })
          }
        >
          I recommitted my life to King Jesus.
        </button>

        <button
          type="button"
          className="w-full rounded-md border border-gold px-4 py-3 text-[11pt] leading-snug font-b text-ink hover:bg-gold hover:text-ink transition-colors"
          onClick={() =>
            logEvent({
              eventType: "response_choice",
              page: "/response",
              label: "response_button",
              value: "still_exploring",
            })
          }
        >
          I’m still undecided.
        </button>
      </div>

      {/* ░░ SOFT LINK TO FORM WITH TRACKING ░░ */}
      <p className="mt-4 text-center text-[11.5pt] text-ink/80">
        Want to share your story?{" "}
        <Link
          href="https://forms.gle/csrRWTEZNT847Qky7"
          target="_blank"
          className="underline underline-offset-4 text-kingdomBlue hover:text-ink"
          onClick={() =>
            logEvent({
              eventType: "link_click",
              page: "/response",
              label: "feedback_form_link",
            })
          }
        >
          Tap here.
        </Link>
      </p>

      {/* Gold divider */}
      <div className="mx-auto h-[2px] w-[calc(var(--bar-w))] bg-gold" />

      {/* Intro to next steps */}
      <p>
        The Bible shows that when people respond to Jesus’ invitation, it
        changes how they live. Responding means turning to Him in faith and
        taking real steps to live under His loving rule and reign.
      </p>

      <h2 className="font-h text-xl text-kingdomBlue">
        Next Steps as You Follow Jesus
      </h2>

      <ul className="list-disc space-y-5 pl-5">
        <li>
          <strong>Be baptized.</strong> Baptism is how followers of Jesus
          publicly declare their allegiance to Him and their entrance into His
          Kingdom.
          <div className="mt-2">
            <VerseToggle
              refText="Acts 2:38"
              verse={
                "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'"
              }
            />
          </div>
        </li>

        <li>
          <strong>Join a community of disciples.</strong> The first followers of
          Jesus shared life, prayer, Scripture, and mission together. Following
          Him means walking with others. If you know a person or a group of people who love Jesus, connect with them to see how they can help you on your new faith journey.
          <div className="mt-2">
            <VerseToggle
              refText="Acts 2:42"
              verse={
                "They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer."
              }
            />
          </div>
        </li>

        <li>
          <strong>Learn and obey Jesus’ teaching.</strong> Disciples grow by
          learning to live out His words in everyday life.
          <div className="mt-2">
            <VerseToggle
              refText="John 14:23"
              verse={
                "Jesus replied, 'Anyone who loves me will obey my teaching. My Father will love them, and we will come to them and make our home with them.'"
              }
            />
          </div>
        </li>

        <li>
          <strong>Live out the Kingdom mission.</strong> Share the good news of
          the Kingdom and join in God’s work of renewal wherever you go.
          <div className="mt-2">
            <VerseToggle
              refText="Matthew 28:19–20"
              verse={
                "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."
              }
            />
          </div>
        </li>
      </ul>

      <div className="mt-10 flex justify-center gap-3">
        <Link
          href="/invitation"
          className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white"
        >
          ← Back
        </Link>
        <Link
          href="/"
          className="rounded-md bg-kingdomBlue px-6 py-3 font-b text-white hover:bg-ink"
        >
          Restart ↺
        </Link>
      </div>
    </article>
  );
}
