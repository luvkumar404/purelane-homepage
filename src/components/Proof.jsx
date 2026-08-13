import { useEffect, useRef, useState } from 'react'
import { rotatorProducts } from '../data/products'
import { stats } from '../data/content'
import { ArrowIcon } from './icons'
import Reveal from './Reveal'

export default function Proof() {
  const rotRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const rot = rotRef.current
    if (!rot || reduce) return

    const step = () => {
      setActiveIndex((current) => (current + 1) % rotatorProducts.length)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !timerRef.current) {
            timerRef.current = setInterval(step, 2900)
          } else if (!entry.isIntersecting && timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
          }
        })
      },
      { threshold: 0.25 },
    )

    observer.observe(rot)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      observer.disconnect()
    }
  }, [])

  const activeProduct = rotatorProducts[activeIndex]

  return (
    <section className="sec" id="proof" data-scene="3">
      <div className="wrap">
        <Reveal className="glass sec-pad">
          <div className="proof">
            <div className="proof-l">
              <span className="kicker">Why it works</span>
              <h2 className="d2" style={{ marginTop: 12 }}>
                Tough on grime.
                <br />
                Gentle on everything else.
              </h2>
              <p className="body-s" style={{ maxWidth: '40ch' }}>
                Every formula is built on plant-derived cleansers and essential oils. It behaves exactly like the cleaner you are used to, minus the things you never signed up for.
              </p>
              <a className="btn btn-primary" href="#ingredients">
                See the ingredient list
                <ArrowIcon />
              </a>
            </div>
            <div className="glass-2 rot" id="rot" ref={rotRef} aria-hidden="true">
              <div className="frame">
                {rotatorProducts.map((product, index) => (
                  <span
                    key={product.id}
                    className={`pimg ${product.className}${index === activeIndex ? ' on' : ''}`}
                    role="img"
                    aria-label={product.label}
                  />
                ))}
              </div>
              <div className="cap">
                <b>{activeProduct.name}</b>
                <span>{activeProduct.note}</span>
              </div>
              <div className="dots">
                {rotatorProducts.map((product, index) => (
                  <i key={product.id} className={index === activeIndex ? 'on' : ''} />
                ))}
              </div>
            </div>
            <div className="glass-2 stats proof-stats" style={{ gridColumn: '1/-1' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="stat">
                  <div className="ring">{stat.value}</div>
                  <h5>{stat.label}</h5>
                  <p>{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
