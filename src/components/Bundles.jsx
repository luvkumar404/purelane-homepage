import { bundles } from '../data/combos'
import Reveal from './Reveal'
import BundleCard from './BundleCard'

export default function Bundles() {
  return (
    <section className="sec" id="bundles" data-scene="3">
      <div className="wrap">
        <Reveal className="glass sec-pad" style={{ marginBottom: 16 }}>
          <div className="panel-head" style={{ marginBottom: 0 }}>
            <span className="kicker">Build your bundle</span>
            <h2 className="d2" style={{ marginTop: 12 }}>
              One box. Every room.
            </h2>
            <p className="lede" style={{ margin: '0 auto' }}>
              Mix and match across kitchen, laundry, home and skin. One flat price, no code needed, free shipping either way.
            </p>
          </div>
        </Reveal>
        <div className="tiers">
          {bundles.map((bundle) => (
            <BundleCard key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>
    </section>
  )
}
