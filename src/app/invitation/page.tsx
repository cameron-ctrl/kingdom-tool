"use client";

import { useEffect } from "react";
import Link from "next/link";
import SectionHeader from "../../components/SectionHeader";
import VerseToggle from "../../components/VerseToggle";
import ShareQRButton from "../../components/ShareQRButton";
import { logEvent } from "../../lib/logEvent";

export default function InvitationPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      logEvent({
        eventType: "page_view",
        page: window.location.pathname,
        label: "page_view",
      });
    }
  }, []);

  const verses = [
    {
      ref: "Acts 2:38",
      text:
        "Peter replied, 'Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins. And you will receive the gift of the Holy Spirit.'",
    },
    {
      ref: "John 1:12–13",
      text:
        "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God... born of God.",
    },
    {
      ref: "2 Corinthians 5:14–20",
      text:
        "One man died for everyone. That puts everyone in the same boat. He included everyone in his death so that everyone could also be included in his life, a resurrection life, a far better life than people ever lived on their own.\n\n...Now we look inside, and what we see is that anyone united with the Messiah [Jesus] gets a fresh start, is created new. The old life is gone; a new life emerges! Look at it!\n\nAll this comes from the God who settled the relationship between us and him, and then called us to settle our relationships with each other. God put the world square with himself through the Messiah, giving the world a fresh start by offering forgiveness of sins. God has given us the task of telling everyone what he is doing.\n\nWe’re Christ’s representatives... We’re speaking for Christ himself now: Become friends with God; he’s already a friend with you.",
    },
  ];

  return (
    <article className="mt-6 space-y-6">

      <SectionHeader icon="👑">
        5. What should I do? — Jesus is inviting you.
      </SectionHeader>

      {/* Big Idea */}
      <p className="text-[13pt] leading-[1.6] font-b text-ink">
        This story isn’t just information about Jesus—it’s an invitation to
        respond to Him in a real and life–changing way.
      </p>

      {/* Bullets */}
      <ul className="ml-5 list-disc space-y-4 text-[11.5pt] leading-[1.6] font-b text-ink">
        <li>
          This good news isn’t just about waiting until you die to experience
          God's goodness—it’s about entering life under God’s reign now.
        </li>
        <li>
          We enter His Kingdom not by earning, but by receiving his forgiveness
          and by trusting and surrendering to King Jesus.
        </li>
        <li>
          Surrendering to Jesus means becoming His disciple—learning His ways,
          growing in His character, walking in His power.
        </li>
        <li>
          The King’s story of renewal is still unfolding—and He’s inviting you
          to join.
        </li>
      </ul>

      {/* Tagline (left-aligned, clean) */}
      <p className="mt-6 italic text-[11.5pt] text-ink/80">
        Come, follow the King—and live in His Kingdom.
      </p>

      {/* Verses */}
      <div className="mt-6 border-t border-ink/10 pt-4 space-y-2">
        {verses.map((v, i) => (
          <VerseToggle key={i} refText={v.ref} verse={v.text} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-md bg-[#EAF2FA] p-5 text-center space-y-3">
        <p className="text-[12pt] leading-[1.6] font-b text-ink">
          You can yield your life to King Jesus right now.
        </p>

        <Link
          href="/response"
          className="inline-block rounded-md bg-gold px-6 py-3 font-b text-ink hover:bg-lightBlue active:scale-[0.98] transition-all"
        >
          Show me how →
        </Link>
      </div>

      {/* Bottom actions */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <Link className="underline underline-offset-4" href="/point/4">
            ← Back
          </Link>

          <Link
            href="/"
            className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white active:scale-[0.98] transition-all"
          >
            Restart ↺
          </Link>
        </div>

        <div className="mt-4 flex justify-center">
          <ShareQRButton label="Share App" />
        </div>
      </div>
    </article>
  );
}