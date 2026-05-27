export type SiteSection = {
  title: string;
  href: SiteSectionHref;
  description: string;
  intro: string;
  items: string[];
};

export type SiteSectionHref =
  | "/learn"
  | "/playbooks"
  | "/tools"
  | "/stacks"
  | "/templates";

export const siteSections: SiteSection[] = [
  {
    title: "Learn",
    href: "/learn",
    description: "Plain-English explanations of AI coding concepts.",
    intro:
      "Start with the concepts behind modern AI-assisted development before choosing specific tools or workflows.",
    items: ["MCP servers", "Agents", "Skills", "AGENTS.md"],
  },
  {
    title: "Playbooks",
    href: "/playbooks",
    description: "Step-by-step workflows you can follow in real projects.",
    intro:
      "Follow practical workflows for setting up projects, building features, and reviewing AI-generated changes.",
    items: ["Set up an AI-ready repo", "Build with Codex", "Review AI changes"],
  },
  {
    title: "Tools",
    href: "/tools",
    description:
      "A curated reference of agents, servers, templates, and workflow pieces.",
    intro:
      "Compare the tools and building blocks that fit into AI coding workflows.",
    items: ["Codex", "Claude Code", "Cursor", "MCP servers"],
  },
  {
    title: "Stacks",
    href: "/stacks",
    description:
      "Practical bundles for common AI-assisted development use cases.",
    intro:
      "Use starter stacks for common roles, project types, and automation needs.",
    items: ["Solo developer", "Student builder", "Automation workflow"],
  },
  {
    title: "Templates",
    href: "/templates",
    description:
      "Copy-paste starters for project instructions, prompts, and configs.",
    intro:
      "Grab starter files you can adapt directly inside your own projects.",
    items: ["AGENTS.md", "CLAUDE.md", "SKILL.md", "Task files"],
  },
];

export function getSiteSection(href: SiteSectionHref) {
  const section = siteSections.find((item) => item.href === href);

  if (!section) {
    throw new Error(`Unknown site section: ${href}`);
  }

  return section;
}
