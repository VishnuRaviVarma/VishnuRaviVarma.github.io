# VishnuRaviVarma.github.io

A personal portfolio / CV website built with Vite + React + TypeScript and Tailwind CSS. The site is intended to be published as a GitHub Pages user site at `https://vishnuravivarma.github.io`.

## What this project does
- Renders a multi-section portfolio: hero, projects, experience, education, skills, contact, etc.
- Uses a component library (Radix + custom UI components) and modern React patterns.
- Builds a static site via Vite into `dist/` which can be deployed to GitHub Pages.

## Tech stack
- Vite (build tooling)
- React 18 + TypeScript
- Tailwind CSS
- Radix UI primitives and small UI utility components

## Local development
Install deps and run the dev server:

```powershell
npm ci
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173).

## Build
Create a production build ready for deployment:

```powershell
npm run build
```

The output is generated in the `dist/` folder.

Optional preview:

```powershell
npm run preview
```

## Manual GitHub Pages publish (recommended: `gh-pages` branch)
1. Build the project (`npm run build`).
2. Copy or publish the contents of `dist/` to the `gh-pages` branch. A minimal manual sequence (PowerShell):

```powershell
# from repo root
npm run build
# create ephemeral orphan branch and push dist contents to gh-pages
git switch --orphan gh-pages
git --work-tree ./dist add --all
git --work-tree ./dist commit -m "Deploy site"
git push origin gh-pages --force
git switch -
```

3. In the GitHub repository settings, under Pages, set the Source to `gh-pages` branch (root).

Notes:
- If you prefer `main/docs`, copy `dist` into `docs/` and push to `main`, then set Pages source to `main/docs` (this mixes built assets into the repo).
- For single-page app routing, copy `dist/index.html` to `dist/404.html` before publishing so client-side routes work on direct navigation.

## Quick troubleshooting
- Site shows missing assets: check paths in `index.html` and ensure `dist` contains the `assets/` folder.
- Client-side routing 404s on refresh: ensure `404.html` redirects to `index.html` (copying index to 404 is the easiest workaround).

## Contributing
- Keep `node_modules/` and build artifacts out of the repo; they are listed in `.gitignore`.
- Use `npm run lint` to check code style (ESLint configured).

## License
Include a license if you want to make the repository public under a specific license.
