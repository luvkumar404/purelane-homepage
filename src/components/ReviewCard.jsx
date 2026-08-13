import { CheckIcon } from './icons'

export default function ReviewCard({ review }) {
  return (
    <article className="glass-2 rcard">
      <div className="st">★★★★★</div>
      <h5>{review.title}</h5>
      <p>{review.text}</p>
      <div className="who">
        <CheckIcon />
        <b>{review.author}</b>
        <span>· {review.product}</span>
      </div>
    </article>
  )
}
