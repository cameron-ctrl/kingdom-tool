import Link from "next/link";

export default function Home() {
  return (
    <div className="grid min-h-[70vh] place-items-center text-center">
      <div>
        <h1 className="font-h font-semibold text-[28pt] leading-[1.15] text-kingdomBlue">
          The Gospel of the Kingdom
        </h1>
        <p className="mt-2 text-[14pt] leading-snug text-ink/85">
          A simple way to share and experience God’s story of renewal.
        </p>
        <div className="mx-auto mt-3 h-[2px] w-[calc(var(--bar-w))] bg-gold" />
        <Link
          href="/point/1"
          className="mt-6 inline-block rounded-lg bg-kingdomBlue px-6 py-3 font-b text-white"
        >
          Start →
        </Link>
      </div>
    </div>
  );
}
