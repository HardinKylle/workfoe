import { LearnGuidePage } from "@/components/site/learn-guide-page";
import { getLearnGuideSection } from "@/content/learn-guide";

export default function LearnPage() {
  const section = getLearnGuideSection("introduction");

  if (!section) {
    throw new Error("Missing Learn introduction guide section.");
  }

  return <LearnGuidePage currentSection={section} />;
}
