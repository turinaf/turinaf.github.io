import { aboutMe } from "@/data/aboutme";
import { sectionOrder, Section } from "@/data/section-order";
import { ThemeToggle } from "@/components/theme-toggle";

const sectionLabels: Record<Section, { label: string; href: string }> = {
  [Section.News]: { label: "News", href: "#news" },
  [Section.Publication]: { label: "Publications", href: "#publications" },
  [Section.Portfolio]: { label: "Projects", href: "#projects" },
  [Section.Experience]: { label: "Experience", href: "#experience" },
  [Section.Education]: { label: "Education", href: "#education" },
};

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-background/80 backdrop-blur-md dark:border-zinc-800/70">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
        <a
          href="#about"
          className="flex items-center gap-2 font-serif text-lg tracking-tight"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {aboutMe.name}
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center gap-1 md:flex">
            {sectionOrder.map((section) => {
              const meta = sectionLabels[section];
              return (
                <a
                  key={section}
                  href={meta.href}
                  className="rounded-md px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
                >
                  {meta.label}
                </a>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
