
# Codex Lab

My personal space for building projects, trying out ideas, documenting what I'm learning, and keeping track of my progress as a developer.

**Live Website:** [codex-lab.netlify.app](https://codex-lab.netlify.app/)

**Source Code:** [github.com/codex2py/codexlab](https://github.com/codex2py/codexlab)

## Preview
<img width="1889" height="877" alt="Screenshot 2026-10-01 203417" src="https://github.com/user-attachments/assets/58637bb6-e41e-44f9-b2d8-9440b08f9597" />


## About

Codex Lab is a personal developer space I built to keep my work in one place.

Instead of having my projects scattered across different platforms, I wanted somewhere I could showcase what I'm building, experiment with new ideas, document my development process, and keep track of what I'm currently learning.

It's also a way to look back at my progress over time and see how my work changes as I gain more experience.

The project is built with React and Vite, with plain CSS for the styling. I used React Router to organize the different pages and Lucide React for icons.

## What's Inside

- **Home:** An overview of Codex Lab and the work I'm doing.
- **Projects:** A collection of projects I've built.
- **Experiments:** A space for exploring ideas and testing things out.
- **Build Log:** A record of my development process and progress.
- **Now:** What I'm currently working on.
- **About:** More about me and my work.
- **Contact:** Ways to get in touch.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Building the user interface with reusable components |
| Vite | Development server and production build tooling |
| JavaScript | Application logic and interactivity |
| CSS | Styling, layouts, and responsive design |
| React Router | Navigation between pages |
| Lucide React | Icons used throughout the interface |
| npm | Installing dependencies and running project scripts |

The project uses regular CSS rather than Tailwind, Bootstrap, or another CSS framework.

## Getting Started

If you want to run Codex Lab locally or explore how it's built, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which comes with Node.js
- [Git](https://git-scm.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/codex2py/codexlab.git
```

**2. Navigate into the project**

```bash
cd codexlab
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Vite will display a local URL in your terminal. Open that URL in your browser to view the website.

### Build for Production

To generate the production build, run:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

### Preview the Production Build

To preview the production build locally, run:

```bash
npm run preview
```

### Lint the Code

The project also includes an ESLint script:

```bash
npm run lint
```

## Project Structure

The main application code lives inside the `src` directory.

```text
codexlab/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── layouts/
│   │   ├── SiteLayout.jsx
│   │   └── SiteLayout.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Experiments.jsx
│   │   ├── Experiments.css
│   │   ├── BuildLog.jsx
│   │   ├── BuildLog.css
│   │   ├── Now.jsx
│   │   ├── Now.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── eslint.config.js
```

This is a guide to the main application files. Some directories and filenames may change as the project develops.

### How the Structure Works

- `components/` contains reusable interface components, including the navigation bar.
- `layouts/` contains the shared layout used across pages.
- `pages/` contains the individual pages and their associated styles.
- `assets/` holds project assets.
- `App.jsx` defines the routes for the different pages.
- `main.jsx` initializes the React application.
- `index.css` contains global styles and shared design variables.
- `vite.config.js` configures Vite.
- `eslint.config.js` configures code linting.

## Design Approach

The design uses a dark background, light text, restrained red accents, simple borders, and typography that keeps the focus on the content.

The goal is to make the projects and development process easy to explore without adding unnecessary visual clutter.

## Current Status

**Status: Ongoing**

Codex Lab is an active project. I'll keep updating it as I build new projects, experiment with different ideas, and learn more about development.

Some improvements I plan to work on include:

- Adding more projects and experiments as I build them.
- Keeping the Build Log updated with actual development progress.
- Improving existing pages and responsive layouts.
- Refining the overall experience as the project grows.

These are planned improvements, not a list of features that are already implemented.

## Author

**Sulaiman Abdussamad**

Frontend Developer and AI Engineering Student.

- GitHub: [@codex2py](https://github.com/codex2py)
- Website: [Codex Lab](https://codex-lab.netlify.app/)

## License

© 2026 Sulaiman Abdussamad. All rights reserved.
