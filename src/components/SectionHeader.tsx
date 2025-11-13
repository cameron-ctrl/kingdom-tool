export default function SectionHeader({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  // Safely reconstruct a string from children without React's comma-joining
  let full = "";

  if (typeof children === "string" || typeof children === "number") {
    full = String(children);
  } else if (Array.isArray(children)) {
    full = children
      .map((child) =>
        typeof child === "string" || typeof child === "number"
          ? String(child)
          : ""
      )
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
  } else {
    full = String(children ?? "");
  }

  // Split on the first em dash to separate title and subtitle
  const [rawMain, ...rest] = full.split("—");
  const main = rawMain.trim();
  const subtitle = rest.join("—").trim();

  return (
    <header className="mb-4">
      <div className="flex items-baseline gap-2">
        <span className="relative top-[1px] text-2xl leading-none">
          {icon}
        </span>
        <div>
          <h2 className="font-h font-semibold text-[22px] leading-tight tracking-[0.2px] text-kingdomBlue">
            {main}
          </h2>
          {subtitle && (
            <p className="mt-1 font-b text-[15px] leading-snug text-ink">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="mt-2 h-[3px] w-[calc(var(--bar-w))] max-w-full rounded bg-gold" />
    </header>
  );
}