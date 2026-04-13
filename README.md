# Frontend Portfolio

This project is now a frontend-only portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

The production-ready static files are generated in `dist/`.

## GitHub deployment

1. Push this project to GitHub.
2. Run `npm run build`.
3. Deploy the `dist/` folder to GitHub Pages, Netlify, Vercel, or any static hosting service.

`vite.config.js` uses `base: './'` so the build is easier to host from a GitHub repository path.
