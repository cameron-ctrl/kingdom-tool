// src/app/point/[id]/page.tsx
import Link from "next/link";
import { sections } from "../../../content/tool";
import SectionHeader from "../../../components/SectionHeader";
import VerseToggle from "../../../components/VerseToggle";

export default async function Point({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const num = Number(id);
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

  return (
    <article className="mt-4">
      <SectionHeader icon={section.icon}>
        {section.id}. {section.title}
      </SectionHeader>

      <ul className="ml-5 list-disc space-y-3 font-b text-[12pt] leading-[1.65] text-ink">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      {section.verses && section.verses.length > 0 && (
        <div className="mt-3 border-t border-ink/10 pt-3">
          {section.verses.map((v, i) => (
            <VerseToggle key={i} refText={v.ref} verse={v.text} />
          ))}
        </div>
      )}

      {/* Invitation prompt box (shows on last point) */}
      {num === sections.length && (
        <div className="mt-8 rounded-md bg-[#EAF2FA] p-4">
          <p className="font-b text-[12pt] leading-[1.65] text-ink">
            You can yield your life to the reign of King Jesus right now.
          </p>
          <p className="mt-1 font-b text-[12pt] leading-[1.65] text-ink">
            Click here to learn how to take the step.
          </p>
          <Link
            href="/response"
            className="mt-3 inline-block rounded-md bg-gold px-5 py-3 font-b text-ink hover:bg-lightBlue"
          >
            Pray and learn how to respond →
          </Link>
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

        {num === sections.length ? (
          <div className="flex items-center gap-3">
            <Link
              href="/response"
              className="rounded-md bg-gold px-5 py-2 font-b text-ink hover:bg-lightBlue"
            >
              Respond →
            </Link>
            <Link
              href="/"
              className="rounded-md border border-kingdomBlue px-4 py-2 font-b hover:bg-kingdomBlue hover:text-white"
            >
              Restart ↺
            </Link>
          </div>
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
