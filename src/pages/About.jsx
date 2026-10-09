import { ArrowUpRight, MapPin } from "lucide-react";
import "./About.css";

const stack = [
  "React",
  "Javascript",
  "Python",
  "HTML / CSS",
  "AI / ML",
  "Git / Github",
];

const principles = [
  {
    number: "01",
    title: "Build things",
    description:
      "I learn best when I actually build something. Projects give me a reason to understand how things work instead of just reading about them.",
  },
  {
    number: "02",
    title: "Keep experimenting",
    description:
      "Not every idea needs to become a product. Sometimes I just want to try something, break it, and see what happens.",
  },
  {
    number: "03",
    title: "Keep learning",
    description:
      "There is always something I do not know yet. The goal is to keep learning and get a little bitter with every project.",
  },
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <div className="about-meta">
            <span>05 / ABOUT</span>
            <span>CODEX.PY</span>
          </div>
          <div className="about-hero-content">
            <div className="about-location">
              <MapPin size={15} strokeWidth={1.5} />
              <span>NIGERIA</span>
            </div>
            <div className="about-intro">
              <h1>
                Building things
                <br />
                and figuring them out.
              </h1>
              <p>
                I'm Sulaiman Abdussamad, a front-end developer currently
                learning and exploring AI engineering.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-story">
        <div className="about-container">
          <div className="about-section-label">
            <span>01</span>
            <span>A LITTLE ABOUT ME</span>
          </div>
          <div className="about-story-grid">
            <h2>Still learning. Still building.</h2>

            <div className="about-story-copy">
              <p>
                I'm a developer who enjoys building things for the web and
                figuring out how technology can be used to solve real problems.
              </p>
              <p>
                Most of my learning happens through projects. I like taking an
                idea, turning it into something that works, and then going back
                to understand what I could have done better.
              </p>
              <p>
                Right now, I'm spending more time learning about AI engineering while continuing to improve my frontend development skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-stack">
          <div className="about-stack">
            <div className="about-section-label">
              <span>02</span>
              <span>TOOLS I USE</span>
            </div>
            <div className="about-stack-content">
              <h2>The stuff I build with.</h2>
              <div className="about-stack-list">
                {stack.map((item, index) => (
                  <div className="about-stack-item" key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>
      <section className="about-principles">
        <div className="about-container">
          <div className="about-section-label">
            <span>03</span>
            <span>HOW I WORK</span>
          </div>
          <div className="about-principles-list">
            {principles.map((principle) => (
              <article className="about-principle" key={principle.number}>
                <span className="about-principle-number">
                  {principle.number}
                </span>
                <div>
                  <h2>{principle.title}</h2>
                  <p>{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="about-footer">
        <div className="about-container">
          <div className="about-footer-content">
            <div>
              <span className="about-footer-label">CURRENTLY</span>
              <h2>Building, learning,<br />and looking for what's next.</h2>
            </div>
            <a className="about-contact-link" href="/contact">
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
