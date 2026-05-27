import { SiteHeader } from "@/components/site/site-header";
import { getContentItemsForSection } from "@/content/items";
import type { SiteSection } from "@/lib/site";

type SectionPageProps = {
  section: SiteSection;
};

export function SectionPage({ section }: SectionPageProps) {
  const contentItems = getContentItemsForSection(section.href);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-12">
        <SiteHeader />

        <section className="max-w-3xl py-10">
          <p className="mb-5 text-sm font-medium text-muted-foreground">
            Workfoe / {section.title}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-balance sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {section.intro}
          </p>
        </section>

        <section className="border-t py-10">
          <h2 className="text-2xl font-semibold tracking-normal">
            Starting points
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {contentItems.map((item) => (
              <article key={item.title} className="rounded-lg border p-5">
                <div className="mb-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="rounded-md border px-2 py-1 capitalize">
                    {item.kind}
                  </span>
                  <span className="rounded-md border px-2 py-1 capitalize">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
