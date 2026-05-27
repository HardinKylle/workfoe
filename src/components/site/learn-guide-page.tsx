import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import type { LearnGuideSection } from "@/content/learn-guide";
import { learnGuideSections } from "@/content/learn-guide";

type LearnGuidePageProps = {
  currentSection: LearnGuideSection;
};

export function LearnGuidePage({ currentSection }: LearnGuidePageProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-8 sm:px-10 lg:px-12">
        <SiteHeader />

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <nav aria-label="Learn guide" className="flex flex-col gap-2">
              {learnGuideSections.map((section) => (
                <Link
                  key={section.id}
                  href={section.href}
                  aria-current={
                    section.id === currentSection.id ? "page" : undefined
                  }
                  className={
                    section.id === currentSection.id
                      ? "rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background"
                      : "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  }
                >
                  {section.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-muted-foreground">
              Workfoe / Learn
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-normal text-balance">
              {currentSection.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {currentSection.summary}
            </p>

            <h2 className="mt-10 text-sm font-medium text-muted-foreground">
              Key points
            </h2>
            <ul className="mt-4 grid gap-3">
              {currentSection.points.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border p-4 text-sm leading-6 text-muted-foreground"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}
