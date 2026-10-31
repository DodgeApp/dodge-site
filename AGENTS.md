# Dodge website

Vite and React marketing site, plus the support-email API (`api/support.js`, Resend). It does not use the apps' Firebase project, Cloud Functions, or Firestore.

Pages include home (`src/pages/Index.tsx`), download, privacy, terms, support, and other legal pages. Shared chrome lives in `src/components/` (`HomeBrandLockup`, `PageHeader`, `SiteFooter`, `ContentPageShell`).

## Design

The site is a responsive website, not a copy of the phone screens. It must still look like Dodge.

- Tokens are in `src/index.css`, aligned with iOS `Theme.swift`: background `#222222`, surface `#2C2C2C`, elevated `#383838`, yellow `#FFBE00`, red `#D9262E`, 24px card radius.
- Type: SF Pro Rounded on Apple, Nunito elsewhere; Inter only when `html.android` is set.
- Reuse `src/components/` and `src/components/ui/` before adding components. The glow utility used by the home logo and download button is `shadow-glow`.
- Do not introduce a new palette, a light theme, or a different brand. Do not add dependencies for styling that existing Tailwind and components already cover.

## Scope

- Do not edit the iOS repo, the Android repo, or Firebase.
- Do not deploy, and do not change production email or payment configuration unless the task says so.

## Specialists

- `website-developer` in `.cursor/agents/` — Opus 5.5 medium (`claude-opus-5-5-medium`).
- `code-reviewer` and `problem-solver` are also in `.cursor/agents/` so this repo can request a review or an escalation on its own. Prefer the website developer for normal page work. The solver is not for copy or layout tweaks.
