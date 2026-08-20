# Jonah Eastin — Portfolio Site

Modern Next.js portfolio showcasing production applications, case studies, and resume.

**Live URL (after deploy):** [jonaheastin.com](https://jonaheastin.com)

## What's included

- Homepage with projects, expertise, and case studies
- Printable resume at `/resume`
- Editable content in `src/content/portfolio.ts`
- Markdown resume backup in `RESUME.md`

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (correct project)

> **Important:** Do not deploy to an existing Vercel project tied to another site. Create a **new** project from this repo.

1. Push this repo to GitHub (`shylovegarden/portfolio-site`).
2. Go to [vercel.com/new](https://vercel.com/new) and import **portfolio-site**.
3. Deploy — Vercel auto-detects Next.js.
4. Add custom domain **jonaheastin.com** in Vercel → Project → Settings → Domains.
5. Update DNS at your registrar to point to Vercel (A/CNAME records shown in dashboard).

## After deploy — checklist

- [ ] Confirm `jonaheastin.com` loads your site (not another portfolio)
- [ ] Update LinkedIn URL in `src/content/portfolio.ts` if needed
- [ ] Add real metrics to case studies (users, latency, etc.)
- [ ] Deploy DealerHunt PRO demo to Vercel and add live URL
- [ ] Pin SHY and best repos on GitHub with README screenshots
- [ ] Print resume PDF from `/resume` for applications

## Content updates

Edit `src/content/portfolio.ts` for:

- Projects, case studies, stats, resume bullets
- Contact info and social links
- Hero headline and expertise copy

Then commit and push — Vercel redeploys automatically.
