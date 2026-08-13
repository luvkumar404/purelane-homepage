import { useEffect, useRef, useState } from 'react'

function getInitialVisible(initial) {
  if (initial) return true
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return true
  }
  return false
}

export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = '',
  initial = false,
  children,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(() => getInitialVisible(initial))

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  const classes = ['rv', delay, visible ? 'in' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...props}>
      {children}
    </Tag>
  )
}
