import { notFound } from "next/navigation";

import { LearnGuidePage } from "@/components/site/learn-guide-page";
import {
  getLearnGuideSection,
  learnGuideSections,
} from "@/content/learn-guide";

export function generateStaticParams() {
  return learnGuideSections
    .filter((section) => section.id !== "introduction")
    .map((section) => ({
      slug: section.id,
    }));
}

export default async function LearnGuideSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const section = getLearnGuideSection(slug);

  if (!section || section.id === "introduction") {
    notFound();
  }

  return <LearnGuidePage currentSection={section} />;
}
