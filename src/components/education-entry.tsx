import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <li className="relative pl-6">
      <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-accent ring-4 ring-background" />
      <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
        {education.year}
      </p>
      <h3 className="mt-1 text-base font-semibold">
        {education.institutionUrl ? (
          <a
            href={education.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            {education.institution}
          </a>
        ) : (
          education.institution
        )}
      </h3>
      <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">
        {education.degree}
      </p>
      {education.advisor && (
        <p className="mt-1.5 text-sm italic text-zinc-500">
          Advisor: {education.advisor}
        </p>
      )}
      {education.thesis && (
        <p className="mt-1.5 text-sm italic text-zinc-500">
          Thesis:{" "}
          {education.thesisUrl ? (
            <a
              href={education.thesisUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent"
            >
              {education.thesis}
            </a>
          ) : (
            education.thesis
          )}
        </p>
      )}
    </li>
  );
}
