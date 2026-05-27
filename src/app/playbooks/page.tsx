import { SectionPage } from "@/components/site/section-page";
import { getSiteSection } from "@/lib/site";

export default function PlaybooksPage() {
  const section = getSiteSection("/playbooks");

  return <SectionPage section={section} />;
}
