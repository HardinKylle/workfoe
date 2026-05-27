# Workfoe Agent Instructions

## Project Brief

Workfoe is a practical content site for AI-assisted software development workflows. It helps developers, students, and automation builders understand and apply coding-agent workflows without getting lost in tool noise.

The product voice is plain-English, direct, and useful. Prefer concrete workflow guidance over hype, vague productivity claims, or marketing filler.

The current site is an early content hub with five primary sections:

- `Learn`: concepts such as MCP servers, agents, skills, and `AGENTS.md`.
- `Playbooks`: step-by-step workflows for setting up AI-ready repos, building with Codex, and reviewing AI-generated changes.
- `Tools`: practical references for Codex, Claude Code, Cursor, MCP servers, and related workflow pieces.
- `Stacks`: recommended bundles for solo developers, student builders, and automation workflows.
- `Templates`: copy-paste starters for project instructions, prompts, skills, and task files.

When adding content or UI, keep the site focused on helping a user choose a workflow, understand why it matters, and apply it in a real repo.

## Project Stack

- Next.js `16.2.6` with the App Router.
- React `19.2.4`.
- TypeScript with `strict: true`.
- Tailwind CSS v4.
- ESLint v9 flat config using `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- Source code lives under `src/`.

## Required Next.js Docs Check

This project uses a newer Next.js version. Before changing Next.js-specific behavior, read the relevant installed docs under:

- `node_modules/next/dist/docs/01-app/`
- `node_modules/next/dist/docs/01-app/03-api-reference/`
- `node_modules/next/dist/docs/01-app/02-guides/`

Use the installed docs as the source of truth over memory or older Next.js examples. This is especially important for App Router conventions, route file exports, caching, Server/Client Components, metadata, route handlers, and config options.

## Repo Structure

- Use `src/app` for routes, layouts, metadata, and App Router file conventions.
- Use `src/components/site` for site-level composed components.
- Use `src/components/ui` for reusable primitive UI components.
- Use `src/lib` for shared data, constants, helpers, and non-UI utilities.
- Use `src/content` for structured content lists and content metadata.
- Keep route folders focused on routing. Put reusable UI or logic in `components` or `lib` unless it is truly route-local.
- Follow the existing file naming style: kebab-case filenames, TypeScript/TSX modules, and path alias imports from `@/*` when useful.

## Content Model

- `src/lib/site.ts` defines the main sections, their routes, descriptions, intros, and landing-page item labels.
- `src/content/items.ts` defines the starter content cards shown on section pages.
- Keep section route hrefs aligned between `SiteSectionHref`, `siteSections`, and `contentItems`.
- Content item `kind` values are `concept`, `playbook`, `tool`, `stack`, and `template`.
- Content item `status` values are currently `starter` and `planned`.
- When adding a new section, update the navigation, section type union, site section data, and any content item references together.
- Use concise titles and descriptions. The site should read like a reference/workflow library, not a blog feed.

## Coding Standards

- Prefer Server Components by default. Add `"use client"` only when a component needs state, effects, event handlers, browser APIs, or client-only libraries.
- Keep Client Components small and near the interactive boundary.
- Do not import server-only code, secrets, filesystem access, or database clients into Client Components.
- Preserve strict TypeScript. Do not weaken `tsconfig.json`, hide errors with broad casts, or introduce `any` unless there is a clear boundary reason.
- Prefer explicit props for reusable components.
- Use existing utilities such as `cn` from `src/lib/utils.ts` for class merging.
- Use `next/link`, `next/image`, metadata APIs, and App Router conventions where appropriate.
- Keep changes scoped to the requested task. Do not do unrelated refactors or file moves.

## UI And Accessibility

- Match the existing visual system before introducing new patterns.
- The current design is quiet, minimal, and content-first: white background, restrained borders, neutral text, compact cards, and straightforward navigation.
- Avoid oversized marketing sections, decorative gradients, fake dashboard imagery, or dense visual effects unless a task explicitly changes the brand direction.
- Use semantic HTML and accessible names for buttons, links, forms, icons, menus, and dialogs.
- Make interactive controls keyboard-usable.
- Check responsive layouts for text overflow, overlapping elements, and broken spacing.
- Use lucide icons where an icon is needed and the project already depends on `lucide-react`.

## Verification

This repository is on the Windows filesystem from WSL (`/mnt/d/...`). Dependencies and npm tooling may be installed on the Windows side, so run npm scripts through Windows `cmd.exe` from the repo directory:

```bash
cmd.exe /C "npm run lint"
cmd.exe /C "npm run build"
cmd.exe /C "npm run dev"
```

Use the available package scripts:

- `npm run lint` for ESLint.
- `npm run build` for production build and TypeScript validation.
- There is currently no test script in `package.json`; do not claim tests passed unless a test command is added and run.

When reviewing an implementation, use the personal Codex skill `$review-implementation` if available.
