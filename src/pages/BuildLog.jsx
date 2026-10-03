import './BuildLog.css'

const buildEntries = [
  {
    number: '01',
    date: '0CT 2026',
    title: 'Starting Codex Lab',
    description: 
      'Set up the project with React and Vite, added React Router, and started putting together the basic structure for the site.',
    tags: ['REACT', 'VITE', 'ROUTING'],
  },
  {
    number: '02',
    date: 'OCT 2026',
    title: 'Building the homepage',
    description:
      'Built the first version of the Codex Lab homepage. Wrote the JSX first, then worked through the CSS to get the layout and visual direction right.',
    tags: ['UI', 'CSS', 'LAYOUT'],
  },
  {
    number: '03',
    date: 'OCT 2026',
    title: 'Adding the projects page',
    description: 'Added the projects section and connected the projects I have actually built. Also worked on making the page responsive instead of only designing for desktop.',
    tags: ['PROJECTS', 'RESPONSIVE', 'WEB'],
  },
  {
    number: '04',
    date: '0CT 2026',
    title: 'Building the experiments page',
    description:
      'Created a place for experiments, ideas, and things I am currently curious about. This page is meant to  change as I try new things.',
    tags: ['EXPERIMENTS', 'LEARNING', 'WEB'],
  }
]
const thingsToImProve = [
  'Keep documenting the actual building process instead of only showing finished work.',
  'Add more technical notes as I work through different problems.',
  'Keep improving the site as the lab grows.',
]

function BuildLog() {
  return (
    <div className="build-log-page">
      <section className='build-log-hero'>
        <div className="build-log-container">
          <div className="build-log-meta">
            <span>03 / BUILD LOG</span>
            <span>NOTES + PROGRESS</span>
          </div>
          <div className="build-log-intro">
            <h2>Build Log</h2>
            <p>
              Notes from actually building this thing. What I've worked on, what I've learned, and what still needs fixing.
            </p>
          </div>
        </div>
      </section>
      <section className='build-log-entries'>
        <div className="build-log-container">
          <div className="build-log-section-heading">
            <span>RECENT ENTRIES</span>
            <span>2026</span>
          </div>
          <div className="build-log-list">
            {buildEntries.map((entry) => (
              <article className='build-log-entry' key={entry.number}>
                <div className="build-log-entry-number">
                  {entry.number}
                </div>
                <div className="build-log-entry-main">
                  <div className="build-log-entry-top">
                    <span>{entry.date}</span>
                    <div className="build-log-tags">
                      {entry.tags.map((tags) => (
                        <span key={tags}>{tags}</span>
                      ))}
                    </div>
                  </div>
                  <h2>{entry.title}</h2>
                  <p>{entry.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='build-log-notes'>
        <div className="build-log-container">
          <div className="build-log-section-heading">
            <span>WHAT'S NEXT</span>
            <span>KEEP BUILDING</span>
          </div>
          <div className="build-log-notes-content">
            <h2>Still figuring things out.</h2>
            <div className="build-log-notes-list">
              {thingsToImProve.map((item, index) => (
                <div className="build-log-note" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='build-log-footer'>
        <div className="build-log-container">
          <p>
            This is an ongoing record. More entries will be added as the project grows.
          </p>
        </div>
      </section>
    </div>
  )
}

export default BuildLog