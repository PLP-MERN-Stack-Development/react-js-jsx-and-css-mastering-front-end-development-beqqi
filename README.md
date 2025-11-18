# PLP Task Manager — Quick README

Small Vite + React starter for the Week 3 assignment (Tailwind CSS ready).

Quick setup
1. Install dependencies:
```bash
npm install
```
2. Start the dev server:
```bash
npm run dev
```
3. Open the local URL printed by Vite (if the default port 5173 is taken it will fall back to another port, e.g. `http://localhost:5178/`).

What is included
- `src/components/` — reusable UI components (`Button`, `Card`, `Navbar`, `Footer`, `Layout`, `TaskManager`).
- `src/pages/` — page components (`Home.jsx`, `Posts.jsx`).
- `src/hooks/` — custom hooks (e.g. `useLocalStorage`).
- `src/context/` — context providers (theme switcher).

Implemented features
- Task Manager: add/complete/delete/filter tasks (persisted in localStorage).
- Posts page: fetches posts from JSONPlaceholder with loading/error states, search and pagination.
- Theme switcher (light/dark) using Tailwind's dark mode.

Routes
- `/` — Home page
- `/posts` — Posts (fetches from JSONPlaceholder)
- `/tasks` — Task Manager

Deployed demo
- https://taskmanagerreactvi.netlify.app/

How to test the API page
1. Open `/posts` in the browser after `npm run dev`.
2. You should briefly see "Loading posts...", followed by a grid of posts.
3. If you see "Failed to fetch": open DevTools → Network/Console and check the request to `https://jsonplaceholder.typicode.com/posts`.

Quick troubleshooting
- Blank page: make sure the dev server is running and use the URL printed by Vite (check for fallback port). Hard-refresh or use an incognito window.
- Missing packages: run `npm install` to ensure all dependencies are present (if an import like `prop-types` is missing, run `npm install prop-types`).
- CORS/network errors: check the browser console for CORS or network errors; try `curl https://jsonplaceholder.typicode.com/posts` locally to verify connectivity.

Where to look in the codebase
- `src/App.jsx` — routes and top-level layout
- `src/components/TaskManager.jsx` — task manager implementation
- `src/pages/Posts.jsx` — API fetch + UI
- `src/context/ThemeContext.jsx` — theme provider and toggle

If you want, I can add more details (deployment steps, screenshots, or instructions for the autograder).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
