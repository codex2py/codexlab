import { ArrowUpRight } from 'lucide-react'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Wrkbench',
    type: 'Web Application / Front-end',
     url: 'https://wrkbench.netlify.app/',
  },
 {
    number: '02',
    title: 'Codex Travels',
    type: 'Travel / Web Experience',
    url: 'https://codextravels.netlify.app/',
  },
  {
    number: '03',
    title: 'North Star Studio',
    type: 'Web Experience / Front-end',
    url: 'https://north-starstudio.netlify.app/',
  },
  {
    number: '04',
    title: 'Maison',
    type: 'Web Experience / Front-end',
    url: 'https://maison-web.netlify.app/',
  },
  {
    number: '05',
    title: 'Doctors Association Platform',
    type: 'Web Platform / Front-end',
    url: 'https://docsassociation.netlify.app/',
  },
]

function Projects() {
  return (
    <div className="projects-page">
      <section className='projects-hero'>
        <div className="projects-container">
          <div className="projects-meta">
            <span>01 / PROJECTS</span>
            <span>SELECTED WORK</span>
          </div>
          <div className="projects-intro">
            <h1>Projects</h1>
            <p>A collection of things I've built, from web applications
              and interfaces to larger digital experiences.</p>
          </div>
        </div>
      </section>
      <section className='projects-list-section'>
        <div className="projects-container">
          <div className="projects-list-header">
            <span>INDEX</span>
            <span>PROJECT</span>
            <span>TYPE</span>
            <span></span>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className='project-item' key={project.number}>
                <span className='project-number'>{project.number}</span>
                <h2 className='project-title'>{project.title}</h2>
                <span className='project-type'>{project.type}</span>
                <a href="{project.url}" className='project-arrow' target='_blank' rel='nonreferrer' aria-label={`Visit ${project.title}`}>
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='projects-footer'>
        <div className="projects-container">
          <p>More projects, experiments, and work will be added as the lab grows.</p>
        </div>
      </section>
    </div>
  )
}


export default Projects