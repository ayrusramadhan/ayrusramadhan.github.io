# Portfolio (React + Tailwind)

React 18, Vite, React Router, and Tailwind CSS v4. Design tokens come from `design.md`.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Where to edit

- `src/data.js`: name, email, social links, Spotify playlist ID, projects, and case study text.
- `src/index.css`: design tokens (`@theme`: colors and fonts) and the few custom animations.
- `src/components/`: Header, Footer, Hero, ProjectCard, Mockup, MusicPlayer, Reveal, ui (Button, Section).
- `src/pages/`: Home, Work, CaseStudy, About, Contact.
- Add a case study: add a project in `projects`, then an entry in `caseStudies` with the same slug.

## Deploy to GitHub Pages

This repo already includes `.github/workflows/deploy.yml` and a `build` script that also creates `dist/404.html` (so refreshing `/work` works on GitHub Pages).

1. On GitHub, create a **public** repository named `USERNAME.github.io` (your username, lowercase). Do not add a README.
2. In the repo, open **Settings > Pages** and set **Source** to **GitHub Actions**.
3. In this folder, run:

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
git push -u origin main
```

4. Open the **Actions** tab and wait for the green check (1-2 minutes). Your site is at `https://USERNAME.github.io`.

Every later `git push` to `main` redeploys automatically.

Using a different repo name? The site then lives at `https://USERNAME.github.io/repo-name/`. Add `base: '/repo-name/'` to `vite.config.js`, use `<BrowserRouter basename={import.meta.env.BASE_URL}>` in `src/main.jsx`, and use `` `${import.meta.env.BASE_URL}resume.pdf` `` for the resume link in `src/pages/About.jsx`.

Other hosts: on Netlify add `public/_redirects` containing `/* /index.html 200`; on Vercel add a `vercel.json` rewrite of `/(.*)` to `/index.html`.

## Not ported from the HTML version

Magnetic buttons, mouse-follow parallax on project panels, the "View case study" cursor label, scroll parallax, the highlight sweep, and the second cursor following the mouse.
