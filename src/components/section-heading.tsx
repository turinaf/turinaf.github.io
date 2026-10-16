interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-xs font-medium text-accent">
        {index}
      </span>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
