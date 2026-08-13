import { shopProducts } from '../data/combos'
import { LeafIcon } from './icons'
import Reveal from './Reveal'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <section className="sec" id="shop" data-scene="3">
      <div className="wrap">
        <Reveal className="panel-head">
          <span className="kicker">Bestsellers</span>
          <h2 className="d2" style={{ marginTop: 12 }}>
            Loved by 30,000 homes
          </h2>
          <div className="rule">
            <i />
            <LeafIcon />
            <i />
          </div>
        </Reveal>
        <div className="shelf">
          {shopProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
