import { combos } from '../data/combos'
import { LeafIcon } from './icons'
import Reveal from './Reveal'
import ComboCard from './ComboCard'

export default function Combos() {
  return (
    <section className="sec" id="combos" data-scene="3">
      <div className="wrap">
        <Reveal className="panel-head">
          <span className="kicker">Pre-built to save you money</span>
          <h2 className="d2" style={{ marginTop: 12 }}>
            Best selling combos
          </h2>
          <div className="rule">
            <i />
            <LeafIcon />
            <i />
          </div>
          <p className="lede" style={{ margin: '14px auto 0' }}>
            Swipe through the boxes people order most. Each one is already priced below buying the same products on their own.
          </p>
        </Reveal>
        <Reveal className="comborail">
          {combos.map((combo) => (
            <ComboCard key={combo.id} combo={combo} />
          ))}
        </Reveal>
        <div className="swipecue" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h13m-5-6 6 6-6 6" />
          </svg>
          Swipe for more combos
        </div>
        <p className="railnote">
          Tapping &quot;Shop bundle&quot; opens the bundle picker with these products already added. You can still swap anything before you pay.
        </p>
      </div>
    </section>
  )
}
