import { Experience } from "@/data/experience";
import ReactMarkdown from "react-markdown";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <li className="relative pl-6">
      <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
        {experience.date}
      </p>
      <h3 className="mt-1 text-base font-semibold">
        {experience.title}
        <span className="text-zinc-400 dark:text-zinc-600"> · </span>
        {experience.companyUrl ? (
          <a
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal transition-colors hover:text-accent"
          >
            {experience.company}
          </a>
        ) : (
          <span className="font-normal">{experience.company}</span>
        )}
      </h3>
      {experience.advisor && (
        <p className="mt-1.5 text-sm italic text-zinc-500">
          Advisor: {experience.advisor}
        </p>
      )}
      {experience.manager && (
        <p className="mt-1.5 text-sm italic text-zinc-500">
          Manager: {experience.manager}
        </p>
      )}
      {experience.description && (
        <div className="markdown-content mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          <ReactMarkdown>{experience.description}</ReactMarkdown>
        </div>
      )}
    </li>
  );
}
