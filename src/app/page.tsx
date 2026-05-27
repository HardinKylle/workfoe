import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { siteSections } from "@/lib/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-8 sm:px-10 lg:px-12">
        <SiteHeader />

        <section className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium text-muted-foreground">
              Practical AI workflows for developers
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-normal text-balance sm:text-6xl">
              Learn the AI coding workflows people actually use.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-8 text-muted-foreground">
              Workfoe helps developers, students, and automation builders cut
              through busywork, messy AI setups, and inefficient workflows.
            </p>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {siteSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="rounded-lg border bg-card p-5 text-card-foreground transition-colors hover:bg-muted/50"
            >
              <h2 className="text-base font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {section.description}
              </p>
            </Link>
          ))}
        </section>

        <section className="grid gap-10 border-t py-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-normal">
              Start with the workflow.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              The first version focuses on clear categories. Each one can grow
              into guides, examples, and reusable templates.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {siteSections.map((section) => (
              <article key={section.href} className="rounded-lg border p-5">
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
