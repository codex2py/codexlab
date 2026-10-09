import {
  ArrowUpRight,
  Mail,
  Phone,
  Github,
  Linkedin,
  AtSign,
} from 'lucide-react'
import './Contact.css'


const contacts = [
  {
    label: 'EMAIL',
    value: 'abdussamadsulaiman90@gmail.com',
    href: 'mailto:abdussamadsulaiman90@gmail.com',
    icon: Mail,
  },
  {
    label: 'PHONE',
    value: '+2349021410713',
    href: 'tel:+2349021410713',
    icon: Phone,
  },
  {
    label: 'GITHUB',
    value: 'github.com/codex2py',
    href: 'https://github.com/codex2py',
    icon: Github,
    external: true,
  },
  {
    label: 'LINKEDIN',
    value: 'Abdussamad Sulaiman',
    href: 'https://www.linkedin.com/in/abdussamad-sulaiman-213b11329/?isSelfProfile=true',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'X / TWITTER',
    value: '@codex24434',
    href: 'https://x.com/codex24434',
    icon: AtSign,
    external: true,
  },
]

function Contact() {
  return (
    <main className='contact-page'>
      <section className='contact-hero'>
        <div className="contact-container">
          <div className="contact-meta">
            <span>06 / CONTACT</span>
            <span>CODEX.PY</span>
          </div>
          <div className="contact-info">
            <span>GET IN TOUCH</span>

            <h1>
              Have something
              <br />
              <span>in mind?</span>
            </h1>

            <p>
              Have a project, an idea, or just want to talk about technology? Feel to reach out through any of the links below.
            </p>
          </div>
        </div>
      </section>
      <section className='contact-details'>
        <div className="contact-container">
          <div className="contact-section-heading">
            <span>01</span>
            <span>FIND ME HERE</span>
          </div>
          <div className="contact-list">
            {contacts.map((contact, index) => {
              const Icon = contact.icon
              
              return (
                <a
                 href={contact.href}
                 className='contact-item'
                 key={contact.label}
                 target={contact.external ? '_blank' : undefined}
                 rel={contact.external ? 'noreferrer' : undefined}
                 >
                  <span className='contact-item-number'>
                    0{index + 1}
                  </span>
                  <span className='contact-item-icon'>
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className='contact-item-info'>
                    <span className='contact-item-label'>
                      {contact.label}
                    </span>
                    <span className='conatct-item-value'>
                      {contact.value}
                    </span>
                  </span>
                  <ArrowUpRight 
                    className='contact-item-arrow'
                    size={19}
                    strokeWidth={1.5}
                  />
                 </a>
              )
            })}
          </div>
        </div>
      </section>
      <section className='contact-bottom'>
            <div className="contact-container">
              <span className='contact-bottom-label'>
                CODEX.PY / 2026
              </span>

              <p>
                Building, learning, and figuring things out one project at a time.
              </p>
            </div>
      </section>
    </main>
  )
}

export default Contact;