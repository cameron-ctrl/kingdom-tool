import Link from "next/link";
import SectionHeader from "../../components/SectionHeader";
import { invitation } from "../../content/tool";
import VerseToggle from "../../components/VerseToggle";

export default function InvitationPage() {
  return (
    <article className="mt-4">
      <SectionHeader icon={invitation.icon}>{invitation.title}</SectionHeader>

      <div className="mx-auto max-w-[6.3in] space-y-4 font-b text-[11.5pt] leading-[1.4] text-ink">
        {invitation.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <p className="text-center italic opacity-80">{invitation.closing}</p>
      </div>

      <div className="mt-3 border-t border-ink/10 pt-3">
        <VerseToggle refText={invitation.verse.ref} verse={invitation.verse.text} />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link className="underline underline-offset-4" href="/point/5">← Back</Link>
        <Link className="rounded-md border border-kingdomBlue px-4 py-2 hover:bg-kingdomBlue hover:text-white" href="/">Restart ↺</Link>
      </div>
    </article>
  );
}
