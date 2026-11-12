# ROVOR Studio

An editorial portfolio for ROVOR, an independent architecture and spatial design studio. Built with Next.js 15 and React 19.

## Routes

- `/` — Home and studio introduction
- `/studio` — Studio profile, principles, and process
- `/work` — Selected work index
- `/projects/[slug]` — Individual architectural case studies
- `/contact` — Project enquiry page

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

A GitHub Actions workflow runs the production build for pull requests and pushes to the main branch.

## Deployment

The project is connected to Vercel through GitHub. Confirm the production domain in Vercel and configure it before publishing canonical URLs or a sitemap.

## Content and editorial notes

- Current portfolio entries are explicitly labeled concept studies or visual research.
- Architectural diagrams are illustrative, conceptual, and not to scale. They are not measured plans, sections, or construction documents.
- Replace placeholder imagery and concept descriptions with approved ROVOR project photography and verified project information before public launch.
- Add verified social links and any required legal/business details before launch.
- Review desktop, tablet, and mobile layouts after deployment.

## Stack

- Next.js 15
- React 19
- CSS with responsive layouts and reduced-motion support
