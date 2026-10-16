import type { Metadata } from "next";
import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { SiteNav } from "@/components/site-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

/** Sets the theme class before paint to avoid a flash of the wrong theme. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`;

const plainDescription =
  customMetadata.description ??
  `${aboutMe.name} — ${aboutMe.title} at ${aboutMe.institution}.`.replace(
    /<[^>]*>/g,
    ""
  );

export const metadata: Metadata = {
  metadataBase: new URL("https://turinaf.github.io"),
  title: customMetadata.title || aboutMe.name,
  description: plainDescription,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: customMetadata.title || aboutMe.name,
    description: plainDescription,
    type: "profile",
    url: "https://turinaf.github.io",
    ...(aboutMe.imageUrl ? { images: [{ url: aboutMe.imageUrl }] } : {}),
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: aboutMe.name,
  jobTitle: aboutMe.title,
  affiliation: { "@type": "Organization", name: aboutMe.institution },
  email: `mailto:${aboutMe.email}`,
  ...(aboutMe.githubUsername ? { sameAs: [`https://github.com/${aboutMe.githubUsername}`] } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} antialiased`}
      >
        <SiteNav />
        <main>{children}</main>
        <footer className="border-t border-zinc-200/70 dark:border-zinc-800/70">
          <div className="mx-auto max-w-5xl px-6 py-10 md:px-8">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} {aboutMe.name}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
