export default function SectionHeader({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <header className="mb-4">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl leading-none relative top-[1px]">{icon}</span>
        <h2 className="font-h font-bold text-[22px] leading-tight tracking-[0.2px] text-kingdomBlue">
          {children}
        </h2>
      </div>
      <div className="mt-2 h-[3px] w-[calc(var(--bar-w))] rounded bg-gold" />
    </header>
  );
}
