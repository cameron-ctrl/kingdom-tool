import Link from "next/link";
import { sections } from "../../../content/tool";
import SectionHeader from "../../../components/SectionHeader";
import VerseToggle from "../../../components/VerseToggle";

export default async function Point({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const num = Number(id);
  const section = Number.isInteger(num) ? sections[num - 1] : undefined;

  if (!section) {
    return (
      <article className="mt-10 text-center">
        <p className="mb-6 font-b text-ink">That section doesn’t exist.</p>
        <Link className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white" href="/point/1">
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
        {section.bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      <div className="mt-3 border-t border-ink/10 pt-3">
        {section.verses.map((v, i) => <VerseToggle key={i} refText={v.ref} verse={v.text} />)}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link className="underline underline-offset-4" href={num === 1 ? "/" : `/point/${num - 1}`}>← Back</Link>
        <Link className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white"
              href={num === sections.length ? "/invitation" : `/point/${num + 1}`}>Next →</Link>
      </div>
    </article>
  );
}
