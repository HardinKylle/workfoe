export type LearnGuideSection = {
  id: string;
  href: string;
  title: string;
  summary: string;
  points: string[];
};

export const learnGuideSections: LearnGuideSection[] = [
  {
    id: "introduction",
    href: "/learn",
    title: "Introduction",
    summary:
      "AI coding workflows work best when the project, tool, and task are all clear before implementation starts.",
    points: [
      "Start with one small task instead of a broad request.",
      "Give the agent project instructions it can follow consistently.",
      "Run the same checks you would run on code written by a teammate.",
    ],
  },
  {
    id: "mcp-servers",
    href: "/learn/mcp-servers",
    title: "MCP servers",
    summary:
      "MCP servers let AI tools connect to outside systems like files, APIs, databases, browsers, and developer tools.",
    points: [
      "Use MCP when the agent needs structured access to a system.",
      "Keep permissions narrow so tools can do the job without exposing everything.",
      "Document which servers matter for the project inside your repo instructions.",
    ],
  },
  {
    id: "agents-md",
    href: "/learn/agents-md",
    title: "AGENTS.md",
    summary:
      "AGENTS.md is a project instruction file that tells coding agents how to work inside your repo.",
    points: [
      "Include setup commands, test commands, and project-specific rules.",
      "Write instructions as repeatable workflow guidance, not one-off chat context.",
      "Update it when the project structure or verification steps change.",
    ],
  },
  {
    id: "ai-coding-agents",
    href: "/learn/ai-coding-agents",
    title: "AI coding agents",
    summary:
      "AI coding agents can inspect files, make edits, run commands, and report back with verification results.",
    points: [
      "Ask for small changes with a clear done state.",
      "Review generated code for behavior, structure, and maintainability.",
      "Treat the agent as an implementation partner, not an automatic merge button.",
    ],
  },
];

export function getLearnGuideSection(id: string) {
  return learnGuideSections.find((section) => section.id === id);
}
