// src/app/invitation/page.tsx
import Link from "next/link";
import { sections, ctas } from "../../content/tool";
import SectionHeader from "../../components/SectionHeader";

export default function InvitationPage() {
  const section = sections[4]; // point 5

  return (
    <article className="mt-4">
      <SectionHeader icon={section.icon}>
        {section.id}. {section.title}
      </SectionHeader>

      <p className="mb-4 font-b text-[12pt] leading-[1.65] text-ink">
        {section.bigIdea}
      </p>

      <ul className="ml-5 list-disc space-y-3 font-b text-[12pt] leading-[1.65] text-ink">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {/* Verse references only */}
      {section.verses && section.verses.length > 0 && (
        <div className="mt-4 border-t border-ink/10 pt-3 font-b text-[12pt] leading-[1.65] text-ink">
          <p className="mb-2 font-h text-kingdomBlue">Verses</p>
          <ul className="ml-5 list-disc space-y-1">
            {section.verses.map((v, i) => (
              <li key={i}>{v.ref}</li>
            ))}
          </ul>
        </div>
      )}

      {section.tagline && <p className="mt-3 italic text-ink">{section.tagline}</p>}

      {/* Invitation prompt + button grouped */}
      <div className="mt-8 rounded-md bg-[#EAF2FA] p-4 text-center">
        <p className="mb-3 font-h text-[13pt] text-kingdomBlue">
          {ctas.inviteLine1}
        </p>
        <Link
          href="/response"
          className="inline-block rounded-lg bg-kingdomBlue px-6 py-3 font-b text-white hover:bg-lightBlue hover:text-ink transition-colors"
        >
          Pray and learn how to respond →
        </Link>
      </div>

      {/* Back / Restart */}
      <div className="mt-6 flex items-center justify-between">
        <Link className="underline underline-offset-4" href="/point/5">
          ← Back
        </Link>
        <Link
          href="/"
          className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white"
        >
          Restart ↺
        </Link>
      </div>
    </article>
  );
}
