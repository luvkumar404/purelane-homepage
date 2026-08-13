import { useEffect, useRef, useState } from 'react'
import { heroSlides } from '../data/products'

export default function HeroProductStage() {
  const stageRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const timerRef = useRef(null)

  const goTo = (index) => {
    setActiveIndex((index + heroSlides.length) % heroSlides.length)
  }

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  const play = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!timerRef.current && !reduce) {
      timerRef.current = setInterval(() => {
        setActiveIndex((current) => (current + 1) % heroSlides.length)
      }, 3800)
    }
  }

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) play()
          else stop()
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(stage)
    return () => {
      stop()
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="hstage" id="hstage" ref={stageRef} onMouseEnter={stop} onMouseLeave={play}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hslide ${slide.layout}${index === activeIndex ? ' on' : ''}`}
            data-n={slide.id}
          >
            {slide.products.map((product) => (
              <span
                key={product.className}
                className={`hp ${product.className}`}
                role="img"
                aria-label={product.label}
              />
            ))}
            <div className="glass-2 ptag">
              <span className="lbl">{slide.tag.label}</span>
              <span className="val">
                <strong>{slide.tag.price}</strong>
                <s>{slide.tag.originalPrice}</s>
              </span>
              <span className="cut">{slide.tag.cut}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="hdots" id="hdots">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={index === activeIndex ? 'on' : ''}
            aria-label={`Show ${slide.id} product${slide.id > 1 ? 's' : ''}`}
            onClick={() => {
              stop()
              goTo(index)
              play()
            }}
          />
        ))}
      </div>
    </>
  )
}
