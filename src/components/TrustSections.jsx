import { whyBundles, categories, trustItems } from '../data/content'
import Reveal from './Reveal'

function WhyBundleIcon({ type }) {
  if (type === 'save') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18" />
        <path d="M16.5 7.2C15.6 6 14 5.4 12 5.4c-2.4 0-4 1.1-4 2.9 0 2 1.7 2.7 4.2 3.3 2.7.6 4.3 1.4 4.3 3.4 0 1.9-1.7 3.1-4.5 3.1-2.2 0-3.8-.7-4.8-2" />
      </svg>
    )
  }
  if (type === 'flat') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="3.4" />
        <path d="m8.4 12.2 2.4 2.4 4.8-5" />
      </svg>
    )
  }
  if (type === 'curated') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.6 9.7l5.8-.8Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.6 16.4V7.2h10.2v9.2" />
      <path d="M12.8 10.4h4l3.6 3.2v2.8h-7.6" />
      <circle cx="6.6" cy="18" r="1.9" />
      <circle cx="16.6" cy="18" r="1.9" />
    </svg>
  )
}

function TrustIcon({ type }) {
  if (type === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21c0-6.5 3.5-11 8-12.5C20 15 16.5 20 12 21Z" />
        <path d="M12 21C12 14.5 8.5 10 4 8.5 4 15 7.5 20 12 21Z" />
      </svg>
    )
  }
  if (type === 'recycle') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M4 8 6.5 3h11L20 8M9.5 12h5" />
      </svg>
    )
  }
  if (type === 'heart') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20s-7-4.4-7-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7 2.6c0 5-7 9.4-7 9.4Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.6" />
      <path d="M3.4 12h17.2M12 3.4c2.4 2.4 3.6 5.4 3.6 8.6S14.4 18.2 12 20.6c-2.4-2.4-3.6-5.4-3.6-8.6S9.6 5.8 12 3.4Z" />
    </svg>
  )
}

export function WhyBundles() {
  return (
    <section className="sec" id="whybundles" data-scene="4">
      <div className="wrap">
        <Reveal className="glass sec-pad">
          <div className="panel-head">
            <span className="kicker">The smarter way to shop</span>
            <h2 className="d2" style={{ marginTop: 12 }}>
              Why bundles beat buying single
            </h2>
          </div>
          <div className="wb">
            {whyBundles.map((item) => (
              <div key={item.title} className="wb-i">
                <span className="ci">
                  <WhyBundleIcon type={item.icon} />
                </span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function BundleCategories() {
  return (
    <section className="sec" id="categories" data-scene="4">
      <div className="wrap">
        <Reveal className="panel-head">
          <span className="kicker">Bundle categories</span>
          <h2 className="d2" style={{ marginTop: 12 }}>
            Find the right bundle for you
          </h2>
        </Reveal>
        <div className="cats">
          {categories.map((category) => (
            <Reveal key={category.title} as="a" className="glass cat" href={category.href} delay={category.delay}>
              <span className="ph">
                <span className={`pimg ${category.className}`} role="img" aria-label={category.label} />
              </span>
              <span className="txt">
                <h4>{category.title}</h4>
                <p>{category.text}</p>
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <section className="sec" data-scene="4">
      <div className="wrap">
        <Reveal className="glass trust">
          {trustItems.map((item) => (
            <div key={item.lines.join('-')} className="trust-i">
              <TrustIcon type={item.icon} />
              <span>
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export function Signup() {
  return (
    <section className="sec" data-scene="4">
      <div className="wrap">
        <Reveal className="glass signup">
          <span className="kicker">Join the Purelane Club</span>
          <h2 className="d2" style={{ marginTop: 12 }}>
            Get ₹100 off your first bundle
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Plus first access to new launches and restocks.
          </p>
          <form onSubmit={(event) => event.preventDefault()}>
            <input type="email" placeholder="your@email.com" aria-label="Email address" required />
            <button className="btn btn-primary" type="submit">
              Get my ₹100 off
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
