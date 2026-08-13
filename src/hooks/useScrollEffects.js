import { useEffect, useRef, useState } from 'react'

export function useScrollEffects() {
  const scenesRef = useRef(null)
  const headerRef = useRef(null)
  const heroProdRef = useRef(null)
  const [activeScene, setActiveScene] = useState(1)
  const [sceneDepth, setSceneDepth] = useState(1)
  const [headerUp, setHeaderUp] = useState(false)
  const [activeRail, setActiveRail] = useState(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const zones = Array.from(document.querySelectorAll('[data-scene]'))
    const railLinks = Array.from(document.querySelectorAll('.rail a'))
    const targets = railLinks.map((a) => document.querySelector(a.getAttribute('href')))

    let currentScene = 0
    let mx = 0
    let my = 0
    let raf = null

    const setScene = (n) => {
      if (n === currentScene) return
      currentScene = n
      setActiveScene(n)
      setSceneDepth(n)
    }

    const pickScene = () => {
      const focus = window.scrollY + window.innerHeight * 0.5
      let n = 1
      for (const zone of zones) {
        let top = 0
        let el = zone
        while (el) {
          top += el.offsetTop
          el = el.offsetParent
        }
        if (top <= focus) n = parseInt(zone.getAttribute('data-scene'), 10) || n
      }
      setScene(n)
    }

    const syncRail = () => {
      const mid = window.scrollY + window.innerHeight * 0.42
      let idx = 0
      targets.forEach((t, i) => {
        if (t && t.offsetTop <= mid) idx = i
      })
      setActiveRail(idx)
    }

    const frame = () => {
      raf = null
      const y = window.scrollY || window.pageYOffset
      setHeaderUp(y > 90)

      if (!reduce) {
        const wl = document.querySelectorAll('#water .wl')
        wl.forEach((layer, i) => {
          const d = [0.05, 0.09, 0.03, 0.02][i] || 0.05
          layer.style.setProperty('--px', `${(mx * d * 130).toFixed(1)}px`)
          layer.style.setProperty('--py', `${(-y * d + my * d * 90).toFixed(1)}px`)
        })

        const prod = heroProdRef.current
        if (prod) {
          const f = Math.min(y / 700, 1)
          prod.style.transform = `translate3d(${(mx * -16).toFixed(2)}px,${(-f * 54 + my * -10).toFixed(2)}px,0) scale(${(1 - f * 0.06).toFixed(3)})`
          prod.style.opacity = (1 - f * 0.55).toFixed(3)
        }
      }

      syncRail()
      pickScene()
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame)
    }

    const onMouseMove = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
      onScroll()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    if (!reduce && window.matchMedia('(min-width: 1024px)').matches) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
    }

    if (!reduce && heroProdRef.current) {
      heroProdRef.current.animate(
        [
          { filter: 'drop-shadow(0 34px 54px rgba(2,20,19,.6))' },
          { filter: 'drop-shadow(0 42px 68px rgba(2,20,19,.68))' },
          { filter: 'drop-shadow(0 34px 54px rgba(2,20,19,.6))' },
        ],
        { duration: 7000, iterations: Infinity, easing: 'ease-in-out' },
      )
    }

    frame()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return {
    scenesRef,
    headerRef,
    heroProdRef,
    activeScene,
    sceneDepth,
    headerUp,
    activeRail,
  }
}
