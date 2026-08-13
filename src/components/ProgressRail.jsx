import { railLinks } from '../data/navigation'

export default function ProgressRail({ activeRail }) {
  return (
    <nav className="rail" aria-label="Section progress">
      {railLinks.map((link, index) => (
        <a
          key={link.href}
          href={link.href}
          className={index === activeRail ? 'on' : ''}
          aria-label={link.label}
        />
      ))}
    </nav>
  )
}
