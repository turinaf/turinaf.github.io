import Image from "next/image";
import {
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

const socialIconClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-400";

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px]">
      <div>
        <p
          className="animate-fade-up font-mono text-sm text-accent"
          style={{ animationDelay: "0ms" }}
        >
          Hi, I&apos;m
        </p>
        <h1
          className="animate-fade-up mt-2 text-4xl font-semibold tracking-tight sm:text-5xl"
          style={{ animationDelay: "80ms" }}
        >
          {aboutMe.name}
        </h1>
        <p
          className="animate-fade-up mt-3 text-lg text-zinc-600 dark:text-zinc-400"
          style={{ animationDelay: "160ms" }}
        >
          {aboutMe.title}
          {" · "}
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>

        {aboutMe.description && (
          <div
            className="bio animate-fade-up mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300"
            style={{ animationDelay: "240ms" }}
            dangerouslySetInnerHTML={{ __html: aboutMe.description }}
          />
        )}

        <div
          className="animate-fade-up mt-7 flex flex-wrap gap-3"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:text-zinc-900"
          >
            <Mail className="h-4 w-4" />
            Get in touch
          </a>
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"
            >
              <FileText className="h-4 w-4" />
              Download CV
            </a>
          )}
        </div>

        <div
          className="animate-fade-up mt-6 flex gap-2.5"
          style={{ animationDelay: "400ms" }}
        >
          {aboutMe.googleScholarUrl && (
            <a
              href={aboutMe.googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
              className={socialIconClass}
            >
              <GraduationCap className="h-4 w-4" />
            </a>
          )}
          {aboutMe.githubUsername && (
            <a
              href={`https://github.com/${aboutMe.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={socialIconClass}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {aboutMe.linkedinUsername && (
            <a
              href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={socialIconClass}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {aboutMe.twitterUsername && (
            <a
              href={`https://twitter.com/${aboutMe.twitterUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className={socialIconClass}
            >
              <Twitter className="h-4 w-4" />
            </a>
          )}
          <a
            href={`mailto:${aboutMe.email}`}
            aria-label="Email"
            className={socialIconClass}
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>

      {aboutMe.imageUrl && (
        <div
          className="animate-fade-up relative mx-auto w-60 sm:w-72 lg:w-full lg:max-w-[300px]"
          style={{ animationDelay: "240ms" }}
        >
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/25 via-fuchsia-300/25 to-amber-200/40 blur-2xl dark:from-accent/15 dark:via-fuchsia-500/10 dark:to-amber-500/10" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
}
