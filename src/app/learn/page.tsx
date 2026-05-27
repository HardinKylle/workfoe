import { SectionPage } from "@/components/site/section-page";
import { getSiteSection } from "@/lib/site";

export default function LearnPage() {
  const section = getSiteSection("/learn");

  return <SectionPage section={section} />;
}
