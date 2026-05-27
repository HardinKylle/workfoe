import { SectionPage } from "@/components/site/section-page";
import { getSiteSection } from "@/lib/site";

export default function StacksPage() {
  const section = getSiteSection("/stacks");

  return <SectionPage section={section} />;
}
