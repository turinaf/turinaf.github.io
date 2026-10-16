import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn } from "@/components/fade-in";

const sectionMeta: Record<Section, { title: string; id: string }> = {
  [Section.News]: { title: "News", id: "news" },
  [Section.Publication]: { title: "Publications", id: "publications" },
  [Section.Portfolio]: { title: "Projects", id: "projects" },
  [Section.Experience]: { title: "Experience", id: "experience" },
  [Section.Education]: { title: "Education", id: "education" },
};

function hasContent(section: Section): boolean {
  switch (section) {
    case Section.News:
      return newsData.length > 0;
    case Section.Education:
      return educationData.length > 0;
    case Section.Publication:
      return publicationData.length > 0;
    case Section.Experience:
      return experienceData.length > 0;
    case Section.Portfolio:
      return portfolioData.length > 0;
  }
}

function renderSection(sectionName: Section) {
  switch (sectionName) {
    case Section.News:
      return (
        <ol className="relative ml-1 space-y-6 border-l border-zinc-200 dark:border-zinc-800">
          {newsData.map((news, index) => (
            <NewsEntry key={index} news={news} />
          ))}
        </ol>
      );
    case Section.Education:
      return (
        <ol className="relative ml-1 space-y-8 border-l border-zinc-200 dark:border-zinc-800">
          {educationData.map((education, index) => (
            <EducationEntry key={index} education={education} />
          ))}
        </ol>
      );
    case Section.Publication:
      return (
        <div className="space-y-5">
          {publicationData.map((publication, index) => (
            <PublicationEntry key={index} publication={publication} />
          ))}
        </div>
      );
    case Section.Experience:
      return (
        <ol className="relative ml-1 space-y-10 border-l border-zinc-200 dark:border-zinc-800">
          {experienceData.map((experience, index) => (
            <ExperienceEntry key={index} experience={experience} />
          ))}
        </ol>
      );
    case Section.Portfolio:
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          {portfolioData.map((portfolio, index) => (
            <PortfolioEntry key={index} portfolio={portfolio} />
          ))}
        </div>
      );
  }
}

export default function Home() {
  const visibleSections = sectionOrder.filter(hasContent);

  return (
    <div className="mx-auto max-w-5xl px-6 md:px-8">
      {/* Hero */}
      <div className="pb-20 pt-14 sm:pt-20">
        <ProfileSection aboutMe={aboutMe} />
      </div>

      {/* Sections */}
      <div className="space-y-20 pb-24">
        {visibleSections.map((sectionName, i) => (
          <FadeIn key={sectionName}>
            <section
              id={sectionMeta[sectionName].id}
              aria-labelledby={`${sectionMeta[sectionName].id}-heading`}
            >
              <div id={`${sectionMeta[sectionName].id}-heading`}>
                <SectionHeading
                  index={String(i + 1).padStart(2, "0")}
                  title={sectionMeta[sectionName].title}
                />
              </div>
              {renderSection(sectionName)}
            </section>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
