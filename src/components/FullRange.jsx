import { rangeProducts } from '../data/products'
import Reveal from './Reveal'

export default function FullRange() {
  return (
    <section className="sec" id="range" data-scene="3">
      <div className="wrap">
        <Reveal className="glass range">
          <div className="range-head">
            <div>
              <span className="kicker">The full range</span>
              <h2 className="d2" style={{ marginTop: 10 }}>
                Every room, one shelf
              </h2>
            </div>
            <p className="body-s" style={{ maxWidth: '34ch', marginBottom: 4 }}>
              Floors, taps, kitchen, laundry, bathroom and hands. Fourteen plant-based formulas that replace every harsh bottle under your sink.
            </p>
          </div>
          <div className="stripwrap">
            <div className="rangerow">
              {rangeProducts.map((product) => (
                <span key={product.className} className={`pimg ${product.className}`} role="img" aria-label={product.label} />
              ))}
            </div>
          </div>
          <p className="striphint">Swipe to see the full shelf</p>
        </Reveal>
      </div>
    </section>
  )
}
