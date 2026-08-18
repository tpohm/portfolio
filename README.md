# Ohm Portfolio

Portfolio website for presenting services (system consulting, websites/web apps with Next.js/PHP/WordPress, mobile apps with Flutter).
Built with **Next.js 14 (App Router)** + **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

- Services / process / projects → edit the SERVICES, PROCESS, PROJECTS constants at the top of `app/page.js`
- Colors and fonts → `tailwind.config.js` and `app/globals.css`
- LINE QR code → replace `public/qr-line.jpg`
- Email / LINE link → search for `tossapon.ph@gmail.com` and `line.me/ti/p/zERBmbhlRM` in `app/page.js` and replace with your own

## Deploy to GitHub + Vercel

1. Create a repo on GitHub and push this code
2. Go to https://vercel.com → New Project → Import from GitHub
3. Leave all defaults (Vercel auto-detects Next.js) → Deploy
4. You'll get a link like `https://your-project.vercel.app` ready to share with clients
