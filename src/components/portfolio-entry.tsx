import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { Portfolio } from "@/data/portfolio";
import ReactMarkdown from "react-markdown";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40">
      {portfolio.imageUrl && (
        <div className="relative aspect-[16/10] border-b border-zinc-100 dark:border-zinc-800/60">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-contain"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold leading-snug">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {portfolio.title}
            </a>
          ) : (
            portfolio.title
          )}
        </h3>

        {portfolio.description && (
          <div className="markdown-content mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <ReactMarkdown>{portfolio.description}</ReactMarkdown>
          </div>
        )}

        {portfolio.technologies && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800/70 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {(portfolio.projectUrl || portfolio.codeUrl) && (
          <div className="mt-4 flex gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
            {portfolio.projectUrl && (
              <a
                href={portfolio.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Project
              </a>
            )}
            {portfolio.codeUrl && (
              <a
                href={portfolio.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400"
              >
                <Code2 className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
