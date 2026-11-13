# ROVOR Studio

An editorial portfolio for ROVOR, an independent architecture and spatial design studio. Built with Next.js 15 and React 19.

## Routes

- `/` — Editorial homepage and studio introduction
- `/studio` — Studio profile, principles, services, and process
- `/work` — Selected work index
- `/projects/[slug]` — Individual architectural concept studies
- `/contact` — Project enquiries

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

GitHub Actions runs a production build for pull requests and pushes to `main`. Vercel creates preview deployments for feature branches and production deployments from `main`.

## Search and sharing

- Canonical URL and sitemap use `NEXT_PUBLIC_SITE_URL`, defaulting to the verified Vercel project domain.
- Open Graph and Twitter metadata use the ROVOR share image.
- `robots.txt` references the generated `sitemap.xml`.

## Content status before a public marketing launch

- Current portfolio entries are clearly identified as concept studies or visual research; they are not presented as completed commissions.
- Concept diagrams are illustrative and not to scale; they are not measured plans, sections, or construction documents.
- Current architectural imagery and the hero video are editorial placeholders. Replace them with approved ROVOR-owned or licensed project assets.
- Confirm the public contact email and add verified social links only when those accounts are ready.
- Add legal/business details and a privacy notice if the studio begins collecting personal data or using analytics/marketing tools.
- Confirm the final custom domain and set `NEXT_PUBLIC_SITE_URL` to that domain before launch.

## Stack

- Next.js 15
- React 19
- CSS with responsive layouts and reduced-motion support
