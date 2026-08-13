import Reveal from './Reveal'
import { CheckSmallIcon, ArrowIcon } from './icons'

export default function BundleCard({ bundle }) {
  return (
    <Reveal as="article" className={`glass tier${bundle.best ? ' best' : ''}`} delay={bundle.delay}>
      <span className="tag">{bundle.tag}</span>
      <div className={`tierpix${bundle.five ? ' five' : ''}`} aria-hidden="true">
        {bundle.products.map((product) => (
          <span key={product.className} className={`pimg ${product.className}`} role="img" aria-label={product.label} />
        ))}
      </div>
      <div className="qty">
        {bundle.qty}
        <small>Products</small>
      </div>
      <div className="price">
        {bundle.price} <s>{bundle.originalPrice}</s>
      </div>
      <p className="body-s" style={{ fontSize: 12 }}>
        {bundle.perProduct}
      </p>
      <ul>
        {bundle.features.map((feature) => (
          <li key={feature}>
            <CheckSmallIcon />
            {feature}
          </li>
        ))}
      </ul>
      <a className={`btn ${bundle.primary ? 'btn-primary' : 'btn-ghost'}`} href="#shop">
        Build this box
        {bundle.primary ? <ArrowIcon /> : null}
      </a>
    </Reveal>
  )
}
