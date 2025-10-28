// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-[26px] font-semibold text-kingdomBlue sm:text-[30px]">
        The Gospel of the Kingdom
      </h1>
      <p className="mx-auto mt-2 max-w-[34em] text-[15px] text-ink/85 sm:text-[16px]">
        A story of renewal under King Jesus — told through five questions.
      </p>
      <div className="mx-auto mt-3 h-[2px] w-[var(--bar-w)] bg-gold" />
      <Link
        href="/point/1"
        className="mt-6 inline-block rounded-lg bg-lightBlue px-5 py-3 text-[15px] font-semibold text-kingdomBlue transition-colors hover:bg-gold sm:px-6 sm:text-[16px]"
      >
        Start →
      </Link>
    </div>
  );
}
