# Signal Portfolio — Sakthi Prabhu R

Personal developer portfolio built with **Create React App + React Router v6**, following the
*Personal Portfolio Web App — Development Guide* for the EMC Full Stack Final Assignment.

**Live demo:** _add Vercel/Netlify URL after deployment_

## Pages

| Route | Description |
|---|---|
| `/` | Hero intro, featured projects preview, scroll-down cue |
| `/about` | Bio, animated skill bars, education & experience timeline |
| `/projects` | Filterable project gallery |
| `/projects/:id` | Expanded project case study (problem → approach → result) |
| `/contact` | Contact form, social links, resume download |
| `*` | Friendly 404 |

## Features

- Light/dark theme toggle persisted in `localStorage` (CSS custom properties + `data-theme`)
- Scroll-reveal animations via Intersection Observer (`SectionReveal`)
- Animated skill bars, hover-lift project cards, project tag filtering
- Client-side validated contact form with idle/sending/success/error states (Formspree-ready)
- Fully responsive, mobile-first; semantic HTML with focus states and alt text

## Getting started

```bash
cd portfolio-frontend
npm install
npm start
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The `build/` folder can be deployed to Vercel or Netlify.

## Project data

All projects, skills, and social links live in `src/data/`:
- `projects.js` — project cards + case-study detail
- `skills.js` — skill bars for the About page
- `profile.js` — bio, contact info, socials

## Assets — how to add yours

See **`ASSETS-README.txt`** in the project root (one level above this folder) for how to drop
in your project screenshots, avatar, and resume.

## Optional MERN extension

The frontend reads from `src/data/projects.js`. To use the optional Express + MongoDB backend
(section 10 of the guide), set `REACT_APP_API_URL` and swap the data import for a fetch —
the UI code stays identical either way.

---

Built by Sakthi Prabhu R · Chennai, India · [github.com/prabhhhuu](https://github.com/prabhhhuu)
