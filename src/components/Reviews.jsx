import { reviews } from '../data/reviews'
import Reveal from './Reveal'
import ReviewCard from './ReviewCard'

export default function Reviews() {
  const marqueeReviews = [...reviews, ...reviews]

  return (
    <section className="sec revband" id="reviews" data-scene="1">
      <div className="wrap">
        <Reveal className="revhead">
          <span className="kicker">That&apos;s what they said</span>
          <span className="agg">
            <span className="st">★★★★★</span> <b>4.8</b> from 8,000+ reviews
          </span>
          <span className="agg">
            Loved by <b>12 lakh+</b> homes
          </span>
        </Reveal>
      </div>
      <Reveal className="revrail" aria-label="Customer reviews">
        <div className="revtrack">
          {marqueeReviews.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
