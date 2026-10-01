import { ArrowUpRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import "./Home.css";

const projects = [
  {
    number: "01",
    title: "Wrkbench",
    type: "Web Application / Front-end",
  },
  {
    number: "02",
    title: "Northstar Finance Dashboard",
    type: "Dashboard / Interface",
  },
  {
    number: "03",
    title: "Maison",
    type: "Web Experience / Front-end",
  },
  {
    number: "04",
    title: "Doctors Association Platform",
    type: "Web Platform / Front-end",
  },
];

const experiments = [
  {
    number: "01",
    title: "AI / ML",
    description:
      "Exploring practical AI engineering and intelligent interfaces.",
  },
  {
    number: "02",
    title: "Interaction",
    description:
      "Testing interface ideas, motion, and unusual interaction patterns.",
  },
  {
    number: "03",
    title: "Developer Tools",
    description:
      "Building small utilities that make development workflows easier.",
  },
  {
    number: "04",
    title: "Web Technology",
    description:
      "Experimenting with modern browser capabilities and new web APIs.",
  },
];

const buildLogs = [
  {
    number: "01",
    title: "Building Codex Lab",
    date: "September 30, 2026",
    description:
      "Establishing the architecture, visual system, routing, and foundations for a personal engineering laboratory.",
  },
  {
    number: "02",
    title: "From Portfolio to Engineering Lab",
    date: "September 2026",
    description:
      "Creating a space that documents the process behind the projects rather than only showing the finished work.",
  },
  {
    number: "03",
    title: "Exploring AI Engineering",
    date: "2026",
    description:
      "Learning and experimenting with AI systems alongside front-end development.",
  },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-meta">
          <span>CODEX.PY</span>
          <span>LAB / 01</span>
          <span>WEB + AI</span>
        </div>
        <div className="home-build-status">
          <span className="home-status-dot" />
          <span>Currently building: Codex Lab</span>
        </div>
        <div className="home-hero-grid">
          <div className="home-hero-content">
            <span className="home-eyebrow">PERSONAL DIGITAL WORKSHOP</span>
            <h1 className="home-hero-title">
              Codex
              <span>Lab</span>
            </h1>
            <p className="home-hero-description">
              A personal engineering workspace for building, experimenting,
              documenting, learning, and shipping across the web and AI.
            </p>
            <div className="home-hero-actions">
              <Link to="/projects" className="home-button home-button-primary">
                Explore Projects
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
              <Link to="/build-log" className="home-button">
                Read Build Log
                <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="home-telemetry">
            <div className="home-telemetry-header">
              <span>LIVE TELEMETRY</span>
              <Activity size={15} strokeWidth={1.5} />
            </div>
            <div className="home-telemetry-row">
              <span>STATUS</span>
              <strong>OPERATIONAL</strong>
            </div>
            <div className="home-telemetry-row">
              <span>ROLE</span>
              <strong>FRONT-END</strong>
            </div>
            <div className="home-telemetry-row">
              <span>FOCUS</span>
              <strong>AI ENGINEERING</strong>
            </div>
            <div className="home-telemetry-row">
              <span>LOCATION</span>
              <strong>NIGERIA</strong>
            </div>
          </div>
        </div>
        <div className="home-hero-statement">
          <span>/</span>
          <p>BUILD → EXPERIMENT → DOCUMENT → LEARN → SHIP</p>
        </div>
      </section>
      <section className="home-section">
        <div className="home-section-label">
          <span>01</span>
          <span>PROJECTS</span>
        </div>
        <div className="home-section-heading">
          <div>
            <span className="home-section-kicker">
              SHIPPED &amp; PRODUCTION SYSTEMS
            </span>
            <h2>Selected work.</h2>
          </div>
          <Link to="/projects" className="home-view-link">
            View All
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="home-project-list">
          {projects.map((project) => (
            <Link
              to="/projects"
              className="home-project-row"
              key={project.number}
            >
              <span className="home-item-number">{project.number}</span>
              <div className="home-project-info">
                <h3>{project.title}</h3>
                <span>{project.type}</span>
              </div>
              <ArrowUpRight
                className="home-row-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="home-section-label">
          <span>02</span>
          <span>EXPERIENCE</span>
        </div>
        <div className="home-section-heading">
          <div>
            <span className="home-section-kicker">
              SMALL TOOLS, UI EXPLORATIONS &amp; PROTOTYPES
            </span>
            <h2>Things worth trying.</h2>
          </div>
          <Link to="/experiments" className="home-view-link">
            View All
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="home-experiment-grid">
          {experiments.map((experiment) => (
            <Link
              to="/experiments"
              className="home-experiment-card"
              key={experiment.number}
            >
              <span className="home-item-number">{experiment.number}</span>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
              <ArrowUpRight
                className="home-row-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="home-section-label">
          <span>03</span>
          <span>BUILD LOG</span>
        </div>
        <div className="home-section-heading">
          <div>
            <span className="home-section-kicker">
              ENGINEERING JOURNAL &amp; TECHNICAL NOTES
            </span>
            <h2>What I'm building and learning.</h2>
          </div>
          <Link to="/build-log" className="home-view-link">
            View Log
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="home-log-list">
          {buildLogs.map((entry) => (
            <Link to="/build-log" className="home-log-row" key={entry.number}>
              <span className="home-item-number">{entry.number}</span>
              <div className="home-log-content">
                <div className="home-log-heading">
                  <h3>{entry.title}</h3>
                  <span>{entry.date}</span>
                </div>
                <p>{entry.description}</p>
              </div>
              <ArrowUpRight
                className="home-row-arrow"
                size={17}
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="home-section-label">
          <span>04</span>
          <span>NOW</span>
        </div>
        <div className="home-section-heading">
          <div>
            <span className="home-section-kicker">
              CURRENT STATE &amp; FOCUS
            </span>
            <h2>What I'm focused on.</h2>
          </div>
          <Link to="/now" className="home-view-link">
            More
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
        <div className="home-now-grid">
          <div className="home-now-feature">
            <span>01 / BUILDING</span>
            <h3>Codex Lab</h3>
            <p>
              Creating a space to document the work, experiments, ideas, and
              lessons behind the projects.
            </p>
          </div>
          <div className="home-now-feature">
            <span>02 / LEARNING</span>
            <h3>AI Engineering</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
