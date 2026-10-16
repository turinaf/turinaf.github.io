import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <li className="relative pl-6">
      <span className="absolute -left-[4.5px] top-2 h-2 w-2 rounded-full border border-accent bg-accent/30 dark:bg-accent/20" />
      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
        {news.date}
      </p>
      <h3 className="mt-1 text-sm font-medium leading-relaxed">
        {news.link ? (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-start gap-1 transition-colors hover:text-accent"
          >
            {news.title}
            <ArrowUpRight
              size={14}
              className="mt-0.5 shrink-0 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
            />
          </a>
        ) : (
          news.title
        )}
      </h3>
      {news.description && (
        <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {news.description}
        </p>
      )}
    </li>
  );
}
