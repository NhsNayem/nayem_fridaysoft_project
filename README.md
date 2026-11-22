# Brillance

A responsive Brillance landing page built with React, Vite, and Tailwind CSS v4.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite to view the site.

## Other commands

```bash
npm run build
npm run preview
npm run lint
```

## Structure

- `src/components/` contains the page sections and reusable presentation components.
- `src/components/icons/` contains the individual SVG icon components.
- `src/components/Services.jsx` and `src/components/Features.jsx` render their cards from object arrays.
- Tailwind CSS v4 is integrated through `@tailwindcss/vite` in `vite.config.js` and imported in `src/index.css`.
