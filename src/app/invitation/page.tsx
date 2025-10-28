// src/app/invitation/page.tsx
import Link from "next/link";
import SectionHeader from "../../components/SectionHeader";
import { invitation } from "../../content/tool";
import VerseToggle from "../../components/VerseToggle";

export default function InvitationPage() {
  return (
    <article className="mt-4">
      <SectionHeader icon={invitation.icon}>{invitation.title}</SectionHeader>

      <div className="mx-auto max-w-prose space-y-4 text-[15px] leading-[1.6] sm:text-[16px]">
        {invitation.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <p className="text-center italic opacity-80">{invitation.closing}</p>
      </div>

      <div className="mt-3 border-t border-ink/10 pt-3">
        <VerseToggle refText={invitation.verse.ref} verse={invitation.verse.text} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link className="underline underline-offset-4 hover:text-ink/70" href="/point/5">← Back</Link>
        <Link className="rounded-md border border-kingdomBlue px-4 py-2 text-kingdomBlue transition-colors hover:bg-kingdomBlue hover:text-white" href="/">Restart ↺</Link>
      </div>
    </article>
  );
}
