import { SectionPage } from "@/components/site/section-page";
import { getSiteSection } from "@/lib/site";

export default function ToolsPage() {
  const section = getSiteSection("/tools");

  return <SectionPage section={section} />;
}
