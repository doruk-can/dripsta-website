# Dripsta Website

Landing page for the Dripsta AI fashion scoring app. React + Vite + TypeScript + Tailwind (CDN).

## Run Locally

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

## Build

```bash
npm run build      # outputs dist/
npm run preview    # preview production build
```

## Deploy

Auto-deploys to GitHub Pages (`dripstaapp.com`) on every push to `main` via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

No manual deploy needed — just `git push` and the workflow builds + publishes.

Full setup/domain/DNS instructions: [SETUP_GUIDE.md](SETUP_GUIDE.md).

## Structure

```
.
├── App.tsx               # Hash router
├── index.html            # Meta tags, Tailwind config, theme colors
├── index.tsx             # React entry
├── components/
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/
│   ├── Home.tsx
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   └── Support.tsx
├── public/
│   ├── CNAME             # dripstaapp.com
│   ├── dripsta-logo.png
│   ├── apple-icon.png
│   └── google-icon.png
└── .github/workflows/
    └── deploy.yml        # Auto-deploy to GitHub Pages
```

---
© Ryon Labs LLC
