# HackAware / MobileSafe

Small educational React app to teach mobile hacking prevention (lessons in Tamil & English).

Features
- Learn: short 2–3 minute lessons (Phishing, Fake apps, Permissions, Network, Updates)
- Quiz: short multiple-choice questions after each lesson (saved locally)
- Demo: safe simulated fake SMS and how-to steps (no hacking)
- Checklist: 5 safety steps persisted in localStorage
- Survey / Progress: pre-test and post-test, improvement percentage

Run locally

```powershell
cd "c:\Users\musha\OneDrive\Documents\GitHub\HackAware\ethical-hacking"
npm install
npm run dev
```

Build

```powershell
npm run build
```

Tests

```powershell
npm run test
```

Notes
- This project stores scores and checklist state in the browser `localStorage` by default.
- To enable cross-device persistence, integrate Firebase Firestore and Auth (I can add wiring if you want).

Add the logo

Place the logo image file provided into the `public` folder as `logo.png` so the app header can load it at `/logo.png`.

If you prefer the file inside the bundle, place it at `src/assets/hackaware-logo.png` and update `src/App.jsx` image path accordingly.

Security & intent
- The app is explicitly educational. Demos are safe, static examples; the project must never be used for malicious activity.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
