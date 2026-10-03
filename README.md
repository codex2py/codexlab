
# CODEX.PY — Codex Lab

> A personal engineering workspace for building, experimenting, documenting, learning, and shipping.

Codex Lab is a personal developer lab built by **Sulaiman Abdussamad**.

It is not another portfolio. It documents the work behind the work — projects, experiments, build logs, things I’m learning, and things I’m currently building.

**Live Website:** https://codex-lab.netlify.app/

<img width="1889" height="877" alt="Screenshot 2026-10-01 203417" src="https://github.com/user-attachments/assets/da8ce8bd-c3dd-4eaa-80b0-e2cc89d7e4ba" />

---

## What is Codex Lab?

Codex Lab is a space where I document my development process and experiment with web development and AI engineering.

The idea is simple:

**BUILD → EXPERIMENT → DOCUMENT → LEARN → SHIP**

The site currently includes:

- Projects
- Experiments
- Build Log
- Now
- About
- Contact

---

## How to Experience It

### Live Website

The easiest way to experience Codex Lab is through the live website:

https://codex-lab.netlify.app/

You can use the navigation bar to explore the different sections of the site and visit the projects listed on the Projects page.

### Run Locally

To recreate the project locally, you need:

- Node.js
- npm
- Git

Clone the repository:

    git clone https://github.com/codex2py/codexlab.git

Move into the project directory:

    cd codexlab

Install the dependencies:

    npm install

Start the development server:

    npm run dev

Vite will provide a local development URL, usually:

    http://localhost:5173

Open the URL in a browser to experience the project locally.

---

## Production Build

To create a production build:

    npm run build

To preview the production build:

    npm run preview

---

## Technology

Codex Lab is built with:

- **React** — building the user interface
- **Vite** — development and production tooling
- **JavaScript** — application logic
- **React Router** — page routing
- **Plain CSS** — styling, layout, responsiveness, and interactions
- **Lucide React** — interface icons

The project does not use Tailwind, Bootstrap, Material UI, or another CSS framework.

---

## Project Structure

The application is organized around pages, reusable site components, and a shared layout.

    src/
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── Footer.jsx
    │   └── Footer.css
    │
    ├── layouts/
    │   ├── SiteLayout.jsx
    │   └── SiteLayout.css
    │
    ├── pages/
    │   ├── Home.jsx
    │   ├── Home.css
    │   ├── Projects.jsx
    │   ├── Projects.css
    │   ├── Experiments.jsx
    │   ├── Experiments.css
    │   ├── BuildLog.jsx
    │   ├── BuildLog.css
    │   ├── Now.jsx
    │   ├── Now.css
    │   ├── About.jsx
    │   ├── About.css
    │   ├── Contact.jsx
    │   └── Contact.css
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx

Each major page has its own JSX and CSS, making the project easy to understand and modify.

---

## Design

The visual direction of Codex Lab is minimal and editorial.

The site uses:

- Black and off-white surfaces
- Restrained red accents
- Large typography
- Monospace technical labels
- Generous whitespace
- Simple borders
- Responsive layouts
- Subtle interactions

The goal is for the site to feel more like a personal engineering workspace than a traditional portfolio or SaaS dashboard.

---

## Projects

The current projects featured in Codex Lab are:

### Wrkbench

https://wrkbench.netlify.app/

### Codex Travels

https://codextravels.netlify.app/

### North Star Studio

https://north-starstudio.netlify.app/

### Maison

https://maison-web.netlify.app/

### Doctors Association Platform

https://docsassociation.netlify.app/

---

## Development

Codex Lab is an ongoing project.

The site will continue to change as I build new things, try new technologies, document what I learn, and improve the existing pages.

Current status:

**BUILDING**

---

## Author

**Sulaiman Abdussamad**

Front-end Developer · AI Engineering Student · Builder

GitHub: https://github.com/codex2py

---

## License

This is a personal project created to document my work, experiments, and learning process.





