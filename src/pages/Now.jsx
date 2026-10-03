import './Now.css'

const currentFocus = [
  {
    number: '01',
    title: 'Codex Lab',
    description: 
      'Building out Codex Lab and turning it into a proper place to document what I build, experiment with, and learn.',
    status: 'BUILDING'
  },
  {
    number: '02',
    title: 'AI Engineering',
    description: 
      'Learning more about AI engineering and figuring out how to build useful things with AI instead of just following tutorials.',
    status: 'LEARNING',
  },
  {
    number: '03',
    title: 'Web Development',
    description:
      'Still building web projects, improving my frontend skills, and getting better at turning ideas into working interfaces.',
    status: 'ONGOING'
  },
]

const currentlyLearning = [
  'AI engineering',
  'Building with AI',
  'React',
  'Javascript',
  'Better frontend architecture'
]

function Now() {
  return (
    <div className="now-page">
      <section className='now-hero'>
        <div className="now-container">
          <div className="now-meta">
            <span>04 / NOW</span>
            <span>CURRENTLY BUILDING</span>
          </div>
          <div className="now-intro">
            <h1>Now</h1>
            <p>A quick snapshot of what I'm working on, learning, and spending most of my time on right now.</p>
          </div>
        </div>
      </section>
      <section className='now-focus'>
        <div className="now-container">
          <div className="now-section-heading">
            <span>CURRENT FOCUS</span>
            <span>2026</span>
          </div>
          <div className="now-focus-list">
            {currentFocus.map((item) => (
              <article className='now-focus-item' key={item.number}>
                <span className='now-focus-number'>{item.number}</span>
                <div className="now-focus-content">
                  <div className="now-focus-top">
                    <h2>{item.title}</h2>
                    <span>{item.status}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className='now-learning'>
        <div className="now-container">
          <div className="now-section-heading">
            <span>WHAT I'M LEARNING</span>
            <span>IN PROGRESS</span>
          </div>
          <div className="now-learning-content">
            <h2>Trying to get better at the things I care about.</h2>
            <div className="now-learning-list">
              {currentlyLearning.map((item, index) => (
                <div className="now-learning-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='now-status'>
        <div className="now-container">
          <div className="now-status-content">
            <div>
              <span className='now-status-label'>CURRENT STATUS</span>
              <h2>Building & learning</h2>
            </div>
            <div className="now-status-indicator">
              <span />
              <p>OPEN TO WORK</p>
            </div>
          </div>
          <p className='now-status-description'>
            Still figuring things out, still building things, and trying to keep moving forward one project at a time.
          </p>
        </div>
      </section>
    </div>
  )
}


export default Now