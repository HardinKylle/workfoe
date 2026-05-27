import type { SiteSectionHref } from "@/lib/site";

export type ContentKind = "concept" | "playbook" | "tool" | "stack" | "template";

export type ContentStatus = "starter" | "planned";

export type ContentItem = {
  title: string;
  description: string;
  sectionHref: SiteSectionHref;
  kind: ContentKind;
  status: ContentStatus;
};

export const contentItems: ContentItem[] = [
  {
    title: "MCP servers",
    description:
      "Understand how MCP connects AI coding tools to files, APIs, and local developer systems.",
    sectionHref: "/learn",
    kind: "concept",
    status: "starter",
  },
  {
    title: "AGENTS.md",
    description:
      "Learn how repo instructions shape AI coding behavior across tasks, tools, and teams.",
    sectionHref: "/learn",
    kind: "concept",
    status: "starter",
  },
  {
    title: "AI coding agents",
    description:
      "A beginner-friendly model for what agents can do and where human review still matters.",
    sectionHref: "/learn",
    kind: "concept",
    status: "starter",
  },
  {
    title: "Set up an AI-ready repo",
    description:
      "Add project instructions, task files, linting, and verification commands before feature work starts.",
    sectionHref: "/playbooks",
    kind: "playbook",
    status: "starter",
  },
  {
    title: "Build with Codex",
    description:
      "Use a small task file, focused implementation loop, and review pass to ship a change.",
    sectionHref: "/playbooks",
    kind: "playbook",
    status: "starter",
  },
  {
    title: "Review AI changes",
    description:
      "Check behavior, structure, accessibility, and tests before merging generated code.",
    sectionHref: "/playbooks",
    kind: "playbook",
    status: "starter",
  },
  {
    title: "Codex",
    description:
      "A coding agent workflow for reading a repo, editing files, running commands, and verifying changes.",
    sectionHref: "/tools",
    kind: "tool",
    status: "starter",
  },
  {
    title: "Claude Code",
    description:
      "A terminal-based coding assistant commonly used for repo-aware implementation workflows.",
    sectionHref: "/tools",
    kind: "tool",
    status: "starter",
  },
  {
    title: "Cursor",
    description:
      "An AI-first editor for codebase chat, inline edits, and assisted development workflows.",
    sectionHref: "/tools",
    kind: "tool",
    status: "starter",
  },
  {
    title: "Solo developer stack",
    description:
      "A lightweight setup for one developer shipping features with AI assistance and local review.",
    sectionHref: "/stacks",
    kind: "stack",
    status: "starter",
  },
  {
    title: "Student builder stack",
    description:
      "A beginner-friendly bundle for learning tools, prompts, and project setup without heavy infrastructure.",
    sectionHref: "/stacks",
    kind: "stack",
    status: "starter",
  },
  {
    title: "Automation stack",
    description:
      "A practical bundle for prompts, MCP servers, and scripts that support repeatable workflows.",
    sectionHref: "/stacks",
    kind: "stack",
    status: "starter",
  },
  {
    title: "AGENTS.md starter",
    description:
      "A copy-paste project instruction file for coding agents working inside your repo.",
    sectionHref: "/templates",
    kind: "template",
    status: "starter",
  },
  {
    title: "CLAUDE.md starter",
    description:
      "A starter instruction file for teams using Claude Code alongside their development workflow.",
    sectionHref: "/templates",
    kind: "template",
    status: "starter",
  },
  {
    title: "Task file template",
    description:
      "A small planning file for defining scope, checklist items, verification, and changelog notes.",
    sectionHref: "/templates",
    kind: "template",
    status: "starter",
  },
];

export function getContentItemsForSection(sectionHref: SiteSectionHref) {
  return contentItems.filter((item) => item.sectionHref === sectionHref);
}
