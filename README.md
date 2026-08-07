# JunAI Website

Official marketing + docs site for JunAI. Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm start
```

> This project was written by hand in an environment without network access, so the
> dependency versions in `package.json` haven't been build-verified here. Run `npm install`
> and `npm run build` once — if anything's off, it'll most likely be a minor version bump,
> not a structural issue. Ping me with the error and I'll fix it.

## Where things live

- `app/` — pages, one folder per route (`/download`, `/docs`, `/docs/[slug]`, `/about`, `/privacy`, `/terms`)
- `components/` — UI building blocks, one component per file
- `lib/site-config.ts` — **every piece of dynamic content lives here**: version/APK info,
  GitHub URL, social links, feature list + status, roadmap + status, FAQ, doc section list
- `lib/docs-content.tsx` — the actual written content for each `/docs/[slug]` page
- `public/images/` — `jun-bot.png` (hero character) and `jun-splash.png` (full wordmark/lockup),
  both pulled from the Android app's existing resources

## Updating a release

Edit `releaseConfig` in `lib/site-config.ts` — version, APK size, min Android version, release
date, changelog, GitHub release URL, checksum, and (once you have one) the direct APK download
URL. The download page pulls from this object only; nothing is hardcoded in the page itself.

## Updating roadmap / feature status

Same idea — `roadmap` and `features` arrays in `lib/site-config.ts`. Each item has a `status`
field (`done` / `in-progress` / `planned` for roadmap, `live` / `in-progress` / `planned` for
features) that drives the badge shown on the card. Please keep these honest — don't mark
something `done` ahead of it actually being done.

## Deploying

Two realistic options:

1. **Vercel** — connect the GitHub repo, it auto-detects Next.js, zero config needed. Easiest
   option and free for a project like this.
2. **GitHub Pages** — needs a static export. Add `output: 'export'` to `next.config.js`, run
   `npm run build`, and publish the generated `out/` folder. Note: the `/docs/[slug]` dynamic
   route already has `generateStaticParams`, so it will export fine. If you add server-only
   features later (API routes, ISR), Pages won't support them — Vercel would.

## Things left as placeholders on purpose

- `releaseConfig` — no real version/APK exists yet, values are `[BRACKETED]`
- `githubConfig.repoUrl` — replace `REPLACE_ME` with the real repo path
- `socialConfig` — WhatsApp/Instagram/X left blank; footer and community section render
  "coming soon" automatically for any blank link
- `/privacy` and `/terms` — explicitly marked as placeholder pages, not real legal text
