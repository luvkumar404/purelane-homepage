import { tickerItems } from '../data/navigation'

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <div className="ticker" aria-hidden="true">
      <div className="track">
        {items.map((item, index) => (
          <span key={index}>
            {item.text}
            <b>{item.bold}</b>
          </span>
        ))}
      </div>
    </div>
  )
}
