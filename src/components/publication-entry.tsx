import Image from "next/image";
import { ArrowUpRight, Code2, FileText, Quote, Trophy } from "lucide-react";
import { Publication } from "@/data/publication";
import { aboutMe } from "@/data/aboutme";

/** Splits a raw author string and emphasizes the site owner's name. */
function AuthorList({ authors }: { authors: string }) {
  const parts = authors
    .split(/,\s*|\s+and\s+/i)
    .map((part) => part.trim().replace(/^and\s+/i, "").trim())
    .filter(Boolean);
  const normalize = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();
  const own = normalize(aboutMe.name);

  return (
    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
      {parts.map((part, i) => (
        <span key={i}>
          {normalize(part) === own ? (
            <span className="font-semibold text-zinc-900 decoration-accent/60 decoration-2 underline-offset-2 underline dark:text-zinc-100">
              {part}
            </span>
          ) : (
            part
          )}
          {i < parts.length - 1 && (i === parts.length - 2 ? " & " : ", ")}
        </span>
      ))}
    </p>
  );
}

function LinkPill({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-400"
    >
      {icon}
      {label}
    </a>
  );
}

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <article className="group">
      <div className="flex flex-col gap-5 sm:flex-row">
        {publication.imageUrl && (
          <div className="shrink-0">
            <Image
              src={publication.imageUrl}
              alt={publication.title}
              width={220}
              height={165}
              className="h-32 w-full border border-zinc-200 object-cover dark:border-zinc-800 sm:w-44"
            />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
              {publication.conference}
            </span>
            <span className="font-mono text-xs text-zinc-500">
              {publication.year}
            </span>
            {publication.award && (
              <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
                <Trophy className="h-3 w-3" />
                {publication.award}
              </span>
            )}
          </div>

          <h3 className="font-serif text-base leading-snug sm:text-lg">
            {publication.paperUrl ? (
              <a
                href={publication.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/title inline-flex items-start gap-1 transition-colors hover:text-accent"
              >
                {publication.title}
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 opacity-0 transition-all duration-300 group-hover/title:translate-x-0.5 group-hover/title:opacity-100"
                />
              </a>
            ) : (
              publication.title
            )}
          </h3>

          <div className="mt-2">
            <AuthorList authors={publication.authors} />
          </div>

          {(publication.paperUrl || publication.codeUrl || publication.bibtex) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {publication.paperUrl && (
                <LinkPill
                  href={publication.paperUrl}
                  icon={<FileText className="h-3.5 w-3.5" />}
                  label="Paper"
                />
              )}
              {publication.codeUrl && (
                <LinkPill
                  href={publication.codeUrl}
                  icon={<Code2 className="h-3.5 w-3.5" />}
                  label="Code"
                />
              )}
              {publication.bibtex && (
                <LinkPill
                  href={publication.bibtex}
                  icon={<Quote className="h-3.5 w-3.5" />}
                  label="BibTeX"
                />
              )}
            </div>
          )}

          {publication.tldr && (
            <p className="mt-4 text-sm italic leading-relaxed text-zinc-500 dark:text-zinc-500">
              {publication.tldr}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
