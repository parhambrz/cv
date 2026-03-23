# CV Website Design Plan

## Summary
- Static React site (Vite build) for GitHub Pages.
- Content edits happen only in one data file: src/data/cv-data.json.
- Sections included: About Me, Top Skills, Education, Experience.
- Education and Experience have list pages and dynamic detail pages.

## Why This Structure
- No server-side code, fully static hosting.
- Clean separation of content and UI logic.
- Easy maintenance: edit JSON, run rebuild script, push.

## Routes
- / (home)
- /about
- /skills
- /education
- /education/:id
- /experience
- /experience/:id

## Data Editing Workflow
1. Edit src/data/cv-data.json
2. Run bash scripts/rebuild.sh
3. Commit and push to main
4. GitHub Actions deploys to Pages automatically

## Tooling
- React + Vite
- React Router
- Framer Motion
- Lucide React icons
- scripts/validate-data.mjs for data checks before build

## Design Direction
- Editorial timeline aesthetic
- Warm gradient background and layered surfaces
- Purposeful section animations and card interactions
- Responsive layout across desktop and mobile
