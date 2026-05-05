# Personal CV Website (React + Static)

This is a static React CV website designed for GitHub Pages. visit https://parhambrz.github.io/cv

## Key Features
- Data-driven CV content from one JSON file.
- About, Top Skills, Education, and Experience sections.
- Dynamic detail pages for each education and experience item.
- Polished UI with iconography and motion.

## Edit Your Content
Update this file only:

`src/data/cv-data.json`

You can change profile text, skills, education, and experience data without editing React components.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Rebuild Script

```bash
npm run rebuild
```

This runs `scripts/rebuild.sh` and outputs the static site to `dist/`.

## GitHub Pages Deployment (gh-pages)

This project deploys with the `gh-pages` npm package.

### First-time GitHub Pages setup

In your repository settings:

1. Open **Settings -> Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **gh-pages** and folder **/(root)**.

### Deploy command

Run this command anytime you want to publish the latest static site:

```bash
npm run deploy
```

What it does:

- Runs `predeploy` -> `npm run build`
- Publishes the `dist/` output to the `gh-pages` branch

After deployment completes, the site is served from GitHub Pages.
