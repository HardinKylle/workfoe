import Link from "next/link";

import { siteSections } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 border-b pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <Link href="/" className="text-base font-semibold tracking-normal">
        Workfoe
      </Link>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {siteSections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="transition-colors hover:text-foreground"
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
