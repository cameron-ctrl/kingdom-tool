// src/components/SectionHeader.tsx
export default function SectionHeader({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <header className="mb-4">
      <div className="flex items-baseline">
        <span className="mr-2 text-xl leading-none sm:text-2xl">{icon}</span>
        <h2 className="font-semibold text-kingdomBlue text-[19px] leading-tight sm:text-[22px]">
          {children}
        </h2>
      </div>
      <div className="mt-2 h-[3px] w-[var(--bar-w)] rounded bg-gold" />
    </header>
  );
}
