import { ArrowUpRight, FlaskConical, Terminal, Sparkles } from "lucide-react";
import "./Experiments.css";

const experiments = [
  {
    number: "01",
    title: "AI / ML",
    description:
      "Exploring practical AI engineering, intelligent interfaces, and ways AI can become part of useful products.",
    status: "EXPLORING",
    tags: ["AI", "ML", "LLM"],
  },
  {
    number: "03",
    title: "Developer Tools",
    description:
      "Building small utilities and tools that solve annoying problems or make development workflows a little easier.",
    status: "BUILDING",
    tags: ["TOOLS", "DX", "WEB"],
  },
  {
    number: "04",
    title: "Web Technology",
    description:
      "Playing around with modern browser capabilities, APIs, and technologies that could be useful in future projects.",
    status: "RESEARCHING",
    tags: ["WEB", "APIs", "BROWSER"],
  },
];

const labNotes = [
  {
    number: "01",
    title: "Learning by building",
    description:
      "Most experiments start with a question. The easiest way to understand something is usually to build a small version of it.",
  },
  {
    number: "02",
    title: "Small things count",
    description:
      "Not every experiment needs to become a full product. Some are just useful for understanding a new idea.",
  },
  {
    number: "03",
    title: "Keep the weird ideas",
    description:
      "Some ideas are probably bad. They are still worth trying because they might lead somewhere interesting.",
  },
];

function Experiments() {
  return (
    <div className="experiments-page">
      <section className="experiments-hero">
        <div className="experiments-container">
          <div className="experiments-meta">
            <span>02 / EXPERIMENTS</span>
            <span>LAB / ACTIVE</span>
          </div>
          <div className="experiments-hero-grid">
            <div className="experiments-icon">
              <FlaskConical size={22} strokeWidth={1.5} />
            </div>
            <div className="experiments-intro">
              <p experiments-eyebrow>IDEAS / PROTOTYPES / CURIOSITY</p>
              <h1>Experiments</h1>
              <p className="experiments-description">
                A space for things I'm curious about, ideas I want to test, and
                technologies I'm still figuring out.
              </p>
            </div>
            <div className="experiments-hero-note">
              <Terminal size={16} strokeWidth={1.5} />
              <span>
                Not everything here <br /> needs to ship.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="experiments-overview">
        <div className="experiments-container">
          <div className="experiments-section-heading">
            <div>
              <span className="section-number">01</span>
              <span className="section-label">CURRENT AREAS</span>
            </div>
            <p>A few areas I'm currently spending time experimenting with.</p>
          </div>
          <div className="experiment-grid">
            {experiments.map((experiment) => (
              <article className="experiment-card" key={experiment.number}>
                <div className="experiment-card-top">
                  <span className="experiment-number">{experiment.number}</span>

                  <span className="experiment-status">{experiment.status}</span>
                </div>
                <div className="experiment-card-content">
                  <h2>{experiment.title}</h2>
                  <p>{experiment.description}</p>
                </div>

                <div className="experiment-card-bottom">
                  <div className="experiment-tags">
                    {experiment.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="experiment-card-arrow">
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="lab-notes">
        <div className="experiments-container">
            <div className="experiments-section-heading">
                <div>
                    <span className="section-number">02</span>
                    <span className="section-label">LAB NOTES</span>
                </div>
                <p>A few things I'm trying to keep in mind while experimenting.</p>
            </div>
            <div className="lab-notes-list">
                {labNotes.map((note) => (
                    <article className="lab-note" key={note.number}>
                        <span className="lab-note-number">{note.number}</span>
                        <div className="lab-note-content">
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                        </div>
                        <Sparkles className="lab-note-icon" size={17} strokeWidth={1.5} />
                    </article>
                ))}
            </div>
        </div>
      </section>
      <section className="experiments-footer">
        <div className="experiments-container">
            <div className="experiments-footer-container">
                <span>LAB STATUS</span>

                <div>
                    <span className="footer-status-dot" />
                    <span>ACTIVE</span>
                </div>
            </div>
            <p>This section will keep changing as new experiments start, fail, evolve, or eventually turn into somehting worth shipping.</p>
        </div>
      </section>
    </div>
  );
}
export default Experiments