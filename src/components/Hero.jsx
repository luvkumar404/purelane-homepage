import { ArrowIcon, BanIcon, LeafIcon, ShieldIcon } from './icons'
import Reveal from './Reveal'
import HeroProductStage from './HeroProductStage'

export default function Hero({ heroProdRef }) {
  return (
    <section className="hero" data-scene="1">
      <div className="hero-grid">
        <div className="badges glass-2" aria-label="Product promises">
          <div className="badge">
            <span className="bi">
              <LeafIcon />
            </span>
            <span>
              Plant
              <br />
              powered
            </span>
          </div>
          <div className="badge">
            <span className="bi">
              <ShieldIcon />
            </span>
            <span>
              Safe for
              <br />
              kids & pets
            </span>
          </div>
          <div className="badge">
            <span className="bi">
              <BanIcon />
            </span>
            <span>
              Zero harsh
              <br />
              chemicals
            </span>
          </div>
        </div>

        <div className="hero-copy">
          <Reveal as="h1" className="d1" initial>
            Clean
            <br />
            That
            <br />
            <span className="lime">Lasts</span>
          </Reveal>
          <Reveal as="div" className="rule" delay="rv-d1">
            <i />
            <LeafIcon />
            <i />
          </Reveal>
          <Reveal as="p" className="lede" delay="rv-d2">
            Homecare that works on the toughest grime, made from plants. Kind to your home, your family and the world outside it.
          </Reveal>
          <Reveal as="div" className="hero-cta" delay="rv-d3">
            <a className="btn btn-primary" href="#shop">
              Shop now
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#how">
              How it works
            </a>
          </Reveal>
          <Reveal as="div" className="badgestrip" delay="rv-d4">
            <div className="glass-2">
              <LeafIcon />
              Plant powered
            </div>
            <div className="glass-2">
              <ShieldIcon />
              Kids & pet safe
            </div>
            <div className="glass-2">
              <BanIcon />
              Zero harsh chem
            </div>
          </Reveal>
        </div>

        <div className="hero-prod" id="heroProd" ref={heroProdRef}>
          <HeroProductStage />
        </div>
      </div>
    </section>
  )
}
