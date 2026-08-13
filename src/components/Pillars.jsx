import { pillars } from '../data/content'
import Reveal from './Reveal'

function PillarIcon({ type }) {
  if (type === 'less-scrubbing') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="8.5" r="3.2" />
        <circle cx="16.4" cy="6.6" r="2.2" />
        <circle cx="15" cy="13" r="2.8" />
        <circle cx="8.6" cy="15.6" r="2.1" />
        <path d="M4 21h16" />
      </svg>
    )
  }

  if (type === 'clean-ingredients') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4.5 6v6.2c0 4.3 3.1 7.6 7.5 8.8 4.4-1.2 7.5-4.5 7.5-8.8V6L12 3Z" />
        <path d="m9 12 2.2 2.2L15.4 10" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.4-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.6c0 5-7 9.4-7 9.4Z" />
    </svg>
  )
}

export default function Pillars() {
  return (
    <section className="sec" id="how" data-scene="2">
      <div className="wrap">
        <div className="pillars">
          {pillars.map((pillar) => (
            <Reveal key={pillar.id} as="article" className="glass pillar" delay={pillar.delay}>
              <span className="pi">
                <PillarIcon type={pillar.icon} />
              </span>
              <h3 className="d3">{pillar.title}</h3>
              <p className="body-s">{pillar.text}</p>
              <a className="btn btn-ghost btn-sm" href={pillar.href}>
                Learn more
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
