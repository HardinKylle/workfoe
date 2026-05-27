import { SectionPage } from "@/components/site/section-page";
import { getSiteSection } from "@/lib/site";

export default function TemplatesPage() {
  const section = getSiteSection("/templates");

  return <SectionPage section={section} />;
}
