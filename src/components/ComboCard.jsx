import { Fragment } from 'react'
import { LeafIcon, ArrowIcon } from './icons'

function ComboStackItem({ item }) {
  if (item.type === 'tile') {
    return (
      <span className="it">
        <span className="tile">
          <LeafIcon />
        </span>
        <span>{item.caption}</span>
      </span>
    )
  }

  return (
    <span className="it">
      <span className={`pimg ${item.className}`} role="img" aria-label={item.label} />
      <span>{item.caption}</span>
    </span>
  )
}

export default function ComboCard({ combo }) {
  return (
    <article className={`glass combo${combo.featured ? ' hero-combo' : ''}`}>
      <div className="tray">
        <span className="save">{combo.save}</span>
        {combo.flag ? <span className="flag">{combo.flag}</span> : null}
        <div className="stack">
          {combo.items.map((item, index) => (
            <Fragment key={`${combo.id}-${index}`}>
              {index > 0 ? <span className="plus" aria-hidden="true">+</span> : null}
              <ComboStackItem item={item} />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="body">
        <h3>{combo.title}</h3>
        <div className="cnt">{combo.count}</div>
        <p className="inc">{combo.includes}</p>
        <div className="prow">
          <strong>{combo.price}</strong>
          <s>{combo.originalPrice}</s>
          <em>{combo.badge}</em>
        </div>
        <div className="fine">Inclusive of all taxes · COD available</div>
        <a className={`btn ${combo.primary ? 'btn-primary' : 'btn-ghost'}`} href="#bundles">
          Shop bundle
          <ArrowIcon />
        </a>
      </div>
    </article>
  )
}
